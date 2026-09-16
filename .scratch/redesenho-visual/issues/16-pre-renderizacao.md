# 16: Pré-renderização no build

**What to build:** O robô de busca passa a receber a página pronta. Hoje o site é uma SPA
Vite: o HTML servido é a casca do `index.html`, e as páginas de Project não existem como
documento nenhum — só como rota de JavaScript. O build passa a gerar HTML real para `/` e
para cada `/project/<slug>`, com o conteúdo e os metadados do ticket 05 já dentro do
documento. As rotas saem de `projects.js`: uma lista escrita à mão sairia do ar no dia em
que um Project novo entrasse.

O site é servido estático pela Vercel, então o `dist` pré-renderizado é exatamente o que
ela publica — não é preciso mudar hospedagem.

**Blocked by:** 05 (metadados por rota).

**Status:** done

- [x] `npm run build` gera um HTML por rota, incluindo uma por Project
- [x] A lista de rotas deriva de `projects.js`, sem lista paralela
- [x] O HTML gerado de um Project contém a headline e o texto da página, legíveis sem JavaScript
- [x] Cada HTML traz seu `title`, `description`, `canonical` e Open Graph corretos
- [x] O JSON-LD de `Organization` está no HTML da home
- [x] A página continua funcionando normalmente ao ser carregada e navegada no navegador
- [x] Um Project novo no conteúdo passa a gerar HTML sem nenhuma outra mudança
