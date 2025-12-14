'use client'

import { useMotionValueEvent, useScroll, type MotionValue } from 'framer-motion'
import { useEffect, useState, type RefObject } from 'react'

export interface IScrollProgressResult {
  progress: MotionValue<number>
  isComplete: boolean
}

/**
 * Tracks scroll progress (0-1) within a container element.
 */
export function useScrollProgress(
  containerRef: RefObject<HTMLElement | null>,
): IScrollProgressResult {
  const [isComplete, setIsComplete] = useState(false)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    if (latest >= 1 && !isComplete) {
      setIsComplete(true)
    } else if (latest < 1 && isComplete) {
      setIsComplete(false)
    }
  })

  return {
    progress: scrollYProgress,
    isComplete,
  }
}

/**
 * One-time check for reduced motion preference. Use useReducedMotion for reactive updates.
 */
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/**
 * Reactively tracks the user's reduced motion system preference.
 */
export function useReducedMotion(): boolean {
  const [prefersReduced, setPrefersReduced] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReduced(mediaQuery.matches)

    const handler = (e: MediaQueryListEvent) => setPrefersReduced(e.matches)
    mediaQuery.addEventListener('change', handler)
    return () => mediaQuery.removeEventListener('change', handler)
  }, [])

  return prefersReduced
}
