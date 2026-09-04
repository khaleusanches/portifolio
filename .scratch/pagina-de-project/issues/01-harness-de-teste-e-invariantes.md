# 01: Harness de teste, invariantes do conteúdo e busca que devolve ausência

**What to build:** O projeto passa a ter testes. Rodar a suíte verifica as invariantes que
o glossário declara mas que hoje nada garante, e já pega um bug real: a busca de Service
por slug devolve o primeiro Service como fallback quando o slug não existe, exibindo
silenciosamente o Service errado — a busca de Project ao lado devolve ausência
corretamente. O seam é o módulo de conteúdo: dado puro e derivações puras, sem React e sem
DOM. Prefactor: nenhum outro ticket pode ser testado antes deste.

**Blocked by:** Nada (pode começar imediatamente).

**Status:** done

- [x] Existe um script de teste no projeto e a suíte roda com um comando
- [x] O runner resolve os imports de imagem do módulo de conteúdo sem loader adicional
- [x] Teste: toda Screenshot de todo Project tem Caption
- [x] Teste: todo slug em Evidence corresponde a um Service existente
- [x] Teste: todo slug na curadoria da vitrine corresponde a um Project existente
- [x] Teste: a busca de Project devolve ausência para slug desconhecido
- [x] Teste: a busca de Service devolve ausência para slug desconhecido
- [x] A busca de Service passa a devolver ausência em vez do primeiro Service
- [x] Nenhum consumidor existente quebra com a busca de Service podendo devolver ausência
