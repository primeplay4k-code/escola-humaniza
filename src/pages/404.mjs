export const meta = {
  path: "404.html",
  nav: "",
  title: "Página não encontrada",
  description: "A página que você procura não existe ou foi movida.",
  absolute: true,
};

export default ({ icon, r }) => `
    <section class="section">
      <div class="container notfound">
        <div>
          <p class="big">4<span>0</span>4</p>
          <h1>Página não encontrada</h1>
          <p>A página que você procura não existe ou foi movida.</p>
          <p class="center-actions"><a class="btn btn--primary" href="${r}index.html">${icon("home")} Voltar ao início</a></p>
        </div>
      </div>
    </section>
`;
