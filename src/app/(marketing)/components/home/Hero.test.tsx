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
    expect(cta).toHaveAttribute('href', '#solucoes')
    // Updated style check for light theme
    expect(cta).toHaveClass('border-secondary-green')
  })

  it('renders scroll indicator', () => {
    render(<Hero />)
    expect(screen.getByText(/Scroll/i)).toBeInTheDocument()
  })

  it('does not render image by default', () => {
    render(<Hero />)
    const image = screen.queryByRole('img', {
      name: /Equipe da Lumia Consultoria/i,
    })
    expect(image).not.toBeInTheDocument()
  })

  it('renders image when showImage is true', () => {
    render(<Hero showImage={true} />)
    const image = screen.getByRole('img', {
      name: /Equipe da Lumia Consultoria/i,
    })
    expect(image).toBeInTheDocument()
  })

  it('applies side layout classes when imagePosition is side', () => {
    const { container } = render(<Hero showImage={true} imagePosition="side" />)
    // Check if grid class is present on the main container
    // We look for the div that wraps content and potentially image
    // The structure is roughly: section > div > (content + image)
    // We can search for the text-left class which is specific to side layout
    const wrapper = container.querySelector('.text-left')
    expect(wrapper).toBeInTheDocument()
    expect(wrapper).toHaveClass('grid')
  })

  it('applies bottom layout classes when imagePosition is bottom', () => {
    const { container } = render(
      <Hero showImage={true} imagePosition="bottom" />,
    )
    // In bottom layout, text is centered
    const wrapper = container.querySelector('.text-center')
    expect(wrapper).toBeInTheDocument()
    // Image wrapper should have flow-root
    const imageWrapper = container.querySelector('.flow-root')
    expect(imageWrapper).toBeInTheDocument()
  })
})
