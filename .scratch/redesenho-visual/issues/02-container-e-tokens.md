# 02: Container e tokens de espaço, sombra e raio

**What to build:** Todas as seções passam a se alinhar a um mesmo eixo. Hoje não existe
grid: cada seção inventa a própria margem em medida de viewport — `ml-[5vw]`, `w-[95vw]`,
`ml-[-5vw]`, `ml-[-20vw]`, `left-[60px]`, `h-[88vh]` — então nada alinha entre seções e
tudo desalinha junto quando a tela muda de tamanho. Entra um `Container` de largura
máxima com respiro lateral responsivo, e com ele os tokens que faltam: espaço vertical
entre seções, sombra suave em dois níveis e raio de canto. A sombra
`0 0 10px 7px rgba(0,0,0,.38)`, que hoje é a marca visual mais forte do herói, sai.

Prefactor: nada de aparência nova nasce aqui. O resultado é a mesma home de hoje,
alinhada e com sombra suave.

**Blocked by:** Nada (pode começar imediatamente).

**Status:** ready-for-agent

- [ ] Existe um `Container` único, usado por todas as seções da home
- [ ] Nenhuma seção define a própria margem horizontal em medida de viewport
- [ ] O espaço vertical entre seções vem de um token, e é o mesmo entre todas
- [ ] Sombra e raio vêm de tokens; nenhum `shadow-[...]` literal sobra no JSX
- [ ] A vitrine continua sangrando até a borda da tela, como exceção declarada em comentário
- [ ] O layout continua correto em telas estreitas, largas e no celular
- [ ] Os dois temas continuam corretos, e nenhum teste existente quebra
