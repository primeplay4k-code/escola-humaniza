// Modelo de post: o build gera blog/<slug>.html para cada post publicado no painel.
import { dataBr } from "../blog.mjs";

export const paginas = (c) =>
  c.posts.map((p) => ({
    arquivo: `blog/${p.slug}.html`,
    meta: { path: `blog/${p.slug}.html`, nav: "blog", title: p.titulo, description: p.resumo, image: p.imagem && /^https:/.test(p.imagem) ? p.imagem : p.imagem?.replace(/^\/assets\/img\//, "") },
    dados: p,
  }));

export default ({ icon, iconFill, wa, esc, arq, rico, SITE, r }, p) => `
    <section class="page-hero">
      <div class="container">
        <ol class="breadcrumb"><li><a href="${r}index.html">Início</a></li><li><a href="${r}blog.html">Blog</a></li><li aria-current="page">${esc(p.titulo)}</li></ol>
        <span class="tag tag--accent">${esc(p.categoria)}</span>
        <h1>${esc(p.titulo)}</h1>
        <div class="post-meta post-meta--light"><span>${icon("user")} ${esc(p.autor)}</span><span>${icon("calendar")} ${dataBr(p.data)}</span></div>
      </div>
    </section>

    <section class="section">
      <article class="container article">
        ${p.imagem ? `<figure class="article__cover"><img src="${arq(p.imagem, r)}" alt="${esc(p.titulo)}"></figure>` : ""}
        ${rico(p.conteudo)}
        ${/multivix/i.test(p.categoria + p.titulo) ? `<p><a class="btn btn--primary" href="${wa(SITE.phone2, "Quero estudar na Multivix.")}" target="_blank" rel="noopener noreferrer">${iconFill("whatsapp")} Quero estudar na Multivix</a></p>` : ""}
        <div class="article__share">
          <a class="link-arrow" href="${r}blog.html">← Voltar ao blog</a>
          <button class="btn btn--outline btn--sm" type="button" data-share>${icon("share")} <span>Compartilhar</span></button>
        </div>
      </article>
    </section>
`;
