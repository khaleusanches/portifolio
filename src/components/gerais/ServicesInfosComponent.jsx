import { useNavigate } from "react-router-dom"
import { projectsEvidencing } from "../../content/projects"

function ServicesInfosComponent({service}){
    const navigate = useNavigate()
    const evidence = projectsEvidencing(service.slug)

    function formatText(text) {
        return text.split("**").map((part, index) => 
            index % 2 === 1 
                ? <strong className="text-[#fe5800]" key={index}>{part}</strong> 
                : part
        )
    }
    const id = `configuration-${service.slug}`
     return(
        <div>
            <button command="show-modal" commandfor={id} className="button">{service.cta}</button>
            <el-dialog>
                <dialog id={id} aria-labelledby="dialog-title" className="fixed inset-0 size-auto max-h-none max-w-none overflow-y-auto bg-transparent backdrop:bg-transparent">
                    <el-dialog-backdrop class="fixed inset-0 bg-gray-900/50 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"></el-dialog-backdrop>

                    <div tabIndex="0" className="flex min-h-full items-center justify-center p-4 text-center focus:outline-none sm:items-center sm:p-0">
                        <el-dialog-panel className="relative w-[90vw] md:w-[40vw] transform overflow-hidden rounded-lg bg-gray-800 text-left shadow-xl outline -outline-offset-1 outline-white/10 transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 data-closed:sm:translate-y-0 data-closed:sm:scale-95">
                            <div className="bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4 w-full]">
                                <div className="sm:flex sm:items-start w-full">
                                    <div className="mt-3 justify-between w-full text-center sm:mt-0 sm:ml-0 sm:text-left">
                                        <div className="flex justify-between items-center">
                                            <h3 id="dialog-title" className="text-base font-semibold text-white">{service.headline}</h3>
                                            <button type="button" command="close" commandfor={id} className="inline-flex w-[10vw] justify-center rounded-md bg-red-500/80 px-2 py-1 text-sm font-semibold text-white inset-ring inset-ring-white/5 hover:bg-white/20 md:mt-0 sm:w-auto">X</button>
                                        </div>
                                        <hr className="mt-2 mb-4 border-white" />
                                        <div className="w-full flex h-[40vh] md:h-[60vh]">
                                            <div className="ml-[1vw] w-full">
                                                <label className="text-md text-white border-b-2 border-white/40 pb-1 cursor-pointer hover:text-white hover:border-white text-start">Informações Técnicas</label>
                                                <div className="flex items-center mt-[2vh] gap-x-[1vw] mb-[4vh]">
                                                    <label className="text-sm text-justify block text-gray-200">{formatText(service.description)}</label>
                                                </div>
                                                <div className="flex items-center mt-[2vh] gap-x-[1vw] mb-[4vh]">
                                                    <label className="text-sm text-justify flex flex-wrap justify-stretch md:w-full text-gray-200">
                                                         {service.tiers.map((tier, index) => (
                                                            <div key={index} className="mb-3 p-3 mr-8 md:mr-3 rounded bg-gray-700/40">
                                                            <p className="text-white font-bold ">{tier.name}</p>
                                                            <p className="text-gray-300">{tier.hours}</p>
                                                            <p className="text-green-400 font-semibold">{tier.price}</p>
                                                            </div>
                                                        ))}
                                                    </label>
                                                </div>
                                                {evidence.length > 0 && (
                                                    <div className="mb-[4vh]">
                                                        <label className="text-md text-white border-b-2 border-white/40 pb-1 text-start">Projetos que comprovam</label>
                                                        <div className="flex flex-wrap gap-2 mt-[2vh]">
                                                            {evidence.map((project) => (
                                                                <button
                                                                    key={project.slug}
                                                                    type="button"
                                                                    onClick={() => navigate(`/project/${project.slug}`)}
                                                                    className="text-sm text-left px-3 py-2 rounded bg-gray-700/40 text-gray-200 hover:text-white hover:bg-gray-700"
                                                                >
                                                                    {project.pitch}
                                                                </button>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-700/25 px-4 py-3 flex justify-center sm:flex-row-reverse sm:px-6">
                                <a href="https://wa.link/q560iy" target="_blank" rel="noopener noreferrer" className="text-sm md:text-lg overflow-hidden bg-green-500 text-center hover:bg-green-600 w-[30vw] md:w-[12vw] pb-2 pt-2 px-4 m-auto mt-4 mb-4 rounded-full font-bold">
                                    Orçamento
                                </a>                            
                            </div>
                        </el-dialog-panel>
                    </div>
                </dialog>
            </el-dialog>
        </div>
    )
}

export default ServicesInfosComponent