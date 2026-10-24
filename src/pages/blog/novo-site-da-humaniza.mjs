export const meta = {
  path: "blog/novo-site-da-humaniza.html",
  nav: "blog",
  title: "Novo Site da Humaniza",
  image: "blog-novo-site.png",
  description: "A EBIQS apresenta o novo site da Escola Técnica Humaniza: design moderno, fácil de navegar, no computador ou no celular.",
};

export default ({ icon, r }) => `
    <section class="page-hero">
      <div class="container">
        <ol class="breadcrumb"><li><a href="${r}index.html">Início</a></li><li><a href="${r}blog.html">Blog</a></li><li aria-current="page">Novo Site da Humaniza</li></ol>
        <span class="tag tag--accent">Institucional</span>
        <h1>Novo Site da Humaniza</h1>
        <div class="post-meta post-meta--light"><span>${icon("user")} Equipe EBIQS</span><span>${icon("calendar")} 28/03/2025</span></div>
      </div>
    </section>

    <section class="section">
      <article class="container article">
        <figure class="article__cover"><img src="${r}assets/img/blog-novo-site.png" alt="Novo site da Escola Técnica Humaniza em notebook e celular" width="1024" height="1024"></figure>
        <p class="article__lead">A EBIQS tem o prazer de apresentar seu novo site da Humaniza!</p>
        <p>Com um design moderno e fácil de navegar, o site foi criado para oferecer uma experiência melhor para alunos, professores e toda a comunidade escolar.</p>
        <p>Agora, você pode acessar informações, eventos e novidades de forma rápida e prática, seja no computador ou no celular.</p>
        <p>Visite o novo site e fique por dentro de tudo da Escola Técnica Humaniza.</p>
        <h2>O que você encontra por aqui</h2>
        <ul>
          <li><a class="link-arrow" href="${r}cursos.html">Cursos</a> — Técnico em Enfermagem, EJA, profissionalizantes e Multivix;</li>
          <li><a class="link-arrow" href="${r}documentos.html">Documentos</a> — editais e matriz curricular para download;</li>
          <li><a class="link-arrow" href="${r}blog.html">Blog</a> — notícias, parcerias e eventos;</li>
          <li><a class="link-arrow" href="${r}contato.html">Contato</a> — fale com a equipe pelo WhatsApp.</li>
        </ul>
        <div class="article__share">
          <a class="link-arrow" href="${r}blog.html">← Voltar ao blog</a>
          <button class="btn btn--outline btn--sm" type="button" data-share>${icon("share")} <span>Compartilhar</span></button>
        </div>
      </article>
    </section>
`;
