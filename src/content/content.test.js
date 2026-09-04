import { describe, it, expect } from "vitest"
import { projects, featured, getProject } from "./projects"
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
