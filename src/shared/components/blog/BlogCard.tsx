import Image from 'next/image'
import Link from 'next/link'
import type { IBlogPost } from '~/shared/types/prismic'

interface IBlogCardProps {
  post: IBlogPost
}

const formatDate = (dateString?: string) => {
  if (!dateString) return ''
  const date = new Date(dateString)
  if (Number.isNaN(date.getTime())) return ''
  return date.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })
}

export function BlogCard({ post }: IBlogCardProps) {
  const { data } = post
  const image = data.main_image
  const date =
    data.published_date ||
    post.first_publication_date ||
    post.last_publication_date

  return (
    <article className="flex h-full flex-col gap-4 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-neutral-200 transition-shadow hover:shadow-md">
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-neutral-100">
        {image?.url ? (
          <Image
            src={image.url}
            alt={image.alt || data.title}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 420px"
            priority={false}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-sm text-neutral-500">
            Imagem do artigo
          </div>
        )}
      </div>

      <div className="flex items-center gap-3 text-xs text-neutral-600">
        {date && <time dateTime={date}>{formatDate(date)}</time>}
        <span className="rounded-full bg-green-50 px-3 py-1 font-medium text-primary-green">
          {data.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-2">
        <h3 className="text-lg font-bold text-neutral-900">
          <Link href={`/blog/${post.uid}`} className="hover:text-primary-green">
            {data.title}
          </Link>
        </h3>
        {data.subtitle && (
          <p className="line-clamp-3 text-sm text-neutral-600">
            {data.subtitle}
          </p>
        )}
        {data.summary && !data.subtitle && (
          <p className="line-clamp-3 text-sm text-neutral-600">
            {data.summary}
          </p>
        )}
      </div>
    </article>
  )
}

export default BlogCard
