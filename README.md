# Portfólio KH Software

Site institucional e vitrine de trabalhos. O vocabulário do domínio está em
[`CONTEXT.md`](CONTEXT.md); as decisões, em `docs/adr` e `docs/specs`.

## Comandos

```bash
npm run dev    # desenvolvimento
npm test       # invariantes do conteúdo e do tema
npm run lint
npm run build  # build + pré-renderização de cada rota
```

## O build tem três passos

`npm run build` encadeia:

1. `vite build` — o bundle do navegador, em `dist`.
2. `vite build --ssr src/entry-prerender.jsx` — o mesmo app compilado para rodar em
   Node, em `dist-ssr`.
3. `node scripts/prerender.js` — renderiza cada rota, escreve um `index.html` por
   página com os metadados no `<head>`, gera `sitemap.xml` e `robots.txt`, e apaga o
   `dist-ssr`.

As rotas saem de `rotas()`, em `src/content/seo.js`, que deriva de `projects.js`. Um
Project novo no conteúdo passa a ter página, metadados e entrada no sitemap sem
nenhuma outra mudança.

`npm run build:spa` faz só o passo 1, sem pré-renderizar. Serve para depurar o bundle.

## `vite preview` não mostra o resultado do build

O preview do Vite tem fallback de SPA: qualquer caminho devolve o `index.html` da
home, então `/project/Launa` mostra a home e a hidratação falha. Não é bug do site —
é o servidor. Para ver o que a Vercel vai servir, use um servidor estático sem
fallback:

```bash
cd dist && python3 -m http.server 5201
# http://localhost:5201/project/Launa/
```

Em produção, o `vercel.json` garante a ordem certa: arquivo estático primeiro,
fallback para `index.html` só quando nenhum existe.

## Coisas que mordem

**`text-base` é uma cor, não um tamanho.** O tema define uma cor chamada `base`
(ADR 0005), e ela vence a colisão com o utilitário de tamanho de fonte do Tailwind.
`hover:text-base` pinta o texto da cor do fundo, e é uso legítimo. Como tamanho,
`text-base` pinta o texto de branco e ele some no tema claro — para corpo de texto,
não escreva classe nenhuma: 1rem já é o padrão.

**A marcação não pode mudar com o tema nem com `prefers-reduced-motion`.** As páginas
são pré-renderizadas em Node, onde não existe nem um nem outro. Uma estrutura
diferente no navegador quebra a hidratação e o React descarta o documento pronto. O
que varia com a preferência é a *duração* (ver `src/theme/movimento.js`); o que varia
com o tema é escolhido por CSS, a partir do `data-theme` que o script do `index.html`
grava antes da primeira pintura.

**Crase dentro de `styled-components`.** Um comentário CSS que cite código com crases
encerra o template literal. Use aspas simples.
