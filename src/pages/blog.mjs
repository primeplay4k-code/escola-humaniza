export const meta = {
  path: "blog.html",
  nav: "blog",
  title: "Blog",
  description: "Blog & News da Escola Técnica Humaniza: notícias sobre Faculdade Multivix, Graduação EAD, Pós EAD e Técnico em Enfermagem.",
};

export const categories = ["Faculdade Multivix", "Graduação EAD", "PÓS EAD", "Técnico Enfermagem", "Institucional"];

export const posts = [
  {
    slug: "parceria-de-sucesso",
    title: "Parceria de Sucesso!",
    date: "28/03/2025",
    author: "Matheus Cardoso",
    tag: "Faculdade Multivix",
    image: "blog-parceria-multivix.jpg",
    w: 598, h: 749,
    excerpt: "Parceria de sucesso! 🏥✨ A Multivix acaba de firmar uma parceria com um dos mais importantes centros médicos do mundo: o Hospital Sírio-Libanês.",
  },
  {
    slug: "novo-site-da-humaniza",
    title: "Novo Site da Humaniza",
    date: "28/03/2025",
    author: "Equipe EBIQS",
    tag: "Institucional",
    image: "blog-novo-site.png",
    w: 1024, h: 1024,
    excerpt: "A EBIQS tem o prazer de apresentar seu novo site da Humaniza! Com um design moderno e fácil de navegar.",
  },
];

export default ({ icon, r }) => `
    <section class="page-hero">
      <div class="container">
        <ol class="breadcrumb"><li><a href="${r}index.html">Início</a></li><li aria-current="page">Blog</li></ol>
        <h1>Blog &amp; News</h1>
        <p>Conquiste seu sucesso com dicas e novidades sobre educação e carreira.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="chips reveal" role="group" aria-label="Filtrar por categoria">
          <button class="chip is-active" type="button" data-filter="">Todos os posts</button>
          ${categories.map((c) => `<button class="chip" type="button" data-filter="${c}">${c}</button>`).join("\n          ")}
        </div>
        <div class="grid grid-2" data-filter-list>
          ${posts.map((p, i) => `
          <article class="card post-card reveal${i ? " reveal-delay-1" : ""}" data-category="${p.tag}">
            <div class="card__media"><img src="${r}assets/img/${p.image}" alt="${p.title}" width="${p.w}" height="${p.h}" loading="lazy"></div>
            <div class="card__body">
              <div class="post-meta"><span>${icon("user")} ${p.author}</span><span>${icon("calendar")} ${p.date}</span><span class="tag tag--soft">${p.tag}</span></div>
              <h3><a class="stretched" href="${r}blog/${p.slug}.html">${p.title}</a></h3>
              <p>${p.excerpt}</p>
              <span class="link-arrow">Leia mais ${icon("arrow-right")}</span>
            </div>
          </article>`).join("")}
        </div>
        <p class="empty-state" hidden>Ainda não há posts nesta categoria. Volte em breve!</p>
      </div>
    </section>
`;
