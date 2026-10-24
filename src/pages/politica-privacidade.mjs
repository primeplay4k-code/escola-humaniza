export const meta = {
  path: "politica-privacidade.html",
  nav: "",
  title: "Política de Privacidade",
  description: "Política de Privacidade da Escola Técnica Humaniza, em conformidade com a Lei Geral de Proteção de Dados (LGPD).",
};

export default ({ SITE, r }) => `
    <section class="page-hero">
      <div class="container">
        <ol class="breadcrumb"><li><a href="${r}index.html">Início</a></li><li aria-current="page">Política de Privacidade</li></ol>
        <h1>Política de Privacidade</h1>
        <p>Como tratamos e protegemos os seus dados pessoais, conforme a Lei nº 13.709/2018 (LGPD).</p>
      </div>
    </section>

    <section class="section">
      <div class="container prose">
        <p class="updated">Última atualização: outubro de 2026.</p>

        <h2>1. Quem somos</h2>
        <p>Este site pertence à ${SITE.name}, mantida pela EBIQS Educação, com endereço na ${SITE.address}. Para assuntos de privacidade, entre em contato pelo e-mail <a href="mailto:${SITE.email1}">${SITE.email1}</a>.</p>

        <h2>2. Quais dados coletamos</h2>
        <p>Este site não possui cadastro nem login para visitantes. Os dados só chegam até nós quando você decide entrar em contato:</p>
        <ul>
          <li><strong>Formulário de contato:</strong> nome, telefone, curso de interesse e mensagem são registrados no sistema interno da escola, acessível apenas à equipe autorizada, para que possamos retornar o seu contato. Também é aberta uma conversa no seu WhatsApp, que só é enviada se você confirmar no aplicativo. Para evitar abusos, registramos ainda o endereço IP de quem envia o formulário.</li>
          <li><strong>WhatsApp, e-mail e telefone:</strong> as informações que você nos enviar por esses canais.</li>
          <li><strong>Formulário de inscrição (Microsoft Forms):</strong> dados preenchidos na ficha de matrícula, tratados conforme a política da Microsoft.</li>
        </ul>

        <h2>3. Para que usamos seus dados</h2>
        <ul>
          <li>Responder dúvidas e enviar informações sobre cursos;</li>
          <li>Realizar e acompanhar processos de matrícula;</li>
          <li>Cumprir obrigações legais e regulatórias educacionais.</li>
        </ul>

        <p>Os dados do formulário de contato são mantidos enquanto forem necessários para o atendimento e podem ser excluídos a qualquer momento mediante solicitação.</p>

        <h2>4. Compartilhamento</h2>
        <p>Não vendemos nem alugamos seus dados. Eles podem ser compartilhados com a EBIQS Educação e com instituições parceiras (como a Faculdade Multivix) somente quando necessário para a matrícula no curso escolhido por você.</p>

        <h2>5. Serviços de terceiros</h2>
        <p>Este site utiliza fontes do Google Fonts e um mapa incorporado do Google Maps, que podem registrar dados técnicos de acesso (como endereço IP) de acordo com as políticas do Google. Links para WhatsApp, Instagram, Microsoft Forms e Portal do Aluno levam a serviços com políticas próprias.</p>

        <h2>6. Cookies</h2>
        <p>Não utilizamos cookies de rastreamento ou publicidade. Serviços de terceiros incorporados podem utilizar cookies próprios.</p>

        <h2>7. Seus direitos</h2>
        <p>Conforme a LGPD, você pode solicitar a qualquer momento: confirmação e acesso aos seus dados, correção, anonimização, eliminação, portabilidade e revogação do consentimento. Basta enviar um e-mail para <a href="mailto:${SITE.email1}">${SITE.email1}</a>.</p>

        <h2>8. Segurança</h2>
        <p>O site é servido por conexão criptografada (HTTPS) e adota políticas de segurança que impedem a execução de códigos de terceiros, o carregamento do site dentro de outras páginas e outras formas comuns de ataque.</p>

        <h2>9. Alterações</h2>
        <p>Esta política pode ser atualizada periodicamente. A data da última revisão estará sempre indicada no topo desta página.</p>
      </div>
    </section>
`;
