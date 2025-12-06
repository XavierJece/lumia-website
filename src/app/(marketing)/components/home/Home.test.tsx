import React from 'react'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'
import { FeaturedServices } from './FeaturedServices'
import { ImpactMetrics } from './ImpactMetrics'
import { SocialProof } from './SocialProof'
import { describe, it, expect } from 'vitest'

describe('Home Page Components', () => {
  describe('Hero', () => {
    it('renders main headline and CTAs', () => {
      render(<Hero />)
      expect(screen.getByText(/Consultoria ambiental com/i)).toBeInTheDocument()
      expect(screen.getByText(/agilidade/i)).toBeInTheDocument()
      expect(
        screen.getByRole('link', { name: /Resolver Agora/i }),
      ).toBeInTheDocument()
      expect(
        screen.getByRole('link', { name: /Começar Projeto/i }),
      ).toBeInTheDocument()
    })
  })

  describe('FeaturedServices', () => {
    it('renders service cards', () => {
      render(<FeaturedServices />)
      expect(
        screen.getByText(/Soluções para cada momento do seu negócio/i),
      ).toBeInTheDocument()
      expect(screen.getByText(/Resolução de Conflitos/i)).toBeInTheDocument()
      expect(screen.getByText(/Licenciamento Ambiental/i)).toBeInTheDocument()
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

  describe('SocialProof', () => {
    it('renders social proof section', () => {
      render(<SocialProof />)
      expect(
        screen.getByText(/Confiança construída com grandes resultados/i),
      ).toBeInTheDocument()
      expect(
        screen.getByRole('link', { name: /Ver Cases de Sucesso/i }),
      ).toBeInTheDocument()
    })
  })
})
