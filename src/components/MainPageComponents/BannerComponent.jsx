import { useEffect, useRef, useState } from "react"
import { useReducedMotion } from "framer-motion"
import Container from "../gerais/Container"
import SplitText from "../gerais/SplitText"
import ProjectCardComponent from "../gerais/ProjectCardComponent"
import { featuredProjects } from "../../content/projects"
import { contato } from "../../content/marca"

/**
 * O herói: a frase de abertura à esquerda, a vitrine ancorada na borda direita.
 *
 * A vitrine é a identidade do site e o motor dela não mudou — continua dirigida por
 * `requestAnimationFrame`, com a volta regulada por tempo, duas cópias da lista e um
 * recuo de uma volta na emenda. O que mudou foi a moldura: ela sangra até a borda da
 * tela e esmaece nas pontas, em vez de viver numa caixa com sombra de 38% de preto.
 *
 * O esmaecimento é máscara, e não gradiente sobreposto: sobre uma imagem de fundo que
 * troca com o tema, um gradiente teria de conhecer a cor de trás e erraria num dos dois.
 *
 * No desktop a coluna é posicionada fora do Container de propósito — é a única exceção
 * declarada à regra de que ninguém define a própria margem horizontal. No celular ela
 * volta para o fluxo, como faixa horizontal.
 *
 * Ela precisa ficar ACIMA do Container na pilha. O `pr-[38%]` do Container reserva o
 * espaço da coluna aos olhos, mas o elemento continua ocupando a largura inteira: sem
 * o z-20, o Container fica por cima e come todo clique na vitrine e todo hover que a
 * pausaria. O clique só não cai no vazio porque a coluna inteira é
 * `pointer-events-none` e só o rolador reativa — assim o texto do herói continua
 * selecionável sob a faixa transparente à esquerda dela.
 */

/* A vitrine é regulada por tempo de volta, não por velocidade: é assim que a duração
   se mantém a mesma em qualquer tela e não muda sozinha quando um Project entra ou sai
   de Featured. A velocidade sai daqui, dividida pela altura real da volta.

   Por segundo, e nunca por quadro: com valor por quadro a mesma vitrine corre ao dobro
   num monitor de 120Hz. */
const SEGUNDOS_POR_VOLTA = 30

/* Onde a coluna começa e termina de aparecer. Como máscara CSS, para que valha nos dois
   temas sem conhecer a cor do fundo. */
const ESMAECIMENTO =
    "linear-gradient(to bottom, transparent 0%, #000 14%, #000 86%, transparent 100%)"

function BannerComponent() {
    const scrollRef = useRef(null)
    const featured = featuredProjects()
    const [isHovering, setIsHovering] = useState(false)
    const semMovimento = useReducedMotion()

    useEffect(() => {
        const el = scrollRef.current
        if (!el) return

        // A vitrine é movimento contínuo e automático, e é o pior elemento da página
        // para quem tem sensibilidade vestibular: sob a preferência por menos
        // movimento ela não rola, e a coluna vira uma lista comum, rolável à mão.
        if (semMovimento) return

        // O scroll é dirigido por script: qualquer scroll-behavior herdado do CSS
        // transformaria cada atribuição em animação e impediria o reposicionamento.
        el.style.scrollBehavior = "auto"

        let rafId
        let pos = el.scrollTop
        let anterior = null

        const step = (agora) => {
            // Um salto grande significa aba oculta ou travamento; avançar o equivalente
            // faria a vitrine pular vários cards de uma vez ao voltar.
            const decorrido = anterior === null ? 0 : Math.min(agora - anterior, 100)
            anterior = agora

            if (!isHovering) {
                // Filhos: [espaçador, cópia 1 (N cards), cópia 2 (N cards)].
                // Uma volta é a distância entre o primeiro card de cada cópia, medida
                // por offsetTop — não por scrollHeight / 2, que depende de como as
                // margens caem nas pontas do container.
                const count = (el.children.length - 1) / 2
                const first = el.children[1]
                const firstOfSecondCopy = el.children[1 + count]
                if (first && firstOfSecondCopy) {
                    const loopHeight = firstOfSecondCopy.offsetTop - first.offsetTop
                    pos += ((loopHeight / SEGUNDOS_POR_VOLTA) * decorrido) / 1000
                    // Ao alcançar a segunda cópia, recua uma volta: o conteúdo na tela é
                    // idêntico, então a emenda não aparece. E como o recuo para no
                    // primeiro card real, o espaçador do topo nunca reaparece.
                    if (pos >= firstOfSecondCopy.offsetTop) pos -= loopHeight
                    el.scrollTop = pos
                }
            }

            rafId = requestAnimationFrame(step)
        }

        rafId = requestAnimationFrame(step)

        return () => cancelAnimationFrame(rafId)
    }, [isHovering, semMovimento])

    return (
        <section
            id="inicio"
            aria-labelledby="titulo-heroi"
            style={{ backgroundImage: "var(--banner)" }}
            className="relative isolate overflow-hidden bg-cover bg-center text-ink"
        >
            <Container className="relative z-10 flex min-h-[86svh] flex-col justify-center py-24 md:min-h-screen md:py-0 md:pr-[38%] lg:pr-[34%]">
                <p className="rotulo-secao text-sm text-ink/70">
                    KH <span className="text-brand">Softwares</span>
                </p>

                <h1 id="titulo-heroi" className="mt-6 font-baskerville text-display font-bold">
                    <SplitText>Construímos aplicações eficientes para sua empresa</SplitText>
                </h1>

                <div className="mt-10">
                    <a
                        href={contato.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block rounded-full bg-brand px-10 py-4 font-bold text-white shadow-card transition hover:brightness-110"
                    >
                        Entre em Contato
                    </a>
                </div>
            </Container>

            {/* Vitrine — desktop. Ancorada na borda, fora do Container. */}
            <div className="pointer-events-none absolute inset-y-0 right-0 z-20 hidden w-[34%] items-center gap-6 pr-5 md:flex lg:w-[30%] lg:pr-12">
                {/* O rótulo vertical é um elemento de verdade, com altura própria: antes
                    era um <p> de altura zero girado e empurrado com margem negativa, que
                    não ocupava lugar nenhum no layout. */}
                <p className="rotulo-secao rotate-180 whitespace-nowrap text-ink/70 [writing-mode:vertical-rl]">
                    Últimos Trabalhos
                </p>

                <div
                    ref={scrollRef}
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                    style={{ maskImage: ESMAECIMENTO, WebkitMaskImage: ESMAECIMENTO }}
                    className="no-scrollbar pointer-events-auto h-screen flex-1 overflow-auto"
                >
                    {/* Espaçador: a coluna começa vazia e os projetos entram rolando.
                        Fica acima da primeira cópia, então sai de cena na primeira volta
                        e não reaparece. */}
                    <div aria-hidden="true" className="h-[30vh]" />
                    {[...featured, ...featured].map((project, i) => (
                        <ProjectCardComponent
                            key={`${project.slug}-${i}`}
                            project={project}
                            /* A segunda cópia é a mesma lista outra vez: anunciá-la
                               duplicaria cada Project para quem usa leitor de tela. */
                            duplicata={i >= featured.length}
                        />
                    ))}
                </div>
            </div>

            {/* Vitrine — celular. Volta para o fluxo, na horizontal. */}
            <div className="md:hidden">
                <p className="rotulo-secao px-5 pb-4">Últimos Trabalhos</p>
                <div className="no-scrollbar flex gap-4 overflow-x-auto px-5 pb-12">
                    {featured.map((project) => (
                        <div key={project.slug} className="w-[72vw] max-w-[300px] shrink-0">
                            <ProjectCardComponent project={project} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default BannerComponent
