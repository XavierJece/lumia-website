import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllBlogPosts } from '~/shared/lib/prismicio'
import BlogCard from '~/shared/components/blog/BlogCard'
import BlogFilters from '~/shared/components/blog/BlogFilters'
import type { IBlogCategory } from '~/shared/types/prismic'

const PAGE_SIZE = 9
const CATEGORIES: { label: string; value: IBlogCategory }[] = [
  { label: 'Licenciamento', value: 'Licensing' },
  { label: 'Regularização', value: 'Regularization' },
]

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Blog e Conteúdos | Lumia Consulting',
  description:
    'Artigos técnicos sobre licenciamento ambiental, regularização e melhores práticas ESG para empresas.',
}

interface IBlogPageSearchParams {
  category?: string
  page?: string
}

const isValidCategory = (value?: string): value is IBlogCategory =>
  value === 'Licensing' || value === 'Regularization'

export default async function BlogPage({
  searchParams,
}: {
  searchParams?: Promise<IBlogPageSearchParams>
}) {
  const resolvedSearchParams = (await searchParams) || {}
  const activeCategory = isValidCategory(resolvedSearchParams.category)
    ? resolvedSearchParams.category
    : null
  const currentPage = Math.max(
    1,
    Number.parseInt(resolvedSearchParams.page || '1', 10) || 1,
  )

  const posts = await getAllBlogPosts({ pageSize: 100 })
  const filteredPosts = activeCategory
    ? posts.filter((post) => post.data.category === activeCategory)
    : posts

  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / PAGE_SIZE))
  const safePage = Math.min(currentPage, totalPages)
  const start = (safePage - 1) * PAGE_SIZE
  const paginatedPosts = filteredPosts.slice(start, start + PAGE_SIZE)

  return (
    <main className="bg-white-essential">
      <section className="container mx-auto px-6 pb-20 pt-14 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-primary-green">
              Conteúdo especializado
            </p>
            <h1 className="font-maven text-4xl font-bold text-neutral-900">
              Blog & hub de conhecimento
            </h1>
            <p className="text-lg text-neutral-700">
              Insights práticos sobre licenciamento, regularização e estratégias
              ambientais para manter sua empresa em conformidade.
            </p>
          </div>
          <BlogFilters
            categories={CATEGORIES}
            activeCategory={activeCategory}
          />
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {paginatedPosts.map((post) => (
            <BlogCard key={post.uid} post={post} />
          ))}
        </div>

        {paginatedPosts.length === 0 && (
          <div className="mt-12 rounded-2xl bg-neutral-50 px-6 py-10 text-center text-neutral-700 ring-1 ring-neutral-200">
            Nenhum artigo encontrado para esta categoria no momento.
          </div>
        )}

        {totalPages > 1 && (
          <div className="mt-10 flex items-center justify-between rounded-2xl border border-neutral-200 px-4 py-3 text-sm text-neutral-700">
            <span>
              Página {safePage} de {totalPages}
            </span>
            <div className="flex items-center gap-3">
              {safePage > 1 && (
                <Link
                  href={`/blog?${new URLSearchParams({
                    ...(activeCategory ? { category: activeCategory } : {}),
                    page: String(safePage - 1),
                  }).toString()}`}
                  className="rounded-full px-3 py-2 text-primary-green hover:bg-neutral-100"
                >
                  Anterior
                </Link>
              )}
              {safePage < totalPages && (
                <Link
                  href={`/blog?${new URLSearchParams({
                    ...(activeCategory ? { category: activeCategory } : {}),
                    page: String(safePage + 1),
                  }).toString()}`}
                  className="rounded-full px-3 py-2 text-primary-green hover:bg-neutral-100"
                >
                  Próxima
                </Link>
              )}
            </div>
          </div>
        )}
      </section>
    </main>
  )
}
