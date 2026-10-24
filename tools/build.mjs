// Gera o site final em dist/.
//   npm run build  → versão de produção (HTML/CSS minificados, JS ofuscado)
//   npm run dev    → versão legível, para desenvolvimento
import * as fs from "node:fs/promises";
import { readdir, stat } from "node:fs/promises";
import { join, relative, dirname, sep } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { render, icon, iconFill, wa, esc, arq, rico, foneBr, configurar, SITE } from "../src/layout.mjs";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const SRC = join(ROOT, "src");
const DIST = join(ROOT, "dist");
const DEV = process.argv.includes("--dev");
const PAINEL = (process.env.PAINEL_URL ?? "https://escola-humaniza-admin.vercel.app").replace(/\/$/, "");

// OneDrive/TeraBox podem travar arquivos durante a sincronização (EBUSY/EPERM):
// cada operação de disco é repetida algumas vezes antes de falhar.
const LOCKED = new Set(["EBUSY", "EPERM", "EACCES", "ENOTEMPTY"]);
function retry(fn) {
  return async (...args) => {
    for (let attempt = 1; ; attempt++) {
      try {
        return await fn(...args);
      } catch (err) {
        if (!LOCKED.has(err.code) || attempt >= 12) throw err;
        await new Promise((r) => setTimeout(r, 250 * attempt));
      }
    }
  };
}
const mkdir = retry(fs.mkdir);
const rm = retry(fs.rm);
const writeFile = retry(fs.writeFile);
const readFile = retry(fs.readFile);
const cp = retry(fs.cp);

async function walk(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(full)));
    else out.push(full);
  }
  return out;
}

async function loadMinifiers() {
  if (DEV) return null;
  const [{ minify: minifyHtml }, { default: CleanCSS }, { default: Obfuscator }] = await Promise.all([
    import("html-minifier-terser"),
    import("clean-css"),
    import("javascript-obfuscator"),
  ]);
  return { minifyHtml, CleanCSS, Obfuscator };
}

/** Conteúdo do painel admin; se o painel não responder, usa a cópia de segurança src/content.json. */
async function carregarConteudo() {
  const reserva = JSON.parse(await readFile(join(SRC, "content.json"), "utf8"));
  if (process.env.CONTEUDO_LOCAL) return { c: reserva, origem: "cópia local (CONTEUDO_LOCAL)" };
  try {
    const res = await fetch(`${PAINEL}/api/public/site`, {
      headers: process.env.SITE_BUILD_TOKEN ? { Authorization: `Bearer ${process.env.SITE_BUILD_TOKEN}` } : {},
      signal: AbortSignal.timeout(15000),
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const c = await res.json();
    if (!c?.geral || !Array.isArray(c.cursos)) throw new Error("resposta inválida");
    return { c, origem: "painel admin" };
  } catch (err) {
    return { c: reserva, origem: `cópia local (painel indisponível: ${err.message})` };
  }
}

async function main() {
  const t0 = Date.now();
  const min = await loadMinifiers();
  const { c, origem } = await carregarConteudo();
  configurar(c);
  console.log(`• Conteúdo: ${origem}`);
  await rm(DIST, { recursive: true, force: true });
  await mkdir(DIST, { recursive: true });

  // 1. Páginas
  const arquivos = (await walk(join(SRC, "pages"))).filter((f) => f.endsWith(".mjs"));
  // Páginas comuns geram 1 HTML; módulos com `paginas(c)` (ex.: blog/_post.mjs) geram um HTML por item.
  const pages = [];
  for (const file of arquivos) {
    const mod = await import(pathToFileURL(file).href);
    if (mod.paginas) for (const pg of mod.paginas(c)) pages.push({ rel: pg.arquivo, meta: pg.meta, corpo: (h) => mod.default(h, pg.dados) });
    else pages.push({ rel: relative(join(SRC, "pages"), file).split(sep).join("/").replace(/\.mjs$/, ".html"), meta: mod.meta, corpo: (h) => mod.default(h) });
  }
  const sitemap = [];
  for (const { rel, meta, corpo } of pages) {
    const depth = rel.split("/").length - 1;
    const r = meta.absolute ? "/" : "../".repeat(depth);
    let html = render(meta, corpo({ icon, iconFill, wa, esc, arq, rico, foneBr, SITE, c, r, painel: PAINEL }), r);
    if (min) {
      html = await min.minifyHtml(html, {
        collapseWhitespace: true,
        conservativeCollapse: false,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        useShortDoctype: true,
        minifyJS: true,
        sortAttributes: true,
      });
    }
    const out = join(DIST, rel);
    await mkdir(dirname(out), { recursive: true });
    await writeFile(out, html);
    if (rel !== "404.html") sitemap.push(rel === "index.html" ? "" : rel);
  }

  // 2. Assets
  await cp(join(SRC, "assets"), join(DIST, "assets"), { recursive: true });
  if (min) {
    const cssPath = join(DIST, "assets/css/style.css");
    const css = new min.CleanCSS({ level: 2 }).minify(await readFile(cssPath, "utf8"));
    if (css.errors.length) throw new Error(css.errors.join("\n"));
    await writeFile(cssPath, css.styles);

    const jsPath = join(DIST, "assets/js/main.js");
    const js = min.Obfuscator.obfuscate(await readFile(jsPath, "utf8"), {
      compact: true,
      controlFlowFlattening: true,
      controlFlowFlatteningThreshold: 0.5,
      deadCodeInjection: true,
      deadCodeInjectionThreshold: 0.2,
      identifierNamesGenerator: "hexadecimal",
      selfDefending: true,
      disableConsoleOutput: true,
      // A anti-depuração fica em main.js (respeita a liberação do administrador)
      debugProtection: false,
      stringArray: true,
      stringArrayEncoding: ["base64"],
      stringArrayThreshold: 0.75,
      splitStrings: true,
      splitStringsChunkLength: 8,
      transformObjectKeys: true,
      unicodeEscapeSequence: false,
    });
    await writeFile(jsPath, js.getObfuscatedCode());
  }

  // 3. Arquivos públicos (.htaccess, cabeçalhos, manifest, security.txt)
  await cp(join(SRC, "public"), DIST, { recursive: true });

  // 4. SEO
  const today = new Date().toISOString().slice(0, 10);
  await writeFile(join(DIST, "sitemap.xml"),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    sitemap.sort().map((p) => `  <url><loc>${SITE.url}/${p}</loc><lastmod>${today}</lastmod></url>`).join("\n") +
    `\n</urlset>\n`);
  await writeFile(join(DIST, "robots.txt"), `User-agent: *\nAllow: /\n\nSitemap: ${SITE.url}/sitemap.xml\n`);

  const files = await walk(DIST);
  let bytes = 0;
  for (const f of files) bytes += (await stat(f)).size;
  console.log(`✔ ${pages.length} páginas, ${files.length} arquivos (${(bytes / 1024 / 1024).toFixed(2)} MB) em dist/ — ${DEV ? "modo dev" : "produção protegida"} — ${Date.now() - t0} ms`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
