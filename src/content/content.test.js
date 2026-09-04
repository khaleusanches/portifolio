import { describe, it, expect } from "vitest"
import { projects, featured, getProject, projectChain, nextFeatured, projectsEvidencing } from "./projects"
import { servicesEvidencedBy } from "./services"
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

describe("Description", () => {
    it.each(everyProject)("a Description de %s não repete tecnologia em prosa", (slug, project) => {
        // ADR 0003: o Stack estruturado é a única fonte sobre tecnologia. A prosa
        // divergia — um Project dizia Java no texto e C# no Stack.
        expect(project.description, `bloco de tecnologia na Description de ${slug}`)
            .not.toMatch(/Tecnologia Utilizada|Backend Development|Database Management/)
    })

    it.each(everyProject)("a Description de %s é o parágrafo de abertura, não o texto longo", (slug, project) => {
        // O detalhe vive nas Capabilities. Sem limite, a Description volta a crescer
        // e a estrutura volta a ficar codificada em convenção de negrito.
        expect(project.description.length, `Description longa em ${slug}`).toBeLessThan(500)
        expect(project.description, `Description com bloco titulado em ${slug}`)
            .not.toMatch(/\*\*[^*]+:\*\*/)
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

    it("todo Project declara Capabilities", () => {
        // Não há mais caminho de renderização alternativo: um Project sem Capability
        // renderizaria uma página só de imagens, sem argumento nenhum.
        expect(comCapabilities.length).toBe(everyProject.length)
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
        // Contra objeto sintético, não contra conteúdo real: depois da migração todos
        // os Projects declaram Capabilities, mas a propriedade continua sendo da
        // função — foi ela que permitiu migrar um Project por vez.
        const telas = [{ slug: "a" }, { slug: "b" }]
        expect(projectChain({ screenshots: telas })).toEqual([
            { kind: "screenshot", screenshot: telas[0] },
            { kind: "screenshot", screenshot: telas[1] }
        ])
    })

    it("uma Capability que aponta para tela inexistente não some da corrente", () => {
        // A invariante de referência impede isto no conteúdo, mas a função não deve
        // engolir a Capability em silêncio se acontecer.
        const corrente = projectChain({
            screenshots: [],
            capabilities: [{ title: "X", text: "y", screenshot: "naoexiste" }]
        })
        expect(corrente).toHaveLength(1)
        expect(corrente[0].kind).toBe("capability")
        expect(corrente[0].capability.title).toBe("X")
        expect(corrente[0].screenshot).toBeUndefined()
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

describe("próximo Project", () => {
    it("segue a ordem de curadoria da vitrine", () => {
        expect(featured.slice(0, -1).map((slug) => nextFeatured(slug).slug))
            .toEqual(featured.slice(1))
    })

    it("o último da vitrine não tem próximo", () => {
        // A ordem de curadoria decai de propósito: circular reiniciaria o argumento
        // de venda e mascararia o fim da lista.
        expect(nextFeatured(featured[featured.length - 1])).toBeNull()
    })

    it("Slug desconhecido não tem próximo", () => {
        expect(nextFeatured("NaoExiste")).toBeNull()
    })
})

describe("Services comprovados por um Project", () => {
    it.each(everyProject)("%s devolve os Services que sua Evidence declara", (slug, project) => {
        expect(servicesEvidencedBy(project).map((service) => service.slug))
            .toEqual(project.evidence)
    })

    it("Project ausente não comprova nada", () => {
        expect(servicesEvidencedBy(null)).toEqual([])
    })

    it("é o inverso de projectsEvidencing", () => {
        for (const [, project] of everyProject) {
            for (const service of servicesEvidencedBy(project)) {
                expect(projectsEvidencing(service.slug)).toContain(project)
            }
        }
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
