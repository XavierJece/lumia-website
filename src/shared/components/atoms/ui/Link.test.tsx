import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Link } from './link'

describe('Link', () => {
  it('renders correctly with default props', () => {
    render(<Link href="/">Home</Link>)
    const link = screen.getByRole('link', { name: /home/i })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '/')
    expect(link).toHaveClass('text-primary-green')
  })

  it('renders subtle variant correctly', () => {
    render(
      <Link href="/" visual="subtle">
        About
      </Link>,
    )
    const link = screen.getByRole('link', { name: /about/i })
    expect(link).toHaveClass('text-neutral-600')
    expect(link).toHaveClass('hover:text-neutral-900')
  })

  it('renders button visual correctly', () => {
    render(
      <Link href="/" visual="button">
        Button Link
      </Link>,
    )
    const link = screen.getByRole('button', { name: /button link/i })
    expect(link).toHaveClass('bg-primary-green')
    expect(link).toHaveClass('text-white-essential')
  })

  it('renders underline hover effect by default', () => {
    render(<Link href="/">Underline</Link>)
    const link = screen.getByRole('link', { name: /underline/i })
    expect(link).toHaveClass('hover:underline')
  })

  it('renders scale hover effect correctly', () => {
    render(
      <Link href="/" hoverEffect="scale" visual="button">
        Scale
      </Link>,
    )
    const link = screen.getByRole('button', { name: /scale/i })
    expect(link).toHaveClass('hover:scale-[1.02]')
    expect(link).toHaveClass('active:scale-95')
  })
})
