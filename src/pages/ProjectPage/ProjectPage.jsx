import { useNavigate, useParams } from "react-router-dom"
import ProjectScreenshotsComponent from "../../components/ProjectsComponents/ProjectScreenshotsComponent"
import ProjectDescriptionComponent from "../../components/ProjectsComponents/ProjectDescriptionComponent"
import ProjectChainComponent from "../../components/ProjectsComponents/ProjectChainComponent"
import ProjectHeaderComponent from "../../components/ProjectsComponents/ProjectHeaderComponent"
import ProjectFooterComponent from "../../components/ProjectsComponents/ProjectFooterComponent"
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
            <ProjectHeaderComponent project={project}/>
            <ProjectChainComponent project={project}/>
            <ProjectFooterComponent project={project}/>
        </div>
    )
}

export default ProjectPage
