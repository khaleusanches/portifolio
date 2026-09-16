import { describe, it, expect } from "vitest"
import { projects } from "./projects"
import { marca } from "./marca"
import { ORIGEM, rotas, metadadosDaRota, jsonLdOrganizacao, absoluta, sitemapXml, robotsTxt } from "./seo"

/**
 * Invariantes dos metadados. Como o resto do módulo de conteúdo, isto é derivação
 * pura e é testado sem renderizar nada.
 *
 * O que estes testes protegem é a promessa que a pré-renderização (ticket 16) e o
 * sitemap (ticket 17) fazem: que a lista de rotas é a mesma dos dois lados, e que
 * nenhuma URL sai relativa — robô de busca e prévia de link não resolvem caminho
 * relativo.
 */

const todosOsProjects = Object.entries(projects)

describe("Origem", () => {
    it("é a origem onde o site é servido, sem barra no fim", () => {
        expect(ORIGEM).toBe(marca.site)
        expect(ORIGEM.startsWith("https://")).toBe(true)
        expect(ORIGEM.endsWith("/")).toBe(false)
    })

    it("absolutiza um caminho sem duplicar a barra", () => {
        expect(absoluta("/project/Launa")).toBe(`${ORIGEM}/project/Launa`)
        expect(absoluta("project/Launa")).toBe(`${ORIGEM}/project/Launa`)
    })

    it("devolve intacta uma URL que já é absoluta", () => {
        expect(absoluta("https://outro.site/x.png")).toBe("https://outro.site/x.png")
    })
})

describe("Rotas", () => {
    it("inclui a home", () => {
        expect(rotas()).toContain("/")
    })

    it.each(todosOsProjects)("inclui a rota de %s", (slug) => {
        expect(rotas()).toContain(`/project/${slug}`)
    })

    it("não tem rota repetida", () => {
        const lista = rotas()
        expect(new Set(lista).size).toBe(lista.length)
    })

    it("tem exatamente uma rota por Project, mais a home", () => {
        expect(rotas()).toHaveLength(todosOsProjects.length + 1)
    })
})

describe("Metadados da home", () => {
    const meta = metadadosDaRota("/")

    it("tem título e descrição próprios", () => {
        expect(meta.title).toBeTruthy()
        expect(meta.description).toBeTruthy()
    })

    it("aponta a canonical para a origem", () => {
        expect(meta.canonical).toBe(`${ORIGEM}/`)
    })
})

describe("Metadados de um Project", () => {
    it.each(todosOsProjects)("o título de %s deriva da Headline", (slug, project) => {
        expect(metadadosDaRota(`/project/${slug}`).title).toContain(project.headline)
    })

    it.each(todosOsProjects)("a descrição de %s é o Pitch", (slug, project) => {
        expect(metadadosDaRota(`/project/${slug}`).description).toBe(project.pitch)
    })

    it.each(todosOsProjects)("a imagem de %s é a cover, absoluta", (slug, project) => {
        const { image } = metadadosDaRota(`/project/${slug}`)
        expect(image).toBe(absoluta(project.cover))
        expect(image.startsWith("https://")).toBe(true)
    })

    it.each(todosOsProjects)("a canonical de %s é absoluta sobre a origem", (slug) => {
        expect(metadadosDaRota(`/project/${slug}`).canonical).toBe(`${ORIGEM}/project/${slug}`)
    })
})

describe("Metadados de rota desconhecida", () => {
    it("não inventa página: devolve ausência", () => {
        expect(metadadosDaRota("/project/NaoExiste")).toBeNull()
        expect(metadadosDaRota("/coisa-nenhuma")).toBeNull()
    })
})

describe("Toda rota conhecida", () => {
    it.each(rotas())("%s tem metadados completos e absolutos", (rota) => {
        const meta = metadadosDaRota(rota)
        expect(meta.title).toBeTruthy()
        expect(meta.description).toBeTruthy()
        expect(meta.canonical.startsWith(ORIGEM)).toBe(true)
        expect(meta.image.startsWith("https://")).toBe(true)
    })
})

describe("JSON-LD", () => {
    const dados = jsonLdOrganizacao()

    it("declara uma Organization", () => {
        expect(dados["@context"]).toBe("https://schema.org")
        expect(dados["@type"]).toBe("Organization")
    })

    it("traz nome, site, logo e e-mail", () => {
        expect(dados.name).toBe(marca.nome)
        expect(dados.url).toBe(`${ORIGEM}/`)
        expect(dados.logo.startsWith("https://")).toBe(true)
        expect(dados.email).toContain("@")
    })

    it("declara a área de atuação", () => {
        expect(dados.areaServed).toBeTruthy()
    })
})

describe("sitemap.xml", () => {
    const xml = sitemapXml()

    it("é um urlset bem formado", () => {
        expect(xml.startsWith("<?xml")).toBe(true)
        expect(xml).toContain("<urlset")
        expect(xml.trimEnd().endsWith("</urlset>")).toBe(true)
    })

    it("lista exatamente as rotas publicadas, e todas absolutas", () => {
        const listadas = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1])
        // Mesma fonte que a pré-renderização: se divergirem, o sitemap aponta para
        // página que não existe.
        expect(listadas.sort()).toEqual(rotas().map((rota) => metadadosDaRota(rota).canonical).sort())
        for (const url of listadas) expect(url.startsWith(`${ORIGEM}/`)).toBe(true)
    })
})

describe("robots.txt", () => {
    const txt = robotsTxt()

    it("libera o rastreamento", () => {
        expect(txt).toContain("User-agent: *")
        expect(txt).toContain("Allow: /")
        expect(txt).not.toContain("Disallow: /\n")
    })

    it("aponta para o sitemap, com URL absoluta", () => {
        expect(txt).toContain(`Sitemap: ${ORIGEM}/sitemap.xml`)
    })
})
