import SystemERP from "/public/ERPSystem.png"

import OlimpicLinkOne from "/public/OlimpiclinkOne.png"
import OlimpicLinkTwo from "/public/OlimpiclinkTwo.png"
import OlimpicLinkThree from "/public/OlimpiclinkThree.png"
import OlimpicLinkFour from "/public/OlimpiclinkFour.png"

import LaunaDashboard from "/public/LaunaDashboard.png"
import LaunaMonitor from "/public/LaunaMonitor.png"
import LaunaOne from "/public/LaunaOne.png"
import LaunaTwo from "/public/LaunaTwo.png"

import SystemERPOne from "/public/SystemERPOne.png"
import SystemERPTwo from "/public/SystemERPTwo.png"
import ahmum from "/public/ahmum.jpg"
import ahmdois from "/public/ahmdois.jpg"
import ahmtres from "/public/Image.jpg"

import { useState, useEffect } from "react"
import ImagesMaximizeComponent from "../gerais/ImagesMaximizeComponent"

function ImagesProjectComponent({nameProject}){
    const [images, setImages] = useState([])
    const [selectedImage, setSelectedImage] = useState(null)
    let projects = {
        "Launa" : [
            {
                image: LaunaDashboard,
                id: "DashBoard Finaceiro"
            },
            {
                image: LaunaOne,
                id: "Tela de Pedidos feitos a Fornecedores"
            },
            {
                image: LaunaTwo,
                id: "Tela de Gerenciamento de Funcionarios"
            }
        ],
        "OlimpicLink" : [
            {
                image: OlimpicLinkTwo,
                id: "Tela de comunidade"
            },
            {
                image: OlimpicLinkThree,
                id: "Tela inicial e tela com todas as comunidades"
            },
            {
                image: OlimpicLinkFour,
                id: "Tela de perfil da comunidade | Tela de eventos da comunidade"
            },
            {
                image: OlimpicLinkOne,
                id: "Tela de perfil do usuário"
            }
        ],
        "SystemERP" : [
            {
                image: SystemERPOne,
                id: "Tela de DashBoards"
            },
            {
                image: SystemERPTwo,
                id: "Tela de compras de produtos"
            },
            {
                image: SystemERPOne,
                id: ""
            },
            {
                image: SystemERP,
                id: ""
            }
        ],
        "AHM" : [
            {
                image: teste,
                id: "Home do site"
            },
            {
                image: "/public/ahmdois.jpg",
                id: "Serviços oferecidos"
            },
            {
                image: "/public/Image.png",
                id: "Tela de contato"
            }
        ]
    }
    useEffect(() => (
        Object.entries(projects).forEach(([key, value]) => {
            if(key == nameProject) setImages(value)
        })
    ),[])
    return (
        <div className="w-full md:w-[70vw]">
            {images.map((img) => (
                <div key={img.id}>
                    <img
                        src={img.image}
                        onClick={() => setSelectedImage(img.image)}
                        className="cursor-pointer p-4 md:w-[45vw] md:h-[59vh] m-auto mt-8 rounded-[32px]"
                    />

                    <p className="text-white text-center mb-8 mt-2">
                        {img.id}
                    </p>
                </div>
            ))}

            {/* Modal */}
            <ImagesMaximizeComponent
                image={selectedImage}
                isOpen={!!selectedImage}
                onClose={() => setSelectedImage(null)}
            />
        </div>
    )
}

export default ImagesProjectComponent