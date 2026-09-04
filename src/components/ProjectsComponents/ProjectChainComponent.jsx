import { useState } from "react"
import ImagesMaximizeComponent from "../gerais/ImagesMaximizeComponent"
import { formatText } from "../gerais/formatText"
import { projectChain } from "../../content/projects"

/**
 * A corrente de blocos de um Project: cada Capability ao lado da Screenshot que a
 * demonstra, alternando lados no desktop; tela não reivindicada em largura cheia.
 *
 * No celular a alternância desaparece e o texto vem sempre antes da imagem — as
 * Screenshots são todas paisagem de 1600px e num celular aparecem pequenas por
 * definição, então ali elas ilustram e quem informa é o texto. É por isso que o texto
 * vem primeiro no DOM: no empilhamento do celular ele sai na frente sem esforço.
 *
 * A regra que monta a corrente não vive aqui — vive no módulo de conteúdo, onde é
 * testada sem renderizar nada.
 */
function Tela({ screenshot, prioritaria, onAmpliar }) {
    return (
        <figure className="m-0">
            <img
                src={screenshot.image}
                alt={screenshot.caption}
                width={screenshot.width}
                height={screenshot.height}
                loading={prioritaria ? "eager" : "lazy"}
                fetchPriority={prioritaria ? "high" : "auto"}
                decoding="async"
                onClick={() => onAmpliar(screenshot)}
                className="w-full h-auto rounded-2xl cursor-pointer shadow-[0_12px_34px_-12px_rgba(0,0,0,0.75)]"
            />
            <figcaption className="mt-3 text-sm text-gray-400">{screenshot.caption}</figcaption>
        </figure>
    )
}

function Capacidade({ capability }) {
    return (
        <>
            <h2 className="font-baskerville text-2xl md:text-3xl text-brand">{capability.title}</h2>
            <p className="mt-3 text-gray-300 leading-relaxed">{formatText(capability.text)}</p>
        </>
    )
}

function ProjectChainComponent({ project }) {
    const [ampliada, setAmpliada] = useState(null)
    const corrente = projectChain(project)

    // Alternância contada entre pares, para que dois pares seguidos continuem
    // alternando mesmo com um bloco só-imagem entre eles.
    let pares = 0
    const blocos = corrente.map((bloco) =>
        bloco.kind === "pair" ? { ...bloco, ordem: pares++ } : bloco
    )

    // A primeira imagem da página é o elemento LCP e não pode ser tardia.
    const primeiraTela = corrente.find((bloco) => bloco.screenshot)?.screenshot.slug

    return (
        <div className="mx-auto w-full max-w-[1400px] px-6 md:px-12 pb-24 space-y-16 md:space-y-28">
            {blocos.map((bloco, indice) => {
                if (bloco.kind === "capability") {
                    return (
                        <section key={`cap-${indice}`} className="mx-auto max-w-2xl">
                            <Capacidade capability={bloco.capability} />
                        </section>
                    )
                }

                if (bloco.kind === "screenshot") {
                    return (
                        <section key={bloco.screenshot.slug} className="w-full">
                            <Tela
                                screenshot={bloco.screenshot}
                                prioritaria={bloco.screenshot.slug === primeiraTela}
                                onAmpliar={setAmpliada}
                            />
                        </section>
                    )
                }

                return (
                    <section
                        key={bloco.screenshot.slug}
                        className={`flex flex-col gap-8 md:gap-12 md:items-center ${
                            bloco.ordem % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                        }`}
                    >
                        <div className="md:w-[38%] md:shrink-0">
                            <Capacidade capability={bloco.capability} />
                        </div>
                        <div className="md:flex-1 md:min-w-0">
                            <Tela
                                screenshot={bloco.screenshot}
                                prioritaria={bloco.screenshot.slug === primeiraTela}
                                onAmpliar={setAmpliada}
                            />
                        </div>
                    </section>
                )
            })}

            <ImagesMaximizeComponent
                screenshot={ampliada}
                isOpen={!!ampliada}
                onClose={() => setAmpliada(null)}
            />
        </div>
    )
}

export default ProjectChainComponent
