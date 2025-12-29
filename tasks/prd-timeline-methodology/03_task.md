# Task 3.0: Create TimelineProgress Component

<critical>Read the prd.md and techspec.md files in this folder. **If you do not read these files, your task will be invalidated**</critical>

## Overview

Build the visual progress indicator component that displays a vertical connecting line with circular markers. The line must change color progressively from Forest Green to Light Yellow as the user scrolls, creating a visual representation of progress through the timeline steps.

<requirements>
- Create TimelineProgress component with vertical connecting line
- Implement scroll-based color transition (Forest Green #10763e → Light Yellow #d2d658)
- Add circular markers at each of the 4 step positions
- Ensure perfect alignment with step cards
- Support reduced motion preference
- Component must be responsive (mobile and desktop)
</requirements>

## Subtasks

- [ ] 3.1 Create TimelineProgress component file

  - Create new file: `src/app/(marketing)/components/home/TimelineProgress.tsx`
  - Set up component with TypeScript and proper imports
  - Define props interface `ITimelineProgressProps` with: `progress`, `prefersReducedMotion`, `stepCount` (optional)
  - Use `'use client'` directive for client-side interactivity

- [ ] 3.2 Implement vertical line structure

  - Create vertical line container
  - Set up absolute or relative positioning
  - Ensure line spans full height of timeline section
  - Use appropriate width (2-4px recommended)
  - Position line appropriately (left side for vertical timeline)

- [ ] 3.3 Implement base line color (Forest Green)

  - Set initial line color to Forest Green (#10763e)
  - Use `bg-primary-green` or `bg-[#10763e]`
  - Ensure line is visible on all backgrounds
  - Test color contrast for accessibility

- [ ] 3.4 Implement progressive color transition

  - Use Framer Motion `useTransform` to interpolate color based on scroll progress
  - Transition from Forest Green (#10763e) to Light Yellow (#d2d658)
  - Implement smooth color interpolation
  - Use CSS custom properties or inline styles for color changes
  - Ensure transition feels natural and progressive

- [ ] 3.5 Add circular markers at step positions

  - Create 4 circular markers positioned at step locations
  - Marker size: Appropriate for visual balance (16-24px diameter)
  - Marker color: Match current line color or use contrasting color
  - Ensure markers are perfectly aligned with step cards
  - Add border or stroke if needed for visibility

- [ ] 3.6 Calculate step positions dynamically

  - Calculate marker positions based on step count (4 steps)
  - Ensure equal spacing or proportional spacing
  - Account for section padding and card heights
  - Make positions responsive to different viewport sizes
  - Consider using CSS Grid or Flexbox for positioning

- [ ] 3.7 Implement marker color synchronization

  - Markers should reflect current line color state
  - Or use contrasting color for better visibility
  - Ensure markers are visible against card backgrounds
  - Test marker visibility on all backgrounds

- [ ] 3.8 Ensure responsive behavior

  - Test line and markers on mobile (320px+)
  - Adjust line width for mobile if needed
  - Ensure markers remain aligned on all breakpoints
  - Verify line doesn't break layout on small screens

- [ ] 3.9 Support reduced motion preference

  - If `prefersReducedMotion` is true, use static color (Forest Green)
  - Disable color transitions for reduced motion
  - Ensure line remains functional without animations
  - Test with reduced motion enabled

- [ ] 3.10 Optimize performance

  - Use CSS transforms for color changes (hardware-accelerated)
  - Avoid layout-triggering properties
  - Ensure smooth 60fps animation
  - Test performance impact on Lighthouse scores

- [ ] 3.11 Write unit tests
  - Test component renders line and markers correctly
  - Test color transition interpolates correctly
  - Test reduced motion preference disables transitions
  - Test marker positions are calculated correctly
  - Test responsive behavior

## Implementation Details

### Component Structure

The component should render:

```typescript
<motion.div
  className="timeline-progress-container"
  style={lineStyle}
>
  {/* Base line (always visible) */}
  <div className="timeline-line-base" />

  {/* Progress line (color-changing) */}
  <motion.div
    className="timeline-line-progress"
    style={progressLineStyle}
  />

  {/* Step markers */}
  {steps.map((step, index) => (
    <div
      key={step.id}
      className="timeline-marker"
      style={getMarkerPosition(index)}
    />
  ))}
</motion.div>
```

### Color Interpolation

Use Framer Motion's `useTransform` for smooth color interpolation:

```typescript
const lineColor = useTransform(
  progress,
  [0, 1],
  ['#10763e', '#d2d658'] // Forest Green → Light Yellow
)

// Apply to style
style={{
  backgroundColor: lineColor,
  // Or use CSS custom property
  '--line-color': lineColor,
}}
```

### Alternative: CSS Custom Properties

For better performance, use CSS custom properties:

```typescript
const lineColor = useTransform(progress, [0, 1], ['#10763e', '#d2d658'])

// In component
<motion.div
  style={{
    '--line-color': lineColor,
  }}
  className="timeline-line"
/>
```

```css
.timeline-line {
  background-color: var(--line-color);
  transition: background-color 200ms ease;
}
```

### Marker Positioning

Calculate positions based on step count:

```typescript
const getMarkerPosition = (index: number, totalSteps: number) => {
  const percentage = (index / (totalSteps - 1)) * 100
  return {
    top: `${percentage}%`,
  }
}
```

### Color References

- Forest Green: `#10763e` → `bg-primary-green` or `bg-[#10763e]`
- Light Yellow: `#d2d658` → `bg-amarelo-luz` or `bg-[#d2d658]`

## Success Criteria

- [ ] Vertical line renders correctly and spans timeline height
- [ ] Line color transitions smoothly from Forest Green to Light Yellow
- [ ] 4 circular markers are positioned at step locations
- [ ] Markers align perfectly with step cards
- [ ] Color transition respects reduced motion preference
- [ ] Component is responsive (mobile and desktop)
- [ ] Performance: Smooth 60fps animation, no Lighthouse degradation
- [ ] All unit tests pass

## Relevant Files

- `src/app/(marketing)/components/home/TimelineProgress.tsx` - Create new component file
- `src/app/(marketing)/components/home/types.ts` - ITimelineProgressProps interface (if separate from component)
- `test/unit/home/TimelineProgress.test.tsx` - Create unit tests

## Notes

- Component should be memoized with `React.memo()` for performance
- Consider using CSS gradients for smoother color transitions
- Line width should be subtle (2-4px) to not overpower content
- Markers can have a subtle shadow or border for depth
- Ensure line and markers work on both light and dark backgrounds (if theme support exists)
- Follow existing patterns from Methodology.tsx progress line implementation
