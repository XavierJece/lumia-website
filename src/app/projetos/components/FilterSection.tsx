'use client'

import { Button } from '~/shared/components/atoms/ui/button'
import { solutionContent } from '~/shared/data/solutionContent'

interface FilterSectionProps {
  activeFilter: string | null
  setActiveFilter: (filter: string | null) => void
}

export function FilterSection({
  activeFilter,
  setActiveFilter,
}: FilterSectionProps) {
  return (
    <section className="border-b border-border">
      <div className="container-lumia p-4 py-6">
        <h2 className="text-xl font-heading font-bold text-foreground mb-4">
          Filtros
        </h2>
        <div className="flex flex-wrap gap-2">
          <Button
            variant={activeFilter === null ? 'default' : 'outline'}
            size="sm"
            onClick={() => setActiveFilter(null)}
            className="font-medium whitespace-pre-wrap w-full sm:w-auto min-h-fit"
          >
            Todas os Projetos
          </Button>
          {solutionContent.map((section) => (
            <Button
              key={section.href}
              variant={activeFilter === section.href ? 'default' : 'outline'}
              size="sm"
              onClick={() => setActiveFilter(section.href)}
              className="font-medium whitespace-pre-wrap w-full sm:w-auto py-1 min-h-fit flex items-center justify-between text-center"
            >
              <section.icon size={14} className="mr-1.5" />
              <span className="flex-1">{section.title}</span>
            </Button>
          ))}
        </div>
      </div>
    </section>
  )
}
