import { IProject } from '~/shared/data/projectContent'
import { ProjectCard } from './ProjectCard'

interface ProjectListProps {
  projects: IProject[]
}

export function ProjectList({ projects }: ProjectListProps) {
  return (
    <section className="section-padding bg-background">
      <div className="container-lumia">
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
