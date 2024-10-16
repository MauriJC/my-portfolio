import prisma from "@/lib/prisma";

async function seed() {

    interface Image {
        path: string;
    }

    interface Project {
        name: string;
        description: string;
        demoLink: string;
        longDescription: string;
        videoLink: string;
        mainImagePath: string;
        repoLink: string;
        images: Image[];
        technologyNames: string[];
    }

    const technologiesData: ({ name: string }[]) = [
        { name: "React.js" },
        { name: "Express" },
        { name: "PostgreSQL" },
        { name: "Django" },
        { name: "Expo" },
        { name: "TensorFlow" },
        { name: "Javascript" },
        { name: "SQLite" },
    ];

    const projectsData: Project[] = [
        {
            name: "Claims and installations CRM",
            description: 'A CRM system developed to manage claims and installation requests for a telecommunications cooperative, utilizing technologies like React.js, Express, and PostgreSQL to streamline task management and improve operational efficiency.',
            demoLink: '',
            longDescription: "A CRM system developed to manage claims and installation requests for a telecommunications cooperative, utilizing technologies like React.js, Express, Expo and PostgreSQL to streamline task management and improve operational efficiency. Key features: •Task assignment and real-time status updates for technicians • Role-based access control for different user types (admin, technician, supervisor) • Mobile App to solve claims and installations • Reporting tools to monitor performance metrics",
            videoLink: '',
            mainImagePath: '/static/projects/Claims/8.png',
            repoLink: 'https://github.com/MauriJC/backend-reclamos-telefonica',
            images: [
                { path: '/static/projects/Claims/1.png' },
                { path: '/static/projects/Claims/2.png' },
                { path: '/static/projects/Claims/3.png' },
                { path: '/static/projects/Claims/4.png' },
                { path: '/static/projects/Claims/5.png' },
                { path: '/static/projects/Claims/6.png' },
                { path: '/static/projects/Claims/7.png' },
                { path: '/static/projects/Claims/8.png' },
            ],
            technologyNames: ["React.js", "Express", "PostgreSQL", "Expo"],
        },
        {
            name: "GalenOS",
            description: 'A web-based system designed to assist doctors in diagnosing lung diseases using AI, built with Python Django and React, analyzing chest X-rays to provide accurate recommendations and streamline hospital workflows.',
            demoLink: '',
            longDescription: "A comprehensive application designed to help Galeno S.C.e.I. hospital streamline the diagnosis of pulmonary diseases. The system, built using Python Django and React, uses a convolutional neural network (CNN) implemented in TensorFlow to analyze chest X-rays, providing diagnostic support to medical professionals. It features modules for managing patients, doctors, radiologists, and secretaries, enhancing operational efficiency in the hospital. Key features: • Patient management with options to add, edit, and remove patient data • Doctor, radiologist, and secretary management with full CRUD functionalities • AI-powered diagnosis for lung diseases using chest X-rays • Diagnostic recommendations and treatment suggestions for doctors • Email notifications to send results to patients • Statistical and geographical reports based on disease classification and patient locations.",
            videoLink: '/static/projects/Galenos/Video2.mp4',
            mainImagePath: '/static/projects/Galenos/Galenos4.png',
            repoLink: 'https://github.com/MauriJC/galenos',
            images: [
                { path: '/static/projects/Galenos/Galenos1.png' },
                { path: '/static/projects/Galenos/Galenos2.png' },
                { path: '/static/projects/Galenos/Galenos3.png' },
                { path: '/static/projects/Galenos/Galenos4.png' },
                { path: '/static/projects/Galenos/Galenos5.png' },
                { path: '/static/projects/Galenos/Galenos6.png' },
            ],
            technologyNames: ["React.js", "Django", "PostgreSQL", "TensorFlow"],
        },
        {
            name: "Gym clients management system",
            description: 'Developed a client management system for a local gym, utilizing Django and JavaScript to streamline document management and improve tracking of client payments.',
            demoLink: '',
            longDescription: "This project involved developing a client registration system for a local gym, focusing on reducing reliance on paper records and enhancing efficiency. Key features: • Client information registration and update functionality • Integration with payment tracking and history reports • Document digitization to eliminate manual record-keeping • User-friendly interface for gym staff to manage client data and payments • Ability to track and monitor client body measurements for progress evaluation",
            videoLink: '',
            mainImagePath: '/static/projects/Gimsa/1.png',
            repoLink: 'https://github.com/MauriJC/gimsa',
            images: [
                { path: '/static/projects/Gimsa/1.png' },
                { path: '/static/projects/Gimsa/2.png' },
                { path: '/static/projects/Gimsa/3.png' },
                { path: '/static/projects/Gimsa/4.png' },
            ],
            technologyNames: ["Django", "Javascript", "SQLite"],
        },
    ];



    // Filtrar las tecnologías creadas exitosamente y evitar `undefined`
    const createdTechnologies = (await Promise.all(
        technologiesData.map(async (tech) => {
            try {
                const existingTech = await prisma.technologies.findFirst({
                    where: { name: tech.name },
                });
                return existingTech || await prisma.technologies.create({ data: tech });
            } catch (error) {
                console.error(`Error creating or finding technology ${tech.name}:`, error);
                return null; // Devolver `null` en lugar de `undefined`
            }
        })
    )).filter(tech => tech !== null); // Filtrar las tecnologías que no fueron creadas correctamente






    const cleanProjectData = (projectData: any) => {
        const { technologyNames, ...validData } = projectData;
        return validData;
    };

    await Promise.all(
        projectsData.map(async (projectData) => {
            try {
                const cleanedData = cleanProjectData(projectData);

                await prisma.project.create({
                    data: {
                        ...cleanedData,
                        technologies: {
                            connect: projectData.technologyNames.map((name) => {
                                const tech = createdTechnologies.find((t) => t?.name === name);
                                if (!tech) {
                                    throw new Error(`Technology ${name} not found.`);
                                }
                                return { id: tech.id };
                            }),
                        },
                        images: {
                            create: projectData.images.map(image => ({
                                path: image.path,
                            })),
                        },
                    },
                });
                console.log("Data insertion successful")
            } catch (error) {
                console.error(`Error creating project ${projectData.name}:`, error);
            }
        })
    );

}

seed();