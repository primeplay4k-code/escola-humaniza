// Gera o site final em dist/.
//   npm run build  → versão de produção (HTML/CSS minificados, JS ofuscado)
//   npm run dev    → versão legível, para desenvolvimento
import * as fs from "node:fs/promises";
import { readdir, stat } from "node:fs/promises";
import { join, relative, dirname, sep } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { render, icon, iconFill, wa, SITE } from "../src/layout.mjs";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const SRC = join(ROOT, "src");
const DIST = join(ROOT, "dist");
const DEV = process.argv.includes("--dev");

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

async function main() {
  const t0 = Date.now();
  const min = await loadMinifiers();
  await rm(DIST, { recursive: true, force: true });
  await mkdir(DIST, { recursive: true });

  // 1. Páginas
  const pages = (await walk(join(SRC, "pages"))).filter((f) => f.endsWith(".mjs"));
  const sitemap = [];
  for (const file of pages) {
    const mod = await import(pathToFileURL(file).href);
    const rel = relative(join(SRC, "pages"), file).split(sep).join("/").replace(/\.mjs$/, ".html");
    const depth = rel.split("/").length - 1;
    const r = mod.meta.absolute ? "/" : "../".repeat(depth);
    let html = render(mod.meta, mod.default({ icon, iconFill, wa, SITE, r }), r);
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
