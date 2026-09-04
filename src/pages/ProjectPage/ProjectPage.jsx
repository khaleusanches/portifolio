import { useParams } from "react-router-dom"
import ProjectChainComponent from "../../components/ProjectsComponents/ProjectChainComponent"
import ProjectHeaderComponent from "../../components/ProjectsComponents/ProjectHeaderComponent"
import ProjectFooterComponent from "../../components/ProjectsComponents/ProjectFooterComponent"
import { getProject } from "../../content/projects"

function ProjectPage(){
    const { slug } = useParams()
    const project = getProject(slug)

    if (!project) return null

    return(
        <div className="w-full h-screen overflow-y-auto bg-base text-ink">
            <ProjectHeaderComponent project={project}/>
            <ProjectChainComponent project={project}/>
            <ProjectFooterComponent project={project}/>
        </div>
    )
}

export default ProjectPage
