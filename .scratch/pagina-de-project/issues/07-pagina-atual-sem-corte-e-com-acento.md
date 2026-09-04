# 07: A página atual deixa de cortar imagem e ganha o acento único

**What to build:** O Client vê a coluna de telas inteira, e não faltando uma faixa. Hoje as
duas colunas somam mais que a largura da tela e uma regra global de overflow esconde o
estouro em vez de resolvê-lo, cortando parte das imagens em silêncio. O botão de orçamento
passa ao laranja da marca: o verde é a cor do WhatsApp mas não comunica WhatsApp ao Client,
e competia com o acento da marca e com os três cinzas da página.

Deliberadamente temporário: o ticket 09 remove as duas colunas de vez. Este ticket existe
para que o primeiro passo da entrega seja avaliável a olho, que foi o motivo de escalonar.

**Blocked by:** Nada (pode começar imediatamente).

**Status:** done

- [x] Nenhuma parte da coluna de Screenshots fica fora da tela no desktop
- [x] O botão de orçamento da página de Project usa o laranja da marca
- [x] A página não ganha rolagem horizontal
- [x] Fica registrado no ticket que o modal de Service segue verde até ser tratado
