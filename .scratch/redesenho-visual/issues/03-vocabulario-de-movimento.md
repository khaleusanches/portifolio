# 03: Vocabulário de movimento

**What to build:** A página passa a ganhar vida ao rolar. Hoje nada se move: o
framer-motion instalado só faz a transição entre páginas. Nascem três peças e só três —
`Reveal`, que faz um bloco entrar com fade e um deslize curto quando encosta na viewport,
uma vez só; `Stagger`, que aplica a mesma entrada aos filhos de uma lista em cascata; e
`SplitText`, que faz a headline do herói entrar palavra a palavra. As duas primeiras são
aplicadas nas seções que já existem, para provar que funcionam antes de qualquer seção
nova depender delas.

Quem pediu menos movimento recebe menos movimento: sob `prefers-reduced-motion: reduce`
as três peças renderizam o estado final sem transição, e a vitrine para. A vitrine é
movimento contínuo e automático, e é o pior elemento da página para quem tem sensibilidade
vestibular.

**Blocked by:** Nada (pode começar imediatamente).

**Status:** done

- [x] `Reveal`, `Stagger` e `SplitText` existem como componentes reutilizáveis
- [x] Duração e curva saem de constantes únicas, coerentes com a transição de página já existente
- [x] A entrada dispara uma vez por elemento, e não se repete ao rolar de volta
- [x] Sob `prefers-reduced-motion: reduce` as três peças mostram o estado final sem transição
- [x] Sob `prefers-reduced-motion: reduce` a vitrine não rola sozinha
- [x] A preferência é respeitada se mudar durante a visita, sem recarregar a página
- [x] `SplitText` não quebra a leitura por leitor de tela: a frase continua sendo uma frase
- [x] As seções existentes da home entram com `Reveal`, e nenhum teste existente quebra
