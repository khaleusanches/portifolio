# 01: Sistema tipográfico

**What to build:** O site inteiro passa a falar com duas vozes em vez de três. Libre
Baskerville fica com os títulos — headline do herói, título de seção, headline de Project
e de Service — e uma sans geométrica assume corpo de texto, cards, navegação e botões.
Hoje o H1 do herói tem `font-['Arial']` cravado ao lado de um Baskerville que nenhum
outro elemento usa com intenção, e o resto cai no sans-serif padrão do navegador: três
vozes sem hierarquia. Entra também o rótulo de seção em caixa alta com tracking largo,
que é a camada que hoje falta acima do título.

**Blocked by:** Nada (pode começar imediatamente).

**Status:** ready-for-agent

- [ ] A fonte de corpo é carregada junto com a Baskerville, e as duas têm fallback declarado
- [ ] Nenhum `font-['...']` literal sobra no JSX
- [ ] Título de seção, headline do herói e headline de Project usam Baskerville
- [ ] Corpo de texto, cards, navegação e botões usam a sans
- [ ] Existe um estilo de rótulo de seção (caixa alta, tracking largo) reutilizável
- [ ] A escala de tamanhos é declarada no tema, não repetida a cada componente
- [ ] Os dois temas continuam legíveis, e nenhum teste existente quebra
