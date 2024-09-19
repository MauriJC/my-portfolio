
import prisma from "@/lib/prisma";
import { Project, Technologies } from "@prisma/client";  // Tipos generados automáticamente
import Image from "next/image";


// type techs = {
//     id: number,
//     name: string
// }

// Esto lo dejo para tenerlo de recuerdo xd
// type projects = {
//     id: number,
//     name: string,
//     description: string,
//     technologies: techs[]
// }


const ProjectsPage = async () => {
    let projects: (Project & { technologies: Technologies[] })[] = [];
    try {
        projects = await prisma.project.findMany({
            include: {
                technologies: true,
            },
        });
    } catch (error) {
        console.error("Error fetching projects:", error);
    }

    return (

        <div className="max-w-7xl mx-auto">


            <h1 className="text-4xl font-bold text-white mb-8 text-center">My projects</h1>
            <h1>Welcome the projects section!</h1>
            {projects.length === 0 ? (
                <p>No projects found.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-3">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="bg-gray-900 rounded-lg shadow-md overflow-hidden hover:shadow-lg hover:border-2 hover:border-white"
                        >
                            <Image
                                src={''}
                                alt={project.name}
                                width={300}
                                height={200}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h2 className="text-2xl font-semibold text-gray-900 mb-2">{project.name}</h2>
                                <p className="text-gray-100">{project.description}</p>
                            </div>
                            <div className="flex flex-wrap">
                                {project.technologies.map((tech) => (
                                    <span
                                        key={tech.id}
                                        className="rounded-full bg-blue-950 px-3 py-1 text-sm mx-1 mb-2"
                                    >
                                        {tech.name}
                                    </span>

                                ))}
                            </div>
                        </div>


                    ))}
                </div>
            )}
        </div>
    );
};

export default ProjectsPage;
