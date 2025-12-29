# Task 6.0: Integrate Accessibility Features

<critical>Read the prd.md and techspec.md files in this folder. **If you do not read these files, your task will be invalidated**</critical>

## Overview

Ensure the TimelineMethodology component is fully accessible by implementing reduced motion support, WCAG AA color contrast compliance, proper ARIA labels, semantic HTML structure, and keyboard navigation. This task ensures the component is usable by all users, including those with disabilities.

<requirements>
- Add reduced motion support using `useReducedMotion` hook
- Ensure WCAG AA color contrast compliance for all text
- Add proper ARIA labels and semantic HTML
- Test keyboard navigation
- Verify screen reader compatibility
- Ensure all interactive elements are accessible
</requirements>

## Subtasks

- [ ] 6.1 Verify reduced motion hook integration

  - Ensure `useReducedMotion` hook is called in TimelineMethodology
  - Pass `prefersReducedMotion` prop to all child components
  - Verify animations are disabled when preference is set
  - Test with reduced motion enabled in system settings

- [ ] 6.2 Disable animations for reduced motion

  - In TimelineStepCard: Skip fade-up animation if reduced motion
  - In TimelineProgress: Use static color (no transition) if reduced motion
  - Ensure content is still readable without animations
  - Test component functionality without animations

- [ ] 6.3 Verify color contrast compliance

  - Test Light Yellow (#d2d658) text on backgrounds
  - Test Horizon Green (#003a33) text on backgrounds
  - Test Forest Green (#10763e) text on backgrounds
  - Ensure all text meets WCAG AA contrast ratios:
    - Normal text: 4.5:1 contrast ratio
    - Large text (18pt+): 3:1 contrast ratio
  - Use contrast checker tools to verify

- [ ] 6.4 Fix contrast issues if found

  - Adjust text colors if contrast is insufficient
  - Consider darker shades for better contrast
  - Ensure differential highlight box has sufficient contrast
  - Test all color combinations

- [ ] 6.5 Add semantic HTML structure

  - Verify H2 tag for section title
  - Verify H3 tags for step titles
  - Use proper heading hierarchy (no skipping levels)
  - Add proper list structure if applicable
  - Ensure HTML structure is logical and meaningful

- [ ] 6.6 Add ARIA labels and attributes

  - Add `aria-labelledby` to section (pointing to H2)
  - Add `aria-label` to timeline line if needed
  - Add descriptive labels for interactive elements
  - Ensure all icons have alt text or aria-labels
  - Add `role` attributes where appropriate

- [ ] 6.7 Implement keyboard navigation

  - Ensure all interactive elements are keyboard accessible
  - Test Tab key navigation through cards
  - Ensure focus indicators are visible
  - Test Enter/Space key activation if cards are interactive
  - Verify focus doesn't get trapped

- [ ] 6.8 Add focus management

  - Ensure focus indicators are visible (use Tailwind focus classes)
  - Test focus styles meet contrast requirements
  - Ensure focus order is logical
  - Test with keyboard-only navigation

- [ ] 6.9 Test with screen readers

  - Test with NVDA (Windows) or VoiceOver (Mac)
  - Verify section title is announced correctly
  - Verify step titles and content are read properly
  - Ensure timeline structure is understandable
  - Test navigation through timeline with screen reader

- [ ] 6.10 Add descriptive alt text for visual elements

  - Add alt text for timeline line (if treated as image)
  - Ensure markers have descriptive labels
  - Add text alternatives for any icons
  - Ensure all visual information is accessible

- [ ] 6.11 Verify form accessibility (if applicable)

  - If CTA buttons are added, ensure they're accessible
  - Test button labels are descriptive
  - Ensure buttons are keyboard accessible
  - Test button focus states

- [ ] 6.12 Document accessibility features

  - Document reduced motion support
  - Document keyboard navigation patterns
  - Document screen reader compatibility
  - Add comments in code explaining accessibility features

- [ ] 6.13 Write accessibility tests
  - Test reduced motion preference is respected
  - Test color contrast ratios programmatically
  - Test semantic HTML structure
  - Test keyboard navigation
  - Test ARIA attributes are present

## Implementation Details

### Reduced Motion Implementation

```typescript
const prefersReducedMotion = useReducedMotion()

// In TimelineStepCard
const animationProps = prefersReducedMotion
  ? {}
  : {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.35 },
    }
```

### Color Contrast Verification

Use tools like:

- WebAIM Contrast Checker
- axe DevTools
- Lighthouse accessibility audit

Example contrast checks:

- Light Yellow (#d2d658) on white: May need darker shade for text
- Horizon Green (#003a33) on white: Should pass (very dark on light)
- Forest Green (#10763e) on white: Should pass

### ARIA Structure

```typescript
<Section
  aria-labelledby="timeline-heading"
  role="region"
>
  <Section.Title id="timeline-heading">
    Como Eliminamos a Burocracia
  </Section.Title>

  <div role="list" aria-label="Processo em 4 etapas">
    {steps.map((step) => (
      <div key={step.id} role="listitem">
        {/* Card content */}
      </div>
    ))}
  </div>
</Section>
```

### Keyboard Navigation

```typescript
// Ensure cards are focusable if interactive
<div
  tabIndex={0}
  className="focus:outline-none focus:ring-2 focus:ring-amarelo-luz focus:ring-offset-2"
  onKeyDown={(e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      // Handle activation
    }
  }}
>
  {/* Card content */}
</div>
```

### Focus Styles

```typescript
className="
  focus:outline-none
  focus:ring-2
  focus:ring-amarelo-luz
  focus:ring-offset-2
  focus:ring-offset-white-essential
"
```

## Success Criteria

- [ ] Reduced motion preference disables all animations
- [ ] All text meets WCAG AA contrast ratios (4.5:1 for normal, 3:1 for large)
- [ ] Semantic HTML structure is correct (H2, H3 tags, proper hierarchy)
- [ ] ARIA labels are present and descriptive
- [ ] Keyboard navigation works (Tab, Enter, Space keys)
- [ ] Focus indicators are visible and meet contrast requirements
- [ ] Screen reader announces content correctly
- [ ] All interactive elements are keyboard accessible
- [ ] All accessibility tests pass

## Relevant Files

- `src/app/(marketing)/components/home/TimelineMethodology.tsx` - Add ARIA attributes
- `src/app/(marketing)/components/home/TimelineStepCard.tsx` - Add accessibility attributes
- `src/app/(marketing)/components/home/TimelineProgress.tsx` - Add ARIA labels
- `src/app/(marketing)/components/home/hooks/useScrollProgress.ts` - Verify useReducedMotion hook
- `test/unit/home/TimelineMethodology.test.tsx` - Add accessibility tests

## Notes

- Follow WCAG 2.1 Level AA standards
- Test with actual screen readers, not just automated tools
- Consider users with various disabilities (visual, motor, cognitive)
- Ensure accessibility doesn't compromise visual design
- Document any accessibility decisions or trade-offs
- PRD explicitly requires WCAG AA compliance and reduced motion support
