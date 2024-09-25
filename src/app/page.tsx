import Image from "next/image";
import { Database, Github, Linkedin } from "lucide-react"
import Writer from "@/components/Writer";
import Card from "@/components/ui/Card";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNode, faReact } from '@fortawesome/free-brands-svg-icons';
import EmailLink from "@/components/EmailLink";
import Link from "next/link";



export default function Home() {

  const projects = [
    {
      id: 1,
      title: "Claims and installations CRM",
      description: "A CRM system developed to manage claims and installation requests for a telecommunications cooperative, utilizing technologies like React.js, Express, and PostgreSQL to streamline task management and improve operational efficiency.",
      technologies: ["React.js", "Express", "PostgreSQL"],
    },
    {
      id: 2,
      title: "Gym clients management system",
      description: "A web-based system created for a local gym to register and manage client data, using Javascript, Django, and SQLite, allowing for better organization and tracking of client payments and attendance.",
      technologies: ["Javascript", "Django", "SQLite"],
    },

    {
      id: 3,
      title: "GalenOS",
      description: "An AI-powered application designed to identify respiratory diseases through machine learning algorithms, built with React, Django, and PostgreSQL, offering a tool for early detection and diagnosis.",
      technologies: ["React", "Django", "PostgreSQL"],
    }
  ]

  const skills = [
    {
      title: "PostgreSQL",
      icon: <Database className="h-12 w-12" />,
      description: "Most used DBMS",
    },
    {
      title: "Node.js",
      icon: <FontAwesomeIcon className="h-12 w-12" icon={faNode} />,
      description: "Entorno de ejecución para crear aplicaciones de servidor escalables.",
    },
    {
      title: "React",
      icon: <FontAwesomeIcon className="h-12 w-12" icon={faReact} />,
      description: "Biblioteca para construir interfaces de usuario interactivas y eficientes.",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-950" style={{ backgroundColor: '#0a0a0a' }}>

      <main className="container mx-auto px-20 py-8">
        <section className="mb-16 flex flex-col items-center md:flex-row md:justify-between">
          <div className="mb-8 md:mb-0 md:w-1/3">
            <Image
              src="/static/photo.png?height=300&width=300"
              alt="Foto"
              width={300}
              height={300}
              className="rounded-full"
            />
          </div>
          <div className="md:w-2/3">
            <h1 >Hello! I am</h1>
            <h1 className="mb-2 text-4xl font-bold">
              <Writer text="Mauricio Chaile" speed={50} />
            </h1>
            <p>
              <Writer text="Fullstack JS developer" />
            </p>
            <p className="text-xl">
              <Writer text="Fullstack JS developer 
              focused on creating innovative webs using the latest technologies that JS offers." speed={1} />
            </p>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-3xl font-bold">
            Main skills

          </h2>
          <div className="grid gap-8 md:grid-cols-3 mb-4">
            {skills.map((skill, index) => (
              <Card key={index} title={skill.title} icon={skill.icon} description={skill.description} />
            ))}

          </div>
        </section>

        <section className="mb-16">
          <h2 className="mb-8 text-3xl font-bold">Main projects</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <div
                key={index}
                className="flex flex-col rounded-lg bg-gray-900 p-6 shadow-md h-full"
              >
                <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
                <p className="mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="rounded-full bg-blue-900 px-3 py-1 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex-grow"></div>

                <Link href={`/projects/${project.id}`} className="flex justify-end">
                  <button className="rounded-full bg-green-900 px-3 py-1 mr-2 text-sm mx-1 mb-2 hover:bg-green-600 transition duration-300">
                    View more
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </section>


        <section>
          <h2 className="mb-8 text-3xl font-bold text-center">Let&apos;s connect!</h2>
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/MauriJC"
              className="flex flex-col items-center text-gray-600 hover:text-gray-500"
            >
              <Github className="h-8 w-8" />
              <span className="mt-1">GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/mauriciojavierchaile/"
              className="flex flex-col items-center text-gray-600 hover:text-gray-500"
            >
              <Linkedin className="h-8 w-8" />
              <span className="mt-1">LinkedIn</span>
            </a>

            <EmailLink></EmailLink>
          </div>
        </section>



      </main>
    </div>
  )
}


