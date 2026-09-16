/**
 * O eixo do site.
 *
 * Antes dele não havia grid: cada seção inventava a própria margem em medida de
 * viewport — `ml-[5vw]`, `w-[95vw]`, `ml-[-5vw]`, `ml-[-20vw]` — então nada alinhava
 * entre seções e tudo desalinhava junto quando a tela mudava de tamanho. A regra
 * passou a ser: nenhum componente define a própria margem horizontal, quem posiciona
 * é este.
 *
 * O respiro lateral é fixo em rem e não em viewport. Em `vw` ele encolhe justamente
 * onde é mais necessário — no celular, onde a margem some e o texto encosta na borda.
 *
 * `as` existe porque o Container quase sempre é também o elemento semântico da seção:
 * sem isso toda seção nasceria com uma `div` a mais só para carregar a largura.
 */
function Container({ as: Elemento = "div", className = "", children, ...resto }) {
    return (
        <Elemento
            className={`mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12 ${className}`}
            {...resto}
        >
            {children}
        </Elemento>
    )
}

export default Container
