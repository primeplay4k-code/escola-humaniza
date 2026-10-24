export const meta = {
  path: "cursos.html",
  nav: "cursos",
  title: "Cursos",
  description: "Curso Técnico de Enfermagem presencial em Eunápolis-BA (19h às 21h30, reconhecido pelo MEC), EJA online, Mecânica, Eletrotécnica e Graduação EAD Multivix.",
  image: "cursos/priscila-enfermagem.jpg",
};

export default ({ icon, iconFill, wa, SITE, r }) => `
    <section class="page-hero">
      <div class="container">
        <ol class="breadcrumb"><li><a href="${r}index.html">Início</a></li><li aria-current="page">Cursos</li></ol>
        <h1>Nossos cursos</h1>
        <p>Cursos técnicos presenciais, EJA online, formações profissionalizantes e Graduação e Pós EAD pela Multivix.</p>
      </div>
    </section>

    <!-- Técnico em Enfermagem -->
    <section class="section" id="tecnico">
      <div class="container">
        <figure class="course-banner reveal">
          <img src="${r}assets/img/cursos/priscila-enfermagem.jpg" alt="Técnico em Enfermagem 25.2 — professores especializados, convênios com hospitais e atividades de extensão" width="1400" height="931">
        </figure>
        <div class="course-detail">
          <div class="reveal">
            <span class="eyebrow">Nosso curso • Presencial</span>
            <h2 class="h2">Curso Técnico de Enfermagem</h2>
            <h3>Sobre o Curso</h3>
            <p>O Curso Técnico em Enfermagem da Escola Técnica Humaniza foi desenvolvido para formar profissionais capacitados para atuar em diversas áreas da saúde. Com uma abordagem prática e teórica, o curso oferece uma sólida formação, preparando os alunos para atender às demandas do mercado de trabalho com competência e ética.</p>
            <p>Através de <strong>aulas presenciais e práticas supervisionadas</strong>, os alunos aprenderão a realizar procedimentos de enfermagem, cuidados com pacientes, gestão de unidades de saúde, e muito mais. O curso é <strong>reconhecido pelo MEC</strong>, e ao final da formação, o aluno receberá <strong>certificado válido em todo o Brasil</strong>.</p>

            <h3>Oportunidades no Mercado</h3>
            <p>O mercado para Técnicos em Enfermagem está em crescimento constante, com a crescente demanda por serviços de saúde no Brasil. Com uma formação sólida e prática, esses profissionais são essenciais em hospitais, clínicas e atendimento domiciliar, desempenhando um papel crucial na saúde pública e privada.</p>

            <h3>Diferenciais da turma 25.2</h3>
            <ul class="checklist">
              <li>${icon("check")}<span><strong>Professores especializados</strong></span></li>
              <li>${icon("check")}<span><strong>Convênios com hospitais</strong></span></li>
              <li>${icon("check")}<span><strong>Atividades de extensão</strong></span></li>
            </ul>

            <h3>Este curso inclui:</h3>
            <ul class="feature-row">
              <li><span class="icon-box">${icon("book-open")}</span> Aulas teóricas e práticas</li>
              <li><span class="icon-box">${icon("file-text")}</span> Materiais didáticos atualizados</li>
              <li><span class="icon-box">${icon("flask")}</span> Acesso a um laboratório revolucionário</li>
              <li><span class="icon-box">${icon("award")}</span> Certificado de conclusão reconhecido</li>
            </ul>
            <a class="link-arrow" href="${r}assets/docs/matriz-curricular-26.1.pdf" target="_blank" rel="noopener">Ver matriz curricular 26.1 ${icon("arrow-right")}</a>
          </div>
          <aside class="info-panel reveal reveal-delay-1" aria-label="Informações do curso">
            <h3>Informações do curso</h3>
            <ul class="info-list">
              <li>${icon("school")}<div><small>Modalidade</small><strong>Presencial</strong></div></li>
              <li>${icon("clock")}<div><small>Horário</small><strong>19:00 às 21:30</strong></div></li>
              <li>${icon("award")}<div><small>Certificado</small><strong>Conclusão reconhecido</strong></div></li>
              <li>${icon("shield-check")}<div><small>Reconhecimento</small><strong>Sistec/MEC • COREN</strong></div></li>
              <li>${icon("map-pin")}<div><small>Local</small><strong>Centro, Eunápolis-BA</strong></div></li>
            </ul>
            <a class="btn btn--primary btn--block" href="${wa(SITE.phone1, "Quero estudar Curso Técnico.")}" target="_blank" rel="noopener noreferrer">${iconFill("whatsapp")} Quero começar</a>
            <a class="btn btn--outline btn--block" href="${SITE.forms}" target="_blank" rel="noopener noreferrer">${icon("file-text")} Ficha de inscrição</a>
            <a class="btn btn--outline btn--block" href="${r}assets/docs/edital-25.2-tecnico-enfermagem.pdf" target="_blank" rel="noopener">${icon("download")} Edital 25.2</a>
          </aside>
        </div>
      </div>
    </section>

    <!-- EJA e profissionalizantes -->
    <section class="section section--soft" id="eja">
      <div class="container">
        <div class="section-head reveal">
          <span class="eyebrow">EJA + Cursos Profissionalizantes</span>
          <h2 class="h2">Conclua seus estudos e qualifique-se</h2>
          <p>EJA online e formações em Mecânica e Eletrotécnica para você conquistar novas oportunidades.</p>
        </div>
        <div class="grid grid-3">
          <div class="feature reveal">
            <span class="icon-box">${icon("monitor")}</span>
            <h3>EJA Online</h3>
            <p>Educação de Jovens e Adultos a distância para concluir seus estudos no seu ritmo.</p>
          </div>
          <div class="feature reveal reveal-delay-1">
            <span class="icon-box">${icon("wrench")}</span>
            <h3>Mecânica</h3>
            <p>Formação profissionalizante para quem quer atuar na área de mecânica.</p>
          </div>
          <div class="feature reveal reveal-delay-2">
            <span class="icon-box">${icon("zap")}</span>
            <h3>Eletrotécnica</h3>
            <p>Formação profissionalizante para quem quer atuar na área de eletrotécnica.</p>
          </div>
        </div>
        <div class="reveal">
          <p class="center-actions"><a class="btn btn--primary" href="${wa(SITE.phone1, "Quero estudar EJA ou Curso Profissionalizante.")}" target="_blank" rel="noopener noreferrer">${iconFill("whatsapp")} Quero começar</a></p>
        </div>
      </div>
    </section>

    <!-- Multivix -->
    <section class="section" id="multivix">
      <div class="container">
        <div class="split">
          <div class="reveal">
            <span class="eyebrow">Cursos EAD Multivix</span>
            <h2 class="h2">Graduação EAD</h2>
            <p>A <strong>Faculdade Multivix</strong> é conhecida pelos seus excelentes resultados junto ao MEC nos cursos superiores de graduação EAD.</p>
            <p>Estude a distância na Multivix e conquiste seu reconhecimento no mercado de trabalho com a qualidade de uma das melhores faculdades do Brasil.</p>
            <ul class="checklist">
              <li>${icon("check")}<span><strong>Graduação EAD</strong> com diploma reconhecido pelo MEC</span></li>
              <li>${icon("check")}<span><strong>Pós-graduação e MBA</strong> EAD</span></li>
              <li>${icon("check")}<span><strong>Aulas flexíveis</strong>, para você aprender no seu ritmo, de qualquer lugar</span></li>
            </ul>
            <a class="btn btn--primary" href="${wa(SITE.phone2, "Quero estudar na Multivix.")}" target="_blank" rel="noopener noreferrer">${iconFill("whatsapp")} Quero começar</a>
          </div>
          <div class="gallery gallery--2 reveal reveal-delay-1">
            ${[1, 2, 3, 4].map((n) => `<a href="${wa(SITE.phone2, "Quero estudar na Multivix.")}" target="_blank" rel="noopener noreferrer" aria-label="Quero começar na Multivix"><img src="${r}assets/img/cursos/multivix-${n}.jpg" alt="Campanha Faculdade Multivix EAD" width="1024" height="1024" loading="lazy"></a>`).join("\n            ")}
          </div>
        </div>
      </div>
    </section>

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
