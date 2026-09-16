# 15: Modal de Service

**What to build:** O detalhe de um Service passa a parecer parte do mesmo site. Ele herda
a tipografia, o espaçamento, a sombra e o raio do sistema, e os Tiers — hoje um bloco
corrido — viram uma comparação legível de três degraus, com a faixa de preço em destaque
e a faixa de horas ao lado. O Service continua sendo aberto por parâmetro de URL, como a
ADR 0004 decidiu.

**Blocked by:** 01 (sistema tipográfico), 02 (container e tokens).

**Status:** ready-for-agent

- [ ] O modal usa a tipografia, o espaçamento, a sombra e o raio do sistema
- [ ] Os três Tiers são comparáveis lado a lado, com preço em destaque
- [ ] No celular os Tiers empilham sem cortar preço nem horas
- [ ] O modal continua abrindo e fechando por parâmetro de URL
- [ ] O modal fecha com escape e clique fora, e devolve o foco a quem o abriu
- [ ] O foco fica preso dentro do modal enquanto ele está aberto
- [ ] A formatação de negrito da descrição continua funcionando
- [ ] Nenhum teste existente quebra
