import React from 'react'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'
import { footerContent } from '~/shared/data/footerContent'

describe('Footer', () => {
  it('renders quick links and legal information', () => {
    render(<Footer content={footerContent} />)

    expect(screen.getByRole('link', { name: /Início/i })).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: /Privacidade/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByText(/Lumia Engenharia e Consultoria Ambiental/i),
    ).toBeInTheDocument()
  })

  it('shows contact and social links', () => {
    render(<Footer content={footerContent} />)

    expect(
      screen.getByRole('link', { name: /Falar com Especialista/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /LinkedIn/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Instagram/i })).toBeInTheDocument()
  })
})
