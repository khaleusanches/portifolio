import { describe, it, expect } from "vitest"
import {
    CLARO,
    ESCURO,
    CHAVE,
    temaInicial,
    alternar,
    lerSalvo,
    salvar,
    sistemaPrefereEscuro,
} from "./tema"

/** localStorage de mentira, com a opção de estar quebrado. */
function armazenamento({ valor = null, quebrado = false } = {}) {
    let guardado = valor
    return {
        getItem: () => {
            if (quebrado) throw new Error("armazenamento bloqueado")
            return guardado
        },
        setItem: (_, v) => {
            if (quebrado) throw new Error("armazenamento bloqueado")
            guardado = v
        },
        lido: () => guardado,
    }
}

describe("temaInicial", () => {
    it("respeita a escolha salva do visitante acima do sistema", () => {
        expect(temaInicial({ salvo: CLARO, prefereEscuro: true })).toBe(CLARO)
        expect(temaInicial({ salvo: ESCURO, prefereEscuro: false })).toBe(ESCURO)
    })

    it("segue o sistema quando não há escolha salva", () => {
        expect(temaInicial({ salvo: null, prefereEscuro: true })).toBe(ESCURO)
        expect(temaInicial({ salvo: null, prefereEscuro: false })).toBe(CLARO)
    })

    it("abre claro quando não há informação nenhuma", () => {
        expect(temaInicial({ salvo: null, prefereEscuro: false })).toBe(CLARO)
        expect(temaInicial({})).toBe(CLARO)
    })

    it("ignora valor salvo inválido e volta a decidir pelo sistema", () => {
        expect(temaInicial({ salvo: "roxo", prefereEscuro: true })).toBe(ESCURO)
        expect(temaInicial({ salvo: "", prefereEscuro: false })).toBe(CLARO)
    })
})

describe("alternar", () => {
    it("troca de um tema para o outro", () => {
        expect(alternar(CLARO)).toBe(ESCURO)
        expect(alternar(ESCURO)).toBe(CLARO)
    })

    it("leva qualquer coisa que não seja escuro para escuro", () => {
        expect(alternar(undefined)).toBe(ESCURO)
    })
})

describe("armazenamento", () => {
    it("lê e escreve a escolha", () => {
        const s = armazenamento()
        salvar(s, ESCURO)
        expect(lerSalvo(s)).toBe(ESCURO)
        expect(s.lido()).toBe(ESCURO)
    })

    it("devolve null quando não há nada salvo", () => {
        expect(lerSalvo(armazenamento())).toBe(null)
    })

    it("não quebra quando o armazenamento está bloqueado", () => {
        const s = armazenamento({ quebrado: true })
        expect(lerSalvo(s)).toBe(null)
        expect(() => salvar(s, ESCURO)).not.toThrow()
    })

    it("não quebra quando não existe armazenamento", () => {
        expect(lerSalvo(undefined)).toBe(null)
        expect(() => salvar(undefined, ESCURO)).not.toThrow()
    })

    it("usa a chave combinada com o script anti-flash do index.html", () => {
        expect(CHAVE).toBe("tema")
    })
})

describe("sistemaPrefereEscuro", () => {
    it("responde o que o navegador informa", () => {
        const janela = { matchMedia: () => ({ matches: true }) }
        expect(sistemaPrefereEscuro(janela)).toBe(true)
    })

    it("responde não quando o navegador não sabe informar", () => {
        expect(sistemaPrefereEscuro({})).toBe(false)
        expect(sistemaPrefereEscuro(undefined)).toBe(false)
    })

    it("responde não quando a consulta lança", () => {
        const janela = {
            matchMedia: () => {
                throw new Error("sem suporte")
            },
        }
        expect(sistemaPrefereEscuro(janela)).toBe(false)
    })
})
