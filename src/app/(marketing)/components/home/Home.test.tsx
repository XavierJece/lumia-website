import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { FeaturedServices } from './FeaturedServices'
import { ImpactMetrics } from './ImpactMetrics'

// Mock IntersectionObserver
const IntersectionObserverMock = vi.fn(() => ({
  disconnect: vi.fn(),
  observe: vi.fn(),
  takeRecords: vi.fn(),
  unobserve: vi.fn(),
}))

vi.stubGlobal('IntersectionObserver', IntersectionObserverMock)

// Mock framer-motion useInView to always return true
vi.mock('framer-motion', async (importOriginal) => {
  const actual = await importOriginal<typeof import('framer-motion')>()
  return {
    ...actual,
    useInView: () => true,
  }
})

describe('Home Page Components', () => {
  describe('FeaturedServices', () => {
    it('renders service cards', () => {
      render(<FeaturedServices />)
      expect(
        screen.getByText(/Soluções Técnicas Integradas/i),
      ).toBeInTheDocument()
      expect(screen.getByText(/Licenciamento Ambiental/i)).toBeInTheDocument()
      expect(screen.getByText(/PGRS e Resíduos Sólidos/i)).toBeInTheDocument()
    })
  })

  describe('ImpactMetrics', () => {
    it('renders key metrics with correct values and labels', async () => {
      render(<ImpactMetrics />)
      expect(screen.getByText(/Especialistas técnicos/i)).toBeInTheDocument()
      expect(
        await screen.findByText('15', {}, { timeout: 4000 }),
      ).toBeInTheDocument()
      expect(screen.getAllByText('+')).toHaveLength(3)
      expect(screen.getByText(/Clientes em conformidade/i)).toBeInTheDocument()
      expect(
        await screen.findByText('280', {}, { timeout: 4000 }),
      ).toBeInTheDocument()
      expect(
        screen.getByText(/Processos administrativos gerenciados/i),
      ).toBeInTheDocument()
      expect(
        await screen.findByText('1.200', {}, { timeout: 4000 }),
      ).toBeInTheDocument()
      expect(screen.getByText(/Satisfação dos clientes/i)).toBeInTheDocument()
      expect(
        await screen.findByText('98', {}, { timeout: 4000 }),
      ).toBeInTheDocument()
      expect(screen.getByText('%')).toBeInTheDocument()
    })

    it('renders icons for each metric', () => {
      const { container } = render(<ImpactMetrics />)
      const svgs = container.querySelectorAll('svg')
      expect(svgs.length).toBeGreaterThanOrEqual(4)
    })
  })
})
