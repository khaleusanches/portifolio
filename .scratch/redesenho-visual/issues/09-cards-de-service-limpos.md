# 09: Cards de Service limpos

**What to build:** Os cards de Serviços passam a parecer parte do mesmo site. Hoje cada um
tem um `clip-path` que corta dois cantos em chanfro — uma forma que não se repete em lugar
nenhum —, altura fixa em `em` que corta o pitch quando o texto é maior, e um `.img` com
`background: white` cravado que reprova no tema escuro. O contêiner da grade ainda carrega
um `border-2` que sobrou de depuração e desenha uma moldura em volta de tudo.

**Blocked by:** 01 (sistema tipográfico), 02 (container e tokens).

**Status:** done

- [x] O chanfro `clip-path` sai, e o raio é o do sistema
- [x] O `border-2` de depuração some do contêiner da grade
- [x] Os cards de uma linha têm a mesma altura, qualquer que seja o tamanho do texto
- [x] Nenhum pitch é cortado por altura fixa
- [x] Nenhuma cor literal sobra no `styled-components` do card; tudo vem de token
- [x] O fundo do ícone funciona nos dois temas
- [x] O hover do card e o do botão seguem a mesma linguagem do resto do site
- [x] O ícone de cada Service tem `alt`
- [x] O botão continua abrindo o detalhe do Service
