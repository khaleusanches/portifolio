# Spec — Página de detalhe do Project

> Vocabulário: ver `CONTEXT.md`. Decisões relacionadas: ADR 0001 (conteúdo em módulo
> único) e os ADRs 0002–0004 que esta spec cria.

## Problem Statement

A página que apresenta um Project é o lugar onde o Client decide se a Brand é capaz de
fazer o que ele precisa — é a prova do argumento de venda. Hoje ela não cumpre isso.

O Client abre a página e recebe dois conteúdos crus, lado a lado e sem relação: uma
Description longa, justificada numa coluna estreita, e uma pilha de Screenshots numa
caixa de altura fixa. A capacidade descrita no texto e a tela que a demonstra ficam a
centenas de pixels de distância, sem nada que as ligue — o Client lê sobre cercas
eletrônicas e vê a tela de cercas depois de rolar, se chegar lá. A maioria não chega:
é um paredão de texto.

Somam-se defeitos que fazem a página parecer amadora independentemente do layout. A
fonte dos títulos nunca carregou (a importação aponta para um host sem caminho de
fonte), então toda a tipografia serif do site cai no fallback do sistema. A transição de
entrada dura um segundo inteiro, desliza sem fade e quica na parada. As Screenshots dos
Projects mais antigos pesam ~2MB cada e vão pintando uma a uma. Uma faixa da coluna de
imagens é cortada em silêncio, porque as duas colunas somam mais que a largura da tela e
uma regra global de `overflow` esconde o estouro em vez de resolvê-lo. Ampliar uma tela
entrega a imagem esticada.

E o modelo de domínio está sendo desperdiçado: Marks — o posicionamento editorial que a
Brand atribui ao Project — está preenchido para todos os Projects e **nunca foi
renderizado em lugar nenhum do site**. Evidence é declarada no Project mas só navega no
sentido Service → Project: o Client se convence olhando o Project e a página não lhe
oferece o Service que aquilo comprova. A prova é um beco sem saída.

## Solution

A página passa a ter a forma do seu próprio conteúdo: uma corrente vertical em que cada
Capability do Project aparece emparelhada com a Screenshot que a demonstra.

O topo responde "que sistema é este" antes de pedir leitura: o caminho de volta para a
vitrine, a Headline, os Marks em destaque com o acento da marca, o parágrafo de abertura
da Description, o Stack em cinza discreto como ficha técnica, e a Evidence — os Services
que este Project comprova — com link.

Em seguida a corrente. Cada bloco pareado traz o título e o texto de uma Capability ao
lado da Screenshot que ela reivindica, alternando lados no desktop. Screenshot que
nenhuma Capability reivindicou aparece como bloco só-imagem em largura cheia, e é a
pausa natural entre dois pares. Toda Screenshot pode ser ampliada, e a ampliação respeita
a proporção da imagem — é o que torna legível um console denso de 1600px.

No fim, o argumento fecha: o próximo Project na ordem de curadoria da Brand, e o pedido
de orçamento uma única vez, depois de a prova estar dada.

No celular a alternância desaparece e tudo empilha em uma coluna, com o texto sempre
antes da imagem: as Screenshots são todas paisagem, num celular aparecem pequenas por
definição, e ali elas ilustram — quem informa é o texto.

Para isso a Description deixa de ser um bloco opaco de prosa. A estrutura que já existia
nela — a convenção `**Título:** parágrafo`, repetida em cinco dos seis Projects e
reconstruída em tempo de execução por manipulação de string — passa a ser declarada:
**Capability** entra no modelo de domínio.

## User Stories

### O Client lendo a página

1. Como Client, quero ver cada capacidade do sistema ao lado da tela que a demonstra, para
   entender o que ele faz sem ter que casar texto e imagem de cabeça.
2. Como Client, quero saber que tipo de sistema é este antes de ler um parágrafo, para
   decidir em segundos se vale minha atenção.
3. Como Client, quero um parágrafo de abertura curto que diga o que o Project resolve e
   para quem, para ter contexto antes do detalhe.
4. Como Client, quero ver com que tecnologia o Project foi construído, para avaliar
   competência técnica quando isso me importa.
5. Como Client, quero que a informação técnica não roube o primeiro lugar do que eu ainda
   não sei, porque eu já li o Stack no card antes de clicar.
6. Como Client, quero ver em destaque quando um Project foi entregue a um contratante
   nomeado, porque é a prova social mais forte da página.
7. Como Client, quero ampliar uma Screenshot, para ler uma interface densa que na página
   aparece menor que o seu tamanho nativo.
8. Como Client, quero que a imagem ampliada mantenha a proporção, para não avaliar um
   sistema por uma tela distorcida.
9. Como Client, quero fechar a ampliação de forma óbvia, para voltar a ler sem procurar
   o botão.
10. Como Client, quero que a legenda me diga o que estou vendo na imagem, e não repita o
    título que acabei de ler.
11. Como Client, quero ver as telas que não têm capacidade associada, porque a tela pode
    ser a coisa mais impressionante do Project.

### O Client no celular

12. Como Client no celular, quero ler o texto de uma capacidade antes de encontrar a
    imagem dela, para não rolar por seis telas ilegíveis antes de qualquer informação.
13. Como Client no celular, quero uma coluna única, para não receber um layout de duas
    colunas comprimido.
14. Como Client no celular, quero ampliar uma tela em tela cheia, porque é o único jeito
    de ler uma imagem paisagem de 1600px num aparelho estreito.

### O Client decidindo comprar

15. Como Client, quero saber quais Services este Project comprova, para ligar a prova que
    me convenceu à coisa que eu posso contratar.
16. Como Client, quero chegar ao detalhe do Service com um clique a partir da Evidence,
    para ver escopo e faixa de preço enquanto ainda estou convencido.
17. Como Client, quero que o pedido de orçamento venha depois da prova, não antes, para
    não ser abordado antes de me convencer.
18. Como Client, quero um único caminho claro para pedir orçamento, para não hesitar entre
    dois botões concorrentes.
19. Como Client, quero ir para o próximo Project ao terminar de ler, para continuar vendo
    prova sem voltar à vitrine.
20. Como Client, quero perceber quando cheguei ao fim da vitrine, para não recomeçar sem
    saber que já vi tudo.
21. Como Client, quero um caminho de volta que diga para onde vai, porque um "X" sugere
    fechar um modal e isto é uma página.

### O Client percebendo acabamento

22. Como Client, quero que a página abra rápido, para não julgar a Brand por uma página
    que se monta aos pedaços.
23. Como Client, quero que a página não pule enquanto carrega, para não perder a linha
    que estava lendo.
24. Como Client, quero ver a página inteira, sem uma faixa das imagens cortada fora da
    tela.
25. Como Client, quero uma transição de entrada curta, para não achar que o site travou.
26. Como Client, quero uma tipografia consistente e carregada, porque hoje toda a
    tipografia serif do site é o fallback do sistema.
27. Como Client, quero uma única cor de acento, para não receber quatro sistemas de cor
    competindo na mesma tela.

### A Brand editando conteúdo

28. Como Brand, quero declarar uma capacidade com título e texto em campos próprios, para
    não codificar estrutura numa convenção de negrito dentro de um parágrafo.
29. Como Brand, quero associar uma Screenshot a uma capacidade quando a tela existe, e
    deixar sem associação quando não existe, porque as contagens não fecham na maioria dos
    Projects.
30. Como Brand, quero que uma Screenshot que nenhuma capacidade reivindicou continue sendo
    exibida, para não jogar fora uma tela real por causa do modelo.
31. Como Brand, quero reordenar as Screenshots de um Project sem reembaralhar os pares em
    silêncio, para editar conteúdo sem medo.
32. Como Brand, quero declarar a tecnologia em um lugar só, porque a versão em prosa já
    divergiu da estruturada.
33. Como Brand, quero que um Project sem nenhuma capacidade declarada continue tendo uma
    página válida, para migrar o conteúdo aos poucos.
34. Como Brand, quero que a ordem de curadoria da vitrine continue definindo qual é o
    "próximo Project", porque a ordem é argumento de venda, não recência.
35. Como Brand, quero que os Marks que eu atribuí apareçam na tela, porque hoje eles são
    um campo morto.
36. Como Brand, quero que Marks e Stack sejam visualmente inconfundíveis, para que a
    página não mostre como uma coisa dois conceitos que o glossário distingue.

### O desenvolvedor mantendo isto

37. Como desenvolvedor, quero que as invariantes do conteúdo sejam verificadas por teste,
    para que uma referência quebrada apareça antes do deploy e não na tela.
38. Como desenvolvedor, quero que a regra que monta a corrente de blocos viva fora do
    componente, para poder testá-la sem renderizar nada.
39. Como desenvolvedor, quero que a busca por um slug desconhecido devolva ausência, para
    não exibir silenciosamente o conteúdo errado.
40. Como desenvolvedor, quero uma única implementação da formatação de texto, para não ter
    o mesmo negrito renderizado de duas cores em duas telas.
41. Como desenvolvedor, quero que as dependências que o código importa estejam declaradas,
    para que uma instalação limpa não resolva diferente da minha.

## Implementation Decisions

### Modelo de domínio

**Capability entra no glossário.** Uma capacidade nomeada do sistema que a Brand escolhe
contar, com título e texto próprios, e opcionalmente a Screenshot que a demonstra. É
curadoria, não a lista completa do que o sistema faz. Termos a evitar: funcionalidade,
feature, recurso, módulo.

**A Capability referencia a Screenshot; não a contém.** As contagens de capacidades e de
telas não fecham na maioria dos Projects — há Projects com seis capacidades e duas telas, e
Projects com cinco capacidades e sete telas. Conter forçaria 1:1 e obrigaria a inventar
telas ou descartar capacidades reais. Capability sem Screenshot é legítima; Screenshot não
reivindicada também. **ADR 0002.**

**A referência é por Slug, e Screenshot passa a ter Slug.** A definição de Slug no
glossário deixa de valer só para Project e Service. Referência por índice foi rejeitada:
reordenar as Screenshots reembaralharia os pares em silêncio. A identidade de Screenshot
hoje é o texto da Caption, usada como chave de lista — duas Captions iguais quebrariam a
renderização sem aviso.

**A direção da referência vai de quem afirma para quem prova.** A Capability aponta para a
Screenshot, não o contrário — mesmo padrão de Evidence, declarada no Project e derivada no
Service.

**Description muda de definição.** Deixa de ser "o texto longo da página de detalhe" e
passa a ser o parágrafo de abertura: o que o Project resolve e para quem. O detalhe vive
nas Capabilities.

**Caption tem a definição afiada e continua obrigatória.** Descreve o que a imagem mostra;
nunca renomeia a Capability. As Captions existentes foram escritas para uma coluna sem
títulos e por isso repetem o título — todas são reescritas sob a nova regra.

**Stack passa a ser a única fonte sobre tecnologia.** Os blocos de tecnologia em prosa
saem das Descriptions. A justificativa é factual: a prosa de um dos Projects nomeia uma
linguagem que o Stack estruturado do mesmo Project não lista. É o argumento do ADR 0001
aplicado dentro de um campo. **ADR 0003.**

**Marks e Evidence não mudam de definição** — passam a existir na tela.

### Módulo de conteúdo

O módulo de conteúdo continua sendo a fonte única (ADR 0001) e ganha duas derivações, ambas
puras:

- **A corrente de blocos de um Project.** Dadas as Capabilities e as Screenshots, produz a
  sequência ordenada de blocos: pareados quando a Capability reivindica uma Screenshot,
  só-imagem para as Screenshots não reivindicadas. Esta é a regra central do layout e ela
  nasce aqui, não no componente, para ser testável sem renderização.
- **O próximo Project na curadoria.** Deriva de `featured`. O último da lista não tem
  próximo — o fim da lista é o fim do caminho, porque a ordem de curadoria decai de
  propósito e circular reiniciaria o argumento de venda mascarando o fim.

A busca de Service por slug passa a devolver ausência para slug desconhecido, alinhando-se
à busca de Project. Hoje ela devolve o primeiro Service como fallback, o que exibe
silenciosamente o Service errado — e isso deixa de ser curiosidade e passa a ser
alcançável pelo Client, porque o acesso a Service passa a vir de parâmetro de URL.

### Navegação

**Evidence ganha o caminho de volta.** A página do Project passa a listar os Services que
comprova e a levar até eles.

**Service é acessado por parâmetro de URL na home, não por rota própria.** A home abre com
o modal do Service correspondente aberto. Criar rota para Service é a resposta
arquiteturalmente correta e foi rejeitada deliberadamente: transformar Service em rota é
decisão de estrutura do site, com consequência sobre a home, e não cabe dentro de "melhorar
a página de Project". Fica registrada como aberta. **ADR 0004.**

**O fechar deixa de ser um "X" solto** e passa a ser um caminho de volta explícito para a
vitrine, no topo, reaparecendo no fim junto com o próximo Project.

**O pedido de orçamento aparece uma vez, no fim.** Não no topo (pedir antes de provar), e
não fixo na tela (cobriria as Screenshots no celular, que é onde já sobra menos espaço, e a
página existe para mostrá-las).

### Layout

Corrente vertical única, mesma estrutura no desktop e no celular. Pares alternam lados no
desktop; blocos só-imagem vão a largura cheia, porque a alternância não é o valor — o
pareamento é — e uma tela sem texto ao lado é a pausa natural entre dois pares. No celular
a alternância desaparece e o texto vem antes da imagem.

O topo compõe, nesta ordem de peso: Headline, Marks em destaque com o acento da marca,
parágrafo de abertura, Stack discreto em cinza. Marks recebe mais peso que Stack porque o
Client já leu o Stack no card antes de clicar, e Marks é a única coisa da página que ele
nunca viu. O acento pertence aos Marks; o Stack nunca o recebe — é assim que os dois
conceitos ficam visualmente inconfundíveis.

As duas colunas de largura somada maior que a tela deixam de existir com a corrente, o que
resolve a faixa cortada.

### Apresentação

**Um único acento de cor**, o laranja da marca, usado em Marks, negritos e no botão de
orçamento. O verde do botão de orçamento sai: ele é a cor do WhatsApp mas não comunica
WhatsApp ao Client — comunica "botão genérico" — e competia com o laranja e com os três
cinzas da página. Consequência assumida: o modal de Service segue verde até ser tratado.

**A formatação de negrito no texto vira uma implementação só**, compartilhada entre Project
e Service, com o acento da marca. Existem hoje duas cópias divergentes da mesma função, uma
renderizando o negrito em laranja e outra em branco.

**O negrito dentro do texto de Capability sobrevive.** Depois de o bloco de tecnologia sair
(ADR 0003), o negrito restante marca sobretudo nome de contratante e de produto de
terceiro — e o glossário diz explicitamente que o contratante aparece citado no texto da
Description. Remover o negrito apagaria a prova social mais forte da página.

**A tipografia passa a carregar.** A importação de fonte aponta hoje para um host sem
caminho, então as famílias serif configuradas nunca chegaram ao navegador e o site inteiro
usa o fallback do sistema. O uso passa a ser pela utilitária já configurada e nunca usada,
em vez de família declarada inline. Uma família configurada e não usada por nada é
removida, e uma classe utilitária inexistente, usada em três componentes, sai.

**A transição de página encurta para ~300ms e ganha fade.** Hoje dura um segundo, desliza
sem nunca alterar opacidade e quica na parada. Corrigir a direção do slide (hoje fixa, então
voltar desliza para o mesmo lado que avançar) foi rejeitado: exigiria rastrear intenção de
navegação num componente global, e a 300ms com fade a direção é irrelevante.

**As Screenshots são convertidas para o formato leve já usado pelos Projects mais recentes,
recebem dimensões explícitas e carregamento tardio.** As dimensões explícitas são parte do
redesenho, não otimização: sem elas a corrente pula visivelmente enquanto carrega e nenhuma
escolha de espaçamento sobrevive a isso. Um arquivo de projeto gráfico de 14MB e uma imagem
avulsa de 2MB saem do diretório público, onde estavam sendo servidos e indo no build.

**A ampliação de Screenshot sobrevive e é corrigida** para respeitar a proporção, com fundo
escuro e fechamento por tecla e por clique fora. Removê-la foi rejeitado: as telas dos
Projects mais impressionantes são consoles densos, e sem ampliar o Client vê que existe uma
interface complexa sem conseguir ler nada dela. Manter só no celular foi rejeitado por criar
dois comportamentos para o mesmo clique dependendo da largura.

**A dependência de animação passa a ser declarada.** Ela é importada em dois arquivos e
existe hoje apenas como dependência transitiva.

### Divisão do trabalho de conteúdo

O conteúdo novo é do domínio do negócio. A linha divisória: quem escreve o que é verificável
olhando a imagem escreve os Slugs de Screenshot, as Captions reescritas e o recorte dos
blocos de tecnologia; quem escreve o que é verificável só conhecendo o sistema escreve as
Capabilities do Project que hoje não tem nenhuma, e decide a divergência de linguagem do
Stack.

### Entrega em três passos

Há uma dependência dura: a corrente não pode ser construída antes de as Capabilities
existirem no dado.

1. **Consertos independentes de conteúdo** — tipografia, faixa cortada, ampliação
   distorcida, transição, peso e dimensões das imagens, arquivos indevidos no diretório
   público, dependência declarada, busca de Service devolvendo ausência. Provavelmente
   resolve metade da percepção de acabamento, e é avaliável a olho antes de qualquer
   mudança estrutural.
2. **Modelo e layout**, com os Projects que já têm estrutura no texto. O Project sem
   Capabilities mantém a página atual — não regride, é a que ele já tem.
3. **O Project restante**, quando o conteúdo dele for escrito.

## Testing Decisions

### O que faz um bom teste aqui

Testar comportamento externo, não implementação. Um teste bom aqui afirma coisas sobre o
**conteúdo e as derivações** — que uma referência aponta para algo que existe, que uma
invariante do glossário é respeitada, que uma derivação produz a sequência certa. Um teste
ruim afirma como a corrente é construída internamente, ou qual classe um elemento recebe.

Não há prior art: não existe infraestrutura de teste no projeto — sem script de teste, sem
runner, sem biblioteca, zero arquivos de teste. Todo seam aqui é novo, e a spec propõe
deliberadamente **um só**.

### O seam: o módulo de conteúdo

É o ponto mais alto do codebase — dado puro e derivações puras, sem React e sem DOM — e é
onde quase toda decisão desta spec é verificável. O que se testa:

- Toda referência de Capability aponta para um Slug de Screenshot existente no mesmo
  Project.
- Slugs de Screenshot são únicos dentro de um Project.
- Toda Screenshot tem Caption — o glossário diz obrigatória e hoje nada garante.
- Todo slug em Evidence corresponde a um Service existente.
- Todo slug na curadoria da vitrine corresponde a um Project existente.
- Busca de Project e de Service devolvem ausência para slug desconhecido.
- Nenhuma Description contém bloco de tecnologia em prosa — a decisão do ADR 0003 virada
  em invariante executável.
- A corrente de blocos: pares na ordem das Capabilities, blocos só-imagem para as
  Screenshots não reivindicadas, e o caso de um Project sem nenhuma Capability produzindo
  uma corrente só de imagens.
- O próximo Project segue a ordem de curadoria, e o último não tem próximo.

### O que não é testado, e por quê

A página e os componentes viram renderizadores de uma corrente já calculada e **não ganham
teste**. Um seam, não dois.

O visual — alternância de lados, espaçamento, cor de acento, tipografia — não é testável de
forma útil, e o passo 1 da entrega existe justamente para ser avaliado a olho. A ampliação
de imagem, a transição e o carregamento tardio são comportamento de DOM que só um seam de
componente pegaria, e o segundo seam não se paga.

### Ferramenta

O módulo de conteúdo importa mais de trinta imagens como módulos. Um runner sem o resolver
de assets do bundler não carrega o módulo sem loader adicional; um runner integrado ao
bundler carrega. É a única dependência de desenvolvimento nova.

## Out of Scope

**Rota própria para Service.** Rejeitada nesta spec e registrada no ADR 0004. Mexe na
estrutura do site e na home.

**O modal de Service.** Segue verde e com a apresentação atual, inclusive a inconsistência
de cor com a página de Project. Só a formatação de texto compartilhada o alcança.

**As rotas de serviços e de contato**, que hoje apontam ambas para a página "em construção".
Não é defeito, é decisão sobre o que fazer com essas páginas.

**Live Demo.** É nulo em todos os Projects e o glossário diz que a ausência é o estado
normal, então o caminho nunca renderizar está correto. Se algum Project deveria ter um é
decisão de conteúdo.

**O assistente de chat**, que o ADR 0001 registra como pretendido e não construído. O
componente existente aponta para um endereço de rede local e fala em primeira pessoa do
singular como uma pessoa, contrariando a definição de Brand no glossário. Sessão própria.

**Testes de componente.** Excluídos por decisão, não por falta de tempo.

**A vitrine, o card de Project e o restante da home**, exceto pelo parâmetro de URL que
abre um Service.

## Further Notes

O card de Project já exibe o Stack em cinza, e é por isso que o Stack não recebe destaque no
topo da página de detalhe: seria dar o primeiro lugar à informação que o Client acabou de
ler para decidir clicar.

Todas as Screenshots do site são paisagem, com proporção entre 1,5 e 1,68 — as telas
"mobile" de um dos Projects são composições de celulares fotografados lado a lado. Uma caixa
única serve para todas, e não há caso de retrato a resolver.

Duas decisões desta spec são consequência direta de divergências que já aconteceram no
conteúdo, não de risco hipotético: a tecnologia em prosa contradiz o Stack estruturado num
Project, e a mesma função de formatação existe duas vezes renderizando o mesmo negrito em
duas cores. É o padrão que o ADR 0001 identificou, reaparecendo dentro de um campo e na
apresentação.

O ADR 0001 recebe um adendo: ele registra corretamente a decisão em aberto sobre o
assistente de chat, mas não previa que o conteúdo de um campo ganharia estrutura própria.
