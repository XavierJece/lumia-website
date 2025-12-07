import Image from 'next/image'
import type { IAuthorData } from '~/shared/types/prismic'

interface IAuthorInfoProps {
  author?: IAuthorData
  date?: string
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

export function AuthorInfo({ author, date }: IAuthorInfoProps) {
  if (!author && !date) return null

  return (
    <div className="flex items-center gap-4 rounded-2xl bg-neutral-50 px-4 py-3 ring-1 ring-neutral-200">
      {author?.avatar?.url && (
        <div className="relative h-12 w-12 overflow-hidden rounded-full bg-neutral-200">
          <Image
            src={author.avatar.url}
            alt={author.avatar.alt || author.name}
            fill
            className="object-cover"
            sizes="48px"
          />
        </div>
      )}
      <div className="flex flex-col">
        {author?.name && (
          <span className="text-sm font-semibold text-neutral-900">
            {author.name}
          </span>
        )}
        {author?.role && (
          <span className="text-xs text-neutral-600">{author.role}</span>
        )}
        {date && (
          <span className="text-xs text-neutral-600">
            Publicado em {formatDate(date)}
          </span>
        )}
      </div>
    </div>
  )
}

export default AuthorInfo
