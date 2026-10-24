export const meta = {
  path: "documentos.html",
  nav: "documentos",
  title: "Documentos",
  description: "Editais, matriz curricular e documentos oficiais da Escola Técnica Humaniza. Transparência e segurança para você.",
};

export default ({ icon, wa, esc, arq, SITE, c, r }) => `
    <section class="page-hero">
      <div class="container">
        <ol class="breadcrumb"><li><a href="${r}index.html">Início</a></li><li aria-current="page">Documentos</li></ol>
        <h1>Documentos oficiais</h1>
        <p>Editais, matriz curricular e informações institucionais, disponíveis para sua segurança e transparência.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-head section-head--left reveal">
          <span class="eyebrow">Edital</span>
          <h2 class="h2">Editais, privacidade e uso para sua segurança e transparência.</h2>
        </div>
        <div class="doc-list">
          ${c.documentos.length === 0 ? `<p class="empty-state">Nenhum documento disponível no momento.</p>` : ""}
          ${c.documentos.map((d, i) => `
          <div class="doc reveal${i ? " reveal-delay-1" : ""}">
            <span class="icon-box">${icon("file-text")}</span>
            <div class="doc__info"><h3>${esc(d.titulo)}</h3><span>${esc([d.descricao, "PDF", d.tamanho].filter(Boolean).join(" • "))}</span></div>
            <div class="doc__actions">
              <a class="btn btn--outline btn--sm" href="${arq(d.arquivo, r)}" target="_blank" rel="noopener">${icon("eye")} Visualizar</a>
              <a class="btn btn--primary btn--sm" href="${arq(d.arquivo, r)}" download>${icon("download")} Baixar</a>
            </div>
          </div>`).join("")}
        </div>
      </div>
    </section>

    <section class="section section--soft">
      <div class="container">
        <div class="verify reveal">
          <img src="${r}assets/img/qrcode-sistec.png" alt="QR Code de verificação no SISTEC" width="160" height="160" loading="lazy">
          <div>
            <span class="eyebrow">Validação</span>
            <h3>Escola cadastrada no SISTEC/MEC</h3>
            <p>Os diplomas da ${esc(SITE.name)} têm validade nacional e podem ser consultados no SISTEC. Escaneie o QR Code para verificar nosso cadastro.</p>
            <div class="btn-row">
              <a class="btn btn--primary" href="https://sistec.mec.gov.br/consultapublicaunidadeensino/" target="_blank" rel="noopener noreferrer">${icon("shield-check")} Verificar no SISTEC</a>
              <a class="btn btn--outline" href="${wa(SITE.phone1, "Olá! Preciso de um documento da escola.")}" target="_blank" rel="noopener noreferrer">${icon("phone")} Solicitar outro documento</a>
            </div>
          </div>
        </div>
        <p class="legal-note">Conteúdo protegido pela Lei de Direitos Autorais (Lei nº 9.610/98). É proibida a publicação ou reprodução, total ou parcial, sem autorização prévia e por escrito.</p>
      </div>
    </section>
`;
