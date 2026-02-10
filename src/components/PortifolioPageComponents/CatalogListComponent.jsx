import { useRef } from 'react'
import ItemCatalogComponent from "../gerais/ItemCatalogComponent"

function CatalogListComponent({margin}){
    const scrollContainerRef = useRef(null)
    
    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            const scrollAmount = 400
            if (direction === 'left') {
                scrollContainerRef.current.scrollBy({
                    left: -scrollAmount,
                    behavior: 'smooth'
                })
            } else {
                scrollContainerRef.current.scrollBy({
                    left: scrollAmount,
                    behavior: 'smooth'
                })
            }
        }
    }
    
    return(
        <div ref={scrollContainerRef} className={`overflow-x-auto p-12 pt-0 m-8 z-20 ${margin}`}>
            <div className="p-4 rounded-[8px] w-[100vw] max-w-[100vw] flex items-center justify-center space-x-4 z-10">
                <button onClick={() => scroll('left')} className="cursor-pointer absolute -left-0 font-semibold overflow-hidden z-10 border-2 border-gray-700 rounded-[12px] group px-8 py-2 -rotate-90">
                    <span className="relative z-10 text-gray-700 group-hover:text-white text-xl duration-500">^</span>
                    <span className="absolute w-full h-full bg-gray-700 -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
                    <span className="absolute w-full h-full bg-gray-700 -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
                </button>
                <button onClick={() => scroll('right')} className="cursor-pointer absolute -right-0 font-semibold overflow-hidden z-10 border-2 border-gray-700 rounded-[12px] group px-8 py-2 rotate-90">
                    <span className="relative z-10 text-gray-700 group-hover:text-white text-xl duration-500">^</span>
                    <span className="absolute w-full h-full bg-gray-700 -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
                    <span className="absolute w-full h-full bg-gray-700 -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
                </button>
                <ItemCatalogComponent link="https://cristophermartins.com/_vercel/image?url=%2Fimages%2Fportfolio%2Flyndus_cover.png&w=1536&q=100" title="SaaS para gestão e crescimento" language="LYNDUS"
                />
                <ItemCatalogComponent link="https://cristophermartins.com/_vercel/image?url=%2Fimages%2Fportfolio%2Flyndus_cover.png&w=1536&q=100" title="SaaS para gestão e crescimento" language="LYNDUS"
                />
                <ItemCatalogComponent link="https://cristophermartins.com/_vercel/image?url=%2Fimages%2Fportfolio%2Flyndus_cover.png&w=1536&q=100" title="SaaS para gestão de finanças e bem-estar" language="LYNDUS"
                />
                <ItemCatalogComponent link="https://cristophermartins.com/_vercel/image?url=%2Fimages%2Fportfolio%2Flyndus_cover.png&w=1536&q=100" title="SaaS para gestão" language="LYNDUS"
                />
                <ItemCatalogComponent link="https://cristophermartins.com/_vercel/image?url=%2Fimages%2Fportfolio%2Flyndus_cover.png&w=1536&q=100" title="SaaS para gestão  " language="LYNDUS"
                />
                <ItemCatalogComponent link="https://cristophermartins.com/_vercel/image?url=%2Fimages%2Fportfolio%2Flyndus_cover.png&w=1536&q=100" title="SaaS para gestão  " language="LYNDUS"
                />
                <ItemCatalogComponent link="https://cristophermartins.com/_vercel/image?url=%2Fimages%2Fportfolio%2Flyndus_cover.png&w=1536&q=100" title="SaaS para gestão  " language="LYNDUS"
                />
                <ItemCatalogComponent link="https://cristophermartins.com/_vercel/image?url=%2Fimages%2Fportfolio%2Flyndus_cover.png&w=1536&q=100" title="SaaS para gestão  " language="LYNDUS"
                />
                <ItemCatalogComponent link="https://cristophermartins.com/_vercel/image?url=%2Fimages%2Fportfolio%2Flyndus_cover.png&w=1536&q=100" title="SaaS para gestão  " language="LYNDUS"
                />
                <ItemCatalogComponent link="https://cristophermartins.com/_vercel/image?url=%2Fimages%2Fportfolio%2Flyndus_cover.png&w=1536&q=100" title="SaaS para gestão  " language="LYNDUS"
                />
            </div>
        </div>
    )   
}
export default CatalogListComponent