export const meta = {
  path: "blog.html",
  nav: "blog",
  title: "Blog",
  description: "Blog & News da Escola Técnica Humaniza: notícias sobre Faculdade Multivix, Graduação EAD, Pós EAD e Técnico em Enfermagem.",
};

const CATEGORIAS_BASE = ["Faculdade Multivix", "Graduação EAD", "PÓS EAD", "Técnico Enfermagem", "Institucional"];
export const dataBr = (iso) => String(iso).split("-").reverse().join("/");

export default ({ icon, esc, arq, c, r }) => {
  const categorias = [...new Set([...CATEGORIAS_BASE, ...c.posts.map((p) => p.categoria)])];
  return `
    <section class="page-hero">
      <div class="container">
        <ol class="breadcrumb"><li><a href="${r}index.html">Início</a></li><li aria-current="page">Blog</li></ol>
        <h1>Blog &amp; News</h1>
        <p>${esc(c.inicio.blogTexto)}</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="chips reveal" role="group" aria-label="Filtrar por categoria">
          <button class="chip is-active" type="button" data-filter="">Todos os posts</button>
          ${categorias.map((cat) => `<button class="chip" type="button" data-filter="${esc(cat)}">${esc(cat)}</button>`).join("\n          ")}
        </div>
        <div class="grid grid-2" data-filter-list>
          ${c.posts.map((p, i) => `
          <article class="card post-card reveal${i % 2 ? " reveal-delay-1" : ""}" data-category="${esc(p.categoria)}">
            <div class="card__media">${p.imagem ? `<img src="${arq(p.imagem, r)}" alt="${esc(p.titulo)}" width="800" height="600" loading="lazy">` : ""}</div>
            <div class="card__body">
              <div class="post-meta"><span>${icon("user")} ${esc(p.autor)}</span><span>${icon("calendar")} ${dataBr(p.data)}</span><span class="tag tag--soft">${esc(p.categoria)}</span></div>
              <h3><a class="stretched" href="${r}blog/${esc(p.slug)}.html">${esc(p.titulo)}</a></h3>
              <p>${esc(p.resumo)}</p>
              <span class="link-arrow">Leia mais ${icon("arrow-right")}</span>
            </div>
          </article>`).join("")}
        </div>
        <p class="empty-state"${c.posts.length ? " hidden" : ""}>Ainda não há posts nesta categoria. Volte em breve!</p>
      </div>
    </section>
`;
};
