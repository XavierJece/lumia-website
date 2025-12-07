import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import {
  SolveNowSection,
  StartHereSection,
  ServicesTable,
} from '~/shared/components/services'
import { CONTACT_INFO } from '~/shared/config/constants'

describe('Services Hub Sections', () => {
  it('renders Solve Now with WhatsApp CTA', () => {
    render(<SolveNowSection />)
    expect(
      screen.getByRole('heading', {
        name: /Soluções imediatas para quem foi autuado/i,
      }),
    ).toBeInTheDocument()
    const cta = screen.getByRole('link', { name: /Agendar Diagnóstico/i })
    expect(cta).toHaveAttribute('href', CONTACT_INFO.whatsapp.link)
  })

  it('renders Start Here with licensing steps', () => {
    render(<StartHereSection />)
    expect(
      screen.getByRole('heading', {
        name: /Comece certo: licenciamento LP, LI e LO/i,
      }),
    ).toBeInTheDocument()
    expect(screen.getByText(/Licença Prévia/i)).toBeInTheDocument()
    const cta = screen.getByRole('link', { name: /Iniciar licenciamento/i })
    expect(cta).toHaveAttribute('href', CONTACT_INFO.whatsapp.link)
  })

  it('shows services table with CTAs to WhatsApp', () => {
    render(<ServicesTable />)
    expect(
      screen.getAllByText(/Licenciamento Ambiental/).length,
    ).toBeGreaterThan(0)
    const whatsappLinks = screen
      .getAllByRole('link')
      .filter((link) =>
        link.getAttribute('href')?.includes(CONTACT_INFO.whatsapp.link),
      )
    expect(whatsappLinks.length).toBeGreaterThan(0)
  })
})
