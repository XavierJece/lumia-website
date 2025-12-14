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
    const cta = screen.getByRole('button', {
      name: /Falar com especialista no WhatsApp/i,
    })
    expect(cta).toBeInTheDocument()
    expect(cta).toHaveAttribute('href', CONTACT_INFO.whatsapp.link)
    // Updated to match the current button variant (primary-green)
    expect(cta).toHaveClass('bg-primary-green')
  })

  it('renders secondary CTA anchored to #solucoes', () => {
    render(<Hero />)
    const cta = screen.getByRole('button', { name: /Ver Nossas Soluções/i })
    expect(cta).toBeInTheDocument()
    expect(cta).toHaveAttribute('href', '/solucoes')
    // Updated to match the specific border opacity class used in HeroContent
    expect(cta).toHaveClass('border-secondary-green/20')
  })

  it('renders scroll indicator', () => {
    render(<Hero />)
    // Updated aria-label to match ScrollButton implementation ("Rolar" vs "Role")
    expect(screen.getByLabelText(/Rolar para baixo/i)).toBeInTheDocument()
  })

  it('does not render image (removed feature)', () => {
    render(<Hero />)
    const image = screen.queryByRole('img', {
      name: /Equipe da Lumia Consultoria/i,
    })
    expect(image).not.toBeInTheDocument()
  })
})
