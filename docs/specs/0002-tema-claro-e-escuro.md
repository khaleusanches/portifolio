# Spec — Tema claro e escuro

> Vocabulário: ver `CONTEXT.md`. Decisão de arquitetura: ADR 0005 (cor por token).

## Problem Statement

O site é escuro, e boa parte de quem o visita prefere ler em claro. Hoje não há escolha:
quem prefere claro lê no escuro ou vai embora.

O problema não é trocar uma paleta por outra. O site **já é claro e escuro ao mesmo
tempo** — a home tem herói escuro, "Serviços" e "Sobre" em faixa clara com texto preto,
e rodapé escuro. Essa alternância é a identidade da página, não um acidente. Um tema
claro que apaga a alternância transforma a home numa extensão clara única e destrói o
ritmo que ela tem hoje.

E a cor está espalhada: cerca de trinta utilitários crus no JSX, mais literais dentro de
`styled-components` e do `index.css`. Sem uma camada semântica, "adicionar um tema"
significa duplicar cada uma dessas decisões.

## Decisões

**Para que serve.** O visitante escolhe, e a escolha fica salva. Não é preferência do
autor nem vitrine técnica: é conforto de leitura de quem chega.

**Tema inicial.** Segue a preferência do sistema operacional na primeira visita. Sem
essa informação — navegador antigo, consulta indisponível —, abre **claro**. A partir do
primeiro clique no seletor, a escolha do visitante vence e persiste; ela corrige o que o
sistema disse, e essa correção não pode ser desfeita a cada visita.

Só a escolha explícita é gravada. A preferência do sistema nunca é copiada para o
armazenamento: se fosse, mudar o tema do sistema depois deixaria de refletir no site sem
o visitante entender por quê.

**As superfícies são papéis, não cores.** O site tem uma superfície `base` e uma
`base-alt` que alterna com ela. No escuro: base escura, alternada clara — exatamente o
que existe hoje. No claro: base clara, alternada um tom mais fundo. A alternância se
mantém nos dois temas, com os papéis invertidos.

**O acento da marca tem valor por tema.** `#fe5800` sobre o fundo escuro dá 5,86:1 e
passa. Sobre `gray-100` dá 2,89:1 e reprova. No tema claro o acento é `#b83f00`, que dá
5,09:1 sobre a faixa alternada e 5,60:1 sobre o branco, mantendo a mesma família de cor.

**O que não segue o tema.** O herói da home é uma imagem escura, e continua escuro nos
dois temas — inverter exigiria um segundo arquivo de imagem que não existe. Por isso o
texto sobre ele é branco fixo, assim como o card de Project, que só aparece ali. Os véus
de modal e de ampliação de imagem escurecem em qualquer tema, como é convenção.

## Arquitetura

**Tokens** (`src/index.css`): variáveis CSS em `:root` para o claro e em
`[data-theme="dark"]` para o escuro, guardadas como canais RGB separados por espaço para
o Tailwind poder aplicar opacidade. Claro é a base e escuro é a exceção, espelhando a
regra de que sem informação o site abre claro.

**Ponte com o Tailwind** (`tailwind.config.js`): cada token vira uma cor
(`rgb(var(--x) / <alpha-value>)`), então `bg-base`, `text-ink`, `border-line/10`
funcionam como qualquer utilitário. `darkMode` aponta para o mesmo atributo, para as
exceções pontuais que usam `dark:`.

**Regra de decisão** (`src/theme/tema.js`): pura, sem React e sem DOM. Recebe a escolha
salva e a preferência do sistema, devolve o tema. É onde mora o comportamento que vale a
pena garantir, e é testada sem renderizar nada.

**Aplicação antes da pintura** (`index.html`): um script síncrono no `<head>` escreve o
atributo antes do primeiro quadro, senão a tela pisca no tema errado até o React montar.
Ele duplica a regra de propósito — roda antes de existir bundle para importar. A
duplicação é pequena, e a chave de armazenamento que os dois compartilham está travada
por teste.

**Estado na interface** (`useTema`): lê o atributo que o script já escreveu em vez de
decidir de novo, para o hook não discordar do script e trocar o tema sozinho logo depois
de carregar.

**O seletor** aparece na NavBar e no topo da página de Project — telas diferentes, nunca
duas instâncias na mesma página. O rótulo descreve o destino ("Mudar para tema escuro"),
não o estado atual, e o ícone segue a mesma lógica.

## Verificação

Testes cobrem a regra de decisão: precedência da escolha sobre o sistema, queda para
claro sem informação, valor salvo inválido, e armazenamento bloqueado ou inexistente —
navegação privada derruba `localStorage`, e isso não pode quebrar a página.

No navegador, confirmado nos dois temas, em 1440px e 375px: fundo, texto, acento e
cartões resolvendo para os valores esperados; escuro idêntico ao site anterior; nenhuma
barra de rolagem acidental e nenhum estouro horizontal.

## Fora de escopo

O botão "Solicitar orçamento" é branco sobre o laranja: 3,18:1 no tema escuro, abaixo do
mínimo para texto normal. No claro, com o acento fechado, passa. É um defeito que já
existia e não foi introduzido aqui; corrigi-lo muda o botão em todo o site e merece
decisão própria.
