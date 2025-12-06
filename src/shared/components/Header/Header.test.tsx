import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Header } from './Header'
import { headerContent } from '~/shared/data/headerContent'

describe('Header', () => {
  it('renders primary navigation links', () => {
    render(<Header content={headerContent} />)

    expect(screen.getByRole('link', { name: /Home/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Blog/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Contato/i })).toBeInTheDocument()
  })

  it('opens and closes the mobile menu for accessibility', async () => {
    const user = userEvent.setup()
    render(<Header content={headerContent} />)

    const menuToggle = screen.getByLabelText(/Menu/i)
    expect(menuToggle).toHaveAttribute('aria-expanded', 'false')

    await user.click(menuToggle)
    expect(menuToggle).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByTestId('mobile-menu')).toBeInTheDocument()
    expect(screen.getAllByText(/Serviços/i).length).toBeGreaterThan(0)

    await user.click(menuToggle)
    expect(menuToggle).toHaveAttribute('aria-expanded', 'false')
  })
})
