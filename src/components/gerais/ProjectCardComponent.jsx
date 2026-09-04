import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ProjectCardComponent({ project, onMouseEnter, onMouseLeave }) {
    const navigate = useNavigate()
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
        onMouseEnter?.();
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        onMouseLeave?.();
    };

    return (
        <div onClick={() => navigate(`/project/${project.slug}`)}
            className={`flex-shrink-0 md:flex-shrink mt-4 transition-all w-[50vw] md:w-[17vw] m-auto duration-300 cursor-pointer relative ${
                isHovered ? "translate-y-4 scale-100" : "scale-95"
            }`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <img className="rounded-[24px]" src={project.cover} alt=""
                 width={project.coverWidth} height={project.coverHeight} decoding="async" />
            <h2 className="mt-2 font-bold tracking-tight text-xl ml-1">{project.pitch}</h2>
            {/* Cor fixa, e não token: o card só aparece sobre o herói, que é uma imagem
                escura nos dois temas. Seguir o tema aqui deixaria o texto ilegível no claro. */}
            <p className="text-gray-400 font-bold mt-2 text-sm ml-1">{project.stack.join(" | ")}</p>
        </div>
    )
}
export default ProjectCardComponent
