import React from 'react'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'
import { FeaturedServices } from './FeaturedServices'
import { ImpactMetrics } from './ImpactMetrics'
import { describe, it, expect } from 'vitest'

describe('Home Page Components', () => {
  describe('Hero', () => {
    it('renders main headline and CTAs', () => {
      render(<Hero />)
      expect(
        screen.getByText(/Regularize sua operação com/i),
      ).toBeInTheDocument()
      expect(screen.getByText(/segurança jurídica/i)).toBeInTheDocument()
      expect(
        screen.getByRole('link', { name: /Falar com Especialista/i }),
      ).toBeInTheDocument()
      expect(
        screen.getByRole('link', { name: /Conhecer Serviços/i }),
      ).toBeInTheDocument()
    })
  })

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
    it('renders key metrics with correct values and labels', () => {
      render(<ImpactMetrics />)
      expect(screen.getByText(/Especialistas técnicos/i)).toBeInTheDocument()
      expect(screen.getByText('15')).toBeInTheDocument()
      expect(screen.getAllByText('+')).toHaveLength(3)
      expect(screen.getByText(/Clientes em conformidade/i)).toBeInTheDocument()
      expect(screen.getByText('280')).toBeInTheDocument()
      expect(
        screen.getByText(/Processos administrativos gerenciados/i),
      ).toBeInTheDocument()
      expect(screen.getByText('1.200')).toBeInTheDocument()
      expect(screen.getByText(/Satisfação dos clientes/i)).toBeInTheDocument()
      expect(screen.getByText('98')).toBeInTheDocument()
      expect(screen.getByText('%')).toBeInTheDocument()
    })

    it('renders icons for each metric', () => {
      const { container } = render(<ImpactMetrics />)
      const svgs = container.querySelectorAll('svg')
      expect(svgs.length).toBeGreaterThanOrEqual(4)
    })
  })
})
