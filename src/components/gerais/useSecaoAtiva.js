import { useEffect, useState } from "react"

/**
 * Qual das seções está sendo lida agora.
 *
 * Existe porque a navegação recebia `active="home"` como literal e nunca mudava:
 * percorrer a página inteira deixava "Home" sublinhado o tempo todo, e Serviços e
 * Sobre nunca acendiam.
 *
 * A escolha é por proporção visível, e não pela primeira seção que cruza a linha de
 * topo: uma seção curta no fim da página nunca chega ao topo da tela, e com o critério
 * de linha ela jamais acenderia. Empate vai para a que está mais acima, que é a que o
 * visitante alcançou primeiro.
 *
 * O observador guarda a última proporção de cada seção porque cada entrada do callback
 * traz só as que mudaram — decidir apenas com elas faria o item ativo pular para uma
 * seção que acabou de sair de cena.
 */
export function useSecaoAtiva(ids) {
    const [ativa, setAtiva] = useState(ids[0] ?? null)

    useEffect(() => {
        const elementos = ids
            .map((id) => document.getElementById(id))
            .filter(Boolean)

        if (elementos.length === 0) return

        const visibilidade = new Map(ids.map((id) => [id, 0]))

        const observador = new IntersectionObserver(
            (entradas) => {
                for (const entrada of entradas) {
                    visibilidade.set(entrada.target.id, entrada.intersectionRatio)
                }

                let melhor = null
                let maior = 0
                for (const id of ids) {
                    const proporcao = visibilidade.get(id) ?? 0
                    if (proporcao > maior) {
                        maior = proporcao
                        melhor = id
                    }
                }

                // Nenhuma seção visível acontece entre uma e outra em telas altas;
                // manter a última evita o indicador piscar para fora.
                if (melhor) setAtiva(melhor)
            },
            { threshold: [0, 0.15, 0.3, 0.5, 0.75, 1] }
        )

        for (const elemento of elementos) observador.observe(elemento)
        return () => observador.disconnect()
    }, [ids])

    return ativa
}
