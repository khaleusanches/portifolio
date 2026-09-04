# 13: Migração — painel administrativo e ERP de loja de tintas

**What to build:** Mais duas páginas de Project passam à corrente. Capabilities declaradas
a partir da estrutura que já existia na prosa, Slugs de Screenshot, Captions reescritas para
descrever o que a imagem mostra, e os blocos de tecnologia em prosa recortados — o Stack
estruturado passa a ser a única fonte sobre tecnologia.

Os dois são os casos opostos que justificam a referência opcional do ADR 0002: o painel
administrativo tem mais telas que capacidades, e portanto blocos só-imagem na corrente; o
ERP de loja de tintas tem mais capacidades que telas, e portanto Capabilities sem tela
associada.

**Blocked by:** 09 (precisa do modelo e da corrente).

**Status:** done

- [x] Os dois Projects têm Capabilities declaradas, com título e texto em campos próprios
- [x] Toda Screenshot dos dois tem Slug e Caption reescrita
- [x] As telas não reivindicadas aparecem como blocos só-imagem em largura cheia
- [x] As Capabilities sem tela associada renderizam corretamente, sem espaço vazio estranho
- [x] Os blocos de tecnologia em prosa saem das duas Descriptions
- [x] A Description de cada um fica reduzida ao parágrafo de abertura
- [x] Os testes de invariante continuam passando
