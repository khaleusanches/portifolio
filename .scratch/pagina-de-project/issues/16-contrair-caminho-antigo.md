# 16: Contrair — o caminho de renderização antigo morre

**What to build:** A contração. Enquanto os Projects migravam um a um, a página manteve dois
caminhos: a corrente para quem tinha Capabilities e a renderização de Description em prosa
para quem não tinha. Com todos migrados, o caminho antigo não tem mais nenhum consumidor e
sai — e a invariante que proíbe bloco de tecnologia em qualquer Description passa a valer de
verdade, porque agora nenhuma Description tem um.

Sem isso o projeto fica carregando um segundo caminho de renderização que ninguém usa, e a
decisão do ADR 0003 fica sendo disciplina manual em vez de invariante executável — que é
exatamente o modo de falha que o ADR 0001 documentou.

**Blocked by:** 13, 14, 15 (todos os Projects precisam ter migrado).

**Status:** done

- [x] Nenhum Project depende do caminho de renderização antigo
- [x] O caminho antigo é removido, junto com a reconstrução de estrutura por manipulação de
      string na página de Project
- [x] Teste: nenhuma Description contém bloco de tecnologia em prosa
- [x] O ADR 0003 é escrito, com a divergência C# / Java como evidência
- [x] O ADR 0001 recebe o adendo: ele não previa que o conteúdo de um campo ganharia
      estrutura própria
- [x] A suíte completa passa
