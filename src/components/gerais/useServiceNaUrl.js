import { useSearchParams } from "react-router-dom"
import { getService } from "../../content/services"

/**
 * O Slug do Service pedido na URL (`/?service=slug`), ou null quando não há
 * parâmetro ou quando ele não corresponde a um Service existente.
 *
 * É este o caminho por onde um slug inválido chega vindo do Client — daí o
 * ticket 08 depender do 01, que fez getService devolver ausência em vez de um
 * Service de fallback. Sem isso, `/?service=qualquercoisa` abriria o modal do
 * primeiro Service como se tivesse sido pedido.
 *
 * Ver ADR 0004 para por que Service é acessado por parâmetro e não por rota.
 */
export function useServiceNaUrl() {
    const [searchParams] = useSearchParams()
    return getService(searchParams.get("service"))?.slug ?? null
}
