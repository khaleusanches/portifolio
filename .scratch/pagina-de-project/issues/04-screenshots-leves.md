# 04: Screenshots leves e sem salto de layout

**What to build:** A página de Project pinta as telas de uma vez, e não pula enquanto
carrega. Hoje as Screenshots dos Projects mais antigos pesam ~2MB cada, são servidas num
espaço de tela muito menor que o nativo, e vão aparecendo uma a uma — o que o Client
percebe como acabamento ruim, não como lentidão. As dimensões explícitas são parte do
redesenho e não otimização: sem elas nenhuma escolha de espaçamento sobrevive ao
carregamento.

**Blocked by:** Nada (pode começar imediatamente).

**Status:** ready-for-agent

- [ ] Todas as Screenshots estão no formato leve já usado pelos Projects mais recentes
- [ ] Toda Screenshot tem dimensões explícitas, e a página não salta enquanto carrega
- [ ] As Screenshots fora da primeira dobra carregam de forma tardia
- [ ] O arquivo de projeto gráfico de 14MB sai do diretório público
- [ ] A imagem avulsa de 2MB, não referenciada por nenhum conteúdo, sai do diretório
      público
- [ ] O build deixa de conter os arquivos removidos
