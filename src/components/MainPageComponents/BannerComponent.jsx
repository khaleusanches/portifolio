import React, { useEffect, useRef, useState } from "react";
import icon from "../../assets/k-icon.png"
import LastProjectComponent from "../gerais/LastProjectComponent";
import OlimpicLinkImg from "../../../public/Olimpiclink.png"
import LaunaERP from "../../../public/launa.png"
import SystemERP from "../../../public/ERPSystem.png"
import AHM from "../../../public/AHM.png"
function BannerComponent() {
  const scrollRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
  const el = scrollRef.current;
  if (!el) return;

  let rafId;
  const speed = 0.8;

  const step = () => {
    if (!el) return;

    if (!isHovering) {
      const maxScroll = el.scrollHeight - el.clientHeight;
      if (maxScroll > 0) {
        // Loop contínuo: volta ao topo ao passar do máximo
        el.scrollTop = (el.scrollTop + speed) % maxScroll;
      }
    }

    rafId = requestAnimationFrame(step);
  };

  rafId = requestAnimationFrame(step);

  return () => cancelAnimationFrame(rafId);
}, [isHovering]); // isHovering vai pausar o scroll ao passar mouse

  return (
    <div className="w-[100vw] block md:flex items-center justify-center space-x-0 md:h-[100vh] border-0 border-white text-white m-auto font-['Libre_Baskerville'] overflow-hidden">
      <p className="-rotate-90 relative left-[60px] text-2xl w-[15vw] h-0 ml-[-20vw] ">Últimos Trabalhos</p>
      <div className="hidden md:block h-full shadow-[0px_0px_10px_7px_rgba(0,0,0,0.38)] p-4 rounded-[8px] relative left-0">
        <div
          ref={scrollRef}
          className="h-[92vh] overflow-auto no-scrollbar lg:w-[18vw] "
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <LastProjectComponent project="OlimpicLink" link={OlimpicLinkImg} title="Rede Social para esportistas da região de Diadema" language="Kotlin | Java | Python | SQL Server" />
          <LastProjectComponent project="Launa" link={LaunaERP} title="Software de Gestão Empresarial Privada" language="C# | Python | SQL Server" />
          <LastProjectComponent project="SystemERP" link={SystemERP} title="Website ERP - Para gerenciar tudo de uma empresa" language="React | C# | Python | SQL Server" />
          <LastProjectComponent project="AHM" link={AHM} title="AHM - Site de Apresentação" language="React | Tailwind | Javascript" />
        </div>
      </div>
            <div className="w-[100vw] md:w-[70vw] flex justify-between items-center flex-col mt-[0vh] md:mt-0">
                <div className="shadow-[-6px_9px_16px_-1px_rgba(0,0,0,0.38)] p-4 rounded-[8px] lg:mt-16 w-[70vw] md:w-[62.5vw]">
                    <h1 className="mb-2 text-4xl font-bold tracking-tight text-heading md:text-5xl lg:text-7xl font-['Arial'] overflow-hidden"><strong>KH</strong> <strong className="text-[#fe5800]">SOFTWARES</strong></h1>
                    <h1 className="mb-4 text-3xl font-bold tracking-tight text-heading md:text-5xl lg:text-4xl overflow-hidden" >Construímos aplicações eficiêntes para sua empresa</h1>
                    <a href="https://wa.link/q560iy" target="_blank" rel="noopener noreferrer" className="border-2 border-b-8 border-white font-bold rounded-[16px] p-4 hover:bg-white hover:border-gray-800 hover:text-gray-800 block w-[40vw] md:w-[12.5vw]">Entre em Contato</a>
                </div>
                <div className="w-full flex justify-end">

                    <div className="shadow-[-6px_9px_16px_-1px_rgba(0,0,0,0.38)] p-4 rounded-[8px] lg:w-[20vw] mb-[2vh] md:mb-[10vh]">
                        <div className="pb">
                            <h2 className="mb-4 text-3xl font-extralight tracking-tight text-heading md:text-3xl lg:text-3xl">By <br /> Khaléu Sanches</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex md:hidden w-full shadow-[0px_0px_10px_7px_rgba(0,0,0,0.38)] p-4 rounded-[8px]">
            <div   
              className="h-[40vh] flex justify-around overflow-x-auto no-scrollbar w-[120vw] md:w-[18vw] "
            >
              <LastProjectComponent project="OlimpicLink" link={OlimpicLinkImg} title="Rede Social para esportistas" language="Kotlin | Java | Python | SQL Server" />
              <LastProjectComponent project="Launa" link={LaunaERP} title="Software de Gestão Empresarial Privada" language="C# | Python | SQL Server" />
              <LastProjectComponent project="SystemERP" link={SystemERP} title="Website ERP" language="React | C# | Python | SQL Server" />
              <LastProjectComponent project="AHM" link={AHM} title="AHM - Site de Apresentação" language="React | Tailwind | Javascript" />
            </div>
          </div>
          

        </div>
    )
}
export default BannerComponent