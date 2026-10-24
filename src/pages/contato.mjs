export const meta = {
  path: "contato.html",
  nav: "contato",
  title: "Contato",
  description: "Fale com a Escola Técnica Humaniza: WhatsApp (73) 98869-9253, e-mail e endereço na Av. Rui Barbosa, 56, Centro, Eunápolis-BA.",
};

export default ({ icon, iconFill, wa, SITE, r }) => `
    <section class="page-hero">
      <div class="container">
        <ol class="breadcrumb"><li><a href="${r}index.html">Início</a></li><li aria-current="page">Contato</li></ol>
        <h1>Fale com a Humaniza</h1>
        <p>Tire suas dúvidas, faça sua matrícula ou agende uma visita. Respondemos rapidinho!</p>
      </div>
    </section>

    <section class="section">
      <div class="container contact-grid">
        <div class="contact-cards reveal">
          <div class="contact-card">
            <span class="icon-box">${icon("stethoscope")}</span>
            <div>
              <h3>Bárbara Lima</h3>
              <p>Cursos Técnicos, EJA e Profissionalizantes</p>
              <div class="row">
                <a href="${wa(SITE.phone1)}" target="_blank" rel="noopener noreferrer">${SITE.phone1Label}</a>
                <a href="mailto:${SITE.email1}">${SITE.email1}</a>
                <a href="mailto:barbara.lima@escolahumaniza.com">barbara.lima@escolahumaniza.com</a>
              </div>
            </div>
          </div>
          <div class="contact-card">
            <span class="icon-box">${icon("graduation-cap")}</span>
            <div>
              <h3>Marcelo Monteiro</h3>
              <p>Graduação, Pós e MBA Multivix</p>
              <div class="row">
                <a href="${wa(SITE.phone2)}" target="_blank" rel="noopener noreferrer">${SITE.phone2Label}</a>
                <a href="mailto:${SITE.email2}">${SITE.email2}</a>
                <a href="mailto:marcelo.monteiro@escolahumaniza.com">marcelo.monteiro@escolahumaniza.com</a>
              </div>
            </div>
          </div>
          <div class="contact-card">
            <span class="icon-box">${icon("map-pin")}</span>
            <div>
              <h3>Endereço</h3>
              <p>${SITE.address}</p>
            </div>
          </div>
          <div class="contact-card">
            <span class="icon-box">${icon("file-text")}</span>
            <div>
              <h3>Inscrição de matrícula</h3>
              <p>Prefere um formulário? Preencha a ficha de inscrição online.</p>
              <div class="row"><a href="${SITE.forms}" target="_blank" rel="noopener noreferrer">Abrir formulário ${icon("external")}</a></div>
            </div>
          </div>
          <div class="contact-card">
            <span class="icon-box">${icon("instagram")}</span>
            <div>
              <h3>Instagram</h3>
              <p>Acompanhe o dia a dia da escola.</p>
              <div class="row"><a href="${SITE.instagram}" target="_blank" rel="noopener noreferrer">@humanizaeunapolisba</a></div>
            </div>
          </div>
        </div>

        <form class="form reveal reveal-delay-1" id="form-contato" novalidate>
          <h2>Envie sua mensagem</h2>
          <p>Preencha os campos e continue a conversa direto no WhatsApp com a nossa equipe.</p>
          <div class="form-grid">
            <div class="field field--full">
              <label for="nome">Nome completo</label>
              <input id="nome" name="nome" type="text" autocomplete="name" maxlength="80" required>
              <span class="error">Informe seu nome.</span>
            </div>
            <div class="field">
              <label for="telefone">WhatsApp</label>
              <input id="telefone" name="telefone" type="tel" inputmode="numeric" autocomplete="tel" placeholder="(73) 90000-0000" required>
              <span class="error">Informe um telefone válido.</span>
            </div>
            <div class="field">
              <label for="interesse">Tenho interesse em</label>
              <select id="interesse" name="interesse" required>
                <option value="">Selecione…</option>
                <option>Técnico em Enfermagem</option>
                <option>EJA Online</option>
                <option>Curso Profissionalizante (Mecânica / Eletrotécnica)</option>
                <option>Graduação EAD Multivix</option>
                <option>Pós-graduação / MBA Multivix</option>
                <option>Outro assunto</option>
              </select>
              <span class="error">Escolha uma opção.</span>
            </div>
            <div class="field field--full">
              <label for="mensagem">Mensagem (opcional)</label>
              <textarea id="mensagem" name="mensagem" maxlength="600"></textarea>
            </div>
          </div>
          <button class="btn btn--whatsapp btn--block" type="submit">${iconFill("whatsapp")} Enviar pelo WhatsApp</button>
          <p class="form__note">Seus dados não ficam armazenados neste site. Ao enviar, você concorda com a nossa <a class="link-arrow" href="${r}politica-privacidade.html">Política de Privacidade</a>.</p>
        </form>
      </div>
    </section>

    <section class="section section--soft section--tight">
      <div class="container">
        <div class="map reveal">
          <iframe title="Mapa: ${SITE.address}" src="https://www.google.com/maps?q=Av.+Rui+Barbosa,+56,+Centro,+Eun%C3%A1polis,+BA&amp;output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>
        </div>
      </div>
    </section>
`;
