# 14: Página de Project editorial

**What to build:** A página de um Project passa a contar a história dele. O topo traz a
headline, os Marks e a Stack. Cada Capability ocupa uma faixa com a sua Screenshot ao
lado, alternando o lado a cada Capability, e a Caption vira legenda da imagem — dizendo o
que a imagem mostra, sem repetir o título da Capability ao lado. Capability sem Screenshot
ocupa a largura do texto: é estado legítimo do modelo, não falta de imagem.

**Blocked by:** 01 (sistema tipográfico), 02 (container e tokens), 03 (vocabulário de movimento).

**Status:** done

- [x] O topo mostra headline, Marks e Stack do Project
- [x] Cada Capability aparece com a Screenshot que ela reivindica, alternando o lado
- [x] A Caption é apresentada como legenda da imagem
- [x] Capability sem Screenshot ocupa a largura do texto, sem espaço vazio
- [x] Screenshot que nenhuma Capability reivindicou continua aparecendo
- [x] A ampliação de Screenshot continua funcionando, com escape e clique fora
- [x] Cada Screenshot usa a Caption como `alt`
- [x] A ausência de Live Demo não gera espaço nem explicação na página
- [x] As faixas entram com `Reveal` ao rolar
- [x] Todos os Projects continuam renderizando, e nenhum teste existente quebra
