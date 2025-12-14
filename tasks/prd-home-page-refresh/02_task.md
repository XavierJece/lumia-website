# Task 2.0: Hero Section Enhancement

<critical>Read the prd.md and techspec.md files in this folder. **If you do not read these files, your task will be invalidated**</critical>

## Overview

Enhance the existing Hero component with new headline, subheadline, dual CTAs (WhatsApp primary and anchor secondary), and an optional scroll cue indicator. The hero should capture SME owners within 10 seconds, communicating relief and credibility.

<requirements>
- Modify existing Hero.tsx (in-place edit, not new component)
- Headline must use H1 tag for SEO
- Primary CTA links to WhatsApp with preset message from constants.ts
- Secondary CTA anchors to #solucoes section
- Scroll cue indicator visible on desktop and mobile
- Use brand colors: Verde Horizonte (#003a33), Amarelo Luz (#d2d658)
- Consider using pattern SVGs as background elements
</requirements>

## Subtasks

- [ ] 2.1 Update headline and subheadline content

  - Headline: "Conformidade Ambiental sem Burocracia: Agilidade e Clareza para Sua Empresa."
  - Ensure headline uses `<h1>` tag
  - Subheadline explaining value proposition

- [ ] 2.2 Implement dual CTA buttons

  - Primary (Yellow): "Fale com um Especialista" → WhatsApp link from constants.ts
  - Secondary (Outlined): "Ver Nossas Soluções" → anchor to `#solucoes`
  - Use existing buttonVariants from design system

- [ ] 2.3 Add scroll cue indicator

  - Subtle animated arrow/chevron in Amarelo Luz
  - Include proper aria-label for accessibility
  - Visible on both desktop and mobile

- [ ] 2.4 Apply brand styling and background

  - Use Verde Horizonte/white color scheme
  - Consider optional pattern SVG background (pattern_1.svg, pattern_2.svg, or pattern_3.svg)
  - Ensure sufficient contrast for readability

- [ ] 2.5 Ensure responsive behavior

  - Mobile-first layout
  - Touch targets ≥44px for CTAs
  - Proper spacing on all breakpoints

- [ ] 2.6 Write unit tests
  - Test H1 tag presence
  - Test WhatsApp CTA contains preset message
  - Test secondary CTA anchors correctly
  - Test scroll indicator has aria-label

## Implementation Details

Refer to `techspec.md` for:

- Hero Section Layout sketch in Appendix
- Component styling patterns with tailwind-variants
- CTA button styling specifications

### Hero Layout Reference

```
┌─────────────────────────────────────────────────────────┐
│  [Optional: pattern_1.svg background]                   │
│                                                         │
│     H1: Conformidade Ambiental sem Burocracia:         │
│         Agilidade e Clareza para Sua Empresa.          │
│                                                         │
│     Subheadline: Traduzimos exigências legais...       │
│                                                         │
│     [🟢 Fale com Especialista]  [○ Ver Soluções ↓]     │
│                                                         │
│                    ↓ (scroll cue)                       │
└─────────────────────────────────────────────────────────┘
```

## Success Criteria

- [ ] Hero displays new headline in H1 tag
- [ ] Primary CTA links to WhatsApp with correct preset message
- [ ] Secondary CTA scrolls to #solucoes section when clicked
- [ ] Scroll indicator is visible and accessible
- [ ] Component renders correctly on mobile (375px) and desktop (1440px)
- [ ] All colors match brand palette
- [ ] Unit tests pass

## Relevant Files

**To Modify:**

- `src/app/(marketing)/components/home/Hero.tsx` — Main hero component

**Reference:**

- `src/shared/config/constants.ts` — WhatsApp link with preset message
- `src/shared/styles/colors.ts` — Brand color definitions
- `public/images/pattern_1.svg`, `pattern_2.svg`, `pattern_3.svg` — Optional backgrounds
- `prd.md` — Section 1 (Hero) requirements
- `techspec.md` — Hero Section Layout sketch
