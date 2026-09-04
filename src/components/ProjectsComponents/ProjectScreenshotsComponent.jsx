import { useState } from "react"
import ImagesMaximizeComponent from "../gerais/ImagesMaximizeComponent"

function ProjectScreenshotsComponent({ project }){
    const [ampliada, setAmpliada] = useState(null)
    const screenshots = project?.screenshots ?? []

    return (
        <div className="w-full md:flex-1 md:min-w-0">
            {screenshots.map((screenshot) => (
                <div key={screenshot.caption}>
                    <img
                        src={screenshot.image}
                        alt={screenshot.caption}
                        width={screenshot.width}
                        height={screenshot.height}
                        loading="lazy"
                        decoding="async"
                        onClick={() => setAmpliada(screenshot)}
                        className="cursor-pointer object-contain p-4 md:w-[45vw] md:h-[59vh] m-auto mt-8 rounded-[32px]"
                    />

                    <p className="text-white text-center mb-8 mt-2">
                        {screenshot.caption}
                    </p>
                </div>
            ))}

            {/* Modal */}
            <ImagesMaximizeComponent
                screenshot={ampliada}
                isOpen={!!ampliada}
                onClose={() => setAmpliada(null)}
            />
        </div>
    )
}

export default ProjectScreenshotsComponent
