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
