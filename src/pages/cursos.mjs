export const meta = {
  path: "cursos.html",
  nav: "cursos",
  title: "Cursos",
  description: "Curso Técnico de Enfermagem presencial em Eunápolis-BA (reconhecido pelo MEC), EJA online, Mecânica, Eletrotécnica e Graduação, Pós e MBA EAD Multivix.",
  image: "cursos/priscila-enfermagem.jpg",
};

const ICONES_INCLUI = ["book-open", "file-text", "flask", "award", "users", "stethoscope"];
const ICONES_EJA = { eja: "monitor", profissionalizante: "wrench" };

export default ({ icon, iconFill, wa, esc, arq, rico, SITE, c, r }) => {
  const doTipo = (...cats) => c.cursos.filter((cu) => cats.includes(cu.categoria));
  const tecnicos = doTipo("tecnico");
  const eja = doTipo("eja", "profissionalizante");
  const superiores = doTipo("superior");
  const zap = (cu) => wa(cu.whatsapp || SITE.phone1, cu.mensagemWhatsapp || `Quero saber mais sobre ${cu.nome}.`);
  const edital = c.documentos.find((d) => /edital/i.test(d.titulo));
  const matriz = c.documentos.find((d) => /matriz/i.test(d.titulo));

  const tecnico = (cu, i) => `
    <section class="section${i % 2 ? " section--soft" : ""}" id="${esc(cu.slug)}">
      <div class="container">
        ${cu.imagem ? `<figure class="course-banner reveal"><img src="${arq(cu.imagem, r)}" alt="${esc(cu.nome)}" width="1400" height="931"></figure>` : ""}
        <div class="course-detail">
          <div class="reveal">
            <span class="eyebrow">Nosso curso • ${esc(cu.modalidade)}</span>
            <h2 class="h2">${esc(cu.nome)}</h2>
            ${cu.descricao ? `<h3>Sobre o Curso</h3>\n            ${rico(cu.descricao)}` : `<p>${esc(cu.resumo)}</p>`}
            ${cu.oportunidades ? `<h3>Oportunidades no Mercado</h3>\n            ${rico(cu.oportunidades)}` : ""}
            ${cu.destaques.length ? `<h3>Diferenciais</h3>
            <ul class="checklist">${cu.destaques.map((d) => `<li>${icon("check")}<span><strong>${esc(d)}</strong></span></li>`).join("")}</ul>` : ""}
            ${cu.inclui.length ? `<h3>Este curso inclui:</h3>
            <ul class="feature-row">${cu.inclui.map((it, k) => `<li><span class="icon-box">${icon(ICONES_INCLUI[k % ICONES_INCLUI.length])}</span> ${esc(it)}</li>`).join("")}</ul>` : ""}
            ${matriz ? `<a class="link-arrow" href="${arq(matriz.arquivo, r)}" target="_blank" rel="noopener">Ver ${esc(matriz.titulo)} ${icon("arrow-right")}</a>` : ""}
          </div>
          <aside class="info-panel reveal reveal-delay-1" aria-label="Informações do curso">
            <h3>Informações do curso</h3>
            <ul class="info-list">
              <li>${icon("school")}<div><small>Modalidade</small><strong>${esc(cu.modalidade)}</strong></div></li>
              ${cu.horario ? `<li>${icon("clock")}<div><small>Horário</small><strong>${esc(cu.horario)}</strong></div></li>` : ""}
              <li>${icon("award")}<div><small>Certificado</small><strong>Conclusão reconhecido</strong></div></li>
              <li>${icon("shield-check")}<div><small>Reconhecimento</small><strong>Sistec/MEC • COREN</strong></div></li>
              <li>${icon("map-pin")}<div><small>Local</small><strong>${esc(SITE.address.split("—").pop().trim())}</strong></div></li>
            </ul>
            <a class="btn btn--primary btn--block" href="${zap(cu)}" target="_blank" rel="noopener noreferrer">${iconFill("whatsapp")} Quero começar</a>
            <a class="btn btn--outline btn--block" href="${esc(SITE.forms)}" target="_blank" rel="noopener noreferrer">${icon("file-text")} Ficha de inscrição</a>
            ${edital ? `<a class="btn btn--outline btn--block" href="${arq(edital.arquivo, r)}" target="_blank" rel="noopener">${icon("download")} ${esc(edital.titulo)}</a>` : ""}
          </aside>
        </div>
      </div>
    </section>`;

  return `
    <section class="page-hero">
      <div class="container">
        <ol class="breadcrumb"><li><a href="${r}index.html">Início</a></li><li aria-current="page">Cursos</li></ol>
        <h1>Nossos cursos</h1>
        <p>Cursos técnicos presenciais, EJA online, formações profissionalizantes e Graduação e Pós EAD pela Multivix.</p>
      </div>
    </section>

    <div id="tecnico">${tecnicos.map(tecnico).join("")}</div>

    ${eja.length ? `<section class="section section--soft" id="eja">
      <div class="container">
        <div class="section-head reveal">
          <span class="eyebrow">EJA + Cursos Profissionalizantes</span>
          <h2 class="h2">Conclua seus estudos e qualifique-se</h2>
          <p>${eja.map((cu) => esc(cu.nome)).join(", ")} para você conquistar novas oportunidades.</p>
        </div>
        <div class="grid grid-3">
          ${eja.map((cu, i) => `<div class="feature reveal${i % 3 ? ` reveal-delay-${i % 3}` : ""}" id="${esc(cu.slug)}">
            <span class="icon-box">${icon(cu.slug.includes("eletro") ? "zap" : ICONES_EJA[cu.categoria])}</span>
            <h3>${esc(cu.nome)}</h3>
            <p>${esc(cu.resumo)}</p>
            <p class="feature__meta">${esc(cu.modalidade)}${cu.horario ? ` · ${esc(cu.horario)}` : ""}</p>
          </div>`).join("\n          ")}
        </div>
        <div class="reveal">
          <p class="center-actions"><a class="btn btn--primary" href="${zap(eja[0])}" target="_blank" rel="noopener noreferrer">${iconFill("whatsapp")} Quero começar</a></p>
        </div>
      </div>
    </section>` : ""}

    ${superiores.length ? `<section class="section" id="multivix">
      <div class="container">
        <div class="split">
          <div class="reveal">
            <span class="eyebrow">Cursos EAD Multivix</span>
            <h2 class="h2">${esc(superiores[0].nome)}</h2>
            <p>${esc(superiores[0].resumo)}</p>
            ${superiores[0].descricao ? rico(superiores[0].descricao) : ""}
            <ul class="checklist">
              ${superiores.map((cu) => `<li id="${esc(cu.slug)}">${icon("check")}<span><strong>${esc(cu.nome)}</strong> — ${esc(cu.modalidade)}</span></li>`).join("\n              ")}
              ${superiores[0].inclui.map((it) => `<li>${icon("check")}<span>${esc(it)}</span></li>`).join("\n              ")}
            </ul>
            <a class="btn btn--primary" href="${zap(superiores[0])}" target="_blank" rel="noopener noreferrer">${iconFill("whatsapp")} Quero começar</a>
          </div>
          <div class="gallery gallery--2 reveal reveal-delay-1">
            ${[1, 2, 3, 4].map((n) => `<a href="${zap(superiores[0])}" target="_blank" rel="noopener noreferrer" aria-label="Quero começar na Multivix"><img src="${r}assets/img/cursos/multivix-${n}.jpg" alt="Campanha Faculdade Multivix EAD" width="1024" height="1024" loading="lazy"></a>`).join("\n            ")}
          </div>
        </div>
      </div>
    </section>` : ""}

    <section class="section section--soft">
      <div class="container">
        <div class="cta reveal">
          <div>
            <h2>Ficou com alguma dúvida?</h2>
            <p>Nossa equipe ajuda você a escolher o curso ideal e explica todo o processo de matrícula.</p>
          </div>
          <div class="cta__actions">
            <a class="btn btn--primary" href="${r}contato.html">${icon("send")} Falar com a equipe</a>
          </div>
        </div>
      </div>
    </section>
`;
};
