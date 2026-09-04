import { useCallback, useEffect, useState } from "react"
import {
    CLARO,
    ESCURO,
    alternar,
    aplicar,
    lerSalvo,
    salvar,
    sistemaPrefereEscuro,
    temaInicial,
} from "../../theme/tema"

/**
 * O tema ativo e o meio de trocá-lo.
 *
 * O estado inicial vem do atributo que o script do index.html já escreveu antes da
 * primeira pintura. Ler o DOM em vez de decidir de novo evita o hook discordar do
 * script e a página trocar de tema sozinha logo depois de carregar.
 *
 * Só a escolha do visitante é salva. A preferência do sistema não é copiada para o
 * armazenamento: se ela fosse, mudar o tema do sistema depois deixaria de refletir
 * no site, e o visitante não teria como saber por quê.
 */
export function useTema() {
    const [tema, setTema] = useState(() => {
        const jaAplicado = document.documentElement.getAttribute("data-theme")
        if (jaAplicado === CLARO || jaAplicado === ESCURO) return jaAplicado

        return temaInicial({
            salvo: lerSalvo(window.localStorage),
            prefereEscuro: sistemaPrefereEscuro(window),
        })
    })

    useEffect(() => {
        aplicar(document.documentElement, tema)
    }, [tema])

    const trocar = useCallback(() => {
        setTema((atual) => {
            const proximo = alternar(atual)
            salvar(window.localStorage, proximo)
            return proximo
        })
    }, [])

    return { tema, trocar }
}
