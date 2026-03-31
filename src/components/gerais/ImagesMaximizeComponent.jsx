function ImagesMaximizeComponent({ image, isOpen, onClose }) {
    if (!isOpen) return null

    return (
        <div className="fixed inset-0 bg-black/70 flex items-center p-4 md:p-8 justify-center z-50">
                <img src={image} className="w-full h-[30vh] md:w-[80vw] md:h-full rounded-lg" />
                <button 
                    onClick={onClose}
                    className="absolute top-4 right-4 text-white text-xl"
                >
                    ✕
                </button>
        </div>
    )
}

export default ImagesMaximizeComponent