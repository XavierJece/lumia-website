import { IProject } from '~/shared/data/projectContent'

interface ProjectCardProps {
  project: IProject
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div
      key={project.title}
      className="bg-card rounded-2xl shadow-soft border border-border overflow-hidden hover-lift group flex flex-col"
    >
      {/* Header */}
      <div className="p-6 border-b border-border bg-muted/30">
        <div className="flex items-center gap-4">
          <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
            <project.icon className="size-7 text-primary group-hover:text-primary-foreground transition-colors" />
          </div>
          <div>
            <h2 className="text-xl font-heading font-bold text-foreground">
              {project.title}
            </h2>
            <span className="text-sm text-primary-green font-bold">
              {project.category}
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4  flex flex-col justify-between flex-1">
        <div>
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
            Desafio
          </h3>
          <p className="text-foreground">{project.problem}</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
            Solução
          </h3>
          <p className="text-foreground">{project.solution}</p>
        </div>

        <div className="bg-primary/5 rounded-lg p-4">
          <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
            Resultado
          </h3>
          <p className="text-foreground font-medium">{project.result}</p>
        </div>

        {project.testimonial && (
          <blockquote className="border-l-4 border-accent pl-4 italic text-muted-foreground">
            {`"${project.testimonial}"`}
          </blockquote>
        )}
      </div>
    </div>
  )
}
