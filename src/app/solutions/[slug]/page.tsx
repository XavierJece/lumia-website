import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import {
  solutionsCategoryContent,
  solutionsServiceContent,
} from '~/shared/data/solutionContent'
import { slugFy } from '~/shared/utils/string'
import * as C from './components'

// ✅ 1. Geração de slugs estáticos (SSG)
export async function generateStaticParams() {
  return solutionsServiceContent.map((solution) => ({
    slug: slugFy(solution.title),
  }))
}

// ✅ 2. Metadados dinâmicos (SEO)
export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const solution = solutionsServiceContent.find(
    (s) => slugFy(s.title) === params.slug,
  )
  return {
    title: solution?.title || 'Solução não encontrada',
  }
}

// ✅ 3. Página – Server Component puro
export default function SolutionsPage({
  params,
}: {
  params: { slug: string }
}) {
  const { slug } = params

  const solution = solutionsServiceContent.find((s) => slugFy(s.title) === slug)

  if (!solution) {
    notFound()
  }

  const category = solutionsCategoryContent.find(
    (c) => c.slug === solution.categorySlug,
  )!

  return (
    <>
      <C.HeroSection
        category={{
          icon: category.icon,
          quickLinks: category.quickLinks,
        }}
        solution={{
          title: solution.title,
          icon: solution.icon,
          subtitle: solution.subtitle,
        }}
      />
      <C.GallerySection
        imagensURL={solution.coverURL ? [solution.coverURL] : undefined}
      />
      <C.ContentSection
        solution={{
          title: solution.title,
          businessAdvantages: solution.businessAdvantages,
          description: solution.description,
        }}
      />
      <C.ProcessSection
        solution={{
          process: solution.process,
        }}
      />
      <C.CtaSection />
    </>
  )
}
