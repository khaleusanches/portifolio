# Stack estruturado é a única fonte sobre tecnologia

Quatro Projects terminavam a Description com um bloco em prosa — `**Tecnologia
Utilizada:** Frontend em React e Tailwind; backend em C#...` — repetindo o que o campo
`stack` já declarava de forma estruturada. Decidimos que o Stack é a única fonte e que a
prosa de tecnologia sai das Descriptions.

Este ADR estende o 0001 para dentro de um campo: lá o problema era o mesmo dado morando
em vários componentes; aqui é o mesmo dado morando duas vezes no mesmo registro, uma
estruturada e uma em prosa.

## Considered Options

**Manter os dois**, tratando a prosa como narrativa ("como foi construído") e o Stack
como ficha técnica, foi rejeitada pela evidência de que não se mantêm sincronizados: o
`stack` do SystemERP lista `["React", "C#", "Python", "SQL Server"]` e a prosa do mesmo
Project dizia "React no frontend e **Python e Java** no backend". C# no dado, Java no
texto, no mesmo registro. Não é risco hipotético — já havia divergido.

**Manter só a prosa** e não exibir o Stack estruturado foi rejeitada porque o Stack é
fato verificável e é o que um Client técnico procura, e porque o card da vitrine já o
exibe: o dado precisa existir de todo jeito.

## Consequences

A informação de tecnologia deixa de aparecer no corpo do texto e passa a aparecer só
como ficha técnica. Quem estiver acostumado à Description antiga vai achar que a página
"perdeu" a seção de tecnologia. É deliberado.

A decisão vale a partir de agora, mas a invariante que a torna executável só entra
quando o último Project tiver migrado: enquanto houver Description em prosa no caminho de
renderização antigo, um teste que proíba o bloco de tecnologia falharia por conteúdo que
ainda não foi recortado. Até lá isto é disciplina manual — e disciplina manual é
justamente o modo de falha que o ADR 0001 documentou, então a invariante não é opcional,
é a última etapa da migração.

Ao recortar a prosa do SystemERP foi preciso decidir qual das duas versões estava certa,
C# ou Java. Essa é uma decisão de fato sobre o sistema, não de modelagem, e cabe a quem o
construiu.
