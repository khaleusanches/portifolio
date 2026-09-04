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

/**
 * A borda de 1px não é enfeite: as Screenshots são claras e o fundo é escuro, então sem
 * ela a imagem encosta no fundo sem nada que a contenha — e a sombra, sendo preta sobre
 * escuro, não cumpre esse papel.
 */
function Tela({ screenshot, prioritaria, onAmpliar }) {
    // Tela de celular ocupando a largura da coluna ficaria com mais de mil pixels de
    // altura e empurraria todo o resto para fora da vista. Retrato é limitado pela
    // altura e centralizado; paisagem continua ocupando a largura.
    const retrato = screenshot.height > screenshot.width

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
                className={`h-auto rounded-2xl cursor-pointer ring-1 ring-line/15 shadow-[0_18px_40px_-18px_rgba(0,0,0,0.9)] ${
                    retrato ? "mx-auto w-auto max-h-[70vh] max-w-full" : "w-full"
                }`}
            />
            <figcaption className={`mt-3 text-sm text-muted ${retrato ? "text-center" : ""}`}>
                {screenshot.caption}
            </figcaption>
        </figure>
    )
}

/**
 * O título fica branco, e não no acento da marca. As Screenshots são o argumento da
 * página; com os títulos também em laranja o acento aparecia em dezessete lugares na
 * mesma tela — Marks, títulos, ênfase no texto e o botão — e deixava de acentuar. A
 * serifa e o corpo já hierarquizam sem cor.
 */
function Capacidade({ capability }) {
    return (
        <>
            <h2 className="font-baskerville text-2xl md:text-3xl text-ink">{capability.title}</h2>
            <p className="mt-3 text-ink/80 leading-relaxed">{formatText(capability.text)}</p>
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
