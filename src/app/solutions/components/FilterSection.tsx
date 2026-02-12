'use client'

import { Filter } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Button } from '~/shared/components/atoms/ui/button'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '~/shared/components/atoms/ui/drawer'
import {
  solutionsCategoryContent,
  solutionsServiceContent,
} from '~/shared/data/solutionContent'

interface FilterListProps {
  activeCategory: string | null
  setActiveFilter: (filter: string | null) => void
  inDrawer?: boolean
}

function FilterList({
  activeCategory,
  setActiveFilter,
  inDrawer = false,
}: FilterListProps) {
  const renderButton = (props: {
    key: string
    isActive: boolean
    onClick: () => void
    icon?: React.ReactNode
    label: string
  }) => {
    const button = (
      <Button
        key={props.key}
        variant={props.isActive ? 'default' : 'outline'}
        size="sm"
        onClick={props.onClick}
        className="font-medium whitespace-pre-wrap w-full sm:w-auto py-1 min-h-fit flex items-center justify-between text-center"
      >
        {props.icon && <span className="mr-1.5">{props.icon}</span>}
        <span className="flex-1">{props.label}</span>
      </Button>
    )

    // Se estiver dentro do drawer, envolve com DrawerClose
    if (inDrawer) {
      return (
        <DrawerClose key={props.key} asChild>
          {button}
        </DrawerClose>
      )
    }
    return button
  }

  return (
    <div className="flex flex-wrap gap-2">
      {renderButton({
        key: 'all',
        isActive: activeCategory === null,
        onClick: () => setActiveFilter(null),
        label: 'Todas as Soluções',
      })}
      {solutionsCategoryContent.map((section) =>
        renderButton({
          key: section.slug,
          isActive: activeCategory === section.slug,
          onClick: () =>
            setActiveFilter(
              activeCategory === section.slug ? null : section.slug,
            ),
          icon: <section.icon size={14} />,
          label: section.title,
        }),
      )}
    </div>
  )
}

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

  const countFilteredServices = solutionsServiceContent.filter(
    (solution) =>
      activeCategory === null || solution.categorySlug === activeCategory,
  ).length

  return (
    <Drawer direction="bottom">
      <section className="border-b border-border">
        <div className="container-lumia p-4 py-6">
          <header className="flex items-center gap-4 mb-4">
            <h2 className="text-xl font-heading font-bold text-foreground">
              Filtros
            </h2>
            <DrawerTrigger asChild>
              <Button
                data-hasFilter={!!activeCategory}
                variant={activeCategory ? 'default' : 'outline'}
                className="md:hidden"
              >
                <Filter size={18} />
              </Button>
            </DrawerTrigger>
          </header>

          {/* DESKTOP: sem DrawerClose */}
          <div className="hidden md:block">
            <FilterList
              activeCategory={activeCategory}
              setActiveFilter={setActiveFilter}
            />
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

      {/* DRAWER MOBILE: com fechamento automático */}
      <DrawerContent className="data-[vaul-drawer-direction=bottom]:max-h-[100vh]">
        <DrawerHeader>
          <DrawerTitle>Filtros</DrawerTitle>
          <DrawerDescription>
            Filtre as soluções por uma categoria
          </DrawerDescription>
        </DrawerHeader>
        <div className="p-2 pb-8">
          <FilterList
            activeCategory={activeCategory}
            setActiveFilter={setActiveFilter}
            inDrawer={true}
          />
        </div>
      </DrawerContent>
    </Drawer>
  )
}
