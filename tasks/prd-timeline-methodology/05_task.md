# Task 5.0: Implement Responsive Mobile Layout

<critical>Read the prd.md and techspec.md files in this folder. **If you do not read these files, your task will be invalidated**</critical>

## Overview

Adapt the TimelineMethodology component for mobile and tablet viewports, ensuring the timeline line and cards align properly, maintain visual hierarchy, and provide an optimal user experience across all screen sizes from 320px to desktop.

<requirements>
- Adapt timeline for mobile viewports (320px+)
- Ensure line and cards align properly on all screen sizes
- Test tablet breakpoints (768px, 1024px)
- Maintain visual hierarchy across breakpoints
- Ensure text remains readable at all sizes
- Timeline must work seamlessly on touch devices
</requirements>

## Subtasks

- [ ] 5.1 Analyze current desktop layout

  - Review TimelineMethodology component structure
  - Identify fixed-width or desktop-specific styles
  - Document current breakpoint behavior
  - Identify areas needing mobile adaptation

- [ ] 5.2 Design mobile timeline layout

  - Plan vertical layout for mobile (cards stacked)
  - Determine line positioning (left side recommended)
  - Plan marker alignment with cards
  - Ensure cards don't overflow viewport width

- [ ] 5.3 Adapt TimelineProgress for mobile

  - Adjust line width for mobile (may need thinner line)
  - Ensure line height adapts to content
  - Adjust marker sizes for mobile if needed
  - Test line visibility on small screens

- [ ] 5.4 Adapt TimelineStepCard for mobile

  - Adjust card padding for mobile (reduce if needed)
  - Ensure text sizes are readable (use responsive typography)
  - Adjust spacing between cards
  - Test card width doesn't cause horizontal scroll
  - Ensure hover states work on touch devices

- [ ] 5.5 Implement responsive breakpoints

  - Use Tailwind breakpoints: `sm:`, `md:`, `lg:`
  - Mobile: Default styles (320px+)
  - Tablet: `md:` breakpoint (768px+)
  - Desktop: `lg:` breakpoint (1024px+)
  - Test each breakpoint thoroughly

- [ ] 5.6 Adjust timeline line positioning

  - Mobile: Position line on left side with appropriate margin
  - Ensure line doesn't interfere with card content
  - Adjust line position for tablet if needed
  - Maintain alignment with markers

- [ ] 5.7 Adjust card positioning relative to line

  - Mobile: Cards positioned to the right of line
  - Ensure proper margin/padding between line and cards
  - Maintain visual connection between markers and cards
  - Test alignment on various screen sizes

- [ ] 5.8 Optimize typography for mobile

  - Ensure H2 title is readable on mobile
  - Adjust step titles (H3) size if needed
  - Ensure body text remains readable
  - Test with various font sizes

- [ ] 5.9 Test spacing and padding

  - Reduce vertical padding on mobile if needed
  - Ensure cards have adequate spacing
  - Test section padding doesn't cause issues
  - Verify breathing room is maintained

- [ ] 5.10 Test touch interactions

  - Verify hover states work on touch (or disable if not needed)
  - Test scroll behavior is smooth
  - Ensure no accidental taps or interactions
  - Test on actual mobile devices if possible

- [ ] 5.11 Test on multiple viewport sizes

  - Test on 320px width (smallest mobile)
  - Test on 375px width (iPhone SE)
  - Test on 768px width (tablet portrait)
  - Test on 1024px width (tablet landscape)
  - Test on 1280px+ width (desktop)

- [ ] 5.12 Verify no layout breaks

  - Ensure no horizontal scroll on any viewport
  - Verify cards don't overlap
  - Check line doesn't break layout
  - Test with long content (if practical examples are long)

- [ ] 5.13 Write responsive tests
  - Test component renders correctly at different viewport sizes
  - Test layout adapts properly at breakpoints
  - Test text remains readable at all sizes
  - Test touch interactions work correctly

## Implementation Details

### Mobile Layout Structure

For mobile, the timeline should use a vertical layout:

```
[Line] [Card 1]
  |
  |    [Card 2]
  |
  |    [Card 3]
  |
  |    [Card 4]
```

### Responsive Classes

Use Tailwind's responsive prefixes:

```typescript
<div className="
  flex flex-col gap-8
  md:gap-12
  lg:gap-16
">
  {/* Cards */}
</div>
```

### Line Positioning

```typescript
<div className="
  absolute left-4
  md:left-8
  lg:left-1/2 lg:-translate-x-1/2
">
  {/* Timeline line */}
</div>
```

### Card Width

```typescript
<div className="
  w-full max-w-sm mx-auto
  md:max-w-md
  lg:max-w-lg
">
  {/* Card content */}
</div>
```

### Typography Scaling

```typescript
<h2 className="
  text-2xl
  md:text-3xl
  lg:text-4xl
">
  {/* Title */}
</h2>
```

### Breakpoint Strategy

- **Mobile (default, 320px+)**: Stacked vertical layout, line on left
- **Tablet (768px+)**: Slightly wider cards, adjusted spacing
- **Desktop (1024px+)**: Full desktop layout with centered line

## Success Criteria

- [ ] Timeline renders correctly on mobile (320px+)
- [ ] Line and cards align properly on all screen sizes
- [ ] Text remains readable at all viewport sizes
- [ ] No horizontal scroll on any viewport
- [ ] Cards don't overlap or break layout
- [ ] Touch interactions work correctly
- [ ] Visual hierarchy is maintained across breakpoints
- [ ] All responsive tests pass

## Relevant Files

- `src/app/(marketing)/components/home/TimelineMethodology.tsx` - Update component with responsive classes
- `src/app/(marketing)/components/home/TimelineStepCard.tsx` - Update card with responsive styles
- `src/app/(marketing)/components/home/TimelineProgress.tsx` - Update progress line with responsive positioning
- `test/unit/home/TimelineMethodology.test.tsx` - Add responsive tests

## Notes

- Follow mobile-first approach (default styles for mobile, then add desktop styles)
- Use Tailwind's responsive utilities rather than custom media queries
- Test on actual devices when possible, not just browser dev tools
- Consider using `useMediaQuery` hook if complex responsive logic is needed
- Ensure animations work smoothly on mobile devices (may need to reduce complexity)
- PRD specifies timeline must work perfectly on mobile from 320px
