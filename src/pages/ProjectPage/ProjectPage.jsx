import { useParams } from "react-router-dom"
import ProjectChainComponent from "../../components/ProjectsComponents/ProjectChainComponent"
import ProjectHeaderComponent from "../../components/ProjectsComponents/ProjectHeaderComponent"
import ProjectFooterComponent from "../../components/ProjectsComponents/ProjectFooterComponent"
import { getProject } from "../../content/projects"
import NaoEncontradaPage from "../NaoEncontradaPage/NaoEncontradaPage"

function ProjectPage(){
    const { slug } = useParams()
    const project = getProject(slug)

    // Slug inexistente é endereço inexistente: devolver null deixaria a página em branco.
    if (!project) return <NaoEncontradaPage />

    return(
        <div className="w-full bg-base text-ink">
            <ProjectHeaderComponent project={project}/>
            <ProjectChainComponent project={project}/>
            <ProjectFooterComponent project={project}/>
        </div>
    )
}

export default ProjectPage
