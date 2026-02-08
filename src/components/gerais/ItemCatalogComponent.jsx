import { useState } from "react";

function ItemCatalogComponent({ link, title, language, onMouseEnter, onMouseLeave }) {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div
            className={`mt-4 mb-4 transition-all min-w-[16vw] w-[16vw] h-[35vh] m-auto duration-300 cursor-pointer relative ${
                isHovered ? "translate-y-8 scale-110" : "scale-95"
            }`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <img className="rounded-[24px] h-[90%] border border-white" src={link} alt="" />
            <h2 className="mt-2 mb-2 font-bold tracking-tight text-heading text-md ml-1">{title}</h2>
        </div>
    )
}
export default ItemCatalogComponent