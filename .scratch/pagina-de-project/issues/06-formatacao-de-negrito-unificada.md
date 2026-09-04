# 06: Formatação de negrito unificada no acento da marca

**What to build:** O mesmo negrito passa a ter a mesma cor onde quer que apareça. Hoje
existem duas implementações divergentes da mesma função de formatação: a do modal de
Service renderiza o negrito no laranja da marca, a da página de Project renderiza em
branco. É o padrão que o ADR 0001 identificou no conteúdo, reaparecendo na apresentação.
Prefactor: a corrente do ticket 09 consome esta formatação.

**Blocked by:** Nada (pode começar imediatamente).

**Status:** ready-for-agent

- [ ] Existe uma única implementação da formatação de negrito, compartilhada
- [ ] O negrito é renderizado no laranja da marca na página de Project e no modal de
      Service
- [ ] O nome de contratante em destaque no texto de um Project continua visível como
      destaque — é a prova social mais forte da página
- [ ] As duas cópias divergentes deixam de existir
