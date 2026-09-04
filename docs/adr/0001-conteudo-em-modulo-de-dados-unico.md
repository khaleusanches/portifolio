# Conteúdo de Projects e Services vive num módulo de dados único

O conteúdo do site (Pitch, Headline, Description, Stack, Screenshots, Tiers) estava
hardcoded dentro dos componentes que o renderizam, e já havia divergido: OlimpicLink tinha
três textos diferentes em três arquivos, e duas Screenshots do SystemERP estavam sem
Caption. Decidimos mover Projects e Services para um módulo de dados único que os
componentes leem, aceitando a indireção extra em troca de tornar a divergência impossível.

## Considered Options

Manter o conteúdo colocado junto do JSX é o padrão comum em React e é mais simples de
ler num arquivo só. Foi rejeitado porque cada dado aparece em mais de um lugar — o Pitch
é repetido nas variantes desktop e mobile do mesmo componente — e colocation não tem
resposta para isso além de disciplina manual, que já falhou.

## Consequences

Quem chegar ao repo vai ver componentes sem conteúdo e pode achar que é sobre-engenharia
para um site de quatro projetos. É deliberado.

Uma decisão relacionada ficou **em aberto**: um assistente de chat fechado ao modelo de
domínio (só Projects, Services, Tiers e Evidence, sem geração livre) está pretendido mas
não construído. Ele seria o segundo consumidor destes dados e reforçaria esta decisão, mas
não é justificativa dela — o módulo único se sustenta pela divergência que já existe.
