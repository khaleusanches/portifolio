import { describe, it, expect } from "vitest"
import { projects, featured, getProject, projectChain } from "./projects"
import { services, getService } from "./services"

/**
 * Invariantes do conteúdo. Ver CONTEXT.md para o vocabulário.
 *
 * Estes testes afirmam coisas sobre o conteúdo e as derivações do módulo, nunca sobre
 * como um componente o renderiza: o módulo é dado puro e derivação pura, e é o único
 * seam do projeto (ver docs/specs/0001-pagina-de-project.md).
 */

const everyProject = Object.entries(projects)
const everyService = Object.entries(services)

describe("Screenshot", () => {
    it.each(everyProject)("toda Screenshot de %s tem Caption", (slug, project) => {
        for (const screenshot of project.screenshots) {
            expect(screenshot.caption, `Screenshot sem Caption em ${slug}`).toBeTruthy()
        }
    })

    it.each(everyProject)("toda Screenshot de %s tem dimensões explícitas", (slug, project) => {
        for (const screenshot of project.screenshots) {
            expect(screenshot.width, `Screenshot sem width em ${slug}`).toBeGreaterThan(0)
            expect(screenshot.height, `Screenshot sem height em ${slug}`).toBeGreaterThan(0)
        }
    })

    it.each(everyProject)("toda Screenshot de %s tem imagem", (slug, project) => {
        for (const screenshot of project.screenshots) {
            expect(screenshot.image, `Screenshot sem imagem em ${slug}`).toBeTruthy()
        }
    })
})

describe("Cover", () => {
    it.each(everyProject)("%s tem cover com dimensões explícitas", (slug, project) => {
        expect(project.cover, `Project sem cover: ${slug}`).toBeTruthy()
        expect(project.coverWidth, `cover sem width em ${slug}`).toBeGreaterThan(0)
        expect(project.coverHeight, `cover sem height em ${slug}`).toBeGreaterThan(0)
    })
})

describe("Evidence", () => {
    it.each(everyProject)("todo slug de Evidence de %s é um Service existente", (slug, project) => {
        for (const serviceSlug of project.evidence) {
            expect(services, `${slug} declara Evidence para Service inexistente`).toHaveProperty(serviceSlug)
        }
    })
})

describe("Featured", () => {
    it("todo slug da vitrine é um Project existente", () => {
        for (const slug of featured) {
            expect(projects, `Featured aponta para Project inexistente`).toHaveProperty(slug)
        }
    })

    it("não repete Project", () => {
        expect(new Set(featured).size).toBe(featured.length)
    })
})

describe("Slug", () => {
    it.each(everyProject)("o Slug de %s bate com a chave do módulo", (slug, project) => {
        expect(project.slug).toBe(slug)
    })

    it.each(everyService)("o Slug de %s bate com a chave do módulo", (slug, service) => {
        expect(service.slug).toBe(slug)
    })
})

describe("Capability", () => {
    const comCapabilities = everyProject.filter(([, project]) => project.capabilities?.length)

    it("ao menos um Project já declara Capabilities", () => {
        expect(comCapabilities.length).toBeGreaterThan(0)
    })

    it.each(everyProject)("toda Capability de %s tem título e texto", (slug, project) => {
        for (const capability of project.capabilities ?? []) {
            expect(capability.title, `Capability sem título em ${slug}`).toBeTruthy()
            expect(capability.text, `Capability sem texto em ${slug}`).toBeTruthy()
        }
    })

    it.each(everyProject)("toda referência de Capability de %s aponta para uma Screenshot do mesmo Project", (slug, project) => {
        const slugsDeScreenshot = project.screenshots.map((screenshot) => screenshot.slug)
        for (const capability of project.capabilities ?? []) {
            if (!capability.screenshot) continue
            expect(slugsDeScreenshot, `Capability de ${slug} aponta para Screenshot inexistente`)
                .toContain(capability.screenshot)
        }
    })

    it.each(everyProject)("nenhuma Screenshot de %s é reivindicada por duas Capabilities", (slug, project) => {
        const reivindicadas = (project.capabilities ?? [])
            .map((capability) => capability.screenshot)
            .filter(Boolean)
        expect(new Set(reivindicadas).size).toBe(reivindicadas.length)
    })
})

describe("corrente de blocos", () => {
    it("as Capabilities mandam na ordem, e as telas não reivindicadas entram entre os pares", () => {
        // O RyccoDespachador exercita os três tipos de bloco: duas Capabilities sem
        // tela, quatro pares, e duas telas que nenhuma Capability reivindicou.
        expect(projectChain(projects.RyccoDespachador).map((bloco) => [
            bloco.kind,
            bloco.capability?.title ?? bloco.screenshot?.slug
        ])).toEqual([
            ["capability", "Voz em Tempo Real"],
            ["pair", "Monitoramento por GPS"],
            ["pair", "Emergências"],
            ["pair", "Automação Operacional"],
            ["screenshot", "patrulha"],
            ["screenshot", "ordem-servico"],
            ["pair", "Vídeo e Câmeras"],
            ["capability", "Controle de Acesso"]
        ])
    })

    it("um bloco pareado carrega a Screenshot que a Capability reivindicou", () => {
        const par = projectChain(projects.RyccoDespachador).find((bloco) => bloco.kind === "pair")
        expect(par.screenshot).toBe(projects.RyccoDespachador.screenshots[0])
        expect(par.capability.screenshot).toBe(par.screenshot.slug)
    })

    it("um Project sem Capability produz uma corrente só de telas", () => {
        const corrente = projectChain(projects.OlimpicLink)
        expect(corrente).toHaveLength(projects.OlimpicLink.screenshots.length)
        expect(corrente.every((bloco) => bloco.kind === "screenshot")).toBe(true)
        expect(corrente.map((bloco) => bloco.screenshot))
            .toEqual(projects.OlimpicLink.screenshots)
    })

    it("toda Screenshot do Project aparece exatamente uma vez na corrente", () => {
        for (const [slug, project] of everyProject) {
            const naCorrente = projectChain(project)
                .filter((bloco) => bloco.screenshot)
                .map((bloco) => bloco.screenshot.slug)
            expect(new Set(naCorrente).size, `Screenshot repetida na corrente de ${slug}`)
                .toBe(naCorrente.length)
            expect(naCorrente.sort(), `Screenshot perdida na corrente de ${slug}`)
                .toEqual(project.screenshots.map((s) => s.slug).sort())
        }
    })

    it("toda Capability do Project aparece exatamente uma vez na corrente", () => {
        for (const [slug, project] of everyProject) {
            const naCorrente = projectChain(project).filter((bloco) => bloco.capability)
            expect(naCorrente.length, `Capability perdida na corrente de ${slug}`)
                .toBe((project.capabilities ?? []).length)
        }
    })

    it("Project ausente produz corrente vazia", () => {
        expect(projectChain(null)).toEqual([])
    })
})

describe("Screenshot Slug", () => {
    it.each(everyProject)("os Slugs de Screenshot de %s são únicos", (slug, project) => {
        const slugs = project.screenshots.map((screenshot) => screenshot.slug)
        expect(new Set(slugs).size, `Slug de Screenshot repetido em ${slug}`).toBe(slugs.length)
    })

    it.each(everyProject)("toda Screenshot de %s tem Slug", (slug, project) => {
        for (const screenshot of project.screenshots) {
            expect(screenshot.slug, `Screenshot sem Slug em ${slug}`).toBeTruthy()
        }
    })
})

describe("busca por Slug", () => {
    it("getProject devolve o Project pelo Slug", () => {
        expect(getProject("Launa")).toBe(projects.Launa)
    })

    it("getProject devolve ausência para Slug desconhecido", () => {
        expect(getProject("NaoExiste")).toBeNull()
    })

    it("getService devolve o Service pelo Slug", () => {
        expect(getService("mobile")).toBe(services.mobile)
    })

    it("getService devolve ausência para Slug desconhecido", () => {
        expect(getService("NaoExiste")).toBeNull()
    })
})
