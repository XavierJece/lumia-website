# Task 5.0: Scroll Animation Infrastructure

<critical>Read the prd.md and techspec.md files in this folder. **If you do not read these files, your task will be invalidated**</critical>

## Overview

Create the animation infrastructure required for the Methodology section timeline. This includes a custom scroll progress hook and setting up Framer Motion with LazyMotion for optimal bundle size.

<requirements>
- Create useScrollProgress custom hook
- Set up LazyMotion with domAnimation features for reduced bundle
- Implement reduced-motion preference detection and fallback
- Use lightweight import patterns from framer-motion
- Hook should track scroll progress within a viewport element
</requirements>

## Subtasks

- [ ] 5.1 Create hooks directory structure

  - Create `src/app/(marketing)/components/home/hooks/` directory
  - This will house animation-related hooks

- [ ] 5.2 Implement useScrollProgress hook

  - Create `useScrollProgress.ts` in hooks directory
  - Track scroll progress as a value from 0 to 1
  - Accept a ref to the container element
  - Return progress value and isInView boolean

- [ ] 5.3 Implement reduced-motion detection

  - Use `prefers-reduced-motion` media query
  - Create helper to check user preference
  - Provide fallback behavior when reduced motion is preferred

- [ ] 5.4 Document Framer Motion usage patterns

  - Use `LazyMotion` with `domAnimation` features
  - Use `m` instead of `motion` for tree-shaking
  - Set `viewport={{ once: true }}` for one-time animations

- [ ] 5.5 Write unit tests
  - Test hook returns progress value
  - Test reduced-motion preference detection
  - Mock IntersectionObserver for testing

## Implementation Details

Refer to `techspec.md` for:

- Framer Motion integration section
- LazyMotion usage pattern
- Reduced-motion handling

### useScrollProgress Hook Structure

```typescript
import { useScroll, useTransform, MotionValue } from 'framer-motion'
import { RefObject } from 'react'

interface IScrollProgressResult {
  progress: MotionValue<number>
  isComplete: boolean
}

export function useScrollProgress(
  containerRef: RefObject<HTMLElement>,
): IScrollProgressResult {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  // Transform and return progress
  // ...
}
```

### Reduced Motion Helper

```typescript
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}
```

### LazyMotion Pattern

```typescript
import { LazyMotion, domAnimation, m } from 'framer-motion'

// Wrap animated sections
<LazyMotion features={domAnimation}>
  <m.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true, margin: '-100px' }}
  >
    {/* content */}
  </m.div>
</LazyMotion>
```

## Success Criteria

- [ ] useScrollProgress hook is created and exported
- [ ] Hook correctly tracks scroll progress (0 to 1)
- [ ] Reduced-motion preference is detected
- [ ] LazyMotion pattern is documented for use in Methodology
- [ ] No additional bundle size beyond domAnimation features (~16KB)
- [ ] Unit tests pass
- [ ] TypeScript types are correctly defined

## Relevant Files

**To Create:**

- `src/app/(marketing)/components/home/hooks/useScrollProgress.ts` — Scroll progress hook

**Reference:**

- `techspec.md` — Framer Motion integration section
- `package.json` — framer-motion dependency (from Task 1.0)
