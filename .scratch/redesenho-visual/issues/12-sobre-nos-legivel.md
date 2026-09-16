# 12: Sobre nós legível

**What to build:** O texto sobre a KH passa a ser confortável de ler. Hoje ele é
`text-justify` numa coluna de `40vw`: em tela larga isso vira linha longa demais e abre
rios de espaço entre as palavras. Passa a ter medida de leitura limitada, alinhado à
esquerda, com o espaçamento entre parágrafos vindo do sistema em vez dos `<br/><br/>` que
estão cravados no meio do parágrafo. Duas palavras estão escritas errado no texto atual e
são corrigidas: "espezializados" e "eficiêntes".

**Blocked by:** 01 (sistema tipográfico), 02 (container e tokens).

**Status:** done

- [x] A linha de texto não passa da medida de leitura confortável, em nenhuma largura de tela
- [x] O `text-justify` sai
- [x] Os parágrafos são parágrafos, e não um bloco quebrado por `<br/>`
- [x] "espezializados" vira "especializados" e "eficiêntes" vira "eficientes"
- [x] A seção é `<section>` com título acessível
- [x] O bloco duplicado de ícones sociais não está mais aqui
