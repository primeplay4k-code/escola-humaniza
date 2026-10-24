export const meta = {
  path: "sobre.html",
  nav: "sobre",
  title: "Sobre Nós",
  description: "Conheça a Escola Técnica Humaniza: educação profissional com excelência, responsabilidade social e foco no desenvolvimento humano em Eunápolis-BA.",
};

const valores = [
  ["award", "Excelência", "Buscamos a excelência em todas as nossas ações, garantindo um ensino de alta qualidade, infraestrutura de ponta e um atendimento dedicado aos nossos alunos."],
  ["scale", "Ética", "Atuamos com integridade, honestidade e respeito em todas as nossas relações, criando um ambiente de confiança e responsabilidade, tanto dentro quanto fora da instituição."],
  ["lightbulb", "Inovação", "Estamos em constante busca por novas metodologias educacionais e tecnologias que proporcionem uma experiência de aprendizagem moderna, dinâmica e relevante."],
  ["heart", "Comprometimento", "Nosso compromisso é com o sucesso dos alunos, oferecendo suporte contínuo e orientação para garantir o seu crescimento acadêmico e profissional."],
  ["accessibility", "Acessibilidade", "Acreditamos que a educação de qualidade deve ser acessível a todos, oferecendo programas flexíveis que atendem às diversas necessidades dos nossos estudantes."],
  ["rocket", "Empreendedorismo", "Incentivamos o desenvolvimento do espírito empreendedor, preparando nossos alunos para enfrentar desafios e se destacar no mercado de trabalho, contribuindo para o crescimento da sociedade."],
];

export default ({ icon, iconFill, wa, SITE, r }) => `
    <section class="page-hero">
      <div class="container">
        <ol class="breadcrumb"><li><a href="${r}index.html">Início</a></li><li aria-current="page">Sobre Nós</li></ol>
        <h1>Sobre Nós</h1>
        <p>Educação profissional com excelência, responsabilidade social e foco no desenvolvimento humano.</p>
      </div>
    </section>

    <section class="section">
      <div class="container split">
        <div class="reveal">
          <span class="eyebrow">Sobre nós</span>
          <h2 class="h2">A Escola Técnica Humaniza</h2>
          <p>A Escola Técnica Humaniza iniciou suas atividades com o propósito de oferecer educação profissional com excelência, responsabilidade social e foco no desenvolvimento humano. Atuando nas áreas da saúde, a Humaniza prepara técnicos qualificados para os desafios do mercado de trabalho, promovendo a formação ética, atualizada e humanizada.</p>
          <p>Comprometida com o futuro dos seus alunos, a Humaniza oferece cursos técnicos modernos, com infraestrutura de qualidade, professores experientes e metodologias ativas de ensino-aprendizagem.</p>
          <p>A instituição é controlada pela <strong>EBIQS Educação</strong>, holding educacional que garante suporte administrativo, inovação tecnológica e rigor acadêmico em todos os processos.</p>
          <div class="pill-list">
            <span class="tag tag--soft">Reconhecida pelo MEC</span>
            <span class="tag tag--soft">Cadastro SISTEC</span>
            <span class="tag tag--soft">Registro no COREN</span>
          </div>
          <a class="btn btn--primary" href="${r}cursos.html">Ver cursos ${icon("arrow-right")}</a>
        </div>
        <div class="media-frame reveal reveal-delay-1">
          <img src="${r}assets/img/escola.jpg" alt="Alunos da Escola Técnica Humaniza em sala" width="1024" height="768" loading="lazy">
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
          <h2 class="h2">Compromisso com a educação, inovação e o seu futuro profissional.</h2>
        </div>
        <div class="grid grid-2">
          <div class="mvv reveal">
            <span class="icon-box">${icon("target")}</span>
            <h3>Missão</h3>
            <p>Na EBIQS, nossa missão é promover formação de qualidade, capacitando os alunos para enfrentar os desafios do mercado de trabalho com confiança e competência. Estamos comprometidos com o desenvolvimento pessoal e profissional de cada estudante, preparando-os para contribuir ativamente com o crescimento socioeconômico da região. Nossa busca constante é formar profissionais éticos, inovadores e preparados para alcançar o sucesso em suas trajetórias profissionais.</p>
          </div>
          <div class="mvv mvv--featured reveal reveal-delay-1">
            <span class="icon-box">${icon("eye")}</span>
            <h3>Visão</h3>
            <p>Nossa visão é ser a instituição líder em Educação Técnica de Nível Médio a distância no Extremo Sul Baiano, destacando-se pela qualidade do ensino, inovação contínua e pelo comprometimento com a formação integral dos nossos alunos. Almejamos ser reconhecidos como a principal escolha para quem busca educação acessível, de excelência e que prepara os estudantes para os desafios e oportunidades do mercado de trabalho.</p>
          </div>
        </div>

        <h3 class="subhead reveal">${icon("gem")} Valores</h3>
        <div class="grid grid-3">
          ${valores.map(([ic, t, d], i) => `
          <div class="feature reveal${i % 3 ? " reveal-delay-" + (i % 3) : ""}"><span class="icon-box">${icon(ic)}</span><h3>${t}</h3><p>${d}</p></div>`).join("")}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="verify reveal">
          <img src="${r}assets/img/qrcode-sistec.png" alt="QR Code de verificação da Escola Técnica Humaniza no SISTEC" width="160" height="160" loading="lazy">
          <div>
            <span class="eyebrow">Transparência</span>
            <h3>Diploma válido em todo território nacional</h3>
            <p>Aponte a câmera do celular para o QR Code ou acesse a consulta pública do SISTEC/MEC para confirmar o cadastro da Escola Técnica Humaniza.</p>
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
            <p>${SITE.address}. Agende uma visita ou tire suas dúvidas pelo WhatsApp.</p>
          </div>
          <div class="cta__actions">
            <a class="btn btn--primary" href="${wa(SITE.phone1, "Olá! Gostaria de agendar uma visita à escola.")}" target="_blank" rel="noopener noreferrer">${iconFill("whatsapp")} Agendar visita</a>
          </div>
        </div>
      </div>
    </section>
`;
