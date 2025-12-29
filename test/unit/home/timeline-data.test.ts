import { describe, expect, it } from 'vitest'

import { timelineSteps } from '~/app/(marketing)/components/home/timelineData'

describe('Timeline Data Structure', () => {
  describe('timelineSteps array', () => {
    it('should have exactly 4 items', () => {
      expect(timelineSteps).toHaveLength(4)
    })

    it('should have no duplicate IDs', () => {
      const ids = timelineSteps.map((step) => step.id)
      const uniqueIds = new Set(ids)
      expect(uniqueIds.size).toBe(4)
    })

    it('should have IDs in sequential order (1-4)', () => {
      timelineSteps.forEach((step, index) => {
        expect(step.id).toBe(index + 1)
      })
    })
  })

  describe('ITimelineStep interface validation', () => {
    it('should have all required fields for each step', () => {
      timelineSteps.forEach((step) => {
        expect(step).toHaveProperty('id')
        expect(step).toHaveProperty('header')
        expect(step).toHaveProperty('title')
        expect(step).toHaveProperty('keyQuestion')
        expect(step).toHaveProperty('description')
        expect(step).toHaveProperty('diferencial')
        expect(step).toHaveProperty('practicalExample')
        expect(step).toHaveProperty('icon')
      })
    })

    it('should have correct types for all fields', () => {
      timelineSteps.forEach((step) => {
        expect(typeof step.id).toBe('number')
        expect(typeof step.header).toBe('string')
        expect(typeof step.title).toBe('string')
        expect(typeof step.keyQuestion).toBe('string')
        expect(typeof step.description).toBe('string')
        expect(typeof step.diferencial).toBe('string')
        expect(typeof step.practicalExample).toBe('string')
        // Lucide icons are React components (objects with $$typeof property)
        expect(typeof step.icon).toBe('object')
        expect(step.icon).toHaveProperty('$$typeof')
      })
    })
  })

  describe('header format validation', () => {
    it('should follow pattern "ETAPA X" for all steps', () => {
      timelineSteps.forEach((step, index) => {
        const expectedHeader = `ETAPA ${index + 1}`
        expect(step.header).toBe(expectedHeader)
      })
    })
  })

  describe('icon validation', () => {
    it('should have valid Lucide React icon components', () => {
      timelineSteps.forEach((step) => {
        // Lucide icons are React components (objects with $$typeof property)
        expect(typeof step.icon).toBe('object')
        expect(step.icon).toHaveProperty('$$typeof')
        // Check that icon is a valid React component
        expect(step.icon).toBeTruthy()
      })
    })

    it('should have different icons for each step', () => {
      // Check that icons are different by comparing the icon references directly
      const uniqueIcons = new Set(timelineSteps.map((step) => step.icon))
      expect(uniqueIcons.size).toBe(4)
    })
  })

  describe('content validation', () => {
    it('should have non-empty strings for all text fields', () => {
      timelineSteps.forEach((step) => {
        expect(step.header.trim()).not.toBe('')
        expect(step.title.trim()).not.toBe('')
        expect(step.keyQuestion.trim()).not.toBe('')
        expect(step.description.trim()).not.toBe('')
        expect(step.diferencial.trim()).not.toBe('')
        expect(step.practicalExample.trim()).not.toBe('')
      })
    })

    it('should have keyQuestion starting with "Pergunta que respondemos:"', () => {
      timelineSteps.forEach((step) => {
        expect(step.keyQuestion).toMatch(/^Pergunta que respondemos:/)
      })
    })
  })

  describe('specific step content validation', () => {
    it('should have correct content for Step 1', () => {
      const step1 = timelineSteps[0]
      expect(step1.id).toBe(1)
      expect(step1.header).toBe('ETAPA 1')
      expect(step1.title).toBe('Diagnóstico & Estratégia')
      expect(step1.keyQuestion).toContain(
        'cenário completo de exigências legais',
      )
    })

    it('should have correct content for Step 2', () => {
      const step2 = timelineSteps[1]
      expect(step2.id).toBe(2)
      expect(step2.header).toBe('ETAPA 2')
      expect(step2.title).toBe('Tradução & Planejamento')
      expect(step2.keyQuestion).toContain('transformamos a legislação complexa')
    })

    it('should have correct content for Step 3', () => {
      const step3 = timelineSteps[2]
      expect(step3.id).toBe(3)
      expect(step3.header).toBe('ETAPA 3')
      expect(step3.title).toBe('Mediação & Gestão')
      expect(step3.keyQuestion).toContain('ponte com os órgãos fiscais')
    })

    it('should have correct content for Step 4', () => {
      const step4 = timelineSteps[3]
      expect(step4.id).toBe(4)
      expect(step4.header).toBe('ETAPA 4')
      expect(step4.title).toBe('Conformidade & Entrega')
      expect(step4.keyQuestion).toContain('segurança jurídica contínua')
    })
  })
})
