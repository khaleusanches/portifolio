import { Link } from "react-router-dom"

/**
 * O cartão de um Project: capa, Pitch e Stack.
 *
 * É um link e não uma `div` com `onClick`. Três coisas vinham de graça e faltavam:
 * o teclado alcança e aciona, o botão do meio abre em nova aba, e — o que mais importa
 * para ser achado — o rastreador de busca enxerga um caminho até a página do Project.
 * Um `onClick` em `div` não é um link para ninguém além do mouse.
 *
 * A largura vem de quem o coloca. O mesmo cartão serve à coluna da vitrine, à faixa
 * horizontal do celular e à grade de Projects, e cada uma dessas tem uma largura certa
 * diferente — decidi-la aqui obrigaria a desfazê-la três vezes.
 *
 * `duplicata` existe por causa da vitrine, que renderiza a lista duas vezes para a
 * emenda não aparecer. A segunda cópia é a mesma coisa outra vez: anunciá-la faria o
 * leitor de tela ler cada Project em dobro.
 */
function ProjectCardComponent({ project, onMouseEnter, onMouseLeave, duplicata = false }) {
    return (
        <Link
            to={`/project/${project.slug}`}
            aria-hidden={duplicata || undefined}
            tabIndex={duplicata ? -1 : undefined}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className="group block w-full py-4 focus:outline-none"
        >
            <img
                src={project.cover}
                alt={`Tela do ${project.slug}: ${project.pitch}`}
                width={project.coverWidth}
                height={project.coverHeight}
                loading="lazy"
                decoding="async"
                className="w-full rounded-card shadow-card transition duration-300 group-hover:-translate-y-1 group-hover:shadow-card-hover group-focus-visible:-translate-y-1 group-focus-visible:ring-2 group-focus-visible:ring-brand"
            />
            <h3 className="mt-3 text-lg font-bold leading-snug tracking-tight">{project.pitch}</h3>
            <p className="mt-1 text-sm text-muted">{project.stack.join(" · ")}</p>
        </Link>
    )
}

export default ProjectCardComponent
