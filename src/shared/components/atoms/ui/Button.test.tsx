import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Button } from './button'

describe('Button', () => {
  it('renders correctly with default props', () => {
    render(<Button>Click me</Button>)
    const button = screen.getByRole('button', { name: /click me/i })
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass('bg-primary-green')
    expect(button).toHaveClass('text-white-essential')
    expect(button).toHaveClass('hover:scale-[1.02]')
    expect(button).toHaveClass('hover:text-white-essential')
  })

  it('renders destructive variant correctly', () => {
    render(<Button variant="destructive">Delete</Button>)
    const button = screen.getByRole('button', { name: /delete/i })
    expect(button).toHaveClass('bg-error')
    expect(button).toHaveClass('text-white-essential')
    expect(button).toHaveClass('hover:text-white-essential')
  })

  it('renders outline variant correctly', () => {
    render(<Button variant="outline">Cancel</Button>)
    const button = screen.getByRole('button', { name: /cancel/i })
    expect(button).toHaveClass('border')
    expect(button).toHaveClass('border-neutral-300')
    expect(button).toHaveClass('bg-white-essential')
  })

  it('renders secondary variant correctly', () => {
    render(<Button variant="secondary">Secondary</Button>)
    const button = screen.getByRole('button', { name: /secondary/i })
    expect(button).toHaveClass('bg-green-200')
    expect(button).toHaveClass('text-green-800')
  })

  it('renders ghost variant correctly', () => {
    render(<Button variant="ghost">Ghost</Button>)
    const button = screen.getByRole('button', { name: /ghost/i })
    expect(button).toHaveClass('hover:bg-neutral-100')
  })

  it('renders link variant correctly', () => {
    render(<Button variant="link">Link</Button>)
    const button = screen.getByRole('button', { name: /link/i })
    expect(button).toHaveClass('text-primary-green')
    expect(button).toHaveClass('hover:underline')
  })

  it('applies custom className', () => {
    render(<Button className="custom-class">Custom</Button>)
    const button = screen.getByRole('button', { name: /custom/i })
    expect(button).toHaveClass('custom-class')
  })
})
