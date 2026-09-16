# 06: Herói redesenhado com a vitrine ancorada

**What to build:** O Client chega e vê uma frase grande entrando palavra a palavra, um
botão de contato, e a vitrine de trabalhos rolando ancorada na borda direita da tela,
esmaecendo no topo e na base. Hoje o herói é feito de medidas mágicas: o rótulo "Últimos
Trabalhos" é um `<p>` de altura zero girado `-rotate-90` empurrado com `ml-[-20vw]`, a
vitrine está dentro de uma caixa com sombra de 38% de opacidade, e há um bloco vazio com
um `<h2>` sem texto ocupando espaço. Vira um herói de duas colunas alinhado ao grid.

A mecânica da vitrine não muda: `requestAnimationFrame`, volta regulada por tempo,
duas cópias da lista e recuo de uma volta na emenda. Muda a moldura, não o motor. No
celular ela continua horizontal, como já é.

**Blocked by:** 01 (sistema tipográfico), 02 (container e tokens), 03 (vocabulário de movimento).

**Status:** done

- [x] A headline entra palavra a palavra, e a grafia "eficiêntes" é corrigida
- [x] A vitrine sangra até a borda direita, com máscara de fade no topo e na base
- [x] Nenhuma sombra pesada sobra no herói
- [x] O rótulo vertical é um elemento posicionado no grid, sem altura zero nem margem negativa
- [x] O bloco vazio com `<h2>` sem texto some
- [x] A vitrine continua pausando ao passar o mouse
- [x] Uma volta completa continua levando o mesmo tempo, em qualquer tela e em 60 ou 120Hz
- [x] No celular a vitrine continua horizontal e rolável
- [x] O herói é `<section>` com título acessível, e toda imagem tem `alt`
- [x] Nenhum teste existente quebra
