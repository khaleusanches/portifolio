# Capability referencia uma Screenshot, em vez de contê-la

A Description de um Project era um bloco único de prosa que já carregava estrutura por
convenção: cinco dos seis Projects escreviam `**Título:** parágrafo`, repetido, e o
componente reconstruía essa estrutura em tempo de execução partindo o texto no `**`.
Decidimos declarar essa estrutura — **Capability** entra no modelo — e fazer a Capability
apontar para a Screenshot que a demonstra, em vez de contê-la.

## Considered Options

**A Capability conter a Screenshot** é o modelo mais simples e torna o layout trivial:
cada bloco da página é uma Capability com a sua imagem. Foi rejeitada porque força 1:1 e
o conteúdo não é 1:1 em nenhum Project menos um:

| Project           | Capabilities | Screenshots |
|-------------------|--------------|-------------|
| RyccoDespachador  | 6            | 6           |
| RyccoManager      | 5            | 7           |
| OlimpicLink       | 0            | 4           |
| Launa             | 6            | 3           |
| SystemERP         | 6            | 2           |
| AHM               | 6            | 3           |

Com o modelo 1:1, o SystemERP obrigaria a inventar quatro telas que não existem ou a
descartar quatro capacidades reais, e o RyccoManager obrigaria a esconder duas telas — uma
delas a do assistente com LLM próprio, provavelmente a mais impressionante do Project.
O modelo estaria mandando no conteúdo.

**Inverter a direção**, com a Screenshot declarando qual Capability ela demonstra, foi
rejeitada por quebrar a leitura do glossário. A Capability é o que a Brand afirma e a
Screenshot é a prova dela, então a seta aponta de quem afirma para quem prova — igual a
Evidence, declarada no Project e derivada no Service.

**Referenciar por índice** na lista de Screenshots foi rejeitada por ser silenciosamente
frágil: reordenar as telas reembaralharia os pares sem nenhum erro. A referência é por
Slug, e Screenshot passou a ter Slug — antes a identidade dela era o texto da Caption,
usado como chave de lista, e duas Captions iguais quebrariam a renderização sem aviso.

**Não ligar as duas coisas** e deixar o layout alternar sozinho é o que existia, com
aparência melhor. Rejeitada porque a correspondência entre texto e tela é justamente o
que a página não tinha: o Client lia sobre cercas eletrônicas e via a tela de cercas
depois de rolar, sem nada ligando as duas.

## Consequences

A referência é opcional nos dois sentidos, e a página tem que lidar com os três casos.
A corrente de blocos de um Project tem três tipos: par (Capability + Screenshot),
capacidade (texto sozinho) e tela (imagem sozinha). Um Project com mais capacidades que
telas mostra blocos de texto sem imagem; um com mais telas que capacidades mostra telas
em largura cheia entre os pares. Quem esperar uma sequência limpa de pares vai achar
irregular — é o conteúdo que é irregular.

A regra que monta essa corrente vive no módulo de conteúdo, não no componente. Foi
decisão deliberada: é a lógica central do layout, e dentro do componente ela seria
intestável. É também o que permite o único seam de teste do projeto cobrir o layout sem
renderizar nada.

Um Project sem nenhuma Capability produz uma corrente só de telas, e isso é legítimo por
desenho: foi o que permitiu migrar um Project por vez, mantendo os outros funcionando no
caminho de renderização antigo.

Uma consequência de conteúdo, não de código: as Captions existentes foram escritas para
uma coluna sem títulos e por isso repetem o título da capacidade. Emparelhadas, elas
passam a repetir o que está logo ao lado, e todas precisam ser reescritas para descrever
o que a imagem mostra. É trabalho manual em 25 Captions.
