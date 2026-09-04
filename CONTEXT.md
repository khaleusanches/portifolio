# Portfólio KH Software

Site institucional e vitrine de trabalhos da KH Software. Existe para converter visitantes
em clientes: apresenta os serviços vendidos e usa os trabalhos já entregues como prova.

> Glossário em construção. Termos ainda em discussão estão marcados com `(?)`.

## Language

**Brand**:
A KH Software, entidade que presta os serviços. É o sujeito de todo o conteúdo do site,
que fala em primeira pessoa do plural.
_Avoid_: eu, autor, desenvolvedor, empresa

**Client**:
Pessoa ou organização que contrata a Brand. É a audiência do site.
Um Client **não** se liga a um Project no modelo: quando o contratante é nomeado, ele é
citado na Description do Project, como texto.
_Avoid_: usuário, cliente final, lead

**End User**:
Quem usa um sistema que a Brand entregou. Nunca é o Client: o OlimpicLink tem End Users,
a Brand tem Clients.
_Avoid_: usuário, cliente

**Service**:
Uma modalidade de trabalho que a Brand vende (websites, automação de processos,
aplicativos mobile, consultoria). Tem descrição própria e faixas de preço.
_Avoid_: produto, oferta, solução

**Project**:
Um trabalho já entregue pela Brand, exibido no site como prova de capacidade.
_Avoid_: case, success case, portfólio, item de catálogo, trabalho

**Evidence**:
A relação entre um Project e os Services que ele comprova. Declarada apenas do lado do
Project; a lista de Projects de um Service é sempre derivada, nunca declarada.
_Avoid_: categoria, tipo, relação

**Tier**:
Um degrau de escopo de um Service, com faixa de preço e faixa de horas
("Pequeno Porte", "Automação Avançada"). Todo Service tem Tiers da mesma forma —
não existe Service cobrado por hora avulsa.
_Avoid_: plano, pacote, porte, faixa

**Featured**:
A lista ordenada de Projects que aparece na vitrine da home. Define quem aparece e em
que ordem. É curadoria da Brand, não recência: um Project não tem data no modelo.
_Avoid_: último, recente, destaque, LastProject

### Identidade e texto

**Slug**:
O identificador de um Project, de um Service ou de uma Screenshot. No Project é o que vai
na URL (`OlimpicLink`, `Launa`, `SystemERP`, `AHM`). É também como a Brand se refere à
coisa ao falar dela — não existe nome separado do Slug. Na Screenshot ele não aparece em
nenhuma tela: existe para que uma Capability possa apontar para ela sem depender da
ordem da lista nem do texto da Caption.
_Avoid_: nome, id, key, nameProject

**Pitch**:
A frase curta de valor que aparece no card, orientada ao benefício
("Rede Social para esportistas da região de Diadema"). Vale para Project e para Service.
Variações por tamanho de tela são truncamento de layout, não Pitches diferentes.
_Avoid_: título, subtítulo, descrição curta

**Headline**:
O título da tela de detalhe — página do Project ou modal do Service —, que nomeia a coisa
e sua categoria ("OlimpicLink — Plataforma Social Moderna para o Ecossistema Esportivo").
_Avoid_: título, nome completo

### Metadados de um Project

**Stack**:
As tecnologias efetivamente usadas no Project (Kotlin, C#, SQL Server). É factual e
verificável no código do Project.
_Avoid_: language, linguagens, tecnologias

**Live Demo**:
Um endereço público onde o visitante usa o Project ele mesmo. Sua ausência é o estado
normal — sistemas entregues a um Client não ficam abertos —, e não se explica dentro da
Description.
_Avoid_: privado, link, site do projeto, demonstração

**Marks**:
O posicionamento que a Brand atribui ao Project (`#AltaPerformance`, `#Escalável`).
Distinto de Stack porque é escolha editorial, não fato derivável do código.
_Avoid_: tags, hashtags, categorias

### Conteúdo de um Project

**Capability**:
Uma capacidade do sistema que a Brand escolhe contar ("Voz em Tempo Real", "Gestão de
Licenças"), com título e texto próprios, e opcionalmente a Screenshot que a demonstra.
É curadoria, não a lista completa do que o sistema faz. Uma Capability sem Screenshot é
legítima, e uma Screenshot que nenhuma Capability reivindicou também: as contagens não
fecham na maioria dos Projects.
_Avoid_: funcionalidade, feature, recurso, módulo, highlight

**Description**:
O parágrafo de abertura da página de detalhe: o que o Project resolve e para quem. Não é
o texto longo — o detalhe vive nas Capabilities.
_Avoid_: texto, corpo, conteúdo, descrição longa

**Screenshot**:
Uma imagem de tela do Project exibida na página de detalhe.
_Avoid_: imagem, foto, print

**Caption**:
A linha que descreve **o que a imagem mostra** ("Grupos e rádios à esquerda; viaturas
posicionadas no mapa em tempo real"). Nunca renomeia a Capability ao lado: quando as
duas dizem a mesma coisa, é a Caption que está errada. Obrigatória — Screenshot sem
Caption não entra na página.
_Avoid_: id, legenda, título da imagem

## Fora deste contexto

**Quote Request**:
O pedido de orçamento é a *saída* do site, não uma entidade dele. Todo CTA leva para o
WhatsApp; o site não calcula, registra nem acompanha orçamentos.
