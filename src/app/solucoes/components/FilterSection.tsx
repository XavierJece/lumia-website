'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { Button } from '~/shared/components/atoms/ui/button'
import {
  solutionsCategoryContent,
  solutionsContent,
} from '~/shared/data/solutionContent'

export function FilterSection() {
  const router = useRouter()
  const searchParams = useSearchParams()

  // Get the current filter from URL query params
  const activeCategory = searchParams.get('c')

  const setActiveFilter = (filter: string | null) => {
    const params = new URLSearchParams(searchParams.toString())

    if (filter) {
      params.set('c', filter)
    } else {
      // Remove filter if null (all solutions)
      params.delete('c')
    }

    // Update the URL without page reload
    router.push(`?${params.toString()}`, { scroll: false })
  }

  const countFilteredServices = solutionsContent.filter(
    (solution) =>
      activeCategory === null || solution.categorySlug === activeCategory,
  ).length
  return (
    <section className="border-b border-border">
      <div className="container-lumia p-4 py-6">
        <h2 className="text-xl font-heading font-bold text-foreground mb-4">
          Filtros
        </h2>
        <div className="flex flex-wrap gap-2">
          <Button
            variant={activeCategory === null ? 'default' : 'outline'}
            size="sm"
            onClick={() => setActiveFilter(null)}
            className="font-medium whitespace-pre-wrap w-full sm:w-auto min-h-fit"
          >
            Todas as Soluções
          </Button>
          {solutionsCategoryContent.map((section) => (
            <Button
              key={section.slug}
              variant={activeCategory === section.slug ? 'default' : 'outline'}
              size="sm"
              onClick={() =>
                setActiveFilter(
                  activeCategory === section.slug ? null : section.slug,
                )
              }
              className="font-medium whitespace-pre-wrap w-full sm:w-auto py-1 min-h-fit flex items-center justify-between text-center"
            >
              <section.icon size={14} className="mr-1.5" />
              <span className="flex-1">{section.title}</span>
            </Button>
          ))}
        </div>
        <p className="mt-6 text-muted-foreground">
          Exibindo{' '}
          <span className="font-semibold text-foreground">
            {countFilteredServices}
          </span>{' '}
          soluções
        </p>
      </div>
    </section>
  )
}
