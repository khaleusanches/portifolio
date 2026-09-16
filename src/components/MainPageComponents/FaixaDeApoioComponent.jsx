import Container from "../gerais/Container"
import { Cascata, Reveal } from "../gerais/Reveal"

/**
 * Uma faixa de marcas: rótulo, título e a fileira.
 *
 * Serve a "Quem está com a gente" e a "Stack" sem saber qual das duas está exibindo —
 * recebe `logos` ou `nomes`. A diferença entre parceiro e tecnologia é de conteúdo, e
 * dois componentes iguais divergiriam no primeiro ajuste de espaçamento.
 *
 * O logo é desenhado como máscara sobre a cor do texto, e não como `<img>`: assim o
 * mesmo arquivo serve aos dois temas. Um SVG escuro posto como imagem some no tema
 * escuro, e manter duas versões de cada marca é o tipo de duplicação que a ADR 0005
 * tirou das cores.
 */
function FaixaDeApoioComponent({ id, rotulo, titulo, logos, nomes, className = "" }) {
    const tituloId = `titulo-${id}`

    return (
        <section id={id} aria-labelledby={tituloId} className={`secao ${className}`}>
            <Container>
                <Reveal>
                    <p className="rotulo-secao">{rotulo}</p>
                    <h2 id={tituloId} className="mt-3 font-baskerville text-titulo">
                        {titulo}
                    </h2>
                </Reveal>

                <Cascata
                    as="ul"
                    className="mt-12 flex flex-wrap items-center justify-center gap-x-12 gap-y-10 sm:justify-start sm:gap-x-16"
                >
                    {logos?.map((marca) => (
                        <Cascata.Item as="li" key={marca.slug}>
                            {/* O nome fica no texto, visível só para leitor de tela: a
                                máscara é uma forma sem alternativa textual própria. */}
                            <span className="sr-only">{marca.nome}</span>
                            <span
                                aria-hidden="true"
                                style={{
                                    maskImage: `url(${marca.logo})`,
                                    WebkitMaskImage: `url(${marca.logo})`,
                                    maskRepeat: "no-repeat",
                                    WebkitMaskRepeat: "no-repeat",
                                    maskPosition: "center",
                                    WebkitMaskPosition: "center",
                                    maskSize: "contain",
                                    WebkitMaskSize: "contain",
                                }}
                                className="block h-8 w-28 bg-muted transition-colors hover:bg-ink sm:h-10 sm:w-32"
                            />
                        </Cascata.Item>
                    ))}

                    {nomes?.map((nome) => (
                        <Cascata.Item as="li" key={nome}>
                            <span className="text-lg font-semibold text-muted transition-colors hover:text-ink sm:text-xl">
                                {nome}
                            </span>
                        </Cascata.Item>
                    ))}
                </Cascata>
            </Container>
        </section>
    )
}

export default FaixaDeApoioComponent
