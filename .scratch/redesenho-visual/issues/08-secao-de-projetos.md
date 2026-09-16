# 08: Seção de Projetos

**What to build:** O Client passa a poder ver todos os trabalhos de uma vez. Hoje o único
jeito de chegar a um Project é esperar a vitrine passar por ele — e a vitrine mostra só
os `Featured`, que são curadoria e não a lista completa. Nasce uma seção com a grade de
todos os Projects, cada card levando à página de detalhe, entrando em cascata ao rolar.

`Featured` continua governando só a vitrine: é o que ele define no modelo, e a grade
nova não o consulta.

**Blocked by:** 02 (container e tokens), 03 (vocabulário de movimento).

**Status:** ready-for-agent

- [ ] A grade mostra todos os Projects, não só os `Featured`
- [ ] Cada card leva à página do Project correspondente
- [ ] Os cards entram em cascata ao chegar na viewport
- [ ] A grade reflui para uma coluna no celular
- [ ] A capa de cada Project tem `alt` descritivo, e as dimensões declaradas para não pular o layout
- [ ] A seção é `<section>` com título acessível
- [ ] O card é navegável por teclado e acionável por Enter
- [ ] Um teste garante que a grade não perde nenhum Project do conteúdo
