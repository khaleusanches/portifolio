# 17: sitemap.xml e robots.txt

**What to build:** O buscador passa a saber o que existe no site e o que pode rastrear.
Nascem `sitemap.xml` e `robots.txt`, gerados no build a partir da mesma lista de rotas que
a pré-renderização usa — se as duas divergirem, o sitemap aponta para página que não
existe. As URLs são absolutas sobre a origem canônica `https://khsoftwares.vercel.app`,
porque sitemap não aceita caminho relativo.

**Blocked by:** 16 (pré-renderização no build).

**Status:** ready-for-agent

- [ ] `npm run build` gera `sitemap.xml` e `robots.txt` no `dist`
- [ ] O sitemap lista a home e todas as páginas de Project, com URL absoluta
- [ ] As rotas do sitemap são exatamente as rotas pré-renderizadas, da mesma fonte
- [ ] O `robots.txt` libera o rastreamento e aponta para o sitemap
- [ ] A origem canônica vem da mesma constante do ticket 05
- [ ] Um Project novo no conteúdo entra no sitemap sem nenhuma outra mudança
