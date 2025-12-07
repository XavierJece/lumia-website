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
    it('renders key metrics', () => {
      render(<ImpactMetrics />)
      expect(screen.getByText(/Projetos Licenciados/i)).toBeInTheDocument()
      expect(screen.getByText(/\+500/i)).toBeInTheDocument()
      expect(screen.getByText(/Economia Gerada/i)).toBeInTheDocument()
    })
  })
})
