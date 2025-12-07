import React from 'react'
import { render, screen } from '@testing-library/react'
import BlogFilters from '~/shared/components/blog/BlogFilters'

vi.mock('next/link', () => {
  const Link = ({
    children,
    href,
    ...rest
  }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a href={href?.toString()} {...rest}>
      {children}
    </a>
  )

  return { __esModule: true, default: Link }
})

const categories = [
  { label: 'Licenciamento', value: 'Licensing' as const },
  { label: 'Regularização', value: 'Regularization' as const },
]

describe('BlogFilters', () => {
  it('renders all filters with correct links', () => {
    render(<BlogFilters categories={categories} activeCategory={null} />)

    expect(screen.getByText('Todos')).toHaveAttribute('href', '/blog')
    expect(screen.getByText('Licenciamento')).toHaveAttribute(
      'href',
      '/blog?category=Licensing',
    )
    expect(screen.getByText('Regularização')).toHaveAttribute(
      'href',
      '/blog?category=Regularization',
    )
  })

  it('marks active category', () => {
    render(<BlogFilters categories={categories} activeCategory="Licensing" />)

    expect(screen.getByText('Licenciamento')).toHaveAttribute(
      'aria-pressed',
      'true',
    )
    expect(screen.getByText('Regularização')).toHaveAttribute(
      'aria-pressed',
      'false',
    )
    expect(screen.getByText('Todos')).toHaveAttribute('aria-pressed', 'false')
  })
})
