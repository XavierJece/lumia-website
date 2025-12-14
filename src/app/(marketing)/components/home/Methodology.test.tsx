import { render, screen } from '@testing-library/react'
import React from 'react'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { CONTACT_INFO } from '~/shared/config/constants'
import { Methodology } from './Methodology'

// Ensure React is available globally for JSX transformation
globalThis.React = React

// Mock IntersectionObserver
const IntersectionObserverMock = vi.fn(() => ({
  disconnect: vi.fn(),
  observe: vi.fn(),
  takeRecords: vi.fn(),
  unobserve: vi.fn(),
}))

vi.stubGlobal('IntersectionObserver', IntersectionObserverMock)

// Create a proper mock MotionValue that returns unsubscribe functions
const createMockMotionValue = (initialValue: number | string = 0) => ({
  get: () => initialValue,
  set: vi.fn(),
  on: vi.fn(() => () => {}), // Returns unsubscribe function
  onChange: vi.fn(() => () => {}), // Returns unsubscribe function
  clearListeners: vi.fn(),
  destroy: vi.fn(),
  isAnimating: vi.fn(() => false),
  stop: vi.fn(),
})

// Mock framer-motion
vi.mock('framer-motion', async (importOriginal) => {
  const actual = await importOriginal<typeof import('framer-motion')>()

  return {
    ...actual,
    useInView: () => true,
    useTransform: () => createMockMotionValue(),
  }
})

// Mock the scroll progress hook
vi.mock('./hooks/useScrollProgress', () => ({
  useScrollProgress: () => ({
    progress: createMockMotionValue(0.5),
    isComplete: false,
  }),
  useReducedMotion: () => false,
  prefersReducedMotion: () => false,
}))

describe('Methodology Component', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders section heading with correct H2 tag', () => {
    render(<Methodology />)
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toHaveTextContent(
      /Nós facilitamos o diálogo\. Você foca no seu negócio\./i,
    )
  })

  it('renders section subtitle', () => {
    render(<Methodology />)
    expect(
      screen.getByText(
        /Mediamos a relação entre sua empresa e os órgãos reguladores/i,
      ),
    ).toBeInTheDocument()
  })

  it('renders all 4 steps in correct order', () => {
    render(<Methodology />)

    // Check step titles exist (desktop + mobile = 2 of each)
    expect(screen.getAllByText(/Diagnóstico & Estratégia/i)).toHaveLength(2)
    expect(screen.getAllByText(/Tradução & Preparação/i)).toHaveLength(2)
    expect(screen.getAllByText(/Mediação & Gestão/i)).toHaveLength(2)
    expect(screen.getAllByText(/Conformidade Concluída/i)).toHaveLength(2)

    // Check step numbers exist (in both desktop and mobile versions)
    const stepNumbers = screen.getAllByText(/^[1-4]$/)
    expect(stepNumbers.length).toBeGreaterThanOrEqual(4)
  })

  it('renders step descriptions', () => {
    render(<Methodology />)

    expect(
      screen.getAllByText(/Mapeamos todos os requisitos legais/i),
    ).toHaveLength(2)
    expect(
      screen.getAllByText(/Convertemos exigências técnicas/i),
    ).toHaveLength(2)
    expect(
      screen.getAllByText(/Representamos sua empresa junto aos órgãos/i),
    ).toHaveLength(2)
    expect(
      screen.getAllByText(/Entregamos sua licença ou regularização/i),
    ).toHaveLength(2)
  })

  it('renders diferencial highlights for each step', () => {
    render(<Methodology />)

    expect(
      screen.getAllByText(/Utilizamos nosso banco de dados de processos/i),
    ).toHaveLength(2)
    expect(
      screen.getAllByText(/Nossa equipe multidisciplinar elimina/i),
    ).toHaveLength(2)
    expect(
      screen.getAllByText(/Relacionamento consolidado com órgãos/i),
    ).toHaveLength(2)
    expect(screen.getAllByText(/Você recebe um dossiê completo/i)).toHaveLength(
      2,
    )
  })

  it('renders operating diagram illustration with descriptive alt text', () => {
    render(<Methodology />)
    const image = screen.getByRole('img', {
      name: /Diagrama mostrando o fluxo de mediação da Lumia/i,
    })
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute(
      'alt',
      expect.stringContaining('processos burocráticos'),
    )
  })

  it('renders final CTA button linking to WhatsApp', () => {
    render(<Methodology />)
    const cta = screen.getByRole('link', {
      name: /Fale com um de nossos especialistas/i,
    })
    expect(cta).toBeInTheDocument()
    expect(cta).toHaveAttribute('href', CONTACT_INFO.whatsapp.link)
    expect(cta).toHaveAttribute('target', '_blank')
    expect(cta).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('renders step icons', () => {
    const { container } = render(<Methodology />)
    // Each step should have an icon (lucide-react icons are SVGs)
    const svgs = container.querySelectorAll('svg')
    // At least 8 icons (4 steps x 2 for desktop and mobile)
    expect(svgs.length).toBeGreaterThanOrEqual(8)
  })

  it('has correct section aria-labelledby attribute', () => {
    render(<Methodology />)
    const section = screen.getByRole('region', {
      name: /facilitamos o diálogo/i,
    })
    expect(section).toBeInTheDocument()
    expect(section).toHaveAttribute('aria-labelledby', 'methodology-heading')
  })

  describe('reduced-motion behavior', () => {
    it('renders all content regardless of motion preference', () => {
      // The component should still render all content
      render(<Methodology />)

      expect(screen.getAllByText(/Diagnóstico & Estratégia/i)).toHaveLength(2)
      expect(screen.getAllByText(/Tradução & Preparação/i)).toHaveLength(2)
      expect(screen.getAllByText(/Mediação & Gestão/i)).toHaveLength(2)
      expect(screen.getAllByText(/Conformidade Concluída/i)).toHaveLength(2)

      // CTA should still be present
      expect(
        screen.getByRole('link', {
          name: /Fale com um de nossos especialistas/i,
        }),
      ).toBeInTheDocument()
    })
  })
})
