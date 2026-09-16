import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { jsonLdOrganizacao, metadadosDaRota } from "../../content/seo"

/**
 * Escreve no documento os metadados da rota atual.
 *
 * Toda tag que este componente cria leva `data-seo`, e cada passagem apaga as
 * anteriores antes de escrever as novas. Sem isso, navegar da home para um Project e
 * voltar deixaria três `og:title` empilhadas no `<head>` — e o robô lê a primeira, que
 * seria a da página errada. O mesmo marcador torna o efeito idempotente sob o
 * StrictMode, que roda o efeito duas vezes em desenvolvimento.
 *
 * Aqui os metadados são aplicados no navegador, o que serve para prévia de link gerada
 * por quem executa JavaScript. Quem não executa — boa parte dos rastreadores — recebe o
 * HTML pré-renderizado no build, que é onde estas mesmas tags viram documento.
 */
function Metadados() {
    const { pathname } = useLocation()

    useEffect(() => {
        const meta = metadadosDaRota(pathname)
        if (!meta) return

        document.title = meta.title

        for (const antiga of document.querySelectorAll("[data-seo]")) antiga.remove()

        const cabeca = document.head

        const tag = (nome, atributos) => {
            const elemento = document.createElement(nome)
            for (const [chave, valor] of Object.entries(atributos)) {
                elemento.setAttribute(chave, valor)
            }
            elemento.setAttribute("data-seo", "")
            cabeca.appendChild(elemento)
        }

        tag("meta", { name: "description", content: meta.description })
        tag("link", { rel: "canonical", href: meta.canonical })

        tag("meta", { property: "og:type", content: meta.type })
        tag("meta", { property: "og:site_name", content: "KH Softwares" })
        tag("meta", { property: "og:locale", content: "pt_BR" })
        tag("meta", { property: "og:title", content: meta.title })
        tag("meta", { property: "og:description", content: meta.description })
        tag("meta", { property: "og:url", content: meta.canonical })
        tag("meta", { property: "og:image", content: meta.image })

        tag("meta", { name: "twitter:card", content: "summary_large_image" })
        tag("meta", { name: "twitter:title", content: meta.title })
        tag("meta", { name: "twitter:description", content: meta.description })
        tag("meta", { name: "twitter:image", content: meta.image })

        // A Brand é uma só: o dado estruturado dela vai na home e em nenhuma outra
        // página, senão cada Project declararia uma organização.
        if (pathname === "/") {
            const script = document.createElement("script")
            script.type = "application/ld+json"
            script.textContent = JSON.stringify(jsonLdOrganizacao())
            script.setAttribute("data-seo", "")
            cabeca.appendChild(script)
        }
    }, [pathname])

    return null
}

export default Metadados
