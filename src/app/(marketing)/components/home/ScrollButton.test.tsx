import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { ScrollButton } from './ScrollButton'

describe('ScrollButton', () => {
  it('renders correctly', () => {
    render(<ScrollButton />)
    const button = screen.getByRole('button', { name: /rolar para baixo/i })
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass('animate-bounce')
  })

  it('scrolls window on click', () => {
    // Mock window.scrollTo
    const scrollToMock = vi.fn()
    window.scrollTo = scrollToMock
    // Mock window.innerHeight
    Object.defineProperty(window, 'innerHeight', {
      writable: true,
      configurable: true,
      value: 768,
    })

    render(<ScrollButton />)
    const button = screen.getByRole('button', { name: /rolar para baixo/i })

    fireEvent.click(button)

    expect(scrollToMock).toHaveBeenCalledWith({
      top: 768,
      behavior: 'smooth',
    })
  })
})
