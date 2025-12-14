import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { CONTACT_INFO } from '~/shared/config/constants'
import { Hero } from './Hero'

describe('Hero Component', () => {
  it('renders new headline in H1 tag', () => {
    render(<Hero />)
    const headline = screen.getByRole('heading', { level: 1 })
    expect(headline).toHaveTextContent(/Conformidade Ambiental sem Burocracia/i)
    expect(headline).toHaveTextContent(/Agilidade e Clareza para Sua Empresa/i)
  })

  it('renders subheadline', () => {
    render(<Hero />)
    expect(
      screen.getByText(
        /Traduzimos exigências legais em processos simples e eficientes/i,
      ),
    ).toBeInTheDocument()
    expect(
      screen.getByText(
        /Garanta a segurança jurídica da sua operação sem perder o foco no negócio/i,
      ),
    ).toBeInTheDocument()
  })

  it('renders primary WhatsApp CTA with correct link', () => {
    render(<Hero />)
    const cta = screen.getByRole('link', {
      name: /Falar com especialista no WhatsApp/i,
    })
    expect(cta).toBeInTheDocument()
    expect(cta).toHaveAttribute('href', CONTACT_INFO.whatsapp.link)
    expect(cta).toHaveClass('bg-accent-yellow')
  })

  it('renders secondary CTA anchored to #solucoes', () => {
    render(<Hero />)
    const cta = screen.getByRole('link', { name: /Ver Nossas Soluções/i })
    expect(cta).toBeInTheDocument()
    expect(cta).toHaveAttribute('href', '/solucoes')
    expect(cta).toHaveClass('border-secondary-green')
  })

  it('renders scroll indicator', () => {
    render(<Hero />)
    // We check for the SVG or a label if possible, but the current implementation
    // uses an SVG with aria-label="Role para baixo"
    expect(screen.getByLabelText(/Role para baixo/i)).toBeInTheDocument()
  })

  it('does not render image (removed feature)', () => {
    render(<Hero />)
    const image = screen.queryByRole('img', {
      name: /Equipe da Lumia Consultoria/i,
    })
    expect(image).not.toBeInTheDocument()
  })
})
