# Task 8.0: Testing and Performance Optimization

<critical>Read the prd.md and techspec.md files in this folder. **If you do not read these files, your task will be invalidated**</critical>

## Overview

Comprehensive testing and performance optimization for the TimelineMethodology component. This task ensures the component meets all PRD success criteria, performs optimally, and maintains code quality standards through unit tests, performance validation, cross-browser testing, and Lighthouse score verification.

<requirements>
- Write comprehensive unit tests for all components
- Verify animation performance (60fps target)
- Ensure Lighthouse scores remain stable (no degradation)
- Cross-browser testing (Chrome, Firefox, Safari, Edge)
- Validate all PRD success criteria
- Optimize bundle size and runtime performance
</requirements>

## Subtasks

- [ ] 8.1 Write unit tests for TimelineStepCard

  - Test component renders with all required content sections
  - Test hover state changes border color correctly
  - Test fade-up animation triggers with scroll progress
  - Test reduced motion preference disables animations
  - Test semantic HTML structure (H3 tag present)
  - Test component handles missing props gracefully

- [ ] 8.2 Write unit tests for TimelineProgress

  - Test component renders line and markers correctly
  - Test color transition interpolates from Forest Green to Light Yellow
  - Test reduced motion preference disables color transitions
  - Test marker positions are calculated correctly for 4 steps
  - Test component handles different step counts (scalability)

- [ ] 8.3 Write unit tests for TimelineMethodology

  - Test component renders all 4 step cards
  - Test scroll progress detection works correctly
  - Test stagger animation timing (50-100ms delays between cards)
  - Test reduced motion preference is respected
  - Test semantic HTML structure (H2, H3 tags)
  - Test section header renders correctly

- [ ] 8.4 Write unit tests for timeline data

  - Test timelineSteps array has exactly 4 items
  - Test each step has all required fields
  - Test icons are valid Lucide React components
  - Test headers follow pattern "ETAPA X"
  - Test no duplicate IDs

- [ ] 8.5 Test animation performance

  - Use Chrome DevTools Performance tab
  - Verify animations run at 60fps
  - Check for layout thrashing or jank
  - Test scroll performance is smooth
  - Verify no main thread blocking

- [ ] 8.6 Optimize animation performance

  - Ensure animations use CSS transforms/opacity (GPU-accelerated)
  - Avoid animating layout-triggering properties
  - Use `will-change` property if needed (sparingly)
  - Optimize color interpolation performance
  - Remove any unnecessary re-renders

- [ ] 8.7 Run Lighthouse audit

  - Run Lighthouse Performance audit
  - Ensure Performance score hasn't degraded from baseline
  - Target: Maintain or improve Performance score
  - Check for new performance issues
  - Document Lighthouse scores before/after

- [ ] 8.8 Check bundle size impact

  - Analyze bundle size contribution of new component
  - Ensure no unexpected large dependencies
  - Verify tree-shaking works correctly
  - Check for duplicate dependencies
  - Target: Minimal bundle size increase

- [ ] 8.9 Optimize bundle size

  - Remove unused imports
  - Ensure Framer Motion is tree-shaken properly
  - Use dynamic imports if beneficial
  - Remove any unnecessary dependencies
  - Verify code splitting works correctly

- [ ] 8.10 Cross-browser testing - Chrome

  - Test on latest Chrome
  - Verify animations work correctly
  - Test scroll behavior
  - Verify layout renders correctly
  - Check for console errors

- [ ] 8.11 Cross-browser testing - Firefox

  - Test on latest Firefox
  - Verify animations work correctly
  - Test scroll behavior
  - Verify layout renders correctly
  - Check for console errors

- [ ] 8.12 Cross-browser testing - Safari

  - Test on latest Safari (Mac)
  - Verify animations work correctly
  - Test scroll behavior (Safari has different scroll behavior)
  - Verify layout renders correctly
  - Check for console errors

- [ ] 8.13 Cross-browser testing - Edge

  - Test on latest Edge
  - Verify animations work correctly
  - Test scroll behavior
  - Verify layout renders correctly
  - Check for console errors

- [ ] 8.14 Validate PRD success criteria

  - ✅ All 4 steps render correctly with PRD-specified content
  - ✅ Scroll animations trigger smoothly (300-400ms fade-up)
  - ✅ Timeline line changes color progressively (Forest Green → Light Yellow)
  - ✅ Hover states work on all cards (border → Light Yellow)
  - ✅ Component is fully responsive (mobile 320px+ to desktop)
  - ✅ Accessibility: WCAG AA compliance, reduced motion support
  - ✅ Performance: No Lighthouse score degradation

- [ ] 8.15 Test edge cases

  - Test with very slow scroll
  - Test with very fast scroll
  - Test with reduced motion enabled
  - Test with JavaScript disabled (graceful degradation)
  - Test with network throttling

- [ ] 8.16 Memory leak testing

  - Test component doesn't cause memory leaks
  - Verify event listeners are cleaned up
  - Check for proper useEffect cleanup
  - Test component unmounting doesn't cause errors

- [ ] 8.17 Document test coverage
  - Calculate test coverage percentage
  - Document what is tested
  - Document what is not tested (and why)
  - Ensure critical paths are covered

## Implementation Details

### Unit Test Structure

```typescript
// test/unit/home/TimelineStepCard.test.tsx
import { render, screen } from '@testing-library/react'
import { TimelineStepCard } from '@/app/(marketing)/components/home/TimelineStepCard'

describe('TimelineStepCard', () => {
  it('renders all required content sections', () => {
    // Test implementation
  })

  it('changes border color on hover', () => {
    // Test implementation
  })

  it('respects reduced motion preference', () => {
    // Test implementation
  })
})
```

### Performance Testing

Use Chrome DevTools:

1. Open Performance tab
2. Record page load and scroll
3. Check FPS meter (should stay at 60fps)
4. Look for long tasks (>50ms)
5. Check for layout shifts

### Lighthouse Testing

```bash
# Run Lighthouse audit
npx lighthouse http://localhost:3000 --view

# Or use Chrome DevTools Lighthouse tab
```

### Bundle Size Analysis

```bash
# Analyze bundle size
pnpm build
# Check .next/analyze or use webpack-bundle-analyzer
```

### Cross-Browser Testing Checklist

- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest, Mac)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

## Success Criteria

- [ ] All unit tests pass (target: >80% coverage)
- [ ] Animations run at 60fps consistently
- [ ] Lighthouse Performance score maintained or improved
- [ ] Bundle size impact is minimal (<50kB increase)
- [ ] Component works correctly in all major browsers
- [ ] No memory leaks detected
- [ ] All PRD success criteria validated
- [ ] No console errors or warnings
- [ ] Edge cases handled gracefully

## Relevant Files

- `test/unit/home/TimelineStepCard.test.tsx` - Create unit tests
- `test/unit/home/TimelineProgress.test.tsx` - Create unit tests
- `test/unit/home/TimelineMethodology.test.tsx` - Create unit tests
- `test/unit/home/timeline-data.test.ts` - Create data tests
- `src/app/(marketing)/components/home/TimelineMethodology.tsx` - Performance optimizations
- `src/app/(marketing)/components/home/TimelineStepCard.tsx` - Performance optimizations
- `src/app/(marketing)/components/home/TimelineProgress.tsx` - Performance optimizations

## Notes

- Use Vitest for unit testing (project standard)
- Use React Testing Library for component tests
- Target 60fps for animations (use Chrome DevTools FPS meter)
- Lighthouse scores should not degrade from baseline
- Test on actual devices when possible, not just browser dev tools
- Document any performance trade-offs or optimizations made
- PRD specifies performance must not impact Lighthouse scores
- Consider using `React.memo()` and `useMemo()` for performance optimization
- Ensure all tests are maintainable and readable
