import ReactMarkdown, { Components } from 'react-markdown'
import rehypeRaw from 'rehype-raw'

interface ITextProps {
  children: string
  components?: Partial<Components>
}

export function Text({ children, components, ...rest }: ITextProps) {
  return (
    <ReactMarkdown
      rehypePlugins={[rehypeRaw]}
      components={components}
      {...rest}
    >
      {children}
    </ReactMarkdown>
  )
}

export function stripMarkdown(md: string): string {
  return md
    .replace(/#+\s?/g, '') // headers
    .replace(/\*\*|__/g, '') // bold
    .replace(/\*|_/g, '') // italic
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // links
    .replace(/`([^`]+)`/g, '$1') // inline code
    .replace(/\n/g, ' ') // newlines to spaces
}
