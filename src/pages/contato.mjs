export const meta = {
  path: "contato.html",
  nav: "contato",
  title: "Contato",
  description: "Fale com a Escola Técnica Humaniza: WhatsApp (73) 98869-9253, e-mail e endereço na Av. Rui Barbosa, 56, Centro, Eunápolis-BA.",
};

export default ({ icon, iconFill, wa, esc, SITE, c, r, painel }) => {
  const g = c.geral;
  const extra = (email) => email.replace(/@.*$/, "@escolahumaniza.com");
  const opcoes = [...new Set([...c.cursos.map((cu) => cu.nome), "Outro assunto"])];
  return `
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
              <h3>${esc(g.contato1Nome)}</h3>
              <p>${esc(g.contato1Area)}</p>
              <div class="row">
                <a href="${wa(SITE.phone1)}" target="_blank" rel="noopener noreferrer">${SITE.phone1Label}</a>
                <a href="mailto:${esc(SITE.email1)}">${esc(SITE.email1)}</a>
                ${/@ebiqs.com$/.test(SITE.email1) ? `<a href="mailto:${esc(extra(SITE.email1))}">${esc(extra(SITE.email1))}</a>` : ""}
              </div>
            </div>
          </div>
          <div class="contact-card">
            <span class="icon-box">${icon("graduation-cap")}</span>
            <div>
              <h3>${esc(g.contato2Nome)}</h3>
              <p>${esc(g.contato2Area)}</p>
              <div class="row">
                <a href="${wa(SITE.phone2)}" target="_blank" rel="noopener noreferrer">${SITE.phone2Label}</a>
                <a href="mailto:${esc(SITE.email2)}">${esc(SITE.email2)}</a>
                ${/@ebiqs.com$/.test(SITE.email2) ? `<a href="mailto:${esc(extra(SITE.email2))}">${esc(extra(SITE.email2))}</a>` : ""}
              </div>
            </div>
          </div>
          <div class="contact-card">
            <span class="icon-box">${icon("map-pin")}</span>
            <div>
              <h3>Endereço</h3>
              <p>${esc(SITE.address)}</p>
            </div>
          </div>
          <div class="contact-card">
            <span class="icon-box">${icon("file-text")}</span>
            <div>
              <h3>Inscrição de matrícula</h3>
              <p>Prefere um formulário? Preencha a ficha de inscrição online.</p>
              <div class="row"><a href="${esc(SITE.forms)}" target="_blank" rel="noopener noreferrer">Abrir formulário ${icon("external")}</a></div>
            </div>
          </div>
          <div class="contact-card">
            <span class="icon-box">${icon("instagram")}</span>
            <div>
              <h3>Instagram</h3>
              <p>Acompanhe o dia a dia da escola.</p>
              <div class="row"><a href="${esc(SITE.instagram)}" target="_blank" rel="noopener noreferrer">@${esc(SITE.instagram.replace(/\/+$/, "").split("/").pop())}</a></div>
            </div>
          </div>
        </div>

        <form class="form reveal reveal-delay-1" id="form-contato" novalidate data-endpoint="${esc(painel)}/api/public/inscricoes" data-fone1="${SITE.phone1}" data-fone2="${SITE.phone2}">
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
                ${opcoes.map((o) => `<option data-fone="${esc((c.cursos.find((cu) => cu.nome === o)?.whatsapp) || SITE.phone1)}">${esc(o)}</option>`).join("\n                ")}
              </select>
              <span class="error">Escolha uma opção.</span>
            </div>
            <div class="field field--full">
              <label for="mensagem">Mensagem (opcional)</label>
              <textarea id="mensagem" name="mensagem" maxlength="600"></textarea>
            </div>
            <div class="field field--hp" aria-hidden="true">
              <label for="site">Não preencha este campo</label>
              <input id="site" name="site" type="text" tabindex="-1" autocomplete="off">
            </div>
          </div>
          <button class="btn btn--whatsapp btn--block" type="submit">${iconFill("whatsapp")} Enviar pelo WhatsApp</button>
          <p class="form__note">Seus dados são usados apenas para a equipe da escola entrar em contato. Ao enviar, você concorda com a nossa <a class="link-arrow" href="${r}politica-privacidade.html">Política de Privacidade</a>.</p>
        </form>
      </div>
    </section>

    <section class="section section--soft section--tight">
      <div class="container">
        <div class="map reveal">
          <iframe title="Mapa: ${esc(SITE.address)}" src="https://www.google.com/maps?q=${encodeURIComponent(SITE.address.replace("—", ","))}&amp;output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>
        </div>
      </div>
    </section>
`;
};
