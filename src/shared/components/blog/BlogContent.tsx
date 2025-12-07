import { PrismicRichText, type JSXMapSerializer } from '@prismicio/react'
import type { IBlogPostData } from '~/shared/types/prismic'

interface IBlogContentProps {
  content: IBlogPostData['content']
}

const components: JSXMapSerializer = {
  heading1: ({ children }) => (
    <h1 className="mb-6 text-3xl font-bold text-neutral-900">{children}</h1>
  ),
  heading2: ({ children }) => (
    <h2 className="mb-4 mt-8 text-2xl font-bold text-neutral-900">
      {children}
    </h2>
  ),
  heading3: ({ children }) => (
    <h3 className="mb-3 mt-6 text-xl font-semibold text-neutral-900">
      {children}
    </h3>
  ),
  paragraph: ({ children }) => (
    <p className="mb-4 leading-relaxed text-neutral-700">{children}</p>
  ),
  list: ({ children }) => (
    <ul className="mb-4 list-disc space-y-2 pl-5">{children}</ul>
  ),
  oList: ({ children }) => (
    <ol className="mb-4 list-decimal space-y-2 pl-5">{children}</ol>
  ),
  listItem: ({ children }) => <li>{children}</li>,
  oListItem: ({ children }) => <li>{children}</li>,
  strong: ({ children }) => (
    <strong className="font-semibold text-neutral-900">{children}</strong>
  ),
  hyperlink: ({ children, node }) => (
    <a
      href={node.data.url}
      className="text-primary-green underline decoration-2 underline-offset-4 transition hover:text-emerald-700"
      target={node.data.target || '_self'}
      rel={node.data.target === '_blank' ? 'noopener noreferrer' : undefined}
    >
      {children}
    </a>
  ),
}

export function BlogContent({ content }: IBlogContentProps) {
  return (
    <div className="prose prose-neutral max-w-none prose-headings:font-maven prose-a:font-semibold">
      <PrismicRichText field={content} components={components} />
    </div>
  )
}

export default BlogContent
