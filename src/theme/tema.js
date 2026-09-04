/**
 * O tema do site: claro ou escuro.
 *
 * A regra de decisão vive aqui, separada do React e do DOM, porque é a única parte
 * com comportamento a garantir: precedência entre a escolha do visitante e a
 * preferência do sistema, e o que fazer quando não há informação nenhuma.
 *
 * Claro é o padrão quando não se sabe nada. Escuro exige alguém pedindo — o
 * visitante, clicando, ou o sistema operacional dele.
 */

export const CLARO = "light"
export const ESCURO = "dark"

/** Chave no localStorage. Só guarda escolha explícita, nunca a do sistema. */
export const CHAVE = "tema"

const valido = (tema) => tema === CLARO || tema === ESCURO

/**
 * Decide o tema a aplicar.
 *
 * A escolha salva vence a preferência do sistema: quem clicou no botão está
 * corrigindo o que o sistema disse, e essa correção não pode ser desfeita a cada
 * visita. Sem escolha salva e sem preferência legível, abre claro.
 */
export function temaInicial({ salvo, prefereEscuro }) {
    if (valido(salvo)) return salvo
    return prefereEscuro ? ESCURO : CLARO
}

/** O outro tema. */
export function alternar(tema) {
    return tema === ESCURO ? CLARO : ESCURO
}

/**
 * Lê a escolha salva. Devolve null se não houver ou se o armazenamento estiver
 * bloqueado — navegação privada e políticas de cookie derrubam localStorage, e
 * isso não pode quebrar a página.
 */
export function lerSalvo(storage) {
    try {
        return storage?.getItem(CHAVE) ?? null
    } catch {
        return null
    }
}

/** Salva a escolha. Falhar aqui é aceitável: o site funciona, só não lembra. */
export function salvar(storage, tema) {
    try {
        storage?.setItem(CHAVE, tema)
    } catch {
        /* armazenamento indisponível */
    }
}

/** Pergunta ao navegador se o sistema está em escuro. Sem suporte, responde não. */
export function sistemaPrefereEscuro(janela) {
    try {
        return janela?.matchMedia?.("(prefers-color-scheme: dark)").matches ?? false
    } catch {
        return false
    }
}

/** Escreve o tema no documento. É o atributo que o CSS observa. */
export function aplicar(elementoRaiz, tema) {
    elementoRaiz?.setAttribute("data-theme", tema)
}
