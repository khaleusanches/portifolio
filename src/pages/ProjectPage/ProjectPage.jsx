import { useNavigate, useParams } from "react-router-dom"
import ProjectScreenshotsComponent from "../../components/ProjectsComponents/ProjectScreenshotsComponent"
import ProjectDescriptionComponent from "../../components/ProjectsComponents/ProjectDescriptionComponent"
import { getProject } from "../../content/projects"

function ProjectPage(){
    const navigate = useNavigate()
    const { slug } = useParams()
    const project = getProject(slug)

    return(
        <div className="w-full h-screen overflow-y-auto">
            <div className="block md:flex h-full">
                <ProjectDescriptionComponent project={project}/>
                <ProjectScreenshotsComponent project={project}/>
            </div>
            <button onClick={() => {navigate("/")}} className="text-white absolute right-6 top-4 border-[1px] rounded-full px-4 py-2 hover:bg-white hover:border-gray-800 hover:text-gray-800">X</button>
        </div>
    )
}

export default ProjectPage
