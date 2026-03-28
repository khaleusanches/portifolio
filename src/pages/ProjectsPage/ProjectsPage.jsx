import { useNavigate, useParams } from "react-router-dom"
import ImagesProjectComponent from "../../components/ProjectsComponents/ImagesProjectComponent"
import TextProjectComponent from "../../components/ProjectsComponents/TextProjectComponent"
import TextProjectComponent2 from "../../components/ProjectsComponents/TextProjectComponent2"

function ProjectsPage(){
    const navigate = useNavigate()
    const { nameProject } = useParams()
    return(
        <div className="w-full h-screen overflow-x-auto">
            <div className="flex h-full">
                <TextProjectComponent nameProject={nameProject}/>
                <ImagesProjectComponent nameProject={nameProject}/>
            </div>
            <button onClick={() => {navigate("/")}} className="text-white absolute right-6 top-4 border-[1px] rounded-full px-4 py-2 hover:bg-white hover:border-gray-800 hover:text-gray-800">X</button>
        </div>
    )
}

export default ProjectsPage