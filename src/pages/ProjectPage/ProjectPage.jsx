import { useNavigate, useParams } from "react-router-dom"
import ProjectScreenshotsComponent from "../../components/ProjectsComponents/ProjectScreenshotsComponent"
import ProjectDescriptionComponent from "../../components/ProjectsComponents/ProjectDescriptionComponent"
import ProjectChainComponent from "../../components/ProjectsComponents/ProjectChainComponent"
import { formatText } from "../../components/gerais/formatText"
import { getProject } from "../../content/projects"

function ProjectPage(){
    const navigate = useNavigate()
    const { slug } = useParams()
    const project = getProject(slug)
    const temCorrente = (project?.capabilities?.length ?? 0) > 0

    const fechar = (
        <button onClick={() => {navigate("/")}} className="text-white absolute right-6 top-4 border-[1px] rounded-full px-4 py-2 hover:bg-white hover:border-gray-800 hover:text-gray-800">X</button>
    )

    /* Caminho antigo, para os Projects que ainda não declararam Capabilities: a
       Description inteira em prosa ao lado da pilha de Screenshots. Some no ticket 16,
       quando o último Project tiver migrado. */
    if (!temCorrente) {
        return(
            <div className="w-full h-screen overflow-y-auto">
                <div className="block md:flex h-full">
                    <ProjectDescriptionComponent project={project}/>
                    <ProjectScreenshotsComponent project={project}/>
                </div>
                {fechar}
            </div>
        )
    }

    return(
        <div className="w-full h-screen overflow-y-auto bg-gradient-to-b from-black to-gray-900 text-white">
            {/* O topo definitivo — Marks em destaque, Stack discreto, Evidence com link —
                é o ticket 11. Aqui vai o mínimo para a corrente ter cabeça: a Headline,
                a ficha técnica e o parágrafo de abertura. */}
            <header className="mx-auto w-full max-w-[1400px] px-6 md:px-12 pt-16 pb-12 md:pt-24">
                <h1 className="font-baskerville text-3xl md:text-5xl font-bold tracking-tight max-w-4xl">
                    {project.headline}
                </h1>
                <p className="mt-4 text-sm text-gray-400 font-bold">
                    {project.stack.join(" | ")}
                </p>
                <p className="mt-8 max-w-3xl text-gray-300 leading-relaxed">
                    {formatText(project.description)}
                </p>
            </header>

            <ProjectChainComponent project={project}/>

            {/* O pedido de orçamento no fim, depois de a prova estar dada. O ticket 10
                acrescenta em volta dele o próximo Project e a volta à vitrine. */}
            <div className="mx-auto w-full max-w-[1400px] px-6 md:px-12 pb-24 flex justify-center">
                <a href="https://wa.link/q560iy" target="_blank" rel="noopener noreferrer"
                   className="bg-brand text-white text-center hover:brightness-110 rounded-full font-bold px-10 py-4">
                    Solicitar orçamento
                </a>
            </div>

            {fechar}
        </div>
    )
}

export default ProjectPage
