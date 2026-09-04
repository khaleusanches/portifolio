# 09: Capability no modelo, a corrente de blocos, e o primeiro Project de ponta a ponta

**What to build:** O tracer bullet. O Client abre a página do Project de console de despacho
e encontra, em vez de um paredão de texto ao lado de uma pilha de imagens, uma corrente
vertical em que cada capacidade do sistema aparece emparelhada com a tela que a demonstra.

Capability entra no modelo de domínio: uma capacidade nomeada do sistema que a Brand
escolhe contar, com título e texto próprios, e opcionalmente a Screenshot que a demonstra.
A Capability **referencia** a Screenshot, não a contém — as contagens não fecham na maioria
dos Projects, e conter forçaria inventar telas ou descartar capacidades reais. A referência
é por Slug, e Screenshot passa a ter Slug: hoje a identidade de Screenshot é o texto da
Caption usada como chave de lista, e duas Captions iguais quebrariam a renderização sem
aviso.

A regra que monta a corrente nasce no módulo de conteúdo, não no componente: dadas as
Capabilities e as Screenshots, produz a sequência ordenada de blocos — pareados quando a
Capability reivindica uma tela, só-imagem para as telas não reivindicadas. É a regra central
do layout e o motivo de o seam ser um só.

Os outros cinco Projects continuam na renderização atual, intactos.

**Blocked by:** 01 (harness de teste), 06 (formatação de negrito unificada).

**Status:** ready-for-agent

- [ ] Capability existe no modelo, com título, texto e referência opcional a Screenshot
- [ ] Screenshot tem Slug próprio, e a lista deixa de ser chaveada pelo texto da Caption
- [ ] A derivação da corrente vive no módulo de conteúdo e é testada sem renderizar nada
- [ ] Teste: toda referência de Capability aponta para um Slug de Screenshot existente no
      mesmo Project
- [ ] Teste: Slugs de Screenshot são únicos dentro de um Project
- [ ] Teste: a corrente produz pares na ordem das Capabilities e blocos só-imagem para as
      telas não reivindicadas
- [ ] Teste: um Project sem nenhuma Capability produz uma corrente só de imagens
- [ ] A página do Project de console de despacho renderiza a corrente, com pares alternando
      lados no desktop e blocos só-imagem em largura cheia
- [ ] No celular a alternância desaparece, tudo empilha em uma coluna, e o texto vem antes
      da imagem
- [ ] As Captions daquele Project são reescritas para descrever o que a imagem mostra, em
      vez de renomear a capacidade
- [ ] Os outros cinco Projects continuam renderizando como hoje, sem regressão
- [ ] O ADR 0002 é escrito, com a tabela de contagens como evidência
- [ ] O `CONTEXT.md` ganha Capability e tem Description, Slug e Caption redefinidos
