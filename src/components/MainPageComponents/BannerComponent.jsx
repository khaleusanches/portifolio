import React, { useEffect, useRef, useState } from "react";
import icon from "../../assets/k-icon.png"
import ProjectCardComponent from "../gerais/ProjectCardComponent";
import bg from "../../../public/bg3.png"
import { featuredProjects } from "../../content/projects"
function BannerComponent() {
  const scrollRef = useRef(null);
  const featured = featuredProjects();
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    // O scroll é dirigido por script: qualquer scroll-behavior herdado do CSS
    // transformaria cada atribuição em animação e impediria o reposicionamento.
    el.style.scrollBehavior = "auto";

    let rafId;
    let pos = el.scrollTop;
    const speed = 0.8;

    const step = () => {
      if (!isHovering) {
        // A lista é renderizada duas vezes; uma volta completa é a distância
        // até o primeiro card da segunda cópia. Medida assim, e não por
        // scrollHeight / 2, não depende de como as margens caem nas pontas.
        const first = el.children[0];
        const firstOfSecondCopy = el.children[el.children.length / 2];
        const loopHeight = firstOfSecondCopy
          ? firstOfSecondCopy.offsetTop - first.offsetTop
          : 0;
        if (loopHeight > 0) {
          pos += speed;
          // Ao terminar a primeira cópia, recua uma volta inteira: o que está
          // na tela é idêntico, então a emenda não aparece.
          if (pos >= loopHeight) pos -= loopHeight;
          el.scrollTop = pos;
        }
      }

      rafId = requestAnimationFrame(step);
    };

    rafId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(rafId);
  }, [isHovering]); // isHovering vai pausar o scroll ao passar mouse

  return (
    <div style={{ backgroundImage: `url(${bg})` }} className="w-[100vw] sm:bg-contain  block md:flex items-center justify-center space-x-0 md:h-[100vh] border-0 border-white text-white m-auto font-['Libre_Baskerville'] overflow-hidden">
      <p className="-rotate-90 relative left-[60px] text-2xl w-[15vw] h-0 ml-[-20vw] ">Últimos Trabalhos</p>
      <div className="hidden md:block h-[88vh] shadow-[0px_0px_10px_7px_rgba(0,0,0,0.38)] p-4 rounded-[8px] relative left-0 mt-[12vh]">
        <div
          ref={scrollRef}
          className="h-full overflow-auto no-scrollbar lg:w-[18vw] "
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {[...featured, ...featured].map((project, i) => (
            <ProjectCardComponent key={`${project.slug}-${i}`} project={project} />
          ))}
        </div>
      </div>
            <div className="w-[100vw] md:w-[70vw] flex justify-between items-center flex-col mt-[16vh] md:mt-0">
                <div className="shadow-[-6px_9px_16px_-1px_rgba(0,0,0,0.38)] p-4 rounded-[8px] lg:mt-16 w-[90vw] md:w-[62.5vw] overflow-hidden">
                    <h1 className="mb-2 text-5xl font-bold tracking-tight text-heading md:text-5xl lg:text-7xl font-['Arial'] overflow-hidden"><strong>KH</strong> <strong className="text-[#fe5800]">SOFTWARES</strong></h1>
                    <h1 className="text-3xl font-bold tracking-tight text-heading md:text-5xl lg:text-4xl overflow-hidden mb-8" >Construímos aplicações eficiêntes para sua empresa</h1>
                    <a href="https://wa.link/q560iy" target="_blank" rel="noopener noreferrer" className="border-2 border-b-8 border-white font-bold rounded-[16px] p-4 hover:bg-white hover:border-gray-800 hover:text-gray-800 mb-8">Entre em Contato</a>
                    <p className="block h-8"></p>
                </div>
                <div className="w-full flex justify-end">

                    <div className="shadow-[-6px_9px_16px_-1px_rgba(0,0,0,0.38)] p-4 rounded-[8px] lg:w-[20vw] mb-[2vh] md:mb-[10vh]">
                        <div className="pb">
                            <h2 className="mb-4 text-3xl font-extralight tracking-tight text-heading md:text-3xl lg:text-3xl"></h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex md:hidden w-full shadow-[0px_0px_10px_7px_rgba(0,0,0,0.38)] p-4 rounded-[8px]">
            <div   
              className="h-[40vh] flex justify-around overflow-x-auto no-scrollbar w-[120vw] md:w-[18vw] "
            >
              {featured.map((project) => (
                <ProjectCardComponent key={project.slug} project={project} />
              ))}
            </div>
          </div>
          

        </div>
    )
}
export default BannerComponent