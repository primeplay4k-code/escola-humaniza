export const meta = {
  path: "sobre.html",
  nav: "sobre",
  title: "Sobre Nós",
  description: "Conheça a Escola Técnica Humaniza: educação profissional com excelência, responsabilidade social e foco no desenvolvimento humano em Eunápolis-BA.",
};

const ICONES = ["award", "scale", "lightbulb", "heart", "accessibility", "rocket"];

export default ({ icon, iconFill, wa, esc, arq, SITE, c, r }) => {
  const s = c.sobre;
  return `
    <section class="page-hero">
      <div class="container">
        <ol class="breadcrumb"><li><a href="${r}index.html">Início</a></li><li aria-current="page">${esc(s.titulo)}</li></ol>
        <h1>${esc(s.titulo)}</h1>
        <p>${esc(s.subtitulo)}</p>
      </div>
    </section>

    <section class="section">
      <div class="container split">
        <div class="reveal">
          <span class="eyebrow">Sobre nós</span>
          <h2 class="h2">A ${esc(SITE.name)}</h2>
          ${s.historia.map((p) => `<p>${esc(p)}</p>`).join("\n          ")}
          <div class="pill-list">
            <span class="tag tag--soft">Reconhecida pelo MEC</span>
            <span class="tag tag--soft">Cadastro SISTEC</span>
            <span class="tag tag--soft">Registro no COREN</span>
          </div>
          <a class="btn btn--primary" href="${r}cursos.html">Ver cursos ${icon("arrow-right")}</a>
        </div>
        <div class="media-frame reveal reveal-delay-1">
          <img src="${arq(s.imagem, r)}" alt="Alunos da ${esc(SITE.name)}" width="1024" height="768" loading="lazy">
          <div class="media-frame__badge">
            <img src="${r}assets/img/logo-ebiqs.png" alt="" width="52" height="52" loading="lazy" class="badge-dark">
            <div><strong>EBIQS Educação</strong><span>Holding mantenedora da Humaniza</span></div>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--soft">
      <div class="container">
        <div class="section-head reveal">
          <span class="eyebrow">Nossos valores</span>
          <h2 class="h2">${esc(s.valoresTitulo)}</h2>
        </div>
        <div class="grid grid-2">
          <div class="mvv reveal">
            <span class="icon-box">${icon("target")}</span>
            <h3>Missão</h3>
            <p>${esc(s.missao)}</p>
          </div>
          <div class="mvv mvv--featured reveal reveal-delay-1">
            <span class="icon-box">${icon("eye")}</span>
            <h3>Visão</h3>
            <p>${esc(s.visao)}</p>
          </div>
        </div>

        ${s.valores.length ? `<h3 class="subhead reveal">${icon("gem")} Valores</h3>
        <div class="grid grid-3">
          ${s.valores.map((v, i) => `<div class="feature reveal${i % 3 ? ` reveal-delay-${i % 3}` : ""}"><span class="icon-box">${icon(ICONES[i % ICONES.length])}</span><h3>${esc(v.titulo)}</h3><p>${esc(v.texto)}</p></div>`).join("\n          ")}
        </div>` : ""}
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="verify reveal">
          <img src="${r}assets/img/qrcode-sistec.png" alt="QR Code de verificação da Escola Técnica Humaniza no SISTEC" width="160" height="160" loading="lazy">
          <div>
            <span class="eyebrow">Transparência</span>
            <h3>Diploma válido em todo território nacional</h3>
            <p>Aponte a câmera do celular para o QR Code ou acesse a consulta pública do SISTEC/MEC para confirmar o cadastro da ${esc(SITE.name)}.</p>
            <div class="btn-row">
              <a class="btn btn--primary" href="https://sistec.mec.gov.br/consultapublicaunidadeensino/" target="_blank" rel="noopener noreferrer">${icon("shield-check")} Verificar no SISTEC</a>
              <a class="btn btn--outline" href="${r}documentos.html">${icon("file-text")} Documentos oficiais</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--soft">
      <div class="container">
        <div class="cta reveal">
          <div>
            <h2>Venha conhecer a Humaniza.</h2>
            <p>${esc(SITE.address)}. Agende uma visita ou tire suas dúvidas pelo WhatsApp.</p>
          </div>
          <div class="cta__actions">
            <a class="btn btn--primary" href="${wa(SITE.phone1, "Olá! Gostaria de agendar uma visita à escola.")}" target="_blank" rel="noopener noreferrer">${iconFill("whatsapp")} Agendar visita</a>
          </div>
        </div>
      </div>
    </section>
`;
};
