# 14: Migração — ERP web e landing page institucional

**What to build:** As duas últimas páginas com estrutura na prosa passam à corrente.
Capabilities declaradas, Slugs, Captions reescritas, blocos de tecnologia recortados.

O ERP web é o caso extremo do lado das capacidades: seis capacidades e duas telas, então
quatro Capabilities ficam sem tela associada. **Precisa de decisão do dono do conteúdo:** a
prosa de tecnologia dele nomeia Java no backend e o Stack estruturado do mesmo Project lista
C#. Essa divergência é a evidência do ADR 0003, e ao recortar a prosa alguém precisa dizer
qual está certo — é fato que só quem construiu o sistema sabe.

**Blocked by:** 09 (precisa do modelo e da corrente).

**Status:** ready-for-agent

- [ ] Os dois Projects têm Capabilities declaradas, com título e texto em campos próprios
- [ ] Toda Screenshot dos dois tem Slug e Caption reescrita
- [ ] As quatro Capabilities do ERP web sem tela associada renderizam sem espaço vazio
      estranho
- [ ] A divergência C# / Java do ERP web é resolvida pelo dono do conteúdo e o Stack passa a
      refletir a resposta
- [ ] Os blocos de tecnologia em prosa saem das duas Descriptions
- [ ] Os testes de invariante continuam passando
