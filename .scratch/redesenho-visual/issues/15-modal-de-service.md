# 15: Modal de Service

**What to build:** O detalhe de um Service passa a parecer parte do mesmo site. Ele herda
a tipografia, o espaçamento, a sombra e o raio do sistema, e os Tiers — hoje um bloco
corrido — viram uma comparação legível de três degraus, com a faixa de preço em destaque
e a faixa de horas ao lado. O Service continua sendo aberto por parâmetro de URL, como a
ADR 0004 decidiu.

**Blocked by:** 01 (sistema tipográfico), 02 (container e tokens).

**Status:** done

- [x] O modal usa a tipografia, o espaçamento, a sombra e o raio do sistema
- [x] Os três Tiers são comparáveis lado a lado, com preço em destaque
- [x] No celular os Tiers empilham sem cortar preço nem horas
- [x] O modal continua abrindo e fechando por parâmetro de URL
- [x] O modal fecha com escape e clique fora, e devolve o foco a quem o abriu
- [x] O foco fica preso dentro do modal enquanto ele está aberto
- [x] A formatação de negrito da descrição continua funcionando
- [x] Nenhum teste existente quebra
