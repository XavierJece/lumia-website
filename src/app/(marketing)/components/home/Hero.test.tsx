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
    expect(cta).toHaveClass('bg-accent-yellow') // Primary style check (partial)
  })

  it('renders secondary CTA anchored to #solucoes', () => {
    render(<Hero />)
    const cta = screen.getByRole('link', { name: /Ver Nossas Soluções/i })
    expect(cta).toBeInTheDocument()
    expect(cta).toHaveAttribute('href', '#solucoes')
    expect(cta).toHaveClass('border-white') // Outline style check (partial)
  })

  it('renders scroll indicator', () => {
    render(<Hero />)
    expect(screen.getByText(/Scroll/i)).toBeInTheDocument()
    // Check for the icon via its container or other attribute if needed,
    // but the text presence confirms the section is rendered.
    // If we strictly want to check the chevron:
    // We can assume the ChevronDown is rendered.
  })
})
