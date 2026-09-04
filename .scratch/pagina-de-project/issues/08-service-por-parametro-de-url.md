# 08: Service acessado por parâmetro de URL

**What to build:** Abrir a home com o parâmetro de um Service abre a home já com o modal
daquele Service aberto, mostrando descrição e Tiers com faixa de preço. É o destino que a
Evidence do Project vai usar no ticket 12. Slug desconhecido não abre modal nenhum, em vez
de abrir o Service errado.

Criar rota própria para Service é a resposta arquiteturalmente correta e foi rejeitada
deliberadamente: transformar Service em rota é decisão de estrutura do site, com
consequência sobre a home, e não cabe dentro de melhorar a página de Project. Fica
registrada como aberta no ADR 0004.

**Blocked by:** 01 (a busca de Service precisa devolver ausência antes, porque o parâmetro
de URL é justamente por onde um slug inválido chega vindo do Client).

**Status:** done

- [x] A home aberta com o parâmetro de um Service abre com o modal daquele Service
- [x] A home aberta sem parâmetro se comporta exatamente como hoje
- [x] Um slug de Service desconhecido no parâmetro não abre modal e não quebra a home
- [x] O ADR 0004 é escrito, registrando a rejeição da rota própria como decisão aberta
