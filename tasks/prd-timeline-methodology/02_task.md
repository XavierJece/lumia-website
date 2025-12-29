# Task 2.0: Implement TimelineStepCard Component

<critical>Read the prd.md and techspec.md files in this folder. **If you do not read these files, your task will be invalidated**</critical>

## Overview

Build the individual step card component that displays each of the 4 timeline steps with the PRD-required layout structure. The card must include all content sections, implement hover interactions, and support fade-up animations triggered by scroll progress.

<requirements>
- Create TimelineStepCard component with PRD-required layout structure
- Implement hover state that changes border to Light Yellow (#d2d658)
- Add fade-up animation (300-400ms duration) using Framer Motion
- Ensure proper semantic HTML structure (H3 for title)
- Support reduced motion preference
- Component must be responsive (mobile and desktop)
</requirements>

## Subtasks

- [ ] 2.1 Create TimelineStepCard component file

  - Create new file: `src/app/(marketing)/components/home/TimelineStepCard.tsx`
  - Set up component with TypeScript and proper imports
  - Define props interface `ITimelineStepCardProps` with: `step`, `index`, `progress`, `prefersReducedMotion`
  - Use `'use client'` directive for client-side interactivity

- [ ] 2.2 Implement card container structure

  - Create main card container with proper Tailwind classes
  - Add background color (white or subtle background)
  - Set up border styling (default state)
  - Add padding and spacing for content breathing room
  - Ensure card is positioned relative for marker connection

- [ ] 2.3 Add Step Header (ETAPA X)

  - Display step header text (e.g., "ETAPA 1")
  - Style: Uppercase, small, bold
  - Color: Light Yellow (#d2d658) - use `text-amarelo-luz` or `text-[#d2d658]`
  - Use appropriate font size and weight

- [ ] 2.4 Add Step Title (H3)

  - Display step title (e.g., "Diagnóstico & Estratégia")
  - Use semantic `<h3>` tag
  - Style: Medium/Large font size
  - Color: Horizon Green (#003a33) - use `text-horizon-green`
  - Ensure proper typography hierarchy

- [ ] 2.5 Add Key Question section

  - Display key question with introductory phrase
  - Format: "Pergunta que respondemos: [question]"
  - Style: Italic or with question mark icon before text
  - Color: Dark gray or Forest Green (#10763e)
  - Ensure readability and visual hierarchy

- [ ] 2.6 Add Description section

  - Display main description (1-2 sentences)
  - Style: Body text, direct and beneficial tone
  - Ensure proper line height and spacing
  - Color: Dark text for readability

- [ ] 2.7 Implement Differential Highlight Box

  - Create highlighted box with subtle background
  - Background: `#fffbf7` (white-essential) with `border-left: 4px solid #d2d658`
  - Pre-text: "Nosso diferencial:" in bold
  - Display differential content
  - Ensure proper padding and spacing

- [ ] 2.8 Add Practical Example section

  - Title: "Exemplo Prático:" in bold
  - Display practical example text
  - Ensure clear visual separation from other sections
  - Use appropriate text styling

- [ ] 2.9 Implement hover state

  - Add hover handler that changes border color
  - Border color: Light Yellow (#d2d658) on hover
  - Use smooth CSS transition (200-300ms duration)
  - Ensure hover state is visually distinct
  - Test on both desktop and mobile (touch devices)

- [ ] 2.10 Implement fade-up animation

  - Use Framer Motion `motion.div` wrapper
  - Initial state: `opacity: 0`, `y: 20` (translated down)
  - Animate state: `opacity: 1`, `y: 0`
  - Duration: 300-400ms (use `duration: 0.35` for ~350ms)
  - Use `useTransform` with scroll progress to control animation
  - Respect `prefersReducedMotion` prop (skip animation if true)

- [ ] 2.11 Add circular marker for timeline connection

  - Create circular marker that connects card to timeline line
  - Position marker appropriately (left side for vertical timeline)
  - Size: Appropriate for visual balance
  - Color: Match timeline line color scheme
  - Ensure marker aligns perfectly with timeline line

- [ ] 2.12 Ensure responsive design

  - Test card layout on mobile (320px+)
  - Ensure text remains readable at all breakpoints
  - Adjust padding/spacing for mobile if needed
  - Verify card doesn't overflow viewport

- [ ] 2.13 Write unit tests
  - Test component renders with all required content sections
  - Test hover state changes border color
  - Test animation triggers correctly with scroll progress
  - Test reduced motion preference disables animations
  - Test semantic HTML structure (H3 tag present)

## Implementation Details

### Component Structure

The card should follow this HTML structure:

```typescript
<motion.div
  className="card-container"
  style={animationStyle}
  onHoverStart={handleHover}
>
  {/* Circular marker */}
  <div className="timeline-marker" />

  {/* Step Header */}
  <div className="step-header">ETAPA {step.id}</div>

  {/* Step Title */}
  <h3>{step.title}</h3>

  {/* Key Question */}
  <div className="key-question">
    Pergunta que respondemos: {step.keyQuestion}
  </div>

  {/* Description */}
  <p className="description">{step.description}</p>

  {/* Differential Highlight */}
  <div className="differential-box">
    <strong>Nosso diferencial:</strong> {step.diferencial}
  </div>

  {/* Practical Example */}
  <div className="practical-example">
    <strong>Exemplo Prático:</strong> {step.practicalExample}
  </div>
</motion.div>
```

### Animation Implementation

Use Framer Motion's `useTransform` to control animation based on scroll progress:

```typescript
const opacity = useTransform(progress, [0, 0.2, 1], [0, 0, 1])
const y = useTransform(progress, [0, 0.2, 1], [20, 20, 0])
```

### Hover State

Implement using CSS classes or inline styles:

```typescript
const [isHovered, setIsHovered] = useState(false)

// In className:
className={cn(
  "border-2 transition-colors duration-300",
  isHovered ? "border-amarelo-luz" : "border-transparent"
)}
```

### Color References

- Light Yellow: `#d2d658` → `text-amarelo-luz` or `border-amarelo-luz`
- Horizon Green: `#003a33` → `text-horizon-green`
- Forest Green: `#10763e` → `text-primary-green`
- Background Highlight: `#fffbf7` → `bg-white-essential`

## Success Criteria

- [ ] Component renders all PRD-required content sections in correct order
- [ ] Hover state changes border to Light Yellow smoothly
- [ ] Fade-up animation works (300-400ms duration)
- [ ] Animation respects reduced motion preference
- [ ] Semantic HTML structure is correct (H3 for title)
- [ ] Component is responsive (mobile and desktop)
- [ ] Circular marker aligns with timeline line
- [ ] All unit tests pass

## Relevant Files

- `src/app/(marketing)/components/home/TimelineStepCard.tsx` - Create new component file
- `src/app/(marketing)/components/home/types.ts` - ITimelineStepCardProps interface (if separate from component)
- `test/unit/home/TimelineStepCard.test.tsx` - Create unit tests

## Notes

- Component should be memoized with `React.memo()` for performance
- Use `tailwind-merge` (via `cn` utility) for className management
- Ensure proper TypeScript typing throughout
- Follow existing component patterns from Methodology.tsx
- Icon from step data can be displayed if desired, but PRD doesn't explicitly require it in card layout
