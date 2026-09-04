import { formatText } from "../gerais/formatText"

function ProjectDescriptionComponent({ project }){
    if (!project) return null

    return(
        <div className="w-full overflow-hidden md:overflow-auto md:w-[35vw] md:shrink-0 flex flex-col justify-between no-scrollbar md:h-full bg-gradient-to-b from-black to-gray-800 text-white">
            <div className="no-scrollbar">
                <h2 className="text-4xl font-bold tracking-tight md:text-3xl p-8 pb-4 font-baskerville">{project.headline}</h2>
                <hr className="border-gray-400 mx-4"/>
                <p className="p-8 text-md text-justify whitespace-pre-line">{formatText(project.description)}</p>
                {project.liveDemo && (
                    <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="block mx-8 mb-4 text-center border-2 rounded-full py-2 hover:bg-white hover:text-gray-800 font-bold">
                        Ver funcionando
                    </a>
                )}
            </div>
            <a href="https://wa.link/q560iy" target="_blank" rel="noopener noreferrer" className="overflow-hidden bg-brand text-white text-center hover:brightness-110 w-[50vw] md:w-[20vw] pb-4 pt-2 m-auto mt-4 mb-4 rounded-full font-bold">
                Solicitar orçamento
            </a>
        </div>
    )
}

export default ProjectDescriptionComponent
