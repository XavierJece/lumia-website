/**
 * Animation hooks for the home page components.
 *
 * This module provides scroll animation utilities and reduced-motion
 * detection for accessible, performant animations.
 */

export {
  prefersReducedMotion,
  useReducedMotion,
  useScrollProgress,
  type IScrollProgressResult,
} from './useScrollProgress'
