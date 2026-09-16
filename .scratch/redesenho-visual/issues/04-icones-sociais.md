# 04: Ícones sociais num componente só

**What to build:** As redes sociais passam a existir num lugar só. Hoje o mesmo bloco de
três SVGs está copiado em `ServicesComponent`, `AboutComponent` e `RodapeComponent` —
três cópias, todas com `href=""`, que levam o visitante a lugar nenhum e contam ao robô
de busca que o site tem links quebrados. Vira um componente, com as URLs vindo de uma
fonte única. Twitter sai; ficam Instagram e YouTube. Um ícone sem URL não é renderizado:
link vazio é pior que ausência.

Depois deste ticket os ícones não aparecem mais em "Serviços" nem em "Sobre nós" — o
lugar deles é o rodapé, e é lá que o ticket 13 os coloca.

**Blocked by:** Nada (pode começar imediatamente).

**Status:** done

- [x] Existe um componente único de redes sociais, e nenhuma cópia de SVG sobra no JSX
- [x] As URLs vêm de uma fonte única de conteúdo
- [x] Nenhum `href=""` sobra em lugar nenhum do site
- [x] Uma rede sem URL declarada simplesmente não aparece
- [x] Cada ícone tem rótulo acessível dizendo para onde leva
- [x] Links externos abrem em nova aba com `rel="noopener noreferrer"`
- [x] Os blocos duplicados saem de "Serviços" e de "Sobre nós"
