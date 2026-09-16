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

Em produção não há fallback de SPA, e isso é de propósito: todas as páginas publicadas
existem como arquivo, e um endereço que não existe deve devolver **404 de verdade**. A
Vercel serve o `dist/404.html` gerado pelo build. Servir a home com status 200 em
qualquer endereço errado cria soft-404, e o buscador despreza o site que faz isso.

`trailingSlash: false` evita que a mesma página responda em dois endereços.

## Coisas que mordem

**`text-base` é uma cor, não um tamanho.** O tema define uma cor chamada `base`
(ADR 0005), e ela vence a colisão com o utilitário de tamanho de fonte do Tailwind.
`hover:text-base` pinta o texto da cor do fundo, e é uso legítimo. Como tamanho,
`text-base` pinta o texto de branco e ele some no tema claro — para corpo de texto,
não escreva classe nenhuma: 1rem já é o padrão.

**A marcação não pode variar com nada que só exista no navegador.** As páginas são
pré-renderizadas em Node: uma estrutura diferente no cliente quebra a hidratação e o
React descarta o documento pronto. O tema é resolvido por CSS, a partir do `data-theme`
que o script do `index.html` grava antes da primeira pintura — nunca por um ramo em
JavaScript.

**O site não consulta `prefers-reduced-motion`.** É decisão explícita da Brand, contra a
prática usual; ver spec 0003, "O movimento não se reduz". Não reintroduza a consulta sem
falar com ela.

**Crase dentro de `styled-components`.** Um comentário CSS que cite código com crases
encerra o template literal. Use aspas simples.
