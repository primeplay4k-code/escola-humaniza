// Layout compartilhado: <head>, topo, cabeçalho, rodapé e scripts.
// O conteúdo vem do painel admin (ou de src/content.json) e é aplicado por configurar().

export const SITE = {
  name: "Escola Técnica Humaniza",
  url: "https://escolahumaniza.com",
  phone1: "5573988699253",
  phone1Label: "(73) 98869-9253",
  phone2: "5573999042342",
  phone2Label: "(73) 99904-2342",
  email1: "barbara.lima@ebiqs.com",
  email2: "marcelo.monteiro@ebiqs.com",
  instagram: "https://www.instagram.com/humanizaeunapolisba/",
  portal: "https://portal.ebiqs.com/",
  forms: "https://forms.office.com/pages/responsepage.aspx?id=GCci0zGTrkWLTDDRTvtBtK_ZhaCaVd1DpPS6YgFAr2xUNjgwWTVIOE5GNlhES0hJUlhOQURYTVM0Ui4u&route=shorturl",
  address: "Av. Rui Barbosa, nº 56 — Centro, Eunápolis - BA",
};

export const wa = (phone, text) =>
  `https://wa.me/${String(phone).replace(/\D/g, "")}${text ? "?text=" + encodeURIComponent(text) : ""}`;

/** Escapa texto vindo do painel antes de inserir no HTML. */
export const esc = (v) =>
  String(v ?? "").replace(/[&<>"']/g, (ch) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[ch]);

/** Caminho de arquivo: "/assets/..." vira relativo à página; URLs (Vercel Blob) ficam como estão. */
export const arq = (caminho, r) => {
  const c = String(caminho ?? "");
  if (c.startsWith("/")) return r + c.slice(1);
  return /^https:\/\//.test(c) ? esc(c) : "";
};

export const foneBr = (t) => {
  const d = String(t ?? "").replace(/\D/g, "").replace(/^55(?=\d{10,11}$)/, "");
  return d.length === 11 ? `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}` : d.length === 10 ? `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}` : esc(t);
};

/** Texto do painel → parágrafos. "- " vira lista e "## " vira subtítulo. */
export function rico(texto) {
  const out = [];
  let lista = [];
  const fecha = () => { if (lista.length) { out.push(`<ul>${lista.join("")}</ul>`); lista = []; } };
  for (const linha of String(texto ?? "").split(/\r?\n/).map((l) => l.trim()).filter(Boolean)) {
    if (linha.startsWith("- ")) { lista.push(`<li>${esc(linha.slice(2))}</li>`); continue; }
    fecha();
    out.push(linha.startsWith("## ") ? `<h2>${esc(linha.slice(3))}</h2>` : `<p>${esc(linha)}</p>`);
  }
  fecha();
  return out.join("\n        ");
}

let CONTEUDO = null;
export const conteudo = () => CONTEUDO;

/** Aplica o conteúdo do painel nos dados globais usados pelo layout. */
export function configurar(c) {
  CONTEUDO = c;
  const g = c.geral;
  Object.assign(SITE, {
    name: g.nomeEscola,
    phone1: String(g.contato1Telefone).replace(/\D/g, ""),
    phone1Label: foneBr(g.contato1Telefone),
    phone2: String(g.contato2Telefone).replace(/\D/g, ""),
    phone2Label: foneBr(g.contato2Telefone),
    email1: g.contato1Email,
    email2: g.contato2Email,
    instagram: g.instagram,
    portal: g.portalAluno,
    forms: g.formularioInscricao,
    address: g.endereco,
  });
}

const icon = (name) => `<svg class="icon" aria-hidden="true"><use href="#i-${name}"/></svg>`;
const iconFill = (name) => `<svg class="icon icon--fill" aria-hidden="true"><use href="#i-${name}"/></svg>`;

const NAV = [
  { id: "inicio", label: "Início", href: "index.html" },
  { id: "sobre", label: "Sobre Nós", href: "sobre.html" },
  { id: "cursos", label: "Cursos", href: "cursos.html", children: [
    { label: "Cursos Técnicos", desc: "Presencial • Reconhecido pelo MEC", href: "cursos.html#tecnico", icon: "stethoscope" },
    { label: "EJA e Profissionalizantes", desc: "EJA online, Mecânica e Eletrotécnica", href: "cursos.html#eja", icon: "wrench" },
    { label: "Faculdade Multivix", desc: "Graduação, Pós e MBA EAD", href: "cursos.html#multivix", icon: "graduation-cap" },
  ] },
  { id: "documentos", label: "Documentos", href: "documentos.html" },
  { id: "blog", label: "Blog", href: "blog.html" },
  { id: "contato", label: "Contato", href: "contato.html" },
];

function nav(active, r) {
  return NAV.map((item) => {
    const current = item.id === active ? ' aria-current="page"' : "";
    if (!item.children) {
      return `<li><a class="nav__link" href="${r}${item.href}"${current}>${item.label}</a></li>`;
    }
    const kids = item.children.map((c) => `
            <a href="${r}${c.href}"><span class="icon-box">${icon(c.icon)}</span><span><strong>${c.label}</strong><small>${c.desc}</small></span></a>`).join("");
    return `<li class="nav__item--drop">
          <a class="nav__link" href="${r}${item.href}"${current} aria-haspopup="true" aria-expanded="false">${item.label} ${icon("chevron-down")}</a>
          <div class="dropdown">${kids}
          </div>
        </li>`;
  }).join("\n        ");
}

// r = prefixo relativo até a raiz ("", "../" ou "/" para a página 404)
export function render(meta, body, r) {
  const canonical = SITE.url + "/" + (meta.path || "");
  const title = meta.title ? `${meta.title} | ${SITE.name}` : `${SITE.name} | Curso Técnico de Enfermagem em Eunápolis-BA`;
  const ogImage = /^https:/.test(meta.image ?? "") ? meta.image : `${SITE.url}/assets/img/${meta.image || "escola.jpg"}`;
  const jsonld = meta.path === "" ? `
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "${SITE.name}",
    "url": "${SITE.url}",
    "logo": "${SITE.url}/assets/img/logo-humaniza.png",
    "image": "${SITE.url}/assets/img/escola.jpg",
    "telephone": "+55 73 98869-9253",
    "email": "${esc(SITE.email1)}",
    "address": { "@type": "PostalAddress", "streetAddress": "Av. Rui Barbosa, 56 - Centro", "addressLocality": "Eunápolis", "addressRegion": "BA", "addressCountry": "BR" },
    "parentOrganization": { "@type": "Organization", "name": "EBIQS Educação" },
    "sameAs": ["${SITE.instagram}"]
  }
  </script>` : "";

  return `<!doctype html>
<html lang="pt-BR" class="no-js">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(title)}</title>
  <meta name="description" content="${esc(meta.description)}">
  <meta name="theme-color" content="#0d4d5a">
  <meta name="referrer" content="strict-origin-when-cross-origin">
  <meta name="format-detection" content="telephone=no">
  <link rel="canonical" href="${canonical}">
  <meta property="og:type" content="website">
  <meta property="og:locale" content="pt_BR">
  <meta property="og:site_name" content="${SITE.name}">
  <meta property="og:title" content="${esc(meta.title || SITE.name)}">
  <meta property="og:description" content="${esc(meta.description)}">
  <meta property="og:url" content="${canonical}">
  <meta property="og:image" content="${ogImage}">
  <meta name="twitter:card" content="summary_large_image">
  <link rel="icon" type="image/png" href="${r}assets/img/favicon.png">
  <link rel="apple-touch-icon" href="${r}assets/img/favicon.png">
  <link rel="manifest" href="${r}site.webmanifest">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Outfit:wght@500;600;700;800&display=swap">
  <link rel="stylesheet" href="${r}assets/css/style.css">${jsonld}
</head>
<body>
  <a class="skip-link" href="#conteudo">Pular para o conteúdo</a>

  <div class="topbar">
    <div class="container">
      <ul class="topbar__list">
        <li class="topbar__hide-sm"><span>${icon("map-pin")} ${esc(SITE.address)}</span></li>
        <li><a href="${wa(SITE.phone1)}" target="_blank" rel="noopener noreferrer">${icon("phone")} ${SITE.phone1Label}</a></li>
      </ul>
      <ul class="topbar__list topbar__hide-sm">
        <li><a href="mailto:${SITE.email1}">${icon("mail")} ${SITE.email1}</a></li>
        <li><a href="${SITE.instagram}" target="_blank" rel="noopener noreferrer">${icon("instagram")} @humanizaeunapolisba</a></li>
      </ul>
    </div>
  </div>

  <header class="header">
    <div class="container">
      <a class="brand" href="${r}index.html" aria-label="${SITE.name} — página inicial">
        <img src="${r}assets/img/logo-humaniza.png" alt="${SITE.name}" width="155" height="48">
      </a>
      <nav aria-label="Menu principal">
        <ul class="nav" id="menu">
        ${nav(meta.nav, r)}
          <li class="nav__mobile-cta">
            <a class="btn btn--outline btn--block" href="${SITE.portal}" target="_blank" rel="noopener noreferrer">${icon("user")} Portal do Aluno</a>
            <a class="btn btn--primary btn--block" href="${wa(SITE.phone1, "Olá! Quero me inscrever na Escola Técnica Humaniza.")}" target="_blank" rel="noopener noreferrer">Inscreva-se ${icon("arrow-right")}</a>
          </li>
        </ul>
      </nav>
      <div class="header__actions">
        <a class="btn btn--outline btn--sm" href="${SITE.portal}" target="_blank" rel="noopener noreferrer">${icon("user")} Portal do Aluno</a>
        <a class="btn btn--primary btn--sm" href="${wa(SITE.phone1, "Olá! Quero me inscrever na Escola Técnica Humaniza.")}" target="_blank" rel="noopener noreferrer">Inscreva-se</a>
        <button class="menu-toggle" type="button" aria-controls="menu" aria-expanded="false" aria-label="Abrir menu">
          <svg class="icon icon-open" aria-hidden="true"><use href="#i-menu"/></svg>
          <svg class="icon icon-close" aria-hidden="true"><use href="#i-x"/></svg>
        </button>
      </div>
    </div>
  </header>

  <main id="conteudo">
${body.replace(/\{\{r\}\}/g, r).trim()}
  </main>

  <footer class="footer">
    <div class="container">
      <div class="footer__grid">
        <div class="footer__brand">
          <a class="logo-box" href="${r}index.html"><img src="${r}assets/img/logo-humaniza.png" alt="${SITE.name}" width="135" height="42" loading="lazy"></a>
          <p>${esc(CONTEUDO?.geral.textoRodape)}</p>
          <h3 class="footer__follow">Siga nossa rede</h3>
          <div class="socials">
            <a href="${SITE.instagram}" target="_blank" rel="noopener noreferrer" aria-label="Instagram">${icon("instagram")}</a>
            <a href="${wa(SITE.phone1)}" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">${iconFill("whatsapp")}</a>
            <a href="mailto:${SITE.email1}" aria-label="E-mail">${icon("mail")}</a>
          </div>
        </div>
        <div>
          <h3>Navegação</h3>
          <ul class="footer__links">
            <li><a href="${r}index.html">Início</a></li>
            <li><a href="${r}sobre.html">Sobre Nós</a></li>
            <li><a href="${r}documentos.html">Documentos</a></li>
            <li><a href="${r}blog.html">Blog</a></li>
            <li><a href="${r}contato.html">Contato</a></li>
          </ul>
        </div>
        <div>
          <h3>Cursos</h3>
          <ul class="footer__links">
            ${(CONTEUDO?.cursos ?? []).slice(0, 5).map((cu) => `<li><a href="${r}cursos.html#${esc(cu.slug)}">${esc(cu.nome)}</a></li>`).join("\n            ")}
            <li><a href="${SITE.portal}" target="_blank" rel="noopener noreferrer">Portal do Aluno</a></li>
          </ul>
        </div>
        <div>
          <h3>Atendimento</h3>
          <ul class="footer__contact">
            <li>${icon("map-pin")}<span>${esc(SITE.address)}</span></li>
            <li>${icon("phone")}<span><strong>${esc(CONTEUDO?.geral.contato1Nome)}</strong><a href="${wa(SITE.phone1)}" target="_blank" rel="noopener noreferrer">${SITE.phone1Label}</a></span></li>
            <li>${icon("phone")}<span><strong>${esc(CONTEUDO?.geral.contato2Nome)}</strong><a href="${wa(SITE.phone2)}" target="_blank" rel="noopener noreferrer">${SITE.phone2Label}</a></span></li>
            <li>${icon("mail")}<span><a href="mailto:${SITE.email1}">${SITE.email1}</a><br><a href="mailto:${SITE.email2}">${SITE.email2}</a></span></li>
            <li>${icon("clock")}<span>${esc(CONTEUDO?.geral.horarioAulas)}</span></li>
          </ul>
        </div>
      </div>
      <div class="footer__holding">
        <img src="${r}assets/img/logo-ebiqs.png" alt="EBIQS Educação" width="62" height="44" loading="lazy">
        <p>${esc(CONTEUDO?.geral.textoHolding)}</p>
        <img class="sistec" src="${r}assets/img/parceiros/sistec.png" alt="Cadastrada no SISTEC/MEC" width="140" height="28" loading="lazy">
      </div>
      <div class="footer__bottom">
        <p>© <span data-year>2026</span> ${SITE.name} — EBIQS Educação. Todos os direitos reservados. Conteúdo protegido pela Lei nº 9.610/98.</p>
        <nav aria-label="Links legais">
          <a href="${r}politica-privacidade.html">Política de Privacidade</a>
          <a href="${r}termos.html">Termos e Serviços</a>
          <span>Desenvolvido pela Softcloudba – 2025</span>
        </nav>
      </div>
    </div>
  </footer>

  <a class="fab-whatsapp" href="${wa(SITE.phone1, "Olá! Gostaria de mais informações sobre os cursos.")}" target="_blank" rel="noopener noreferrer" aria-label="Fale conosco pelo WhatsApp">${icon("whatsapp")}</a>
  <button class="to-top" type="button" aria-label="Voltar ao topo">${icon("arrow-up")}</button>

  <script src="${r}assets/js/main.js" defer></script>
</body>
</html>
`;
}

export { icon, iconFill };
