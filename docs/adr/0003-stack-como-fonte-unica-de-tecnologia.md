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

A invariante que proíbe bloco de tecnologia em qualquer Description é executável e está
no seam de teste do módulo de conteúdo, junto com um limite de tamanho da Description e a
proibição de blocos titulados dentro dela — sem isso a Description volta a crescer e a
estrutura volta a ficar codificada em convenção de negrito. Não é disciplina manual, que
é justamente o modo de falha que o ADR 0001 documentou.

O Launa não tinha um bloco chamado "Tecnologia Utilizada", mas tinha dois equivalentes
sob outros títulos — "Backend Development" e "Database Management" —, que eram tecnologia
em prosa sob outro nome. A invariante nomeia os três.

A divergência C# / Java do SystemERP resolveu-se por consequência, não por escolha: a
prosa que dizia Java desapareceu, e o Stack estruturado, que é agora a única fonte, já
dizia C#. Fica em aberto uma pergunta de fato que só quem construiu o sistema responde —
se o Stack está certo. Se o backend era Java, é o `stack` que precisa mudar, não a prosa,
que não existe mais.
