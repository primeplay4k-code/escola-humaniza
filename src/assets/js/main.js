/* ==========================================================================
   Escola Técnica Humaniza — Scripts
   ========================================================================== */
(function () {
  "use strict";

  document.documentElement.classList.remove("no-js");

  /* ---------- Ícones (sprite SVG injetado; funciona também via file://) ---------- */
  var ICONS = {
    check: '<path d="M20 6 9 17l-5-5"/>',
    "chevron-down": '<path d="m6 9 6 6 6-6"/>',
    "arrow-right": '<path d="M5 12h14M12 5l7 7-7 7"/>',
    "arrow-up": '<path d="m18 15-6-6-6 6"/>',
    menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
    x: '<path d="M18 6 6 18M6 6l12 12"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>',
    mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>',
    "map-pin": '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
    clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
    calendar: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
    instagram: '<rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/>',
    "graduation-cap": '<path d="M22 10 12 5 2 10l10 5 10-5Z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>',
    stethoscope: '<path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6 6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"/><path d="M8 15v1a6 6 0 0 0 6 6 6 6 0 0 0 6-6v-4"/><circle cx="20" cy="10" r="2"/>',
    award: '<circle cx="12" cy="8" r="6"/><path d="M15.48 12.89 17 22l-5-3-5 3 1.52-9.11"/>',
    "shield-check": '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>',
    users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
    user: '<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
    heart: '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>',
    monitor: '<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>',
    school: '<path d="M14 22v-4a2 2 0 1 0-4 0v4"/><path d="m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2"/><path d="M18 5v17M6 5v17"/><path d="m4 6 8-4 8 4"/><circle cx="12" cy="9" r="2"/>',
    "book-open": '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>',
    wrench: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',
    zap: '<path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/>',
    "file-text": '<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/>',
    download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5M12 15V3"/>',
    eye: '<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>',
    target: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
    gem: '<path d="M6 3h12l4 6-10 13L2 9Z"/><path d="M11 3 8 9l4 13 4-13-3-6M2 9h20"/>',
    flask: '<path d="M9 3h6M10 3v6L4.5 19a2 2 0 0 0 1.7 3h11.6a2 2 0 0 0 1.7-3L14 9V3"/><path d="M7 16h10"/>',
    briefcase: '<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
    lock: '<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
    external: '<path d="M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>',
    send: '<path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>',
    percent: '<path d="M19 5 5 19"/><circle cx="6.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/>',
    lightbulb: '<path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5M9 18h6M10 22h4"/>',
    rocket: '<path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>',
    scale: '<path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1ZM2 16l3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="M7 21h10M12 3v18M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/>',
    accessibility: '<circle cx="16" cy="4" r="1"/><path d="m18 19 1-7-6 1M5 8l3-3 5.5 3-2.36 3.5M4.24 14.5a5 5 0 0 0 6.88 6M13.76 17.5a5 5 0 0 0-6.88-6"/>',
    share: '<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.59 13.51 6.83 3.98M15.41 6.51l-6.83 3.98"/>',
    qr: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><path d="M14 14h3v3h-3zM21 14v.01M14 21h.01M17 21h4v-3"/>',
    home: '<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/>',
    whatsapp: '<path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35M12.05 21.8h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.89-9.88 2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.89 6.99c0 5.45-4.44 9.88-9.88 9.88m8.41-18.3A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.89 0-3.18-1.24-6.16-3.48-8.41Z"/>',
    quote: '<path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>',
    star: '<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>'
  };

  var sprite = '<svg xmlns="http://www.w3.org/2000/svg" class="icon-sprite" aria-hidden="true">';
  Object.keys(ICONS).forEach(function (name) {
    sprite += '<symbol id="i-' + name + '" viewBox="0 0 24 24">' + ICONS[name] + "</symbol>";
  });
  sprite += "</svg>";
  document.body.insertAdjacentHTML("afterbegin", sprite);

  /* ---------- Header: sombra ao rolar + botão voltar ao topo ---------- */
  var header = document.querySelector(".header");
  var toTop = document.querySelector(".to-top");
  function onScroll() {
    var y = window.scrollY;
    if (header) header.classList.toggle("is-scrolled", y > 10);
    if (toTop) toTop.classList.toggle("is-visible", y > 600);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  if (toTop) {
    toTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* ---------- Menu mobile ---------- */
  var toggle = document.querySelector(".menu-toggle");
  function closeNav() {
    document.body.classList.remove("nav-open");
    if (toggle) toggle.setAttribute("aria-expanded", "false");
  }
  if (toggle) {
    toggle.addEventListener("click", function () {
      if (header) document.documentElement.style.setProperty("--nav-top", header.getBoundingClientRect().bottom + "px");
      var open = document.body.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", String(open));
    });
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeNav();
      document.querySelectorAll(".nav__item--drop.is-open").forEach(function (el) {
        el.classList.remove("is-open");
      });
    }
  });
  window.addEventListener("resize", function () {
    if (window.innerWidth > 960) closeNav();
  });

  /* ---------- Dropdown (clique no mobile / teclado) ---------- */
  document.querySelectorAll(".nav__item--drop > .nav__link").forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      if (btn.tagName === "BUTTON" || window.innerWidth <= 960) {
        e.preventDefault();
        var item = btn.parentElement;
        var open = item.classList.toggle("is-open");
        btn.setAttribute("aria-expanded", String(open));
      }
    });
  });
  document.addEventListener("click", function (e) {
    if (window.innerWidth > 960 && !e.target.closest(".nav__item--drop")) {
      document.querySelectorAll(".nav__item--drop.is-open").forEach(function (el) {
        el.classList.remove("is-open");
      });
    }
  });

  /* ---------- FAQ: mantém apenas um item aberto ---------- */
  document.querySelectorAll(".faq").forEach(function (faq) {
    faq.addEventListener("toggle", function (e) {
      if (!e.target.open) return;
      faq.querySelectorAll("details[open]").forEach(function (d) {
        if (d !== e.target) d.open = false;
      });
    }, true);
  });

  /* ---------- Animações de entrada ---------- */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* ---------- Marquee de parceiros: duplica a faixa para loop contínuo ---------- */
  document.querySelectorAll(".marquee__track").forEach(function (track) {
    Array.prototype.slice.call(track.children).forEach(function (node) {
      var clone = node.cloneNode(true);
      clone.setAttribute("aria-hidden", "true");
      clone.alt = "";
      track.appendChild(clone);
    });
  });

  /* ---------- Filtro de categorias do blog ---------- */
  var list = document.querySelector("[data-filter-list]");
  if (list) {
    var empty = document.querySelector(".empty-state");
    document.querySelectorAll("[data-filter]").forEach(function (chip) {
      chip.addEventListener("click", function () {
        var cat = chip.getAttribute("data-filter");
        var shown = 0;
        document.querySelectorAll("[data-filter]").forEach(function (c) { c.classList.toggle("is-active", c === chip); });
        list.querySelectorAll("[data-category]").forEach(function (card) {
          var match = !cat || card.getAttribute("data-category") === cat;
          card.hidden = !match;
          if (match) shown++;
        });
        if (empty) empty.hidden = shown > 0;
      });
    });
  }

  /* ---------- Ano atual no rodapé ---------- */
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  /* ---------- Compartilhar (posts do blog) ---------- */
  document.querySelectorAll("[data-share]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var data = { title: document.title, url: location.href };
      if (navigator.share) {
        navigator.share(data).catch(function () {});
      } else if (navigator.clipboard) {
        navigator.clipboard.writeText(location.href).then(function () {
          var label = btn.querySelector("span");
          if (!label) return;
          var original = label.textContent;
          label.textContent = "Link copiado!";
          setTimeout(function () { label.textContent = original; }, 2000);
        });
      }
    });
  });

  /* ---------- Proteção de conteúdo (dificulta cópia casual) ----------
     Observação: nenhum código entregue ao navegador pode ser 100% oculto.
     Estas medidas desencorajam cópia por usuários comuns; a segurança real
     está nos cabeçalhos HTTP (.htaccess / vercel.json / _headers).

     Liberação para o administrador: abrir o site com #liberar=<chave> libera
     F12, botão direito e seleção neste navegador; #bloquear volta a bloquear.
     Só o hash SHA-256 da chave fica no código. */
  var DEV_HASH = "8dd3328d01436bd74be4c8bc167a5fbed9211427763f8da74419fd13b13e1353";
  var DEV_KEY = "hz-dev";
  var unlocked = false;

  function storage(fn) {
    try { return fn(window.localStorage); } catch (err) { return null; }
  }
  function sha256(text) {
    if (!window.crypto || !crypto.subtle || !window.TextEncoder) return Promise.resolve("");
    return crypto.subtle.digest("SHA-256", new TextEncoder().encode(text)).then(function (buf) {
      return Array.prototype.map.call(new Uint8Array(buf), function (b) { return ("0" + b.toString(16)).slice(-2); }).join("");
    });
  }
  function checkDevAccess() {
    var hash = location.hash;
    if (hash === "#bloquear") {
      storage(function (s) { s.removeItem(DEV_KEY); });
      history.replaceState(null, "", location.pathname + location.search);
    }
    var fromUrl = hash.indexOf("#liberar=") === 0 ? decodeURIComponent(hash.slice(9)) : "";
    var candidate = fromUrl || storage(function (s) { return s.getItem(DEV_KEY); }) || "";
    if (!candidate) return;
    sha256(candidate).then(function (h) {
      if (h !== DEV_HASH) {
        if (!fromUrl) storage(function (s) { s.removeItem(DEV_KEY); });
        return;
      }
      unlocked = true;
      document.documentElement.classList.add("dev-unlocked");
      if (fromUrl) {
        storage(function (s) { s.setItem(DEV_KEY, candidate); });
        history.replaceState(null, "", location.pathname + location.search);
      }
    });
  }
  checkDevAccess();
  window.addEventListener("hashchange", function () {
    if (location.hash === "#bloquear") { unlocked = false; document.documentElement.classList.remove("dev-unlocked"); }
    checkDevAccess();
  });

  var editable = function (el) {
    return el && el.closest && el.closest("input, textarea, select, [contenteditable]");
  };
  document.addEventListener("contextmenu", function (e) {
    if (!unlocked && !editable(e.target)) e.preventDefault();
  });
  document.addEventListener("dragstart", function (e) {
    if (!unlocked && (e.target.tagName === "IMG" || e.target.tagName === "A")) e.preventDefault();
  });
  document.addEventListener("copy", function (e) {
    if (unlocked || editable(e.target)) return;
    var sel = String(window.getSelection());
    if (sel.length > 120 && e.clipboardData) {
      e.preventDefault();
      e.clipboardData.setData("text/plain", sel.slice(0, 120) + "…\n\nFonte: Escola Técnica Humaniza — " + location.href);
    }
  });
  document.addEventListener("selectstart", function (e) {
    if (!unlocked && !editable(e.target)) e.preventDefault();
  });
  document.addEventListener("keydown", function (e) {
    if (unlocked) return;
    var k = (e.key || "").toLowerCase();
    var ctrl = e.ctrlKey || e.metaKey;
    var blocked =
      k === "f12" || e.keyCode === 123 ||
      (ctrl && (k === "u" || k === "s" || k === "p" || (k === "a" && !editable(e.target)))) ||
      (ctrl && e.shiftKey && "ijcekm".indexOf(k) > -1) ||
      (e.metaKey && e.altKey && "ijcu".indexOf(k) > -1);
    if (blocked) {
      e.preventDefault();
      e.stopPropagation();
    }
  }, true);

  /* Se as Ferramentas do desenvolvedor forem abertas (pelo menu do navegador),
     a página é apagada para que o código não possa ser inspecionado. */
  var locked = false;
  function lockPage() {
    if (locked || unlocked) return;
    locked = true;
    document.title = "Conteúdo protegido";
    document.body.className = "is-locked";
    document.body.innerHTML =
      '<div class="locked"><div><h1>Conteúdo protegido</h1>' +
      "<p>Feche as ferramentas do desenvolvedor para continuar navegando.</p>" +
      '<a href="' + location.href.replace(/"/g, "") + '">Recarregar a página</a></div></div>';
  }
  setInterval(function () {
    if (unlocked) return;
    var t = performance.now();
    debugger; // eslint-disable-line no-debugger
    if (performance.now() - t > 100) lockPage();
  }, 1000);

  /* Impede que o site seja carregado dentro de outro site (reforço ao frame-ancestors) */
  if (window.top !== window.self) {
    try { window.top.location = window.self.location; } catch (err) { document.body.innerHTML = ""; }
  }

  /* ---------- Formulário de contato → WhatsApp ---------- */
  var PHONES = { geral: "5573988699253", multivix: "5573999042342" };
  var form = document.querySelector("#form-contato");
  if (form) {
    var tel = form.querySelector("#telefone");
    tel.addEventListener("input", function () {
      var d = tel.value.replace(/\D/g, "").slice(0, 11);
      var out = d;
      if (d.length > 2) out = "(" + d.slice(0, 2) + ") " + d.slice(2);
      if (d.length > 7) out = "(" + d.slice(0, 2) + ") " + d.slice(2, 7) + "-" + d.slice(7);
      tel.value = out;
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var ok = true;
      form.querySelectorAll("[required]").forEach(function (input) {
        var field = input.closest(".field");
        var valid = input.value.trim() !== "";
        if (input.id === "telefone") valid = input.value.replace(/\D/g, "").length >= 10;
        field.classList.toggle("has-error", !valid);
        if (!valid && ok) { input.focus(); ok = false; }
      });
      if (!ok) return;

      var nome = form.nome.value.trim();
      var interesse = form.interesse.value;
      var msg = form.mensagem.value.trim();
      var texto = "Olá! Meu nome é " + nome + ".\n" +
        "Tenho interesse em: " + interesse + ".\n" +
        "Telefone: " + form.telefone.value +
        (msg ? "\n\n" + msg : "");
      var phone = /Multivix/i.test(interesse) ? PHONES.multivix : PHONES.geral;
      window.open("https://wa.me/" + phone + "?text=" + encodeURIComponent(texto), "_blank", "noopener");
    });

    form.querySelectorAll("input, select, textarea").forEach(function (input) {
      input.addEventListener("input", function () {
        input.closest(".field").classList.remove("has-error");
      });
    });
  }
})();
