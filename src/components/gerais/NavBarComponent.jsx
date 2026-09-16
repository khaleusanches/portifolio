import { useEffect, useState } from "react"
import Container from "./Container"
import ThemeToggleComponent from "./ThemeToggleComponent"
import { useSecaoAtiva } from "./useSecaoAtiva"
import { contato } from "../../content/marca"
import logo from "/logo.png"

/**
 * A navegação da home.
 *
 * Duas coisas que faltavam: ela diz onde o visitante está, derivando o item ativo da
 * seção visível em vez de receber `active="home"` como literal; e encolhe ao rolar,
 * devolvendo à página a altura que antes ocupava o tempo inteiro.
 *
 * A lista é a mesma fonte para os links e para o observador de seções — se fossem duas,
 * uma seção nova entraria na barra e nunca acenderia.
 */
const SECOES = [
    { id: "projetos", rotulo: "Projetos" },
    { id: "services", rotulo: "Serviços" },
    { id: "about", rotulo: "Sobre" },
]

const IDS = ["inicio", ...SECOES.map((secao) => secao.id)]

function NavBarComponent() {
    const [rolou, setRolou] = useState(false)
    const ativa = useSecaoAtiva(IDS)

    useEffect(() => {
        const aoRolar = () => setRolou(window.scrollY > 24)
        aoRolar()
        // Passivo: o ouvinte não cancela o scroll, e declarar isso evita que o
        // navegador espere por ele antes de rolar.
        window.addEventListener("scroll", aoRolar, { passive: true })
        return () => window.removeEventListener("scroll", aoRolar)
    }, [])

    return (
        <nav
            aria-label="Navegação principal"
            className={`fixed inset-x-0 top-0 z-50 border-b border-line/10 bg-base/90 backdrop-blur transition-[height,box-shadow] duration-300 ${
                rolou ? "h-16 shadow-card" : "h-24"
            }`}
        >
            <Container className="flex h-full items-center justify-between gap-6">
                <a href="#inicio" className="shrink-0" aria-label="KH Softwares, início">
                    <img
                        src={logo}
                        alt="KH Softwares"
                        className={`w-auto transition-[height] duration-300 ${
                            rolou ? "h-8" : "h-11"
                        }`}
                    />
                </a>

                <ul className="flex items-center gap-6 sm:gap-8">
                    {SECOES.map((secao) => {
                        const atual = ativa === secao.id
                        return (
                            <li key={secao.id}>
                                <a
                                    href={`#${secao.id}`}
                                    // A seção atual é anunciada como tal: sem isto, quem
                                    // usa leitor de tela ouve uma lista de links iguais e
                                    // a marca visual não chega até ele.
                                    aria-current={atual ? "location" : undefined}
                                    className={`border-b-2 pb-1 text-sm transition-colors sm:text-[1rem] ${
                                        atual
                                            ? "border-brand text-ink"
                                            : "border-transparent text-muted hover:text-ink"
                                    }`}
                                >
                                    {secao.rotulo}
                                </a>
                            </li>
                        )
                    })}
                </ul>

                <div className="flex shrink-0 items-center gap-3">
                    <ThemeToggleComponent />
                    <a
                        href={contato.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden rounded-full border-2 border-ink px-5 py-2 font-bold transition hover:bg-ink hover:text-base sm:inline-block"
                    >
                        Orçamento
                    </a>
                </div>
            </Container>
        </nav>
    )
}

export default NavBarComponent
