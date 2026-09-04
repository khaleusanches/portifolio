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
        return () => window.removeEventListener("keydown", fecharComEsc)
    }, [isOpen, onClose])

    if (!isOpen || !screenshot) return null

    return (
        <div
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-label={screenshot.caption}
            className="fixed inset-0 bg-black/90 flex items-center justify-center p-4 md:p-8 z-50"
        >
            {/* object-contain e limites de tamanho: antes a imagem era esticada para
                preencher a caixa, e o Client avaliava o sistema por uma tela distorcida. */}
            <img
                src={screenshot.image}
                alt={screenshot.caption}
                width={screenshot.width}
                height={screenshot.height}
                onClick={(evento) => evento.stopPropagation()}
                className="max-w-full max-h-full w-auto h-auto object-contain rounded-lg"
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
