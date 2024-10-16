import { GraduationCap } from 'lucide-react'
import Image from 'next/image'

const EducationPage = () => {

    const educationData = {
        formalEducation: [
            {
                id: 1,
                institution: "Universidad Tecnológica Nacional",
                degree: "Systems engineering degree",
                date: "2015 - 2024",
                description: "Specialized in the analysis, design, and development of software systems, with a focus on web and mobile applications. Gained experience in database management, web development, and agile methodologies. Final project involved developing an AI-based system for identifying pulmonary diseases. ",
                logo: "/static/utnlogo.png?height=80&width=80"
            },
            {
                id: 2,
                institution: "ATICANA",
                degree: "4th Level English",
                date: "2020 - 2021",
                description: "Advanced English course focused on enhancing communication skills in both written and spoken English. Emphasized comprehension, grammar, and fluency in professional and academic settings.",
                logo: "/static/aticanalogo.png?height=80&width=80"
            }
        ],
        courses: [
            {
                id: 1,
                title: "Digitalers: Data analytics course",
                platform: "Educacion IT",
                date: "2024",
                description: "Data analysis course, focused on SQL, Data visualization and Power BI.",
                certificate: "https://example.com/certificate1",
                logo: "/static/EducacionITLogo.jpg",
                institution: ""
            }
        ],
        selfTaught: [
            {
                id: 1,
                title: "Self-taught Technologies",
                description: "Throughout my learning journey, I have independently learned various technologies including React, Express, and Django. My self-taught approach helped me build strong fundamentals and practical knowledge in these areas."
            },
            {
                id: 2,
                title: "Currently Learning",
                description: "Currently, I am focused on learning TypeScript, Next.js, Prisma, and Tailwind CSS to enhance my front-end and full-stack development skills."
            },
            {
                id: 3,
                title: "Future Learning Goals",
                description: "In the near future, I aim to dive deeper into state management with Redux and Context API to further strengthen my React development."
            }
        ]
    }



    return (
        <div className="max-w-7xl mx-auto min-h-screen" style={{ backgroundColor: '#0a0a0a' }}>


            <div className="max-w-4xl mx-auto">

                <GraduationCap className="h-8 w-8" />
                <h1 className="text-4xl text-gray-300 mb-6 leading-nones content-center">My education</h1>

                <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-gray-300 mb-6">Formal education</h2>
                    {educationData.formalEducation.map((edu) => (
                        <div key={edu.id} className="bg-gray-900 shadow-md rounded-lg p-6 mb-6">
                            <div className="flex items-center mb-4">
                                <Image
                                    src={edu.logo}
                                    alt={`Logo de ${edu.institution}`}
                                    width={80}
                                    height={80}
                                    className="mr-4 bg-gray-300"
                                />
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-300">{edu.degree}</h3>
                                    <p className="text-gray-300">{edu.institution}</p>
                                    <p className="text-gray-300">{edu.date}</p>
                                </div>
                            </div>
                            <p className="text-gray-200">{edu.description}</p>
                        </div>
                    ))}
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-gray-300 mb-6">Courses & certifications</h2>
                    {educationData.courses.map((course) => (
                        <div key={course.id} className="bg-gray-900 shadow-md rounded-lg p-6 mb-6">
                            <div className="flex items-center mb-4">
                                <Image
                                    src={course.logo}
                                    alt={`Logo de ${course.institution}`}
                                    width={80}
                                    height={80}
                                    className="mr-4 bg-gray-300"
                                />
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-200 mb-2">{course.title}</h3>
                                    <p className="text-gray-300 mb-1">{course.platform}</p>
                                    <p className="text-gray-300 mb-3">{course.date}</p>
                                </div>
                            </div>

                            <p className="text-gray-300 mb-4">{course.description}</p>
                            {/*            <a
                                href={course.certificate}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
                            >
                                Ver Certificado
                            </a> */}
                        </div>
                    ))}
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-gray-300 mb-6">Self -taught</h2>
                    {educationData.selfTaught.map((course) => (
                        <div key={course.id} className="bg-gray-900 shadow-md rounded-lg p-6 mb-6">
                            <h3 className="text-xl font-semibold text-gray-200 mb-2">{course.title}</h3>
                            <p className="text-gray-300 mb-4">{course.description}</p>
                        </div>
                    ))}
                </section>


            </div>
        </div>
    )
}

export default EducationPage
