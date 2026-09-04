import { Link } from "react-router-dom"
import ThemeToggleComponent from "../gerais/ThemeToggleComponent"
import { formatText } from "../gerais/formatText"
import { servicesEvidencedBy } from "../../content/services"

/**
 * O topo da página de um Project.
 *
 * Os Marks recebem mais peso que o Stack, e o acento da marca é deles. Dois motivos: o
 * Client já leu o Stack no card antes de clicar, então destacá-lo aqui seria dar o
 * primeiro lugar ao que ele acabou de ler; e com o mesmo peso visual os dois viram a
 * mesma sopa de pastilhas, e a tela mostraria como uma coisa dois conceitos que o
 * CONTEXT.md distingue — Marks é escolha editorial da Brand, Stack é fato verificável.
 *
 * A Evidence leva ao Service por parâmetro de URL (ADR 0004): o Client se convenceu
 * olhando a prova, e aqui ele chega ao que pode contratar, com escopo e faixa de preço.
 */
function ProjectHeaderComponent({ project }) {
    const services = servicesEvidencedBy(project)

    return (
        <header className="mx-auto w-full max-w-[1400px] px-6 md:px-12 pt-8 pb-12 md:pb-16">
            {/* A página de Project não tem NavBar, então o seletor de tema mora aqui. */}
            <div className="flex items-center justify-between gap-4">
                <Link to="/" className="inline-block text-sm text-muted hover:text-ink">
                    ← Voltar para a vitrine
                </Link>
                <ThemeToggleComponent/>
            </div>

            <h1 className="mt-8 font-baskerville text-3xl md:text-5xl font-bold tracking-tight max-w-4xl">
                {project.headline}
            </h1>

            {project.marks.length > 0 && (
                <p className="mt-5 flex flex-wrap gap-x-5 gap-y-1 text-brand font-bold text-lg md:text-xl">
                    {project.marks.map((mark) => <span key={mark}>{mark}</span>)}
                </p>
            )}

            <p className="mt-8 max-w-3xl text-ink/80 leading-relaxed">
                {formatText(project.description)}
            </p>

            {/* Ficha técnica: o fato, discreto, e o caminho para o que se contrata. */}
            <div className="mt-10 pt-6 border-t border-line/10 flex flex-col gap-4 md:flex-row md:items-baseline md:gap-12">
                <p className="text-sm text-muted">
                    <span className="text-muted/70">Tecnologia </span>
                    {project.stack.join(" · ")}
                </p>
                {services.length > 0 && (
                    <p className="text-sm text-muted">
                        <span className="text-muted/70">Comprova </span>
                        {services.map((service, indice) => (
                            <span key={service.slug}>
                                {indice > 0 && " · "}
                                <Link to={`/?service=${service.slug}`} className="underline decoration-line/25 hover:text-ink hover:decoration-current">
                                    {service.headline}
                                </Link>
                            </span>
                        ))}
                    </p>
                )}
            </div>
        </header>
    )
}

export default ProjectHeaderComponent
