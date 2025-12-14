import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import SolutionsGrid from './SolutionsGrid'

describe('SolutionsGrid', () => {
  it('renders section header', () => {
    render(<SolutionsGrid />)
    expect(screen.getByText('Soluções para o seu desafio.')).toBeInTheDocument()
    expect(
      screen.getByText(
        'Simplificamos a conformidade ambiental para que você foque no crescimento do seu negócio.',
      ),
    ).toBeInTheDocument()
  })

  it('renders all 3 solution cards', () => {
    render(<SolutionsGrid />)
    expect(
      screen.getByText('Licenciamento Ambiental para Indústrias'),
    ).toBeInTheDocument()
    expect(
      screen.getByText('Regularização de Emergência e Defesa'),
    ).toBeInTheDocument()
    expect(
      screen.getByText('Assessoria Contínua para Empresas'),
    ).toBeInTheDocument()
  })

  it('cards have correct links', () => {
    render(<SolutionsGrid />)

    const licensingLink = screen.getByRole('link', {
      name: /Licenciamento Ambiental para Indústrias/i,
    })
    expect(licensingLink).toHaveAttribute(
      'href',
      '/solucoes/licenciamento-industrial',
    )

    const emergencyLink = screen.getByRole('link', {
      name: /Regularização de Emergência e Defesa/i,
    })
    expect(emergencyLink).toHaveAttribute(
      'href',
      '/solucoes/regularizacao-emergencia',
    )

    const advisoryLink = screen.getByRole('link', {
      name: /Assessoria Contínua para Empresas/i,
    })
    expect(advisoryLink).toHaveAttribute(
      'href',
      '/solucoes/assessoria-continua',
    )
  })

  it('has correct section id for navigation', () => {
    const { container } = render(<SolutionsGrid />)
    const section = container.querySelector('section')
    expect(section).toHaveAttribute('id', 'solucoes')
  })
})
