import { useState } from "react"
import ImagesMaximizeComponent from "../gerais/ImagesMaximizeComponent"

function ProjectScreenshotsComponent({ project }){
    const [selectedImage, setSelectedImage] = useState(null)
    const screenshots = project?.screenshots ?? []

    return (
        <div className="w-full md:w-[70vw]">
            {screenshots.map((screenshot) => (
                <div key={screenshot.caption}>
                    <img
                        src={screenshot.image}
                        alt={screenshot.caption}
                        onClick={() => setSelectedImage(screenshot.image)}
                        className="cursor-pointer p-4 md:w-[45vw] md:h-[59vh] m-auto mt-8 rounded-[32px]"
                    />

                    <p className="text-white text-center mb-8 mt-2">
                        {screenshot.caption}
                    </p>
                </div>
            ))}

            {/* Modal */}
            <ImagesMaximizeComponent
                image={selectedImage}
                isOpen={!!selectedImage}
                onClose={() => setSelectedImage(null)}
            />
        </div>
    )
}

export default ProjectScreenshotsComponent
