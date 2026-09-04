# 02: A tipografia do site passa a carregar

**What to build:** O Client vê pela primeira vez a serif que o projeto sempre pretendeu.
Hoje a importação de fonte aponta para um host sem caminho de fonte, então nenhuma família
serif chega ao navegador e a home, a página sobre, a de serviços e a de Project todas caem
no fallback do sistema. O uso passa a ser pela utilitária de fonte já configurada e nunca
usada, em vez de família declarada inline nos componentes.

**Blocked by:** Nada (pode começar imediatamente).

**Status:** ready-for-agent

- [ ] A fonte serif carrega de fato e é visível na Headline da página de Project e nos
      títulos da home
- [ ] Os componentes usam a utilitária de fonte configurada, não família declarada inline
- [ ] A família de fonte configurada que nenhum componente usa é removida
- [ ] A classe utilitária inexistente, usada hoje em três componentes, é removida
