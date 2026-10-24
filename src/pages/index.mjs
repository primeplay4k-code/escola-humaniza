import { posts } from "./blog.mjs";

export const meta = {
  path: "",
  nav: "inicio",
  title: "",
  description: "Escola Técnica Humaniza em Eunápolis-BA: Curso Técnico de Enfermagem presencial reconhecido pelo MEC/SISTEC, EJA online, Mecânica, Eletrotécnica e Graduação e Pós EAD pela Multivix.",
};

export default ({ icon, iconFill, wa, SITE, r }) => `
    <!-- Hero -->
    <section class="hero">
      <div class="container">
        <div class="hero__content reveal">
          <span class="hero__welcome"><b>BEM-VINDO</b> à Escola Técnica Humaniza</span>
          <h1>Transforme seu futuro com <em>educação de qualidade!</em></h1>
          <p class="hero__lead"><strong>Cursos técnicos presenciais</strong>, <strong>Graduação e Pós pela Multivix</strong>, além de <strong>EJA online</strong> e formações em <strong>Mecânica e Eletrotécnica</strong>.</p>
          <div class="hero__actions">
            <a class="btn btn--primary" href="${wa(SITE.phone1, "Olá! Quero me inscrever na Escola Técnica Humaniza.")}" target="_blank" rel="noopener noreferrer">${iconFill("whatsapp")} Inscreva-se</a>
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
            <img src="${r}assets/img/escola.jpg" alt="Turma do Curso Técnico de Enfermagem da Escola Técnica Humaniza" width="1024" height="768" fetchpriority="high">
          </div>
          <div class="hero__float hero__float--a">
            <span class="icon-box icon-box--accent">${icon("clock")}</span>
            <div><strong>Aulas presenciais</strong><span>Das 19h às 21h30</span></div>
          </div>
          <a class="hero__float hero__float--b" href="https://sistec.mec.gov.br/consultapublicaunidadeensino/" target="_blank" rel="noopener noreferrer">
            <img src="${r}assets/img/qrcode-sistec.png" alt="" width="46" height="46">
            <div><strong>Cadastro no SISTEC</strong><span>Verifique nosso registro</span></div>
          </a>
        </div>
      </div>
    </section>

    <!-- Credenciais -->
    <section class="trust" aria-label="Credenciais">
      <div class="container">
        <a class="trust__item" href="https://sistec.mec.gov.br/consultapublicaunidadeensino/" target="_blank" rel="noopener noreferrer"><span class="icon-box">${icon("map-pin")}</span><div><strong>Diploma válido em todo território nacional</strong><span>Clique aqui para verificar no SISTEC ${icon("external")}</span></div></a>
        <div class="trust__item"><span class="icon-box">${icon("award")}</span><div><strong>Cursos técnicos aprovados pelo MEC</strong><span>Cursos técnicos reconhecidos pelo MEC</span></div></div>
        <div class="trust__item"><span class="icon-box">${icon("shield-check")}</span><div><strong>Registro nos conselhos competentes</strong><span>COREN</span></div></div>
        <div class="trust__item"><span class="icon-box">${icon("monitor")}</span><div><strong>Presencial e EAD</strong><span>Técnico, EJA, Graduação e Pós</span></div></div>
      </div>
    </section>

    <!-- Parceiros -->
    <section class="partners" aria-label="Parceiros">
      <div class="container">
        <div class="partners__head">
          <h2>Parceiros</h2>
          <p>A Humaniza tem orgulho de parcerias que elevam a formação à excelência.</p>
        </div>
        <div class="marquee">
          <div class="marquee__track">
            <img src="${r}assets/img/parceiros/multivix.jpg" alt="Faculdade Multivix" width="56" height="56" loading="lazy">
            <img src="${r}assets/img/parceiros/microsoft-education.webp" alt="Microsoft Education" width="330" height="56" loading="lazy">
            <img src="${r}assets/img/parceiros/sistec.png" alt="SISTEC" width="280" height="56" loading="lazy">
            <img src="${r}assets/img/parceiros/itagimirim.png" alt="Governo Municipal de Itagimirim" width="226" height="56" loading="lazy">
            <img src="${r}assets/img/parceiros/itabela.png" alt="Prefeitura de Itabela" width="100" height="56" loading="lazy">
            <img src="${r}assets/img/parceiros/guaratinga.png" alt="Prefeitura de Guaratinga" width="56" height="56" loading="lazy">
            <img src="${r}assets/img/parceiros/salto-da-divisa.png" alt="Prefeitura Municipal de Salto da Divisa" width="200" height="56" loading="lazy">
            <img src="${r}assets/img/parceiros/parceiro-n.jpg" alt="Parceiro institucional" width="56" height="56" loading="lazy">
            <img src="${r}assets/img/softcloudba.png" alt="Softcloudba Tecnologia &amp; Inovação" width="194" height="56" loading="lazy">
          </div>
        </div>
      </div>
    </section>

    <!-- Sobre -->
    <section class="section">
      <div class="container split">
        <div class="media-frame reveal">
          <img src="${r}assets/img/cursos/priscila-enfermagem.jpg" alt="Técnico em Enfermagem 25.2: professores especializados, convênios com hospitais e atividades de extensão" width="1400" height="931" loading="lazy">
          <div class="media-frame__badge">
            <img src="${r}assets/img/qrcode-sistec.png" alt="" width="52" height="52" loading="lazy">
            <div><strong>Diploma verificável</strong><span>Consulte nossa escola no SISTEC/MEC</span></div>
          </div>
        </div>
        <div class="reveal reveal-delay-1">
          <span class="eyebrow">Sobre a Humaniza</span>
          <h2 class="h2">Referência em Cursos Técnicos</h2>
          <p>Na Humaniza, proporcionamos uma educação de qualidade com cursos presenciais e EAD, focados no desenvolvimento profissional e nas melhores oportunidades de carreira.</p>
          <ul class="checklist">
            <li>${icon("check")}<span><strong>Professores especializados</strong></span></li>
            <li>${icon("check")}<span><strong>Cursos voltados para sua carreira</strong></span></li>
            <li>${icon("check")}<span><strong>Convênios com hospitais</strong> e atividades de extensão</span></li>
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
          <article class="card course-card reveal">
            <div class="card__media"><img src="${r}assets/img/cursos/priscila-enfermagem.jpg" alt="Curso Técnico em Enfermagem" width="1400" height="931" loading="lazy"></div>
            <span class="tag tag--accent">Presencial</span>
            <div class="card__body">
              <span class="icon-box">${icon("stethoscope")}</span>
              <h3>Cursos Técnicos</h3>
              <p>Curso Técnico em Enfermagem: formação completa para atuar na área da saúde, com aulas práticas e teóricas.</p>
              <ul class="course-card__list">
                <li>${icon("check")} Reconhecido pelo Sistec/MEC</li>
                <li>${icon("check")} Horário: 19:00 às 21:30</li>
              </ul>
              <div class="card__foot"><a class="btn btn--primary btn--block" href="${wa(SITE.phone1, "Quero estudar Curso Técnico.")}" target="_blank" rel="noopener noreferrer">Quero começar ${icon("arrow-right")}</a></div>
            </div>
          </article>
          <article class="card course-card reveal reveal-delay-1">
            <div class="card__media"><img src="${r}assets/img/logo-humaniza-marca.jpg" alt="Escola Técnica Humaniza" width="768" height="506" loading="lazy"></div>
            <span class="tag tag--accent">Online + Presencial</span>
            <div class="card__body">
              <span class="icon-box">${icon("wrench")}</span>
              <h3>EJA + Cursos Profissionalizantes</h3>
              <p>EJA online para concluir seus estudos e formações profissionalizantes em Mecânica e Eletrotécnica.</p>
              <ul class="course-card__list">
                <li>${icon("check")} EJA online</li>
                <li>${icon("check")} Mecânica e Eletrotécnica</li>
              </ul>
              <div class="card__foot"><a class="btn btn--primary btn--block" href="${wa(SITE.phone1, "Quero estudar EJA ou Curso Profissionalizante.")}" target="_blank" rel="noopener noreferrer">Quero começar ${icon("arrow-right")}</a></div>
            </div>
          </article>
          <article class="card course-card reveal reveal-delay-2">
            <div class="card__media"><img src="${r}assets/img/cursos/multivix-2.jpg" alt="Faculdade Multivix — graduação EAD" width="1024" height="1024" loading="lazy"></div>
            <span class="tag tag--accent">EAD</span>
            <div class="card__body">
              <span class="icon-box">${icon("graduation-cap")}</span>
              <h3>Graduação, Pós-graduação e MBA</h3>
              <p>Cursos EAD pela Faculdade Multivix, conhecida pelos seus excelentes resultados junto ao MEC.</p>
              <ul class="course-card__list">
                <li>${icon("check")} Certificação reconhecida pelo MEC</li>
                <li>${icon("check")} Aprenda no seu ritmo</li>
              </ul>
              <div class="card__foot"><a class="btn btn--primary btn--block" href="${wa(SITE.phone2, "Quero estudar na Multivix.")}" target="_blank" rel="noopener noreferrer">Quero começar ${icon("arrow-right")}</a></div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Depoimento -->
    <section class="section">
      <div class="container">
        <div class="testimonial reveal">
          <div class="testimonial__photo"><img src="${r}assets/img/depoimento-ana-leticia.png" alt="Ana Leticia, técnica de enfermagem" width="330" height="342" loading="lazy"></div>
          <blockquote>
            ${iconFill("quote")}
            <p>Estudar Técnico em Enfermagem presencialmente tem sido uma experiência prática e enriquecedora.</p>
            <cite><strong>Ana Leticia</strong>Técnica de enfermagem<span class="stars" aria-label="5 estrelas">${iconFill("star").repeat(5)}</span></cite>
          </blockquote>
        </div>
      </div>
    </section>

    <!-- Por que nos escolher -->
    <section class="section section--dark">
      <div class="container">
        <div class="section-head reveal">
          <span class="eyebrow">Por que nos escolher</span>
          <h2 class="h2">Amplie suas habilidades e destaque-se no mercado de trabalho</h2>
          <p>Garantimos um ensino de excelência, preparando nossos alunos para o sucesso no mercado de trabalho.</p>
        </div>
        <div class="grid grid-3">
          <div class="feature reveal"><span class="icon-box">${icon("award")}</span><h3>Excelência comprovada</h3><p>Oferecemos ensino de qualidade que prepara nossos alunos para o sucesso.</p></div>
          <div class="feature reveal reveal-delay-1"><span class="icon-box">${icon("file-text")}</span><h3>Certificado reconhecido</h3><p>Validando sua conquista e abrindo portas para novas oportunidades profissionais.</p></div>
          <div class="feature reveal reveal-delay-2"><span class="icon-box">${icon("heart")}</span><h3>Cuidado individualizado</h3><p>Estamos sempre disponíveis para ajudar você a qualquer hora, todos os dias da semana.</p></div>
          <div class="feature reveal"><span class="icon-box">${icon("users")}</span><h3>Profissionais especializados</h3><p>Garantindo a melhor qualidade e experiência de aprendizado.</p></div>
          <div class="feature reveal reveal-delay-1"><span class="icon-box">${icon("school")}</span><h3>Aulas presenciais</h3><p>Com ensino de qualidade e interação direta.</p></div>
          <div class="feature reveal reveal-delay-2"><span class="icon-box">${icon("monitor")}</span><h3>Aulas EAD</h3><p>Flexíveis, para você aprender no seu ritmo, de qualquer lugar.</p></div>
        </div>
      </div>
    </section>

    <!-- Blog -->
    <section class="section section--soft">
      <div class="container">
        <div class="section-head reveal">
          <span class="eyebrow">Blog e Notícias</span>
          <h2 class="h2">Artigos e Blog da Humaniza</h2>
          <p>Conquiste seu sucesso com dicas e novidades sobre educação e carreira.</p>
        </div>
        <div class="grid grid-2">
          ${posts.map((p, i) => `
          <article class="card post-card reveal${i ? " reveal-delay-1" : ""}">
            <div class="card__media"><img src="${r}assets/img/${p.image}" alt="${p.title}" width="${p.w}" height="${p.h}" loading="lazy"></div>
            <div class="card__body">
              <div class="post-meta"><span>${icon("user")} ${p.author}</span><span>${icon("calendar")} ${p.date}</span></div>
              <h3><a class="stretched" href="${r}blog/${p.slug}.html">${p.title}</a></h3>
              <p>${p.excerpt}</p>
              <span class="link-arrow">Leia mais ${icon("arrow-right")}</span>
            </div>
          </article>`).join("")}
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="section" id="faq">
      <div class="container">
        <div class="section-head reveal">
          <span class="eyebrow">Perguntas frequentes</span>
          <h2 class="h2">Tem perguntas? Nós temos respostas</h2>
          <p>Não encontrou sua resposta? <a class="link-arrow" href="${r}contato.html">Fale com a gente</a></p>
        </div>
        <div class="faq reveal">
          <details open>
            <summary>Quais cursos a Humaniza oferece? ${icon("plus")}</summary>
            <div class="faq__answer">
              <p><strong>Curso Técnico em Enfermagem – Presencial</strong><br>Formação completa para atuar na área da saúde, com aulas práticas e teóricas.</p>
              <p>Também oferecemos EJA online, formações em Mecânica e Eletrotécnica e Graduação, Pós-graduação e MBA EAD pela Faculdade Multivix.</p>
            </div>
          </details>
          <details>
            <summary>Como posso me inscrever em um curso? ${icon("plus")}</summary>
            <div class="faq__answer"><p>Você pode se inscrever diretamente no nosso site, na aba <a class="link-arrow" href="${r}cursos.html">CURSOS</a>. Basta escolher o curso desejado, preencher o formulário de inscrição e seguir as instruções para completar o processo.</p></div>
          </details>
          <details>
            <summary>A EBIQS oferece cursos EAD? ${icon("plus")}</summary>
            <div class="faq__answer"><p>Sim! Oferecemos uma variedade de cursos EAD pela Multivix que permitem aprender de forma flexível e no seu próprio ritmo, com todo o suporte necessário para seu aprendizado.</p></div>
          </details>
          <details>
            <summary>Preciso de experiência anterior para ingressar nos cursos? ${icon("plus")}</summary>
            <div class="faq__answer"><p>Não, nossos cursos são destinados a todos os níveis de conhecimento, desde iniciantes até aqueles que já possuem alguma experiência na área.</p></div>
          </details>
          <details>
            <summary>Os cursos são reconhecidos? ${icon("plus")}</summary>
            <div class="faq__answer">
              <p>Sim, todos os nossos cursos são reconhecidos por órgãos competentes e preparados para garantir sua qualificação profissional no mercado de trabalho.</p>
              <ul class="checklist checklist--tight">
                <li>${icon("check")}<span>Curso Técnico em Enfermagem é reconhecido pelo <strong>Sistec/MEC</strong>.</span></li>
                <li>${icon("check")}<span>Nossos cursos EAD têm certificação válida e são reconhecidos pelo <strong>MEC</strong>.</span></li>
              </ul>
            </div>
          </details>
          <details>
            <summary>Há desconto para grupos ou empresas? ${icon("plus")}</summary>
            <div class="faq__answer"><p>Sim, oferecemos descontos especiais para grupos ou empresas que inscrevem múltiplos alunos. Para mais informações, entre em contato com nossa equipe de atendimento.</p></div>
          </details>
        </div>
      </div>
    </section>

    <!-- Localização e contato -->
    <section class="section section--soft section--tight">
      <div class="container">
        <div class="info-strip reveal">
          <div class="info-strip__item">
            <span class="icon-box">${icon("map-pin")}</span>
            <div><h3>Localização</h3><p>Av. Rui Barbosa, nº 56<br>Centro – Eunápolis - BA</p></div>
          </div>
          <div class="info-strip__item">
            <span class="icon-box">${icon("mail")}</span>
            <div><h3>E-mail</h3><p><a href="mailto:${SITE.email1}">${SITE.email1}</a><br><a href="mailto:${SITE.email2}">${SITE.email2}</a></p></div>
          </div>
          <div class="info-strip__item">
            <span class="icon-box">${icon("phone")}</span>
            <div><h3>Contato</h3><p>Barbara <a href="${wa(SITE.phone1)}" target="_blank" rel="noopener noreferrer">${SITE.phone1Label}</a><br>Marcelo <a href="${wa(SITE.phone2)}" target="_blank" rel="noopener noreferrer">${SITE.phone2Label}</a></p></div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section">
      <div class="container">
        <div class="cta reveal">
          <div>
            <h2>Sua nova carreira começa agora.</h2>
            <p>Garanta sua vaga na próxima turma. Atendimento pelo WhatsApp todos os dias da semana.</p>
          </div>
          <div class="cta__actions">
            <a class="btn btn--primary" href="${wa(SITE.phone1, "Olá! Quero garantir minha vaga.")}" target="_blank" rel="noopener noreferrer">${iconFill("whatsapp")} Garantir minha vaga</a>
            <a class="btn btn--outline" href="${SITE.forms}" target="_blank" rel="noopener noreferrer">${icon("file-text")} Ficha de inscrição</a>
          </div>
        </div>
      </div>
    </section>
`;
