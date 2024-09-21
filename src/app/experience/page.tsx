import Image from 'next/image';
import { Briefcase } from 'lucide-react';

const experienceData = {

    //TODO: refactor and split into components

    workExperience: [
        {
            id: 1,
            position: 'Systems Engineering Intern',
            company: 'Cooperativa Telefónica Sta. María LTDA',
            date: 'May 2024 - Present',
            description: `Developed a management system for claims and installations as part of my professional practice for the university. This involves creating both a web system and a mobile application for managing the aforementioned tasks. This project is made using PERN stack (PostgreSQL, Express, React, and Node.js).`,
            logo: '/static/CooperativaLogo.png',
        },
        {
            id: 2,
            position: 'Full-Stack Freelance Developer',
            company: 'Freelance',
            date: 'August 2023 - December 2023',
            description: `Developed a client registration system for a local gym using web technologies (Django and JS). This project improved my skills in Python and JavaScript and helped the gym enhance its document management by reducing dependence on written records, thereby facilitating tracking of client payments.`,
            logo: '/static/freelancelogo.jpg',
        },
        {
            id: 3,
            position: 'QA Intern',
            company: 'Sovos',
            date: 'July 2022 – January 2023',
            description: `During my internship, I performed manual testing and learned the basics of automated testing using Cypress. This role also allowed me to get involved with SCRUM methodologies and extensively use tools like Zephyr, GIT, and JIRA.`,
            logo: '/static/logo-sovos.png',
        },
    ],
};

const ExperiencePage = () => {
    return (
        <div className="max-w-7xl mx-auto min-h-screen" style={{ backgroundColor: '#0a0a0a' }}>
            <div className="max-w-4xl mx-auto">
                <Briefcase className="h-8 w-8 text-gray-300 mb-4" />
                <h1 className="text-4xl text-gray-300 mb-6 leading-none content-center">My Experience</h1>

                <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-gray-300 mb-6">Work Experience</h2>
                    {experienceData.workExperience.map((exp) => (
                        <div key={exp.id} className="bg-gray-900 shadow-md rounded-lg p-6 mb-6">
                            <div className="flex items-center mb-4">
                                <Image
                                    src={exp.logo}
                                    alt={`Logo of ${exp.company}`}
                                    width={80}
                                    height={80}
                                    className="mr-4 bg-gray-900"
                                />
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-300">{exp.position}</h3>
                                    <p className="text-gray-300">{exp.company}</p>
                                    <p className="text-gray-300">{exp.date}</p>
                                </div>
                            </div>
                            <p className="text-gray-200">{exp.description}</p>
                        </div>
                    ))}
                </section>
            </div>
        </div>
    );
};

export default ExperiencePage;
