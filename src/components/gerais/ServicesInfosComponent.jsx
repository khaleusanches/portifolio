import { useCallback, useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom"
import { projectsEvidencing } from "../../content/projects"
import { contato } from "../../content/marca"
import { formatText } from "./formatText"
import { useServiceNaUrl } from "./useServiceNaUrl"

/**
 * O detalhe de um Service, em diálogo.
 *
 * É um `<dialog>` comandado por referência, e não pelos elementos `<el-dialog>` com
 * `command="show-modal"` que estavam aqui: aqueles são elementos customizados de uma
 * biblioteca que este projeto não carrega, então metade das classes deles
 * (`data-closed:`, `data-enter:`) nunca pintou nada, e o comportamento dependia de uma
 * API de invoker que só existe em navegador recente.
 *
 * O diálogo nativo já entrega três coisas que não precisam de código: Escape fecha, o
 * foco fica preso dentro enquanto está aberto, e ao fechar o foco volta para o botão
 * que o abriu. O que ele não entrega é o clique fora — daí o ouvinte abaixo.
 *
 * Os Tiers viram três colunas comparáveis. Antes eram três caixas dentro de um
 * `<label>` com `flex-wrap`, o que os deixava de larguras diferentes e impedia comparar
 * preço com preço.
 *
 * O Service continua sendo aberto por parâmetro de URL (ADR 0004): é assim que a
 * Evidence da página de Project chega até aqui.
 */
function ServicesInfosComponent({ service }) {
    const navigate = useNavigate()
    const dialogo = useRef(null)
    const evidence = projectsEvidencing(service.slug)
    const tituloId = `titulo-${service.slug}`
    const slugNaUrl = useServiceNaUrl()

    const abrir = useCallback(() => {
        const elemento = dialogo.current
        if (elemento && !elemento.open) elemento.showModal()
    }, [])

    /* Abre este Service quando a URL o pede: o Client clica no Service que um Project
       comprova e cai na home com o detalhe já aberto. */
    useEffect(() => {
        if (slugNaUrl === service.slug) abrir()
    }, [slugNaUrl, service.slug, abrir])

    /* O clique no backdrop tem como alvo o próprio <dialog>: o painel interno é que
       recebe os cliques de dentro. Comparar o alvo é o que separa um do outro. */
    const aoClicar = (evento) => {
        if (evento.target === dialogo.current) dialogo.current.close()
    }

    return (
        <div>
            <button type="button" className="button" onClick={abrir}>
                {service.cta}
            </button>

            <dialog
                ref={dialogo}
                aria-labelledby={tituloId}
                onClick={aoClicar}
                className="m-auto w-[92vw] max-w-3xl rounded-card bg-base p-0 text-ink shadow-card backdrop:bg-black/60"
            >
                <div className="flex items-start justify-between gap-4 border-b border-line/10 px-6 py-5">
                    <h3 id={tituloId} className="font-baskerville text-xl md:text-2xl">
                        {service.headline}
                    </h3>
                    <button
                        type="button"
                        onClick={() => dialogo.current?.close()}
                        aria-label="Fechar"
                        className="shrink-0 rounded-full p-2 text-muted transition-colors hover:bg-line/10 hover:text-ink"
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                            <path d="M18 6 6 18M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Altura máxima com rolagem, e não altura fixa: com altura fixa o que
                    passasse do limite era cortado e ficava inalcançável — foi o que
                    aconteceu quando a lista de Evidence cresceu. */}
                <div className="max-h-[65vh] overflow-y-auto px-6 py-6">
                    <p className="medida-leitura leading-relaxed text-ink/85">
                        {formatText(service.description)}
                    </p>

                    <p className="rotulo-secao mt-10">Escopo e investimento</p>
                    <ul className="mt-4 grid gap-4 sm:grid-cols-3">
                        {service.tiers.map((tier) => (
                            <li
                                key={tier.name}
                                className="rounded-card border border-line/10 bg-line/5 p-4"
                            >
                                <p className="font-bold">{tier.name}</p>
                                <p className="mt-2 text-lg font-semibold text-brand">{tier.price}</p>
                                <p className="mt-1 text-sm text-muted">{tier.hours}</p>
                            </li>
                        ))}
                    </ul>

                    {evidence.length > 0 && (
                        <>
                            <p className="rotulo-secao mt-10">Projetos que comprovam</p>
                            <ul className="mt-4 flex flex-wrap gap-2">
                                {evidence.map((project) => (
                                    <li key={project.slug}>
                                        <button
                                            type="button"
                                            onClick={() => navigate(`/project/${project.slug}`)}
                                            className="rounded-full border border-line/10 bg-line/5 px-4 py-2 text-left text-sm text-ink/85 transition-colors hover:bg-line/10 hover:text-ink"
                                        >
                                            {project.pitch}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </>
                    )}
                </div>

                <div className="flex justify-center border-t border-line/10 bg-line/5 px-6 py-5">
                    <a
                        href={contato.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-brand px-8 py-3 font-bold text-white transition hover:brightness-110"
                    >
                        Solicitar orçamento
                    </a>
                </div>
            </dialog>
        </div>
    )
}

export default ServicesInfosComponent
