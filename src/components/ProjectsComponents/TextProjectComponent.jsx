import { useEffect, useState } from "react"

function TextProjectComponent({nameProject}){
    const [project, setProject] = useState({
        "title" : "",
        "marks" : [],
        "text" : ""
    })
    const [projects] = useState({
        "Launa" : {
            "title" : "Launa Enterprise Resource Planning",
            "marks" : ["#Developer", "#Design"],
            "text" : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus consequuntur quae, ex soluta officiis facere amet, consequatur libero reprehenderit obcaecati fugit, autem iusto? Commodi earum totam odit voluptatem sequi aliquam."
        },
        "OlimpicLink" : {
            "title" : "Criação de Logotipo com Manual de Diretrizes da Marca",
            "marks" : ["Graphics", "Design"],
            "text" : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus consequuntur quae, ex soluta officiis facere amet, consequatur libero reprehenderit obcaecati fugit, autem iusto? Commodi earum totam odit voluptatem sequi aliquam."
        },
        "SystemERP" : {
            "title" : "Criação de Logotipo com Manual de Diretrizes da Marca",
            "marks" : ["Graphics", "Design"],
            "text" : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus consequuntur quae, ex soluta officiis facere amet, consequatur libero reprehenderit obcaecati fugit, autem iusto? Commodi earum totam odit voluptatem sequi aliquam."
        }
    })
    
    useEffect(() => (
        Object.entries(projects).forEach(([key, value]) => {
            if(key == nameProject){
                setProject(value)
            }
        })
    ), [])
    return(
        <div className="w-[30vw] flex flex-col justify-between overflow-auto h-full bg-gradient-to-b from-black to-gray-800 text-white">
            <div>
                <h2 className="text-4xl font-bold tracking-tight text-heading md:text-3xl p-8 pb-4 font-['Libre_Baskerville']">{project.title}</h2>
                <p className="p-8 text-justify font-['Libre_Baskerville']">{project.text}</p>
            </div>
            <a href="https://wa.link/q560iy" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-center hover:bg-green-600 w-[20vw] py-3 m-auto mb-4 rounded-full font-bold">
                Solicitar orçamento
            </a>
        </div>
    )
}

export default TextProjectComponent