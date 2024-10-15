import { ImageCarousel } from '@/components/ui/ImageCarrousel'
import prisma from '@/lib/prisma'
import { Image, Project, Technologies } from '@prisma/client'

const ProjectPage = async ({ params }: { params: { id: string } }) => {
    const id: number = parseInt(params.id)
    let project: (Project & { technologies: Technologies[] } & { images: Image[] }) | null = null

    try {
        project = await prisma.project.findUnique({
            where: { id },
            include: { technologies: true, images: true }
        })
    } catch (error) {
        console.error(error)
    }

    if (!project) {
        return <div>Project not found!</div>
    }

    //New format to project long descriptions!
    const formatDescription = (description: string) => {
        const parts = description.split('Key features:');
        const generalDescription = parts[0];
        const keyFeatures = parts[1]?.split('•').filter(feature => feature.trim() !== '') || [];

        return (
            <div>
                <p className="text-gray-100 mb-4">{generalDescription.trim()}</p>
                {keyFeatures.length > 0 && (
                    <div>
                        <h3 className="text-xl font-semibold text-gray-100 mb-2">Key features:</h3>
                        <ul className="list-disc list-inside text-gray-100">
                            {keyFeatures.map((feature, index) => (
                                <li key={index}>{feature.trim()}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto min-h-screen" style={{ backgroundColor: '#0a0a0a' }}>
            <h1 className="text-4xl font-bold text-gray-100 mb-6">{project.name}</h1>

            <div className="bg-gray-900 shadow-md rounded-lg p-6 mb-8">

                {formatDescription(project.longDescription)}

                <div className="mb-4">
                    <h2 className="text-xl font-semibold mb-2">Used technologies:</h2>
                    <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, index) => (
                            <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                                {tech.name}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="flex justify-end">
                    <a href='#' className='mx-2 bg-blue-900 rounded-full px-3 py-1 hover:bg-blue-700 transition duration-300'>View code</a>
                    <a href='#' className='mx-2 bg-blue-900 rounded-full px-3 py-1 hover:bg-blue-700 transition duration-300'>View demo</a>
                </div>
            </div>

            {project.images.length > 0 ? (
                <ImageCarousel images={project.images} />
            ) : 'Images not available'}

            {project.videoLink && (
                <div className="bg-gray-900 shadow-md rounded-lg p-6">
                    <h2 className="text-2xl font-semibold mb-4">Video demo</h2>
                    <div className="aspect-w-16 aspect-h-9">
                        <video controls className="w-full h-full rounded-lg">
                            <source src={project.videoLink} type="video/mp4" />
                            Tu navegador no soporta el tag de video.
                        </video>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ProjectPage
