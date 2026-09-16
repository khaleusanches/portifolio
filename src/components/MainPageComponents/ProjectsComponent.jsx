import Container from "../gerais/Container"
import { Cascata, Reveal } from "../gerais/Reveal"
import ProjectCardComponent from "../gerais/ProjectCardComponent"
import { projectList } from "../../content/projects"

/**
 * A grade com todos os trabalhos entregues.
 *
 * Existe porque, sem ela, o único caminho até um Project era esperar a vitrine passar
 * por ele — e a vitrine mostra só os Featured, que são curadoria e não a lista
 * completa. Quem estivesse fora da curadoria não existia para quem visita, nem para o
 * rastreador de busca, que também não tinha link para seguir.
 *
 * Por isso ela lê `projectList` e não `featuredProjects`: Featured continua governando
 * a vitrine, que é o que ele define no modelo.
 */
function ProjectsComponent() {
    const projects = projectList()

    return (
        <section id="projetos" aria-labelledby="titulo-projetos" className="secao bg-base text-ink">
            <Container>
                <Reveal>
                    <p className="rotulo-secao">Portfólio</p>
                    <h2 id="titulo-projetos" className="mt-3 font-baskerville text-titulo">
                        Trabalhos entregues
                    </h2>
                </Reveal>

                <Cascata className="mt-12 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project) => (
                        <Cascata.Item key={project.slug}>
                            <ProjectCardComponent project={project} />
                        </Cascata.Item>
                    ))}
                </Cascata>
            </Container>
        </section>
    )
}

export default ProjectsComponent
