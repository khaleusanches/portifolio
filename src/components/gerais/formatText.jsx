/**
 * Renderiza a convenção `**trecho**` do conteúdo como ênfase no acento da marca.
 *
 * Implementação única, compartilhada pela página de Project e pelo modal de Service.
 * Antes existiam duas cópias divergentes: uma pintava a ênfase de laranja e a outra de
 * branco, então o mesmo negrito tinha duas cores em duas telas. É a divergência que o
 * ADR 0001 combateu no conteúdo, reaparecendo na apresentação.
 *
 * O que a ênfase marca, sobretudo, é nome de contratante e de produto de terceiro —
 * o CONTEXT.md diz que o contratante de um Project é citado no texto da Description,
 * e é a prova social mais forte da página.
 */
export function formatText(text) {
    if (!text) return null
    return text.split("**").map((trecho, indice) =>
        indice % 2 === 1
            ? <strong className="text-brand" key={indice}>{trecho}</strong>
            : trecho
    )
}
