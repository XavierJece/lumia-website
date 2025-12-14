import type { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import BlogContent from '~/shared/components/blog/BlogContent'
import BlogShareButtons from '~/shared/components/blog/BlogShareButtons'
import AuthorInfo from '~/shared/components/blog/AuthorInfo'
import { getAllBlogPosts, getBlogPostByUid } from '~/shared/lib/prismicio'

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') || 'https://lumia.com.br'

export const revalidate = 60

export async function generateStaticParams() {
  const posts = await getAllBlogPosts({ pageSize: 100 })
  return posts.map((post) => ({ slug: post.uid }))
}

type BlogPageParams = Promise<{ slug: string }>

const buildCanonicalUrl = (slug: string) => `${BASE_URL}/blog/${slug}`

export async function generateMetadata({
  params,
}: {
  params: BlogPageParams
}): Promise<Metadata> {
  const { slug } = await params
  const post = await getBlogPostByUid(slug)

  if (!post) {
    return {
      title: 'Artigo não encontrado | Lumia Consulting',
      description:
        'O conteúdo que você procura não está disponível. Explore outros artigos da Lumia Consulting.',
    }
  }

  const title = post.data.seo_title || post.data.title
  const description =
    post.data.seo_description || post.data.subtitle || post.data.summary || ''
  const openGraphImage =
    post.data.main_image?.url ||
    'https://images.prismic.io/lumia-eng/default-blog-og.jpg'
  const canonical = buildCanonicalUrl(post.uid)

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      type: 'article',
      images: [
        {
          url: openGraphImage,
          alt: post.data.main_image?.alt || post.data.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [openGraphImage],
    },
  }
}

const formatDate = (value?: string) => {
  if (!value) return ''
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return ''
  return date.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  })
}

export default async function BlogPostPage({
  params,
}: {
  params: BlogPageParams
}) {
  const { slug } = await params
  const post = await getBlogPostByUid(slug)

  if (!post) {
    notFound()
  }

  const { data } = post
  const publishedDate =
    data.published_date ||
    post.first_publication_date ||
    post.last_publication_date
  const canonical = buildCanonicalUrl(post.uid)

  return (
    <main className="bg-white-essential">
      <article className="container mx-auto px-6 pb-20 pt-14 lg:px-8">
        <header className="space-y-4">
          <LinkBackToBlog />
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-primary-green">
            {data.category}
          </p>
          <h1 className="font-maven text-4xl font-bold text-neutral-900">
            {data.title}
          </h1>
          {data.subtitle && (
            <p className="text-lg text-neutral-700">{data.subtitle}</p>
          )}
          <AuthorInfo author={data.author?.data} date={publishedDate} />
        </header>

        <div className="mt-10 overflow-hidden rounded-3xl bg-neutral-100">
          {data.main_image?.url ? (
            <div className="relative h-[320px] w-full bg-neutral-100 sm:h-[420px]">
              <Image
                src={data.main_image.url}
                alt={data.main_image.alt || data.title}
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
            </div>
          ) : (
            <div className="flex h-64 w-full items-center justify-center text-neutral-600">
              Imagem não disponível
            </div>
          )}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[1fr,320px]">
          <div className="space-y-6">
            <BlogContent content={data.content} />
          </div>
          <aside className="space-y-6 rounded-3xl bg-neutral-50 p-6 ring-1 ring-neutral-200">
            <div>
              <h2 className="text-base font-semibold text-neutral-900">
                Compartilhe este artigo
              </h2>
              <p className="mt-2 text-sm text-neutral-600">
                Envie pelo WhatsApp ou copie o link para compartilhar com seu
                time.
              </p>
              <div className="mt-4">
                <BlogShareButtons title={data.title} canonicalUrl={canonical} />
              </div>
            </div>
            <div className="space-y-2 text-sm text-neutral-600">
              {publishedDate && (
                <p>
                  <span className="font-semibold text-neutral-900">
                    Publicado em:
                  </span>{' '}
                  {formatDate(publishedDate)}
                </p>
              )}
              {post.tags?.length ? (
                <p>
                  <span className="font-semibold text-neutral-900">Tags:</span>{' '}
                  {post.tags.join(', ')}
                </p>
              ) : null}
            </div>
          </aside>
        </div>
      </article>
    </main>
  )
}

function LinkBackToBlog() {
  return (
    <a
      href="/blog"
      className="inline-flex items-center gap-2 text-sm font-semibold text-primary-green underline-offset-4 transition hover:underline"
      aria-label="Voltar para listagem do blog"
    >
      ← Voltar para o blog
    </a>
  )
}
