import { useState } from "react";

function LastProjectComponent({ link, title, language, onMouseEnter, onMouseLeave }) {
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
        <div
            className={`scale-95 mt-4 transition-all w-[17vw] m-auto duration-300 cursor-pointer relative ${
                isHovered ? "translate-y-4 scale-100" : ""
            }`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <img className="rounded-[24px]" src={link} alt="" />
            <h2 className="mt-2 font-bold tracking-tight text-heading text-xl ml-1">{title}</h2>
            <p className="text-gray-400 font-bold mt-2 text-sm ml-1">{language}</p>
        </div>
    )
}
export default LastProjectComponent