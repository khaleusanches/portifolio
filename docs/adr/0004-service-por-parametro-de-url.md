# Service é acessado por parâmetro de URL, não por rota própria

A página de um Project passou a apontar para os Services que ele comprova (Evidence), e
não havia destino: o Service existe só como modal dentro da home, aberto por
`command`/`commandfor`, e as rotas `/services` e `/contact` apontam ambas para a página
"em construção". Decidimos abrir o modal a partir de um parâmetro na home
(`/?service=slug`) em vez de dar rota própria ao Service.

## Considered Options

Criar `/services/:slug` é a resposta arquiteturalmente correta: dá endereço próprio ao
Service, torna-o compartilhável e linkável, e tira a home do caminho. Foi **rejeitada
por escopo, não por mérito**. Transformar Service em rota é decisão sobre a estrutura do
site: exige decidir o que a rota renderiza, o que acontece com o modal da home, e o que
fazer com as rotas `/services` e `/contact` que hoje levam a "em construção". Arrastar
isso para dentro de "deixar a página de Project mais bonita" é exatamente como o escopo
incha.

Deixar a Evidence como texto sem link foi rejeitada porque mantém o beco sem saída que a
decisão de mostrar Evidence existia para resolver: o site converte visitante em Client e
os Projects são a prova dos Services, mas a prova não levava à coisa que se pode
contratar.

Navegar para `/#services` e deixar o Client achar o card sozinho foi rejeitada por ser
frustrante: ele clica em "Websites" e cai numa lista de quatro cards.

## Consequences

O Service não tem endereço próprio. Um link para `/?service=website` é compartilhável e
funciona, mas anuncia a home, não o Service — e o parâmetro permanece na URL depois de o
Client fechar o modal.

Isto torna o parâmetro o caminho por onde um slug inválido chega vindo do Client, e é o
que obrigou `getService` a devolver ausência em vez de um Service de fallback: antes,
`/?service=qualquercoisa` abriria o modal do primeiro Service como se tivesse sido
pedido.

**A rota própria segue em aberto.** Esta decisão a adia, não a descarta. Quem for
implementá-la deve saber que o parâmetro existe e que há links apontando para ele.
