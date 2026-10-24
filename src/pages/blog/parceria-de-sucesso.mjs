export const meta = {
  path: "blog/parceria-de-sucesso.html",
  nav: "blog",
  title: "Parceria de Sucesso!",
  image: "blog-parceria-multivix.jpg",
  description: "A Multivix firma parceria com o Hospital Sírio-Libanês: bolsas integrais e 20% de desconto no programa Experiência Sírio-Libanês para alunos de Medicina.",
};

export default ({ icon, iconFill, wa, SITE, r }) => `
    <section class="page-hero">
      <div class="container">
        <ol class="breadcrumb"><li><a href="${r}index.html">Início</a></li><li><a href="${r}blog.html">Blog</a></li><li aria-current="page">Parceria de Sucesso!</li></ol>
        <span class="tag tag--accent">Faculdade Multivix</span>
        <h1>Parceria de Sucesso!</h1>
        <div class="post-meta post-meta--light"><span>${icon("user")} Matheus Cardoso</span><span>${icon("calendar")} 28/03/2025</span></div>
      </div>
    </section>

    <section class="section">
      <article class="container article">
        <figure class="article__cover article__cover--portrait"><img src="${r}assets/img/blog-parceria-multivix.jpg" alt="Multivix fecha parceria com o Hospital Sírio-Libanês" width="598" height="749"></figure>
        <p class="article__lead">Parceria de sucesso! 🏥✨</p>
        <p>A Multivix acaba de firmar uma parceria com um dos mais importantes centros médicos do mundo: o <strong>Hospital Sírio-Libanês</strong>, em São Paulo! Agora, nossos alunos de Medicina têm acesso a condições especiais para participar do programa <strong>Experiência Sírio-Libanês</strong>, que combina aprendizado teórico e vivência prática com especialistas do hospital:</p>
        <ul>
          <li><strong>Bolsas integrais</strong> para participação no programa.</li>
          <li><strong>20% de desconto</strong> para todos os alunos de Medicina que utilizarem o cupom promocional <strong>MULTIVIX</strong>.</li>
        </ul>
        <p>Essa parceria reforça o compromisso da Multivix com a formação de médicos altamente capacitados, conectando nossos alunos a experiências acadêmicas e profissionais de excelência.</p>
        <div class="callout">${icon("calendar")}<p>As inscrições começam no dia <strong>27 de março</strong> e vão até <strong>2 de abril</strong>.</p></div>
        <p>Saiba mais em <strong>multivix.vc/sirio-libanes</strong>.</p>
        <p><a class="btn btn--primary" href="${wa(SITE.phone2, "Quero estudar na Multivix.")}" target="_blank" rel="noopener noreferrer">${iconFill("whatsapp")} Quero estudar na Multivix</a></p>
        <div class="article__share">
          <a class="link-arrow" href="${r}blog.html">← Voltar ao blog</a>
          <button class="btn btn--outline btn--sm" type="button" data-share>${icon("share")} <span>Compartilhar</span></button>
        </div>
      </article>
    </section>
`;
