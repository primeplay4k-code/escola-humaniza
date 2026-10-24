export const meta = {
  path: "",
  nav: "inicio",
  title: "",
  description: "Escola Técnica Humaniza em Eunápolis-BA: Curso Técnico de Enfermagem presencial reconhecido pelo MEC/SISTEC, EJA online, Mecânica, Eletrotécnica e Graduação e Pós EAD pela Multivix.",
};

const SISTEC = "https://sistec.mec.gov.br/consultapublicaunidadeensino/";
const ICONES_DIF = ["award", "file-text", "heart", "users", "school", "monitor"];

export const CATEGORIAS = [
  { id: "tecnico", cats: ["tecnico"], titulo: "Cursos Técnicos", tag: "Presencial", icone: "stethoscope" },
  { id: "eja", cats: ["eja", "profissionalizante"], titulo: "EJA + Cursos Profissionalizantes", tag: "Online + Presencial", icone: "wrench" },
  { id: "multivix", cats: ["superior"], titulo: "Graduação, Pós-graduação e MBA", tag: "EAD", icone: "graduation-cap" },
];

export default ({ icon, iconFill, wa, esc, arq, SITE, c, r }) => {
  const h = c.inicio;
  const cursoWa = (cu) => wa(cu?.whatsapp || SITE.phone1, cu?.mensagemWhatsapp || `Quero saber mais sobre ${cu?.nome ?? "os cursos"}.`);
  const cards = CATEGORIAS.map((cat) => ({ ...cat, cursos: c.cursos.filter((cu) => cat.cats.includes(cu.categoria)) })).filter((cat) => cat.cursos.length);

  return `
    <!-- Hero -->
    <section class="hero">
      <div class="container">
        <div class="hero__content reveal">
          <span class="hero__welcome"><b>BEM-VINDO</b> ${esc(h.heroSelo)}</span>
          <h1>${esc(h.heroTitulo)} <em>${esc(h.heroDestaque)}</em></h1>
          <p class="hero__lead">${esc(h.heroTexto)}</p>
          <div class="hero__actions">
            <a class="btn btn--primary" href="${wa(SITE.phone1, `Olá! Quero me inscrever na ${SITE.name}.`)}" target="_blank" rel="noopener noreferrer">${iconFill("whatsapp")} Inscreva-se</a>
            <a class="btn btn--outline" href="${r}cursos.html">Conheça os cursos ${icon("arrow-right")}</a>
          </div>
          <ul class="hero__proof">
            <li>${icon("check")} Reconhecido pelo MEC</li>
            <li>${icon("check")} Diploma válido em todo o Brasil</li>
            <li>${icon("check")} Registro no COREN</li>
          </ul>
        </div>
        <div class="hero__visual reveal reveal-delay-1">
          <div class="hero__photo">
            <img src="${arq(h.heroImagem, r)}" alt="Alunos da ${esc(SITE.name)}" width="1024" height="768" fetchpriority="high">
          </div>
          <div class="hero__float hero__float--a">
            <span class="icon-box icon-box--accent">${icon("clock")}</span>
            <div><strong>Aulas presenciais</strong><span>${esc(c.cursos.find((cu) => cu.horario)?.horario ?? "Período noturno")}</span></div>
          </div>
          <a class="hero__float hero__float--b" href="${SISTEC}" target="_blank" rel="noopener noreferrer">
            <img src="${r}assets/img/qrcode-sistec.png" alt="" width="46" height="46">
            <div><strong>Cadastro no SISTEC</strong><span>Verifique nosso registro</span></div>
          </a>
        </div>
      </div>
    </section>

    <!-- Credenciais -->
    <section class="trust" aria-label="Credenciais">
      <div class="container">
        <a class="trust__item" href="${SISTEC}" target="_blank" rel="noopener noreferrer"><span class="icon-box">${icon("map-pin")}</span><div><strong>Diploma válido em todo território nacional</strong><span>Clique aqui para verificar no SISTEC ${icon("external")}</span></div></a>
        <div class="trust__item"><span class="icon-box">${icon("award")}</span><div><strong>Cursos técnicos aprovados pelo MEC</strong><span>Cursos técnicos reconhecidos pelo MEC</span></div></div>
        <div class="trust__item"><span class="icon-box">${icon("shield-check")}</span><div><strong>Registro nos conselhos competentes</strong><span>COREN</span></div></div>
        <div class="trust__item"><span class="icon-box">${icon("monitor")}</span><div><strong>Presencial e EAD</strong><span>Técnico, EJA, Graduação e Pós</span></div></div>
      </div>
    </section>

    ${c.parceiros.length ? `<!-- Parceiros -->
    <section class="partners" aria-label="Parceiros">
      <div class="container">
        <div class="partners__head">
          <h2>Parceiros</h2>
          <p>${esc(h.parceirosTexto)}</p>
        </div>
        <div class="marquee">
          <div class="marquee__track">
            ${c.parceiros.map((p) => `<img src="${arq(p.logo, r)}" alt="${esc(p.nome)}" height="56" loading="lazy">`).join("\n            ")}
          </div>
        </div>
      </div>
    </section>` : ""}

    <!-- Sobre -->
    <section class="section">
      <div class="container split">
        <div class="media-frame reveal">
          <img src="${arq(h.sobreImagem, r)}" alt="${esc(h.sobreTitulo)}" width="1400" height="931" loading="lazy">
          <div class="media-frame__badge">
            <img src="${r}assets/img/qrcode-sistec.png" alt="" width="52" height="52" loading="lazy">
            <div><strong>Diploma verificável</strong><span>Consulte nossa escola no SISTEC/MEC</span></div>
          </div>
        </div>
        <div class="reveal reveal-delay-1">
          <span class="eyebrow">Sobre a Humaniza</span>
          <h2 class="h2">${esc(h.sobreTitulo)}</h2>
          <p>${esc(h.sobreTexto)}</p>
          <ul class="checklist">
            ${h.sobreItens.map((it) => `<li>${icon("check")}<span><strong>${esc(it)}</strong></span></li>`).join("\n            ")}
          </ul>
          <a class="btn btn--primary" href="${r}sobre.html">Conheça nossa história ${icon("arrow-right")}</a>
        </div>
      </div>
    </section>

    <!-- Categorias de cursos -->
    <section class="section section--soft" id="cursos">
      <div class="container">
        <div class="section-head reveal">
          <span class="eyebrow">Categoria</span>
          <h2 class="h2">Explore as categorias de cursos</h2>
          <p>Do curso técnico à pós-graduação: opções presenciais e a distância para cada momento da sua vida.</p>
        </div>
        <div class="grid grid-3">
          ${cards.map((cat, i) => {
            const principal = cat.cursos.find((cu) => cu.imagem) ?? cat.cursos[0];
            return `
          <article class="card course-card reveal${i ? ` reveal-delay-${i}` : ""}">
            <div class="card__media"><img src="${principal.imagem ? arq(principal.imagem, r) : `${r}assets/img/logo-humaniza-marca.jpg`}" alt="${esc(cat.titulo)}" width="1024" height="768" loading="lazy"></div>
            <span class="tag tag--accent">${cat.tag}</span>
            <div class="card__body">
              <span class="icon-box">${icon(cat.icone)}</span>
              <h3>${cat.titulo}</h3>
              <p>${esc(principal.resumo)}</p>
              <ul class="course-card__list">
                ${cat.cursos.slice(0, 4).map((cu) => `<li>${icon("check")} ${esc(cu.nome)}${cu.modalidade ? ` <small>· ${esc(cu.modalidade)}</small>` : ""}</li>`).join("\n                ")}
              </ul>
              <div class="card__foot"><a class="btn btn--primary btn--block" href="${cursoWa(principal)}" target="_blank" rel="noopener noreferrer">Quero começar ${icon("arrow-right")}</a></div>
            </div>
          </article>`;
          }).join("")}
        </div>
      </div>
    </section>

    ${h.depoimentoTexto ? `<!-- Depoimento -->
    <section class="section">
      <div class="container">
        <div class="testimonial reveal">
          <div class="testimonial__photo">${h.depoimentoFoto ? `<img src="${arq(h.depoimentoFoto, r)}" alt="${esc(h.depoimentoNome)}" width="330" height="342" loading="lazy">` : ""}</div>
          <blockquote>
            ${iconFill("quote")}
            <p>${esc(h.depoimentoTexto)}</p>
            <cite><strong>${esc(h.depoimentoNome)}</strong>${esc(h.depoimentoCargo)}<span class="stars" aria-label="5 estrelas">${iconFill("star").repeat(5)}</span></cite>
          </blockquote>
        </div>
      </div>
    </section>` : ""}

    <!-- Por que nos escolher -->
    <section class="section section--dark">
      <div class="container">
        <div class="section-head reveal">
          <span class="eyebrow">Por que nos escolher</span>
          <h2 class="h2">${esc(h.diferenciaisTitulo)}</h2>
          <p>${esc(h.diferenciaisTexto)}</p>
        </div>
        <div class="grid grid-3">
          ${h.diferenciais.map((d, i) => `<div class="feature reveal${i % 3 ? ` reveal-delay-${i % 3}` : ""}"><span class="icon-box">${icon(ICONES_DIF[i % ICONES_DIF.length])}</span><h3>${esc(d.titulo)}</h3><p>${esc(d.texto)}</p></div>`).join("\n          ")}
        </div>
      </div>
    </section>

    ${c.posts.length ? `<!-- Blog -->
    <section class="section section--soft">
      <div class="container">
        <div class="section-head reveal">
          <span class="eyebrow">Blog e Notícias</span>
          <h2 class="h2">${esc(h.blogTitulo)}</h2>
          <p>${esc(h.blogTexto)}</p>
        </div>
        <div class="grid grid-2">
          ${c.posts.slice(0, 4).map((p, i) => `
          <article class="card post-card reveal${i % 2 ? " reveal-delay-1" : ""}">
            <div class="card__media">${p.imagem ? `<img src="${arq(p.imagem, r)}" alt="${esc(p.titulo)}" width="800" height="600" loading="lazy">` : ""}</div>
            <div class="card__body">
              <div class="post-meta"><span>${icon("user")} ${esc(p.autor)}</span><span>${icon("calendar")} ${p.data.split("-").reverse().join("/")}</span></div>
              <h3><a class="stretched" href="${r}blog/${esc(p.slug)}.html">${esc(p.titulo)}</a></h3>
              <p>${esc(p.resumo)}</p>
              <span class="link-arrow">Leia mais ${icon("arrow-right")}</span>
            </div>
          </article>`).join("")}
        </div>
      </div>
    </section>` : ""}

    ${c.faq.length ? `<!-- FAQ -->
    <section class="section" id="faq">
      <div class="container">
        <div class="section-head reveal">
          <span class="eyebrow">Perguntas frequentes</span>
          <h2 class="h2">Tem perguntas? Nós temos respostas</h2>
          <p>Não encontrou sua resposta? <a class="link-arrow" href="${r}contato.html">Fale com a gente</a></p>
        </div>
        <div class="faq reveal">
          ${c.faq.map((f, i) => `<details${i ? "" : " open"}>
            <summary>${esc(f.pergunta)} ${icon("plus")}</summary>
            <div class="faq__answer"><p>${esc(f.resposta)}</p></div>
          </details>`).join("\n          ")}
        </div>
      </div>
    </section>` : ""}

    <!-- Localização e contato -->
    <section class="section section--soft section--tight">
      <div class="container">
        <div class="info-strip reveal">
          <div class="info-strip__item">
            <span class="icon-box">${icon("map-pin")}</span>
            <div><h3>Localização</h3><p>${esc(SITE.address)}</p></div>
          </div>
          <div class="info-strip__item">
            <span class="icon-box">${icon("mail")}</span>
            <div><h3>E-mail</h3><p><a href="mailto:${esc(SITE.email1)}">${esc(SITE.email1)}</a><br><a href="mailto:${esc(SITE.email2)}">${esc(SITE.email2)}</a></p></div>
          </div>
          <div class="info-strip__item">
            <span class="icon-box">${icon("phone")}</span>
            <div><h3>Contato</h3><p>${esc(c.geral.contato1Nome.split(" ")[0])} <a href="${wa(SITE.phone1)}" target="_blank" rel="noopener noreferrer">${SITE.phone1Label}</a><br>${esc(c.geral.contato2Nome.split(" ")[0])} <a href="${wa(SITE.phone2)}" target="_blank" rel="noopener noreferrer">${SITE.phone2Label}</a></p></div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section">
      <div class="container">
        <div class="cta reveal">
          <div>
            <h2>${esc(h.ctaTitulo)}</h2>
            <p>${esc(h.ctaTexto)}</p>
          </div>
          <div class="cta__actions">
            <a class="btn btn--primary" href="${wa(SITE.phone1, "Olá! Quero garantir minha vaga.")}" target="_blank" rel="noopener noreferrer">${iconFill("whatsapp")} Garantir minha vaga</a>
            <a class="btn btn--outline" href="${esc(SITE.forms)}" target="_blank" rel="noopener noreferrer">${icon("file-text")} Ficha de inscrição</a>
          </div>
        </div>
      </div>
    </section>
`;
};
