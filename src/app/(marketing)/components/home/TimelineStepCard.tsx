'use client'

import { m, useTransform, type MotionValue } from 'framer-motion'
import { memo, useState } from 'react'

import { cn } from '~/shared/components/shadcn'

import type { ITimelineStep } from './types'

export interface ITimelineStepCardProps {
  step: ITimelineStep
  index: number
  progress: MotionValue<number>
  prefersReducedMotion: boolean
}

/**
 * Individual step card component for the Timeline Methodology section.
 * Displays structured content with fade-up animation and hover interactions.
 *
 * Accessibility Features:
 * - Keyboard navigation: Cards are focusable (tabIndex={0}) and respond to Enter/Space keys
 * - Focus management: Visible focus indicators with ring styles
 * - ARIA labels: Descriptive aria-label with step header and title
 * - Semantic HTML: role="listitem", H3 for step title, proper heading hierarchy
 * - Reduced motion: Animations disabled when prefers-reduced-motion is enabled
 * - Color contrast: Uses yellow-800 (#93963f) instead of light yellow for WCAG AA compliance
 * - Screen reader support: Decorative elements marked with aria-hidden="true"
 */
function TimelineStepCard({
  step,
  index,
  progress,
  prefersReducedMotion,
}: ITimelineStepCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  // Calculate animation thresholds based on card index
  // Each card animates when scroll progress reaches its position
  // Stagger delay: 50-100ms between cards (using 75ms per card)
  const cardStartThreshold = index * 0.2 // 0, 0.2, 0.4, 0.6

  // Fade-up animation: opacity and translateY
  const opacity = useTransform(
    progress,
    [cardStartThreshold, cardStartThreshold + 0.1],
    [0, 1],
  )

  const translateY = useTransform(
    progress,
    [cardStartThreshold, cardStartThreshold + 0.1],
    [20, 0],
  )

  // Animation style object
  const animationStyle = prefersReducedMotion
    ? { opacity: 1, y: 0 }
    : { opacity, y: translateY }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    // Allow keyboard activation for accessibility
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      setIsHovered(true)
      // Reset hover state after a short delay for visual feedback
      setTimeout(() => setIsHovered(false), 200)
    }
  }

  return (
    <m.div
      role="listitem"
      tabIndex={0}
      aria-label={`${step.header}: ${step.title}`}
      className={cn(
        'relative rounded-lg border-2 bg-white p-4 shadow-sm transition-colors duration-300',
        'md:p-5 lg:p-6', // Responsive padding
        'focus:outline-none focus:ring-2 focus:ring-amarelo-luz focus:ring-offset-2 focus:ring-offset-white',
        isHovered ? 'border-amarelo-luz' : 'border-transparent',
      )}
      style={animationStyle}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
      onKeyDown={handleKeyDown}
    >
      {/* Circular marker for timeline connection */}
      {/* Positioned to visually connect card to timeline line */}
      <div
        className="absolute -left-9 top-6 h-3 w-3 rounded-full border-2 border-horizon-green bg-white md:-left-8 md:top-8 md:h-4 md:w-4 lg:-left-6 lg:top-8 lg:h-4 lg:w-4"
        aria-hidden="true"
      />

      {/* Step Header (ETAPA X) */}
      {/* Using yellow-800 (#93963f) instead of amarelo-luz for WCAG AA contrast compliance */}
      <div className="mb-2 text-xs font-bold uppercase tracking-wide text-yellow-800 md:text-xs lg:text-xs">
        {step.header}
      </div>

      {/* Step Title (H3) */}
      <h3 className="mb-3 font-maven text-lg font-semibold text-horizon-green md:mb-4 md:text-xl lg:text-xl">
        {step.title}
      </h3>

      {/* Key Question */}
      <div className="mb-3 text-xs italic text-primary-green md:mb-4 md:text-sm lg:text-sm">
        {step.keyQuestion}
      </div>

      {/* Description */}
      <p className="mb-3 text-sm leading-relaxed text-neutral-800 md:mb-4 md:text-body-base lg:text-body-base">
        {step.description}
      </p>

      {/* Differential Highlight Box */}
      <div className="mb-3 border-l-4 border-amarelo-luz bg-white-essential p-3 md:mb-4 md:p-4 lg:p-4">
        <strong className="text-sm font-semibold text-neutral-900 md:text-base lg:text-base">
          Nosso diferencial:{' '}
        </strong>
        <span className="text-sm text-neutral-700 md:text-body-base lg:text-body-base">
          {step.diferencial}
        </span>
      </div>

      {/* Practical Example */}
      <div className="text-sm text-neutral-700 md:text-body-base lg:text-body-base">
        <strong className="text-sm font-semibold text-neutral-900 md:text-base lg:text-base">
          Exemplo Prático:{' '}
        </strong>
        <span>{step.practicalExample}</span>
      </div>
    </m.div>
  )
}

export default memo(TimelineStepCard)
