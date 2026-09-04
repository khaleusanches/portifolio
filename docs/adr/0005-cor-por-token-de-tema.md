# Cor sai do componente e vira token de tema

O site tinha cerca de trinta utilitários de cor escritos direto no JSX — `text-white`
dezoito vezes, `bg-gray-100`, `border-white/10` — mais literais dentro de
`styled-components` e do `index.css`. Para suportar tema claro e escuro, decidimos que
nenhum componente escreve cor: ele declara um **papel** (`bg-base`, `text-ink`,
`text-muted`, `border-line`) e o tema ativo resolve o valor, através de variáveis CSS
lidas pelo Tailwind.

## Considered Options

A alternativa era usar as variantes `dark:` do Tailwind em cada elemento
(`bg-white dark:bg-gray-900`). Foi rejeitada porque dobra a marcação em todo lugar e
mantém a decisão de cor espalhada: para trocar um tom seria preciso caçar de novo,
que é exatamente o problema que o ADR 0001 resolveu no conteúdo. As variantes `dark:`
continuam usadas, mas só para exceções pontuais que não merecem token — o verde do
preço no modal de Service, por exemplo.

## Consequences

Quem chegar ao repositório vai ver classes que não existem no Tailwind padrão e pode
achar que são erro. São tokens declarados em `tailwind.config.js`, apontando para as
variáveis de `src/index.css`.

Nem toda cor virou token, e isso é deliberado. O herói da home é uma imagem escura nos
dois temas, então o texto sobre ele é branco fixo — segui-lo pelo tema o tornaria
ilegível no claro. O mesmo vale para o card de Project, que só aparece sobre esse herói,
e para os véus de modal e de ampliação de imagem, que escurecem em qualquer tema.

O acento da marca tem valor por tema: `#fe5800` no escuro e `#b83f00` no claro. O
original tem 2,89:1 sobre as seções claras e reprova o critério de acessibilidade para
texto — e a ênfase inline do conteúdo, que marca nome de contratante, é justamente
texto corrido.
