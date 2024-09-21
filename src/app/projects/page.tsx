
import ProjectsSkeleton from "@/components/ui/ProjectsSkeleton";
import prisma from "@/lib/prisma";
import { Project, Technologies } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";


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
            <h1 className="text-4xl text-white mb-8"> &lt; My projects /&gt;</h1>
            <h1>Welcome to the projects section!</h1>
            <p>Here&apos;s a list of all the projects I did</p>
            <Suspense fallback={<ProjectsSkeleton />}>
                {projects.length === 0 ? (
                    <p>No projects found.</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-3">
                        {projects.map((project) => (
                            <div
                                key={project.id}
                                className="bg-gray-900 rounded-lg shadow-md overflow-hidden hover:shadow-lg hover:border-2 hover:border-white  transition-transform duration-300 hover:scale-105 transition-transform duration-300"
                            >
                                <Image
                                    src={project.mainImagePath}
                                    alt={project.name}
                                    width={300}
                                    height={200}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-6">
                                    <h2 className="text-2xl font-semibold text-zinc-300 mb-2">{project.name}</h2>
                                    <p className="text-gray-100">{project.description}</p>
                                </div>
                                <div className="flex flex-wrap">
                                    {project.technologies.map((tech) => (
                                        <span
                                            key={tech.id}
                                            className="rounded-full bg-blue-900 px-3 py-1 text-sm mx-1 mb-2"
                                        >
                                            {tech.name}
                                        </span>

                                    ))}
                                </div>
                                <Link href={`/projects/${project.id}`} className="flex justify-end">
                                    <span

                                        className="rounded-full bg-green-900 px-3 py-1 mr-2 text-sm mx-1 mb-2 hover:bg-green-600 transition duration-300"
                                    >
                                        View project
                                    </span>
                                </Link>
                            </div>


                        ))}
                    </div>
                )}
            </Suspense>

        </div>
    );
};

export default ProjectsPage;
