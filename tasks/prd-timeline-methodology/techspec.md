# Technical Specification: Timeline Methodology Component

## Executive Summary

This technical specification details the implementation of the "How We Eliminate Bureaucracy" interactive timeline component for the Lumia Consultoria Ambiental homepage. The component will replace the existing Methodology section with a focused, visually compelling timeline that explains Lumia's four-step process for eliminating bureaucracy.

The solution leverages existing animation patterns from the current Methodology component while introducing a new data structure and content layout. Key technical decisions include reusing the established scroll-based animation system, maintaining WCAG AA accessibility compliance, and ensuring performance doesn't impact Lighthouse scores. The component will be built as a static React component using TypeScript, Framer Motion for animations, and Tailwind CSS for styling.

## System Architecture

### Component Overview

The TimelineMethodology component consists of several interconnected parts:

- **TimelineMethodology**: Main container component managing scroll detection and state
- **TimelineStepCard**: Individual step cards with structured content layout
- **TimelineProgress**: Visual progress indicator with color-changing line
- **useScrollProgress**: Custom hook for scroll-based animations (reused from existing Methodology)
- **useReducedMotion**: Hook for accessibility compliance (reused)

**Data Flow:**

1. Static step data → TimelineMethodology component
2. Scroll position → useScrollProgress hook → animation values
3. Animation values → individual card and line components
4. User interactions (hover) → immediate visual feedback

## Implementation Design

### Main Interfaces

```typescript
// New interface for timeline step content structure
export interface ITimelineStep {
  id: number
  header: string // "ETAPA 1", "ETAPA 2", etc.
  title: string // Step conceptual name (H3)
  keyQuestion: string // Question the step answers
  description: string // Main activity description
  diferencial: string // Lumia's unique approach
  practicalExample: string // Real-world application example
  icon: LucideIcon // Visual representation
}

// Props interface for step card component
export interface ITimelineStepCardProps {
  step: ITimelineStep
  index: number
  progress: MotionValue<number>
  prefersReducedMotion: boolean
}

// Props interface for timeline progress component
export interface ITimelineProgressProps {
  progress: MotionValue<number>
  prefersReducedMotion: boolean
}
```

### Data Models

The component uses static data with the following structure:

```typescript
const timelineSteps: ITimelineStep[] = [
  {
    id: 1,
    header: 'ETAPA 1',
    title: 'Diagnóstico & Estratégia',
    keyQuestion:
      'Pergunta que respondemos: Qual é o cenário completo de exigências legais para o seu negócio?',
    description:
      'Realizamos uma análise técnica minuciosa para identificar todos os requisitos legais municipais, estaduais e federais aplicáveis à sua operação.',
    diferencial:
      'Utilizamos um checklist inteligente e um banco de dados de processos similares para garantir que nenhuma exigência passe despercebida, eliminando surpresas futuras.',
    practicalExample:
      'Para um novo empreendimento comercial, identificamos a necessidade de licenças prévias do corpo de bombeiros, secretaria de meio ambiente e departamento de zoneamento urbano no primeiro relatório.',
    icon: Search,
  },
  // ... additional steps 2-4
]
```

### API Endpoints

No external API endpoints are required. The component operates with static content data.

### Integration Points

No external integrations are needed. The component is self-contained and uses only:

- Existing scroll progress detection hooks
- Lucide React icons (already in use)
- Framer Motion for animations (already implemented)
- Tailwind CSS classes (following existing design system)

## Testing Approach

### Unit Tests

**Component Logic Tests:**

- TimelineMethodology renders all step cards correctly
- useScrollProgress hook returns expected progress values
- Animation transforms apply correct opacity/translate values
- Reduced motion preference disables animations

**Animation Logic Tests:**

- Card entrance timing (300-400ms duration, 50-100ms stagger)
- Line color transition from Forest Green to Light Yellow
- Hover state changes border color to Light Yellow
- prefers-reduced-motion disables all animations

**Data Structure Tests:**

- ITimelineStep interface validation
- Required fields presence verification
- Icon component rendering

### Integration Tests

**Scroll Interaction Tests:**

- Cards enter viewport in correct sequence during scroll
- Timeline line color changes progressively with scroll
- Mobile and desktop layouts render correctly
- Accessibility features work across viewports

**Performance Tests:**

- Animation performance doesn't impact Lighthouse scores
- Bundle size remains within 150kB limit
- Memory usage stays stable during scroll interactions

## Development Sequencing

### Build Order

1. **Create ITimelineStep interface** - Define data structure in types.ts
2. **Implement TimelineStepCard component** - Build individual card with PRD-required layout
3. **Create TimelineProgress component** - Adapt existing progress line for new color scheme
4. **Build TimelineMethodology container** - Integrate all components with scroll logic
5. **Add responsive mobile layout** - Implement mobile-specific timeline structure
6. **Integrate accessibility features** - Add reduced motion and ARIA compliance
7. **Performance optimization** - Ensure smooth 60fps animations
8. **Testing and refinement** - Add unit tests and performance validation

### Technical Dependencies

- **Blocking Dependencies:** None - all required libraries already implemented
- **Soft Dependencies:** Design team finalization of icons (using Lucide React fallback)

## Monitoring and Observability

### Performance Metrics

The component will expose these metrics for monitoring:

- **Animation Frame Rate**: Target 60fps during scroll interactions
- **Bundle Impact**: Monitor component size contribution to total bundle
- **Lighthouse Scores**: Ensure no degradation in Performance, Accessibility, or Best Practices

### Logging Strategy

Following existing logging standards:

```typescript
// Development debugging (removed in production)
if (process.env.NODE_ENV === 'development') {
  console.debug('Timeline animation started:', { stepId, progress: latest })
}

// Error logging for animation failures
console.error('Timeline animation failed:', {
  error: animationError,
  component: 'TimelineMethodology',
  stepId,
  timestamp: Date.now(),
})
```

### Observability Integration

- **Performance Monitoring:** Component load times and animation smoothness
- **Accessibility Compliance:** Reduced motion preference detection
- **Error Tracking:** Animation failures and rendering issues

## Technical Considerations

### Key Decisions

**Animation Framework Reuse:**

- **Decision:** Reuse existing Framer Motion patterns from Methodology component
- **Rationale:** Establishes consistency, reduces maintenance overhead, proven performance
- **Trade-offs:** Some customization needed for new timing requirements (50-100ms stagger vs existing implementation)

**Data Structure Design:**

- **Decision:** Create new ITimelineStep interface instead of extending existing IMethodologyStep
- **Rationale:** PRD specifies different content structure (key questions, practical examples, differentials)
- **Trade-offs:** Additional interface maintenance vs clearer separation of concerns

**Responsive Strategy:**

- **Decision:** Desktop vertical timeline, mobile stacked vertical layout
- **Rationale:** Maintains visual hierarchy while ensuring mobile usability
- **Trade-offs:** More complex layout logic vs simpler single-layout approach

**Color Animation Implementation:**

- **Decision:** CSS custom properties with Framer Motion transforms
- **Rationale:** Hardware-accelerated animations, smooth transitions, accessibility compliance
- **Trade-offs:** Complex color interpolation logic vs simpler CSS transitions

### Known Risks

**Performance Impact:**

- **Risk:** Scroll-based animations could impact Lighthouse Performance score
- **Mitigation:** Use CSS transforms only, avoid layout-triggering properties, implement `will-change` optimizations
- **Contingency:** Fallback to reduced-motion behavior if performance degrades

**Animation Timing Consistency:**

- **Risk:** Stagger timing (50-100ms) may feel inconsistent across devices
- **Mitigation:** Extensive testing on various devices, implement device-specific adjustments
- **Contingency:** Adjustable timing configuration for future optimization

**Content Scalability:**

- **Risk:** Adding 5th/6th steps could break layout calculations
- **Mitigation:** Design with flexible positioning, avoid hard-coded spacing
- **Contingency:** Refactor to dynamic spacing calculations if needed

### Standards Compliance

**Relevant Project Rules Applied:**

1. **React/Next.js Component Standards** (`.cursor/rules/react.mdc`):

   - Functional components with TypeScript
   - Proper props interfaces with `I` prefix
   - `React.memo()` for performance optimization
   - `useCallback` for event handlers
   - Semantic HTML structure

2. **Performance Rules** (`.cursor/rules/performance.mdc`):

   - Core Web Vitals compliance (LCP < 2.5s, FID < 100ms, CLS < 0.1)
   - Next.js Image component usage (if images added later)
   - Code splitting considerations
   - Bundle size monitoring (< 150kB)

3. **Design System** (`.cursor/rules/design-system.mdc`):

   - Color usage: Primary Green (#10763e), Horizon Green (#003a33), Light Yellow (#d2d658)
   - Typography: Maven for headings, Montserrat for body
   - Accessibility: WCAG AA contrast ratios, reduced motion support
   - Spacing system adherence

4. **Frontend Logging Standards** (`.cursor/rules/logging.mdc`):

   - Anonymous logging for performance metrics
   - No PII in logs
   - Development vs production log levels

5. **Dependency Management** (`.cursor/rules/dependencies.mdc`):
   - Pinned exact versions for production dependencies
   - Use of allowed libraries (Framer Motion, Lucide React, Tailwind)

### Relevant Files

- `src/app/(marketing)/components/home/TimelineMethodology.tsx` - Main component
- `src/app/(marketing)/components/home/types.ts` - Type definitions (add ITimelineStep)
- `src/app/(marketing)/components/home/hooks/useScrollProgress.ts` - Reused animation hook
- `tailwind.config.ts` - Color definitions
- `src/app/(marketing)/page.tsx` - Homepage integration point
