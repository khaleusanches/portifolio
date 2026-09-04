# 03: Transição de página curta, com fade

**What to build:** Clicar num card da vitrine leva o Client à página de Project em ~300ms
com fade, em vez de um segundo inteiro de slide que nunca altera opacidade e quica na
parada. É a primeira coisa que o Client sente da página, e hoje é longa o bastante para
parecer travamento. A direção do slide fica como está — hoje é fixa, então voltar desliza
para o mesmo lado que avançar, e a 300ms com fade isso é imperceptível.

**Blocked by:** Nada (pode começar imediatamente).

**Status:** ready-for-agent

- [ ] A transição entre rotas dura ~300ms
- [ ] A transição altera opacidade, não só posição
- [ ] A dependência de animação passa a estar declarada nas dependências do projeto, e não
      só presente como transitiva
- [ ] Uma instalação limpa das dependências continua rodando a aplicação
