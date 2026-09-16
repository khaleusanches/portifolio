# Spec — Redesenho visual, movimento e indexação

> Vocabulário: ver `CONTEXT.md`. Decisões de arquitetura anteriores: ADR 0001 (conteúdo
> em módulo único), ADR 0005 (cor por token). Esta spec não revoga nenhuma das duas.

## Problem Statement

O site converte mal por três motivos que se somam.

**Ele não é encontrado.** É uma SPA Vite: o HTML que o robô do Google recebe é a casca do
`index.html`, com um `<title>` genérico e nenhuma `description`. As páginas de Project
(`/project/OlimpicLink`) não existem como documento nenhum — só como rota de JavaScript.
Compartilhar qualquer link no WhatsApp não gera prévia.

**Ele parece datado.** A sombra `0 0 10px 7px rgba(0,0,0,.38)` aparece em três blocos do
herói e é a marca visual mais forte da página. O H1 tem `font-['Arial']` cravado ao lado
de um Libre Baskerville que nenhum outro elemento usa com intenção. O grid de Serviços
carrega um `border-2` que sobrou de depuração. Os cards de Service têm um `clip-path`
chanfrado que não se repete em lugar nenhum do site.

**Ele não tem ritmo nem prova.** Nada se move ao rolar — o framer-motion instalado só faz
transição entre páginas. Não há seção de Projects: o único jeito de ver um trabalho é
esperar a vitrine passar por ele. Não há tecnologias, não há parceiros, e o rodapé é uma
linha de copyright com três ícones de rede social apontando para `href=""`.

Por baixo dos três, um problema estrutural: **não existe grid**. O layout é feito de
medidas mágicas em viewport — `ml-[5vw]`, `w-[95vw]`, `ml-[-5vw]`, `ml-[-20vw]`,
`left-[60px]`, `h-[88vh]`, `mt-[16vh]`. Cada seção inventa a própria margem, então nada
alinha entre seções e tudo desalinha junto quando a tela muda de tamanho.

## O que não muda

A **vitrine** — a coluna de Projects que rola sozinha no herói — é a identidade do site e
permanece, com o mesmo mecanismo: `requestAnimationFrame`, volta regulada por tempo
(`SEGUNDOS_POR_VOLTA = 30`), duas cópias da lista e recuo de uma volta na emenda. Toda a
lógica de `BannerComponent` que resolve isso fica intacta; muda só a moldura.

A **alternância de superfícies** (`base` / `base-alt`) que dá ritmo à home permanece, e
com ela os dois temas e todos os tokens da ADR 0005.

O **conteúdo como módulo único** permanece: `projects.js` e `services.js` seguem sendo a
fonte, e ganham campos novos em vez de nascer arquivos paralelos.

Todo CTA continua indo para o WhatsApp. O site não calcula nem registra orçamento.

## Decisões — sistema visual

**Grid único.** Um componente `Container` de largura máxima 1280px com respiro lateral
responsivo, usado por todas as seções. Ele substitui as medidas em viewport listadas
acima. A regra passa a ser: nenhum componente define a própria margem horizontal; quem
posiciona é o `Container`. A exceção declarada é a vitrine, que sangra até a borda
direita da tela de propósito.

**Escala de espaçamento vertical.** Um token de espaço entre seções, aplicado igual em
todas. Hoje cada seção tem o seu (`mt-8`, `mt-[6vh] pt-[8vh]`, `pb-4`), e o ritmo da
página depende de qual seção veio antes.

**Sombra.** Uma sombra suave em dois níveis (`0 1px 3px` de contato mais
`0 12px 32px -12px` de elevação) substitui os três `shadow-[...]` de 38% de opacidade do
herói. Cartão elevado usa o nível de elevação; tudo o mais usa borda `line/10`.

**Raio.** Um raio único para cartões e imagens, e um maior para botões-pílula. O
`clip-path` chanfrado do card de Service sai: ele é a única forma desse tipo no site.

**Tipografia.** Libre Baskerville é a voz dos títulos — headline do herói, título de
seção, headline de Project e de Service. Inter assume corpo de texto, cards, navegação e
botões. O `font-['Arial']` do H1 sai. Rótulo de seção em caixa alta com tracking largo
(`ÚLTIMOS TRABALHOS`, `SERVIÇOS`), como segunda camada de hierarquia acima do título.

Medida de leitura máxima de ~68 caracteres nos parágrafos longos. O `text-justify` de
"Sobre nós" sai: em `40vw` de tela larga ele abre rios de espaço entre palavras.

**Ícones sociais.** Um único componente, usado no rodapé e em nenhum outro lugar. Hoje o
mesmo bloco de três SVGs está copiado em `ServicesComponent`, `AboutComponent` e
`RodapeComponent` — três cópias, todas com `href=""`. Ficam **Instagram e YouTube**; o
Twitter sai. Um ícone sem URL não é renderizado: link vazio é pior que ausência.

## Decisões — movimento

**Um vocabulário, três peças.**

`Reveal` — envolve qualquer bloco e o faz entrar com opacidade 0→1 e 16px de deslize
quando encosta na viewport, uma vez só. É o gesto padrão de toda seção.

`Stagger` — a mesma entrada aplicada aos filhos de uma lista, em cascata de ~60ms. É o
que dá vida à grade de Projects, aos cards de Service e às faixas de logos.

`SplitText` — a headline do herói entra palavra a palavra. É o único lugar onde ela
aparece: usada em mais de um bloco, vira maneirismo.

**Duração e curva.** 400ms, `easeOut`, iguais aos 200ms já usados em `PageTransition`
multiplicados pela distância maior. Nada de `spring`, nada de `backOut` — o histórico do
`PageTransition` registra por que esse ease foi abandonado.

**Navegação.** A navbar encolhe ao rolar, e o item ativo passa a ser derivado da seção
visível em vez de fixo. Hoje `active="home"` é passado como literal e nunca muda.

**O movimento não se reduz.** O site não consulta `prefers-reduced-motion`: todas as
animações rodam para todo visitante, independentemente da configuração do sistema.

A regra original era o contrário, e ela é a prática usual — entradas ao rolar, texto
palavra a palavra e sobretudo um carrossel automático são o que essa preferência existe
para desligar, e quem tem sensibilidade vestibular a liga por necessidade. A Brand
decidiu assim mesmo, depois de ver as duas versões: o movimento é o que distingue o site
dos concorrentes, e sem ele a home parece estática a ponto de sugerir defeito. A decisão
é dela e está registrada aqui para que não se perca — quem for reconsiderar, comece pela
vitrine, que é o elemento mais agressivo.

O que sobra em compensação: nenhuma animação bloqueia conteúdo — o texto está todo no
HTML servido —, a vitrine pausa ao passar o mouse e é rolável à mão, e as entradas
disparam uma vez só, sem repetir a cada passagem.

**Nenhum ramo pode depender do ambiente.** Sem consulta à preferência, sobra a regra
geral: a marcação não pode variar com nada que exista só no navegador — preferência de
movimento, tema, largura de tela medida em JavaScript. As páginas são pré-renderizadas
em Node, e marcação diferente no navegador quebra a hidratação, fazendo o React
descartar o documento pronto. O tema é resolvido por CSS, a partir do `data-theme` que o
script do `index.html` grava antes da primeira pintura.

## Decisões — home

A ordem passa a ser:

1. **Navegação**
2. **Herói** — duas colunas. À esquerda, rótulo, headline, subtítulo e CTA. À direita, a
   vitrine sangrando até a borda, com máscara de fade no topo e na base no lugar da
   sombra. O `<p>` de "Últimos Trabalhos" — hoje um elemento de altura zero girado
   `-rotate-90` com `ml-[-20vw]` — vira um rótulo vertical posicionado no grid.
   Em telas pequenas a vitrine continua horizontal, como já é hoje.
3. **Projetos** — grade com **todos** os Projects, não só os `Featured`. A curadoria de
   `Featured` continua valendo só para a vitrine, que é o que ela define no modelo.
4. **Serviços** — os mesmos cards, com altura uniforme, sem chanfro e sem o `border-2`
   de depuração no contêiner do grid.
5. **Quem está com a gente** — plataformas e serviços em que a KH se apoia: **AWS,
   Hostinger, Trello**. Logos monocromáticos, tingidos por token, para que funcionem nos
   dois temas.
6. **Stack** — o que a KH usa para construir: **Kotlin, C#, Java, SQL Server, MongoDB,
   React, Tailwind, Docker, N8N, Gemini, Claude**. Docker aparece aqui e não entre os
   parceiros, para que nenhum logo se repita em duas faixas.
7. **Sobre nós** — mesmo texto, em medida de leitura. Dois erros de grafia do texto atual
   são corrigidos: "espezializados" → "especializados", "eficiêntes" → "eficientes"
   (este último também na headline do herói).
8. **Rodapé** — contato real: `contato.khsoftwares@gmail.com`, WhatsApp `wa.link/q560iy`,
   São Paulo – SP com atendimento em todo o Brasil, Instagram e YouTube, e navegação
   secundária para as seções.

As duas faixas de logos (5 e 6) são a mesma peça com conteúdo diferente, e não dois
componentes. A diferença entre "parceiro" e "tecnologia" é do conteúdo, não do layout.

## Decisões — páginas internas

**Página de Project.** Header com headline, Marks e Stack. Cada Capability ocupa uma
faixa com a sua Screenshot ao lado, alternando o lado a cada Capability; a Caption é
legenda da imagem e não repete o título da Capability. Capability sem Screenshot ocupa a
largura do texto — é estado legítimo, não falta.

**Modal de Service.** Herda tipografia, espaçamento e sombra do sistema. Os Tiers viram
uma tabela de três colunas legível, com a faixa de preço em destaque.

## Decisões — indexação

**Origem canônica.** O site é servido estático pela Vercel em
`https://khsoftwares.vercel.app`. Essa é a origem que entra em `canonical`, no
`sitemap.xml`, no `robots.txt` e nas URLs absolutas de Open Graph — robô e prévia de link
não resolvem caminho relativo. Ela vive numa constante única: o dia em que houver domínio
próprio, muda num lugar só.

**Pré-renderização no build.** O build passa a gerar HTML real para `/` e para cada
`/project/<slug>`, com o conteúdo já no documento. As rotas saem de `projects.js`: uma
lista escrita à mão sairia do ar no dia em que um Project entrasse.

**Metadados por rota.** `title` e `description` derivados do conteúdo que já existe —
`headline` e `pitch` do Project, e um par fixo para a home. Nada de texto de SEO escrito
à parte: duas fontes divergem.

**Open Graph e Twitter Card** por rota, usando a `cover` do Project como imagem. É o que
faz o link ter prévia no WhatsApp, que é para onde todo CTA aponta.

**JSON-LD** de `Organization` na home, com nome, logo, e-mail e área de atuação.

**`sitemap.xml` e `robots.txt`** gerados no build a partir da mesma lista de rotas.

**Endereço inexistente devolve 404 de verdade**, com a página da marca (`404.html`, que a
Vercel serve sozinha). Não há fallback de SPA: todas as páginas publicadas existem como
arquivo, e servir a home com status 200 em qualquer endereço errado cria soft-404 — que é
pior que o erro, porque o buscador passa a desconfiar de todo o site. A página de 404
leva `noindex` e fica fora do sitemap: ela não é conteúdo publicado.

**HTML semântico e `alt`.** As seções viram `<section>` com título acessível; a navegação
vira `<nav>`; o rodapé vira `<footer>`. Toda imagem ganha `alt` — hoje `cover` e ícone de
Service usam `alt=""`, e a Caption da Screenshot, que já descreve a imagem, é o texto
alternativo natural dela.

## Fora de escopo

Nenhuma mudança de conteúdo além das duas correções de grafia. Nenhum Project novo,
nenhum Service novo, nenhum preço alterado.

Sem migração para Next.js: a pré-renderização resolve a indexação sem trocar o roteador
e o build do projeto.

Sem formulário de contato. O pedido de orçamento é a saída do site, não uma entidade
dele — ver `CONTEXT.md`.

Sem faixa de números ("X projetos entregues", "desde ano Y"). Prova social por número
exige número verificável, e ele não existe hoje.
