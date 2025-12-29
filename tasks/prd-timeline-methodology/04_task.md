# Task 4.0: Build TimelineMethodology Container Component

<critical>Read the prd.md and techspec.md files in this folder. **If you do not read these files, your task will be invalidated**</critical>

## Overview

Build the main container component that integrates TimelineStepCard and TimelineProgress components, manages scroll detection, implements stagger animations, and provides the complete timeline section with header. This component orchestrates all the individual pieces into a cohesive, interactive timeline experience.

<requirements>
- Create TimelineMethodology container component
- Integrate TimelineStepCard and TimelineProgress components
- Implement scroll detection with `useScrollProgress` hook
- Add stagger animation (50-100ms delay between cards)
- Add section header ("Como Eliminamos a Burocracia")
- Ensure semantic HTML structure (H2, H3 tags)
- Support reduced motion preference
- Import and use static timeline data from Task 1.0
</requirements>

## Subtasks

- [ ] 4.1 Create TimelineMethodology component file

  - Create new file: `src/app/(marketing)/components/home/TimelineMethodology.tsx`
  - Set up component with TypeScript and proper imports
  - Import `LazyMotion` and `domAnimation` from framer-motion
  - Use `'use client'` directive
  - Import `useScrollProgress` and `useReducedMotion` hooks

- [ ] 4.2 Set up component structure

  - Wrap component in `LazyMotion` with `domAnimation`
  - Use `Section` component for consistent layout
  - Add `useRef` for container element (for scroll detection)
  - Set up proper container ref for `useScrollProgress` hook

- [ ] 4.3 Implement scroll progress detection

  - Call `useScrollProgress(containerRef)` to get progress value
  - Call `useReducedMotion()` to get reduced motion preference
  - Pass progress and reduced motion to child components
  - Verify scroll detection works correctly

- [ ] 4.4 Add section header

  - Use `Section.Header`, `Section.Title`, `Section.Subtitle`
  - Title (H2): "Como Eliminamos a Burocracia"
  - Subtitle: Add appropriate subtitle explaining the timeline (from PRD or create)
  - Ensure proper semantic HTML (H2 tag)
  - Add `id` attribute for accessibility

- [ ] 4.5 Import and use timeline data

  - Import `timelineSteps` array from data file (Task 1.0)
  - Import `ITimelineStep` type
  - Map over steps to render TimelineStepCard components
  - Verify all 4 steps render correctly

- [ ] 4.6 Integrate TimelineProgress component

  - Render TimelineProgress component
  - Pass `progress` and `prefersReducedMotion` props
  - Ensure proper positioning relative to cards
  - Verify line and markers align with cards

- [ ] 4.7 Implement stagger animation for cards

  - Calculate stagger delay: 50-100ms between cards
  - Apply delay to each card based on its index
  - Use Framer Motion's stagger functionality or manual delay calculation
  - Ensure cards animate in sequence smoothly
  - Respect reduced motion preference

- [ ] 4.8 Set up card layout structure

  - Create container for step cards
  - Position cards relative to timeline line
  - Ensure proper spacing between cards
  - Set up responsive grid or flex layout
  - Verify cards don't overlap

- [ ] 4.9 Add proper spacing and padding

  - Add generous vertical padding (per PRD UX considerations)
  - Ensure section has breathing room
  - Match spacing with other homepage sections
  - Test spacing on mobile and desktop

- [ ] 4.10 Ensure semantic HTML structure

  - Verify H2 tag for section title
  - Verify H3 tags in step cards (via TimelineStepCard)
  - Use proper list structure if applicable
  - Add ARIA labels where appropriate
  - Test with screen reader

- [ ] 4.11 Add accessibility attributes

  - Add `aria-labelledby` to section
  - Ensure proper heading hierarchy
  - Add descriptive labels for timeline
  - Test keyboard navigation

- [ ] 4.12 Write unit tests
  - Test component renders all 4 step cards
  - Test scroll progress detection works
  - Test stagger animation timing (50-100ms delays)
  - Test reduced motion preference is respected
  - Test semantic HTML structure (H2, H3 tags)

## Implementation Details

### Component Structure

```typescript
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
      >
        <Section.Header>
          <Section.Title id="timeline-heading">
            Como Eliminamos a Burocracia
          </Section.Title>
          <Section.Subtitle>
            {/* Subtitle text */}
          </Section.Subtitle>
        </Section.Header>

        <Section.Content>
          {/* Timeline Progress Line */}
          <TimelineProgress
            progress={progress}
            prefersReducedMotion={prefersReducedMotion}
          />

          {/* Step Cards */}
          <div className="timeline-cards-container">
            {timelineSteps.map((step, index) => (
              <TimelineStepCard
                key={step.id}
                step={step}
                index={index}
                progress={progress}
                prefersReducedMotion={prefersReducedMotion}
                staggerDelay={index * 75} // 75ms stagger (between 50-100ms)
              />
            ))}
          </div>
        </Section.Content>
      </Section>
    </LazyMotion>
  )
}
```

### Stagger Animation Implementation

Two approaches:

**Option A: Manual delay calculation**

```typescript
const cardDelay = index * 75 // 75ms between cards

const cardProgress = useTransform(
  progress,
  [0, 0.2 + index * 0.1, 1],
  [0, 0, 1],
)
```

**Option B: Framer Motion stagger**

```typescript
<motion.div
  variants={{
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.075, // 75ms delay
        duration: 0.35, // 350ms duration
      },
    },
  }}
>
```

### Scroll Progress Integration

The `useScrollProgress` hook returns a `MotionValue<number>` that goes from 0 to 1 as the user scrolls through the section. This value is passed to:

- TimelineProgress: Controls line color transition
- TimelineStepCard: Controls fade-up animation timing

### Section Subtitle

Consider using a subtitle like:

- "Conheça nosso processo em 4 etapas claras e objetivas"
- "Da análise inicial à conformidade contínua: veja como simplificamos o licenciamento ambiental"

## Success Criteria

- [ ] Component renders all 4 step cards correctly
- [ ] TimelineProgress line and markers align with cards
- [ ] Scroll progress detection works (line changes color on scroll)
- [ ] Stagger animation works (50-100ms delay between cards)
- [ ] Section header renders with proper H2 tag
- [ ] Reduced motion preference is respected
- [ ] Semantic HTML structure is correct
- [ ] Component integrates smoothly with existing homepage layout
- [ ] All unit tests pass

## Relevant Files

- `src/app/(marketing)/components/home/TimelineMethodology.tsx` - Create new component file
- `src/app/(marketing)/components/home/timelineData.ts` - Import timeline steps data
- `src/app/(marketing)/components/home/hooks/useScrollProgress.ts` - Reuse existing hook
- `test/unit/home/TimelineMethodology.test.tsx` - Create unit tests

## Notes

- Component should follow existing patterns from Methodology.tsx
- Use `Section` component for consistent styling with other homepage sections
- Ensure component is exportable for use in page.tsx
- Consider adding a final CTA button if needed (check PRD)
- Stagger timing (75ms) is a middle value between 50-100ms range for smooth feel
- Component must be scalable for future addition of 5th/6th steps
