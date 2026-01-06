'use client'

import { m, useTransform, type MotionValue } from 'framer-motion'
import { memo } from 'react'

import { cn } from '~/shared/components/shadcn'

export interface ITimelineProgressProps {
  progress: MotionValue<number>
  prefersReducedMotion: boolean
  stepCount?: number
}

/**
 * Visual progress indicator component for the Timeline Methodology section.
 * Displays a vertical connecting line with circular markers that change color
 * progressively from Forest Green to Light Yellow as the user scrolls.
 *
 * Accessibility Features:
 * - Decorative element: Marked with role="presentation" and aria-hidden="true"
 * - Reduced motion: Uses static color when prefers-reduced-motion is enabled
 * - Screen reader: Hidden from assistive technologies as it's purely visual
 */
function TimelineProgress({
  progress,
  prefersReducedMotion,
  stepCount = 4,
}: ITimelineProgressProps) {
  // Interpolate color from Forest Green (#10763e) to Light Yellow (#d2d658)
  const lineColor = useTransform(
    progress,
    [0, 1],
    ['#10763e', '#d2d658'], // Forest Green → Light Yellow
  )

  // Calculate marker positions based on step count
  // Markers are evenly distributed along the line
  const getMarkerPosition = (index: number) => {
    if (stepCount === 1) return { top: '50%' }
    const percentage = (index / (stepCount - 1)) * 100
    return { top: `${percentage}%` }
  }

  // Base line color (static Forest Green for reduced motion)
  const baseLineColor = prefersReducedMotion ? '#10763e' : undefined

  return (
    <div
      className="absolute left-4 top-0 bottom-0 w-0.5 md:left-8 md:w-1 lg:left-1/2 lg:-translate-x-1/2 lg:w-1.5"
      role="presentation"
      aria-label="Linha de progresso do processo"
      aria-hidden="true"
    >
      {/* Base line (always visible, Forest Green) */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          backgroundColor: '#10763e', // Forest Green base
        }}
      />

      {/* Progress line (color-changing overlay) */}
      <m.div
        className="absolute inset-0 rounded-full"
        style={
          prefersReducedMotion
            ? { backgroundColor: baseLineColor }
            : {
                backgroundColor: lineColor,
                willChange: 'background-color',
              }
        }
      />

      {/* Step markers */}
      {Array.from({ length: stepCount }, (_, index) => {
        const position = getMarkerPosition(index)
        return (
          <m.div
            key={index}
            className={cn(
              'absolute left-1/2 h-3 w-3 -translate-x-1/2 rounded-full border-2 bg-white shadow-sm',
              'md:h-4 md:w-4', // Medium size on tablet
              'lg:h-5 lg:w-5', // Larger on desktop
            )}
            aria-hidden="true"
            style={
              prefersReducedMotion
                ? {
                    ...position,
                    backgroundColor: '#10763e', // Forest Green for reduced motion
                    borderColor: '#10763e',
                  }
                : {
                    ...position,
                    backgroundColor: lineColor,
                    borderColor: '#ffffff',
                    willChange: 'background-color',
                  }
            }
          />
        )
      })}
    </div>
  )
}

export default memo(TimelineProgress)
