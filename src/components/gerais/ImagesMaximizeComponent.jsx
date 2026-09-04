import { useEffect } from "react"

/**
 * Ampliação de uma Screenshot. As telas têm 1600px de largura nativa e na página
 * aparecem menores, então ampliar é o que as torna legíveis — sobretudo no celular.
 * Recebe a Screenshot inteira, não só a imagem, para ter a Caption como texto
 * alternativo e as dimensões da imagem.
 */
function ImagesMaximizeComponent({ screenshot, isOpen, onClose }) {
    useEffect(() => {
        if (!isOpen) return
        const fecharComEsc = (evento) => { if (evento.key === "Escape") onClose() }
        window.addEventListener("keydown", fecharComEsc)

        // Sem isto o fundo rola atrás da ampliação, e ao fechar o Client cai em
        // outro ponto da lista de Screenshots, não onde clicou.
        const overflowAnterior = document.body.style.overflow
        document.body.style.overflow = "hidden"

        return () => {
            window.removeEventListener("keydown", fecharComEsc)
            document.body.style.overflow = overflowAnterior
        }
    }, [isOpen, onClose])

    if (!isOpen || !screenshot) return null

    return (
        <div
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-label={screenshot.caption}
            className="fixed inset-0 bg-black/90 flex items-center justify-center overflow-auto md:overflow-hidden p-4 md:p-8 z-50"
        >
            {/* object-contain e limites de tamanho: antes a imagem era esticada para
                preencher a caixa, e o Client avaliava o sistema por uma tela distorcida.

                No celular a imagem vai no tamanho natural dentro de um contêiner que
                rola: caber numa tela de 390px a deixaria do mesmo tamanho que já tem
                na página, e aí ampliar não ampliaria nada. */}
            <img
                src={screenshot.image}
                alt={screenshot.caption}
                width={screenshot.width}
                height={screenshot.height}
                onClick={(evento) => evento.stopPropagation()}
                className="max-w-none md:max-w-full md:max-h-full w-auto h-auto object-contain rounded-lg"
            />
            <button
                type="button"
                onClick={onClose}
                aria-label="Fechar ampliação"
                className="absolute top-4 right-4 text-white text-2xl leading-none px-3 py-1 rounded-full hover:bg-white/20"
            >
                ✕
            </button>
        </div>
    )
}

export default ImagesMaximizeComponent
