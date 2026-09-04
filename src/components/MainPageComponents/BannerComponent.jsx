import React, { useEffect, useRef, useState } from "react";
import icon from "../../assets/k-icon.png"
import ProjectCardComponent from "../gerais/ProjectCardComponent";
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
    let anterior = null;

    // Pixels por segundo, e não por quadro: com valor por quadro a vitrine corre
    // ao dobro num monitor de 120Hz e a "velocidade" deixa de ser um número
    // comparável.
    const VELOCIDADE = 150;

    const step = (agora) => {
      // Um salto grande significa aba oculta ou travamento; avançar o equivalente
      // faria a vitrine pular vários cards de uma vez ao voltar.
      const decorrido = anterior === null ? 0 : Math.min(agora - anterior, 100);
      anterior = agora;

      if (!isHovering) {
        // Filhos: [espaçador, cópia 1 (N cards), cópia 2 (N cards)].
        // Uma volta é a distância entre o primeiro card de cada cópia, medida
        // por offsetTop — não por scrollHeight / 2, que depende de como as
        // margens caem nas pontas do container.
        const count = (el.children.length - 1) / 2;
        const first = el.children[1];
        const firstOfSecondCopy = el.children[1 + count];
        if (first && firstOfSecondCopy) {
          const loopHeight = firstOfSecondCopy.offsetTop - first.offsetTop;
          pos += (VELOCIDADE * decorrido) / 1000;
          // Ao alcançar a segunda cópia, recua uma volta: o conteúdo na tela é
          // idêntico, então a emenda não aparece. E como o recuo para no
          // primeiro card real, o espaçador do topo nunca reaparece.
          if (pos >= firstOfSecondCopy.offsetTop) pos -= loopHeight;
          el.scrollTop = pos;
        }
      }

      rafId = requestAnimationFrame(step);
    };

    rafId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(rafId);
  }, [isHovering]); // isHovering vai pausar o scroll ao passar mouse

  return (
    <div style={{ backgroundImage: "var(--banner)" }} className="w-[100vw] sm:bg-contain  block md:flex items-center justify-center space-x-0 md:h-[100vh] border-0 text-ink m-auto font-baskerville overflow-hidden">
      <p className="-rotate-90 relative left-[60px] text-2xl w-[15vw] h-0 ml-[-20vw] ">Últimos Trabalhos</p>
      <div className="hidden md:block h-[88vh] shadow-[0px_0px_10px_7px_rgba(0,0,0,0.38)] p-4 rounded-[8px] relative left-0 mt-[12vh]">
        <div
          ref={scrollRef}
          className="h-full overflow-auto no-scrollbar lg:w-[18vw] "
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Espaçador: a coluna começa vazia e os projetos entram rolando.
              Fica acima da primeira cópia, então sai de cena na primeira volta
              e não reaparece. */}
          <div aria-hidden="true" className="h-[30vh]" />
          {[...featured, ...featured].map((project, i) => (
            <ProjectCardComponent key={`${project.slug}-${i}`} project={project} />
          ))}
        </div>
      </div>
            <div className="w-[100vw] md:w-[70vw] flex justify-between items-center flex-col mt-[16vh] md:mt-0">
                <div className="shadow-[-6px_9px_16px_-1px_rgba(0,0,0,0.38)] p-4 rounded-[8px] lg:mt-16 w-[90vw] md:w-[62.5vw] overflow-hidden">
                    <h1 className="mb-2 text-5xl font-bold tracking-tight md:text-5xl lg:text-7xl font-['Arial'] overflow-hidden"><strong>KH</strong> <strong className="text-brand">SOFTWARES</strong></h1>
                    <h1 className="text-3xl font-bold tracking-tight md:text-5xl lg:text-4xl overflow-hidden mb-8" >Construímos aplicações eficiêntes para sua empresa</h1>
                    <a href="https://wa.link/q560iy" target="_blank" rel="noopener noreferrer" className="border-2 border-b-8 border-ink font-bold rounded-[16px] p-4 hover:bg-ink hover:text-base mb-8">Entre em Contato</a>
                    <p className="block h-8"></p>
                </div>
                <div className="w-full flex justify-end">

                    <div className="shadow-[-6px_9px_16px_-1px_rgba(0,0,0,0.38)] p-4 rounded-[8px] lg:w-[20vw] mb-[2vh] md:mb-[10vh]">
                        <div className="pb">
                            <h2 className="mb-4 text-3xl font-extralight tracking-tight md:text-3xl lg:text-3xl"></h2>
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