'use client'

import { LazyMotion, domAnimation } from 'framer-motion'
import { useRef } from 'react'

import { Section } from '~/shared/components/ui/section'

import { useReducedMotion, useScrollProgress } from './hooks/useScrollProgress'
import TimelineProgress from './TimelineProgress'
import TimelineStepCard from './TimelineStepCard'
import { timelineSteps } from './timelineData'

/**
 * Main container component for the Timeline Methodology section.
 * Integrates TimelineStepCard and TimelineProgress components,
 * manages scroll detection, and implements stagger animations.
 *
 * Accessibility Features:
 * - Reduced motion support via useReducedMotion hook
 * - Semantic HTML structure (section with role="region", H2 heading)
 * - ARIA labels for screen readers (aria-labelledby, aria-label on list)
 * - Keyboard navigation support (cards are focusable with tabIndex)
 * - WCAG AA color contrast compliance (yellow-800 for text instead of light yellow)
 */
export function TimelineMethodology() {
  const containerRef = useRef<HTMLElement>(null)
  const { progress } = useScrollProgress(containerRef)
  const prefersReducedMotion = useReducedMotion()

  return (
    <LazyMotion features={domAnimation}>
      <Section
        ref={containerRef}
        className="relative"
        aria-labelledby="timeline-heading"
        role="region"
      >
        <Section.Header>
          <Section.Title id="timeline-heading">
            Como Eliminamos a Burocracia
          </Section.Title>
          <Section.Subtitle>
            Conheça nosso processo em 4 etapas claras e objetivas. Da análise
            inicial à conformidade contínua: veja como simplificamos o
            licenciamento ambiental.
          </Section.Subtitle>
        </Section.Header>

        <Section.Content>
          {/* Timeline Container with Progress Line and Cards */}
          <div className="relative py-6 md:py-8 lg:py-8">
            {/* Timeline Progress Line - Absolutely positioned */}
            <TimelineProgress
              progress={progress}
              prefersReducedMotion={prefersReducedMotion}
              stepCount={timelineSteps.length}
            />

            {/* Step Cards Container - Positioned relative to timeline line */}
            <div
              role="list"
              aria-label="Processo em 4 etapas"
              className="flex flex-col gap-6 pl-12 md:gap-8 md:pl-16 lg:gap-12 lg:pl-12"
            >
              {timelineSteps.map((step, index) => (
                <TimelineStepCard
                  key={step.id}
                  step={step}
                  index={index}
                  progress={progress}
                  prefersReducedMotion={prefersReducedMotion}
                />
              ))}
            </div>
          </div>
        </Section.Content>
      </Section>
    </LazyMotion>
  )
}
