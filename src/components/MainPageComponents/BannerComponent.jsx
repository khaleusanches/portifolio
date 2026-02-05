import React, { useEffect, useRef } from "react";
import icon from "../../assets/k-icon.png"

function BannerComponent() {
    const scrollRef = useRef(null);

    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;
        let rafId;
        const speed = 0.6;
        const step = () => {
            if (!el) return;
            const maxScroll = el.scrollHeight - el.clientHeight;
            if (maxScroll <= 0) {
                rafId = requestAnimationFrame(step);
                return;
            }
            const next = el.scrollTop + speed;
            el.scrollTop = next > maxScroll ? 0 : next;
            rafId = requestAnimationFrame(step);
        };
        rafId = requestAnimationFrame(step);
        return () => cancelAnimationFrame(rafId);
    }, []);

    return (
        <div className="w-[100vw] flex items-center justify-center space-x-0 h-[86vh] border-0 border-white text-white m-auto">

            <div className="h-full shadow-[0px_0px_10px_7px_rgba(0,0,0,0.38)] p-4 rounded-[8px]">
                <div ref={scrollRef} className="h-full max-h-full overflow-auto no-scrollbar lg:w-[18vw] md:w-0">
                    <div className="">
                        <img className="rounded-[24px]" src="https://cristophermartins.com/_vercel/image?url=%2Fimages%2Fportfolio%2Flyndus_cover.png&w=1536&q=100" alt="" />
                        <h2 className="mt-2 font-bold tracking-tight text-heading text-xl ml-1">SaaS para gestão e crescimento de finaças e bem-estar</h2>
                        <p className="text-gray-400 font-bold mt-2 text-sm ml-1">LYNDUS</p>
                    </div>
                    <div className="mt-4">
                        <img className="rounded-[24px]" src="https://cristophermartins.com/_vercel/image?url=%2Fimages%2Fportfolio%2Fsonora_kids_cover.png&w=1536&q=100" alt="" />
                        <h2 className="mt-2 font-bold tracking-tight text-heading text-xl ml-1">SaaS para gestão e crescimento de finaças e bem-estar</h2>
                        <p className="text-gray-400 font-bold mt-2 text-sm ml-1">LYNDUS</p>
                    </div>
                    <div className="mt-4">
                        <img className="rounded-[24px]" src="https://cristophermartins.com/_vercel/image?url=%2Fimages%2Fportfolio%2Flyndus_cover.png&w=1536&q=100" alt="" />
                        <h2 className="mt-2 font-bold tracking-tight text-heading text-xl ml-1">SaaS para gestão e crescimento de finaças e bem-estar</h2>
                        <p className="text-gray-400 font-bold mt-2 text-sm ml-1">LYNDUS</p>
                    </div>
                    <div className="mt-4">
                        <img className="rounded-[24px]" src="https://cristophermartins.com/_vercel/image?url=%2Fimages%2Fportfolio%2Fsonora_kids_cover.png&w=1536&q=100" alt="" />
                        <h2 className="mt-2 font-bold tracking-tight text-heading text-xl ml-1">SaaS para gestão e crescimento de finaças e bem-estar</h2>
                        <p className="text-gray-400 font-bold mt-2 text-sm ml-1">LYNDUS</p>
                    </div>
                </div>
            </div>
            <div className="w-[70vw] flex items-center justify-between flex-col">
                <div className="shadow-[-6px_9px_16px_-1px_rgba(0,0,0,0.38)] p-8 rounded-[8px] mt-16 w-[60vw]">
                    <h1 className="mb-2 text-4xl font-bold tracking-tight text-heading md:text-5xl lg:text-8xl ">Software Engineer</h1>
                    <h1 className="mb-4 text-4xl font-bold tracking-tight text-heading md:text-5xl lg:text-4xl" >I build scalable and efficient web applications</h1>
                    <button className="border-2 border-b-8 border-white rounded-[16px] p-4 hover:bg-white hover:border-black hover:text-black">MY SERVICES</button>
                </div>
                <div className="w-full flex justify-end">

                    <div className="shadow-[-6px_9px_16px_-1px_rgba(0,0,0,0.38)] p-8 rounded-[8px] lg:w-[20vw]">
                        <div className="pb">
                            <img src={icon} alt="Ícone" className="w-12 h-12 border-2 mb-2 border-white rounded-full"/>
                            <h2 className="mb-4 text-3xl font-extralight tracking-tight text-heading md:text-3xl lg:text-3xl">Hey, I'm <br /> Khaléu Sanches</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BannerComponent