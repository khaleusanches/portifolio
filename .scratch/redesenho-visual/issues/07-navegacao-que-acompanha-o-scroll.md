# 07: Navegação que acompanha o scroll

**What to build:** A barra de navegação passa a dizer onde o visitante está. Hoje ela
recebe `active="home"` como literal e nunca muda: percorrer a página inteira deixa "Home"
sublinhado o tempo todo, e os links de Serviços e Sobre nunca acendem. O item ativo passa
a ser derivado da seção visível. A barra também encolhe ao rolar, devolvendo altura à
página — hoje ela ocupa `12vh` fixos o tempo inteiro.

**Blocked by:** 02 (container e tokens).

**Status:** ready-for-agent

- [ ] O item ativo reflete a seção visível, e muda ao rolar
- [ ] Clicar num item leva à seção, e o item correspondente acende
- [ ] A barra encolhe ao rolar e volta ao topo
- [ ] A transição de altura respeita `prefers-reduced-motion`
- [ ] A barra é `<nav>`, e o item ativo é anunciado como tal por leitor de tela
- [ ] Os novos itens de seção da home aparecem na navegação
- [ ] O comportamento é correto no celular
