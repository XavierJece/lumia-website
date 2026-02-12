'use client'

import { Filter, RotateCcw, SearchX } from 'lucide-react'
import { useSearchParams } from 'next/navigation'
import { Link } from '~/shared/components/atoms/ui/link'
import {
  ISolutionCategoryContent,
  solutionsCategoryContent,
  solutionsServiceContent,
} from '~/shared/data/solutionContent'
import { CardView } from './SolutionItem'

// export function AccordionView({ sections }: SolutionsGalleryProps) {
//   return (
//     <Accordion
//       type="multiple"
//       defaultValue={sections.map((s) => s.slug)}
//       className="space-y-6"
//     >
//       {sections.map((section) => (
//         <AccordionItem
//           key={section.slug}
//           value={section.slug}
//           className="bg-card rounded-lg shadow-soft border border-border overflow-hidden"
//         >
//           <AccordionTrigger className="px-6 py-5 hover:no-underline hover:bg-muted/50 transition-colors">
//             <div className=" flex items-center gap-4 text-left">
//               <div className="hidden w-12 h-12 rounded-xl bg-primary/10 sm:flex items-center justify-center flex-shrink-0">
//                 <section.icon className="w-6 h-6 text-primary" />
//               </div>
//               <div>
//                 <h2 className="text-xl font-heading font-bold text-foreground flex items-center gap-2">
//                   <div className=" size-10 rounded-xl bg-primary/10 sm:hidden flex items-center justify-center flex-shrink-0">
//                     <section.icon className="size-6 text-primary" />
//                   </div>
//                   {section.title}
//                 </h2>
//                 <p className="text-sm text-muted-foreground mt-1">
//                   {section.forWhom}
//                 </p>
//               </div>
//             </div>
//           </AccordionTrigger>
//           <AccordionContent className="px-6 pb-6">
//             <div className="grid gap-4 pt-2">
//               {section.services.map((service) => (
//                 <SolutionItem key={service.title} service={service} />
//               ))}
//             </div>
//           </AccordionContent>
//         </AccordionItem>
//       ))}
//     </Accordion>);
// }

const getCategoryInfo = (
  slug: string,
): Pick<ISolutionCategoryContent, 'quickLinks' | 'icon'> => {
  const category = solutionsCategoryContent.find(
    (solutionCategory) => solutionCategory.slug === slug,
  )
  if (!category) {
    throw new Error(`Category with slug ${slug} not found`)
  }
  return { quickLinks: category.quickLinks, icon: category.icon }
}

export function GalleryView() {
  const searchParams = useSearchParams()

  // Get the current filter from URL query params
  const activeCategory = searchParams.get('c')

  const filteredSolutions = solutionsServiceContent.filter(
    (solution) =>
      activeCategory === null || solution.categorySlug === activeCategory,
  )

  if (filteredSolutions.length === 0) {
    return (
      /* Empty State */
      <div className="flex flex-col items-center justify-center py-16 px-4">
        <div className="relative mb-6">
          <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center">
            <SearchX size={40} className="text-muted-foreground" />
          </div>
          <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
            <Filter size={16} className="text-primary" />
          </div>
        </div>

        <h3 className="text-xl font-heading font-bold text-foreground mb-2 text-center">
          Nenhuma solução encontrada
        </h3>
        <p className="text-muted-foreground text-center max-w-md mb-6">
          Não encontramos soluções para o filtro selecionado. Tente selecionar
          outra categoria ou visualize todas as soluções.
        </p>

        <Link
          buttonVariant="outline"
          visual="button"
          href="/solutions"
          className="font-medium"
        >
          <RotateCcw size={16} className="mr-2" />
          Ver todas as soluções
        </Link>
      </div>
    )
  }

  return (
    <>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSolutions.map((service) => (
          <CardView
            key={`${service.title}-${service.categorySlug}`}
            service={service}
            categoryInfo={getCategoryInfo(service.categorySlug)}
          />
        ))}
      </div>
    </>
  )
}

export function SolutionsGallery() {
  return (
    <section className="section-padding bg-background">
      <div className="container-lumia">
        <GalleryView />
      </div>
    </section>
  )
}
