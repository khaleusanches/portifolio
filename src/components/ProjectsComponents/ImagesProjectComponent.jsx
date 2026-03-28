
import OlimpicLinkImg from "../../../public/Olimpiclink.png"
import LaunaERP from "../../../public/launa.png"
import SystemERP from "../../../public/ERPSystem.png"

import LaunaDashboard from "../../../public/LaunaDashboard.png"
import LaunaMonitor from "../../../public/LaunaMonitor.png"
import LaunaOne from "../../../public/LaunaOne.png"
import LaunaTwo from "../../../public/LaunaTwo.png"

import SystemERPOne from "../../../public/SystemERPOne.png"

import { useState, useEffect } from "react"

function ImagesProjectComponent({nameProject}){
    const [images, setImages] = useState([])
    let projects = {
        "Launa" : [
            LaunaDashboard,
            LaunaMonitor,
            LaunaOne,
            LaunaTwo
        ],
        "OlimpicLink" : [
            OlimpicLinkImg,
            LaunaERP,
            SystemERP
        ],
        "SystemERP" : [
            SystemERPOne,
            OlimpicLinkImg,
            LaunaERP
        ]
    }
    useEffect(() => (
        Object.entries(projects).forEach(([key, value]) => {
            if(key == nameProject) setImages(value)
        })
    ),[])
    return(
        <div className="w-[70vw] overflow-auto h-full">
            {images.map(image => (
                <div>
                    <img src={image} className="w-[45vw] h-[59vh] m-auto mt-8 rounded-[10px]"/>
                    <p className="text-white text-center mb-8 mt-2">Launa ERP</p>
                </div>
            ))}
            <div className="rounded-t-[64px] w-full bg-gradient-to-br from-black to-gray-800 text-white">
                <h2 className="text-4xl text-center font-bold tracking-tight text-heading md:text-3xl p-8 pb-4 font-['Libre_Baskerville']">Gostou desse projeto? Podemos criar algo sob medida para você.</h2>
            </div>
        </div>
    )
}

export default ImagesProjectComponent