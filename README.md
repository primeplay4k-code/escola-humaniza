# Escola Técnica Humaniza — Site institucional

Site estático (HTML + CSS + JS puro), rápido, responsivo e com segurança reforçada.
Substitui o WordPress em https://escolahumaniza.com.

## Estrutura

```
Site Escola/
├── src/                      ← CÓDIGO-FONTE (edite aqui)
│   ├── layout.mjs            ← cabeçalho, rodapé, menu e dados de contato (SITE)
│   ├── pages/                ← uma página por arquivo
│   │   ├── index.mjs  sobre.mjs  cursos.mjs  documentos.mjs  blog.mjs  contato.mjs
│   │   ├── politica-privacidade.mjs  termos.mjs  404.mjs
│   │   └── blog/             ← posts do blog
│   ├── assets/
│   │   ├── css/style.css     ← todo o visual (cores em :root)
│   │   ├── js/main.js        ← menu, animações, formulário, proteções
│   │   ├── img/              ← logos, fotos, parceiros, cursos
│   │   └── docs/             ← PDFs (edital, matriz curricular)
│   └── public/               ← copiados para a raiz do site publicado
│       ├── .htaccess         ← segurança p/ Apache (Hostinger, cPanel)
│       ├── _headers          ← segurança p/ Netlify / Cloudflare Pages
│       ├── vercel.json       ← segurança p/ Vercel
│       ├── site.webmanifest
│       └── .well-known/security.txt
├── tools/
│   ├── build.mjs             ← gera dist/
│   └── serve.mjs             ← servidor local de teste
├── dist/                     ← SITE PRONTO PARA PUBLICAR (gerado, não editar)
└── package.json
```

## Comandos

```bash
npm install        # uma vez
npm run build      # gera dist/ protegido (HTML/CSS minificados, JS ofuscado)
npm run dev        # gera dist/ legível (para desenvolver)
npm run preview    # abre http://localhost:8080 com os cabeçalhos de segurança
```

## Como publicar

Envie **o conteúdo da pasta `dist/`** (inclusive os arquivos ocultos `.htaccess` e `.well-known/`)
para a raiz do servidor (`public_html/` na Hostinger/cPanel). Na Vercel/Netlify, aponte o diretório
de publicação para `dist`. Os redirecionamentos das URLs antigas do WordPress já estão configurados.

## Tarefas comuns

- **Telefones / e-mails / endereço:** `src/layout.mjs` → objeto `SITE`.
- **Novo edital/documento:** coloque o PDF em `src/assets/docs/` e adicione na lista `docs` em `src/pages/documentos.mjs`.
- **Novo post:** copie um arquivo de `src/pages/blog/`, edite e adicione-o na lista `posts` de `src/pages/blog.mjs`.
- **Cores:** variáveis `--c-primary` e `--c-accent` no início de `style.css`.

Depois de qualquer alteração: `npm run build` e publique `dist/` novamente.

## Segurança

**Proteção real (servidor):**
- Site estático: sem PHP, banco de dados ou painel admin — elimina as falhas típicas de WordPress (invasão, plugins vulneráveis, alteração de conteúdo).
- Content-Security-Policy: só executa scripts do próprio domínio; bloqueia injeção de código.
- `frame-ancestors 'none'` + `X-Frame-Options: DENY`: ninguém pode embutir o site em outra página (clickjacking).
- HSTS (HTTPS obrigatório), `nosniff`, Referrer-Policy, Permissions-Policy, COOP/CORP.
- `.htaccess`: força HTTPS, bloqueia listagem de pastas, arquivos ocultos, sondagens de WordPress/PHP, métodos diferentes de GET/HEAD e hotlink de imagens/PDFs.
- Links externos com `rel="noopener noreferrer"`; formulário não armazena dados (vai direto ao WhatsApp).

**Esconder o código (navegador):**
- Clique direito, seleção de texto, arrastar imagens, F12, Ctrl+U/S/P/A e Ctrl+Shift+I/J/C/E/K/M bloqueados;
- Se as Ferramentas do desenvolvedor forem abertas pelo menu do navegador, a página trava/é apagada e mostra "Conteúdo protegido";
- JavaScript ofuscado (com autodefesa e anti-depuração) e HTML/CSS minificados no `dist/`.

> Dica: exclua a pasta `dist/` da sincronização do TeraBox/OneDrive — eles travam arquivos durante o `npm run build`.

> ⚠️ Importante: nenhum site da internet consegue esconder 100% o seu código — o navegador precisa
> recebê-lo para exibir a página. As medidas acima afastam a cópia casual; a proteção jurídica vem
> da Lei 9.610/98 (citada no rodapé e nos Termos de Uso).

## Pendências recomendadas

- Revisar os textos de **Política de Privacidade** e **Termos de Uso** com o jurídico.
- Conferir a frase do depoimento da Ana Letícia (o site antigo só tinha um trecho).
- Enviar fotos reais do laboratório e das turmas para enriquecer as páginas.
- Depois de publicar, testar em https://securityheaders.com e https://pagespeed.web.dev.
