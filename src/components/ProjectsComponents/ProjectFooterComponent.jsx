import { Link } from "react-router-dom"
import { nextFeatured } from "../../content/projects"

/**
 * O fim da página de um Project: onde o argumento fecha.
 *
 * O pedido de orçamento aparece aqui e só aqui. No topo ele pediria antes de provar;
 * fixo na tela cobriria as Screenshots no celular, que é onde já sobra menos espaço — e
 * a página inteira existe para mostrá-las.
 *
 * O próximo Project segue a ordem de curadoria da vitrine. No último não há próximo:
 * ver nextFeatured.
 */
function ProjectFooterComponent({ project }) {
    const proximo = nextFeatured(project.slug)

    return (
        <footer className="mx-auto w-full max-w-[1400px] px-6 md:px-12 pb-24">
            <div className="pt-10 border-t border-line/10 flex flex-col items-center gap-8">
                <a
                    href="https://wa.link/q560iy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-brand text-white text-center hover:brightness-110 rounded-full font-bold px-10 py-4"
                >
                    Solicitar orçamento
                </a>

                {proximo ? (
                    <Link to={`/project/${proximo.slug}`} className="group text-center">
                        <span className="block text-sm text-muted/80">Próximo projeto</span>
                        <span className="mt-1 block text-lg text-ink/80 group-hover:text-ink">
                            {proximo.pitch} →
                        </span>
                    </Link>
                ) : (
                    <Link to="/" className="text-sm text-muted hover:text-ink">
                        ← Voltar para a vitrine
                    </Link>
                )}
            </div>
        </footer>
    )
}

export default ProjectFooterComponent
