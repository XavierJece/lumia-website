# Task 12.0: Accessibility Audit

<critical>Read the prd.md and techspec.md files in this folder. **If you do not read these files, your task will be invalidated**</critical>

## Overview

Conduct a comprehensive accessibility audit of the refreshed home page. Ensure all interactive elements are keyboard accessible, ARIA labels are properly applied, semantic headings are used correctly, and color contrast meets WCAG standards.

<requirements>
- All CTAs and interactive elements keyboard-focusable
- Visible focus states on all focusable elements
- ARIA labels for carousels and custom controls
- Semantic heading hierarchy (H1 → H2 per section)
- Color contrast minimum 4.5:1 for text
- Alt text on all images
- Reduced-motion preference respected
- Depends on Task 11.0 (page assembly)
</requirements>

## Subtasks

- [ ] 12.1 Audit keyboard navigation

  - Tab through entire page
  - Verify all CTAs are focusable
  - Verify carousel navigation works with keyboard
  - Check focus order is logical (top to bottom, left to right)

- [ ] 12.2 Verify visible focus states

  - All focusable elements have visible focus ring
  - Focus ring has sufficient contrast
  - No focus traps

- [ ] 12.3 Audit ARIA labels

  - Carousels have role="region" and aria-label
  - Carousel slides have aria-roledescription="slide"
  - Navigation buttons have aria-labels
  - Live regions announce changes if applicable

- [ ] 12.4 Verify semantic heading hierarchy

  - H1: Only in Hero section (page title)
  - H2: Each major section
  - H3-H4: Subsections as needed
  - No skipped heading levels

- [ ] 12.5 Check color contrast

  - Run axe or Lighthouse accessibility audit
  - Verify text on colored backgrounds meets 4.5:1
  - Check link colors are distinguishable
  - Verify focus indicators have 3:1 contrast

- [ ] 12.6 Audit image alt text

  - All `<img>` and `<Image>` have alt attribute
  - Decorative images have alt="" (empty)
  - Informative images have descriptive alt text
  - Operating diagram has detailed alt text

- [ ] 12.7 Verify reduced-motion behavior

  - Enable prefers-reduced-motion in system/browser
  - Verify animations are disabled/reduced
  - Content remains visible without animation

- [ ] 12.8 Test with screen reader (optional but recommended)

  - Test with VoiceOver (Mac) or NVDA (Windows)
  - Verify content is announced correctly
  - Check carousel announcements

- [ ] 12.9 Fix identified issues

  - Create list of accessibility issues found
  - Fix each issue in relevant component
  - Re-test after fixes

- [ ] 12.10 Document accessibility compliance
  - Note any known limitations
  - Document testing methodology used

## Implementation Details

Refer to `techspec.md` for:

- Carousel accessibility pattern (WAI-ARIA)
- Focus state requirements
- Reduced-motion handling

### Focus State Pattern

```css
/* Ensure visible focus states */
.focusable-element:focus-visible {
  outline: 2px solid #d2d658; /* Amarelo Luz */
  outline-offset: 2px;
}
```

### Heading Hierarchy Checklist

```
Hero
└── H1: Conformidade Ambiental sem Burocracia...

ImpactMetrics
└── (no heading - metrics speak for themselves)

SolutionsGrid
└── H2: Soluções para o seu desafio
    └── H3: Card titles (if applicable)

Methodology
└── H2: Nós facilitamos o diálogo...
    └── H3/H4: Step titles

SuccessCases
└── H2: Resultados que falam por nós

Testimonials
└── H2: (optional section title)

WhyLumia
└── H2: Mais que uma consultoria...

InsightsPreview
└── H2: Insights para sua decisão
```

### ARIA Carousel Pattern

```tsx
<section
  role="region"
  aria-label="Depoimentos de clientes"
  aria-roledescription="carousel"
>
  <div
    role="group"
    aria-roledescription="slide"
    aria-label={`${currentIndex + 1} de ${totalSlides}`}
  >
    {/* slide content */}
  </div>

  <button aria-label="Depoimento anterior" aria-controls="carousel">
    ←
  </button>
  <button aria-label="Próximo depoimento" aria-controls="carousel">
    →
  </button>
</section>
```

## Success Criteria

- [ ] All interactive elements accessible via keyboard
- [ ] Focus states visible on all focusable elements
- [ ] ARIA labels present on carousels and custom controls
- [ ] Heading hierarchy is semantic (H1 → H2 → H3...)
- [ ] Color contrast passes WCAG AA (4.5:1 minimum)
- [ ] All images have appropriate alt text
- [ ] Animations respect reduced-motion preference
- [ ] Lighthouse Accessibility score ≥ 90
- [ ] No critical axe violations

## Relevant Files

**To Audit/Modify:**

- All home page components in `src/app/(marketing)/components/home/`
- `src/app/(marketing)/page.tsx`

**Reference:**

- `prd.md` — Accessibility requirements (FR16, FR18)
- `techspec.md` — Carousel accessibility section
- `.cursor/rules/react.mdc` — Accessibility requirements
