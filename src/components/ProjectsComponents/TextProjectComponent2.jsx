import { useEffect, useState } from "react"

function TextProjectComponent2({nameProject}){
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
        <div className="w-[100vw] h-[15%] bottom-0 bg-gradient-to-br from-black to-gray-800 text-white">
            <h2 className="text-4xl text-center font-bold tracking-tight text-heading md:text-3xl p-8 pb-4 font-['Libre_Baskerville']">Gostou desse projeto? Podemos criar algo sob medida para você.</h2>
        </div>
    )
}

export default TextProjectComponent2