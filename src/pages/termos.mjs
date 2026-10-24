export const meta = {
  path: "termos.html",
  nav: "",
  title: "Termos de Uso",
  description: "Termos de Uso do site da Escola Técnica Humaniza.",
};

export default ({ SITE, r }) => `
    <section class="page-hero">
      <div class="container">
        <ol class="breadcrumb"><li><a href="${r}index.html">Início</a></li><li aria-current="page">Termos de Uso</li></ol>
        <h1>Termos de Uso</h1>
        <p>Condições para utilização do site da ${SITE.name}.</p>
      </div>
    </section>

    <section class="section">
      <div class="container prose">
        <p class="updated">Última atualização: outubro de 2026.</p>

        <h2>1. Aceitação</h2>
        <p>Ao acessar este site, você concorda com estes Termos de Uso e com a nossa <a href="${r}politica-privacidade.html">Política de Privacidade</a>.</p>

        <h2>2. Propriedade intelectual</h2>
        <p>Todo o conteúdo deste site — textos, imagens, logotipos, layout, código-fonte e documentos — é de propriedade da ${SITE.name} / EBIQS Educação ou de seus parceiros, e está protegido pela Lei de Direitos Autorais (Lei nº 9.610/98) e pela Lei de Software (Lei nº 9.609/98). É proibida a cópia, reprodução, modificação ou distribuição, total ou parcial, sem autorização prévia e por escrito.</p>

        <h2>3. Uso permitido</h2>
        <p>O site destina-se a fornecer informações sobre a escola e seus cursos. É vedado:</p>
        <ul>
          <li>Utilizar o conteúdo para fins comerciais sem autorização;</li>
          <li>Tentar acessar áreas restritas, explorar falhas ou sobrecarregar os servidores;</li>
          <li>Reproduzir o site, sua marca ou identidade visual para se passar pela escola.</li>
        </ul>

        <h2>4. Informações sobre cursos</h2>
        <p>As informações sobre cursos, horários e condições podem ser alteradas sem aviso prévio. Os editais oficiais disponíveis na página <a href="${r}documentos.html">Documentos</a> prevalecem sobre qualquer outra informação do site.</p>

        <h2>5. Links externos</h2>
        <p>O site contém links para serviços de terceiros (WhatsApp, Instagram, Microsoft Forms, Portal do Aluno, Faculdade Multivix). Não nos responsabilizamos pelo conteúdo ou pelas práticas desses serviços.</p>

        <h2>6. Foro</h2>
        <p>Fica eleito o foro da Comarca de Eunápolis-BA para dirimir quaisquer questões relativas a estes termos.</p>
      </div>
    </section>
`;
