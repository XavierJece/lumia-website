# Task 11.0: Page Assembly & Cleanup

<critical>Read the prd.md and techspec.md files in this folder. **If you do not read these files, your task will be invalidated**</critical>

## Overview

Assemble all new and modified components into the marketing home page in the correct order. Remove deprecated components from the home page and ensure proper section flow, spacing, and visual hierarchy.

<requirements>
- Update page.tsx with new section order
- Import and render all new components
- Remove deprecated components from home page (keep files for other pages)
- Ensure proper section IDs for anchor navigation
- Maintain consistent spacing between sections
- Depends on Tasks 2.0-10.0 being complete
</requirements>

## Subtasks

- [ ] 11.1 Update page.tsx imports

  - Import all new components (SolutionsGrid, SuccessCases, Testimonials, WhyLumia, InsightsPreview)
  - Keep imports for modified components (Hero, ImpactMetrics, Methodology)
  - Remove imports for deprecated components on home page

- [ ] 11.2 Arrange sections in correct order

  1. Hero (above the fold)
  2. ImpactMetrics (trust band)
  3. SolutionsGrid (id="solucoes")
  4. Methodology (how we work)
  5. SuccessCases (proof)
  6. Testimonials (human proof)
  7. WhyLumia (values)
  8. InsightsPreview (authority)

- [ ] 11.3 Add section wrappers with proper spacing

  - Consistent vertical padding between sections
  - Alternating background colors where specified
  - Proper container widths

- [ ] 11.4 Remove deprecated components from home page

  - Remove AboutSummary from page.tsx
  - Remove Clients from page.tsx
  - Remove BlogPreview from page.tsx (replaced by InsightsPreview)
  - Remove FAQ from page.tsx
  - **Do NOT delete component files** (may be used elsewhere)

- [ ] 11.5 Ensure anchor navigation works

  - SolutionsGrid has id="solucoes"
  - Hero secondary CTA links to #solucoes
  - Smooth scroll behavior

- [ ] 11.6 Verify section backgrounds

  - Hero: Brand green with optional pattern
  - ImpactMetrics: Light/white
  - SolutionsGrid: Light gray
  - Methodology: White
  - SuccessCases: Light gray
  - Testimonials: White
  - WhyLumia: Optional texture/light green
  - InsightsPreview: White

- [ ] 11.7 Test full page flow

  - Scroll through entire page
  - Verify all sections render correctly
  - Check mobile and desktop layouts
  - Verify all CTAs work

- [ ] 11.8 Write integration test
  - Test page renders all sections
  - Test section order is correct
  - Test anchor navigation works

## Implementation Details

Refer to `techspec.md` for:

- Component overview and data flow diagram
- Files to remove/deprecate section
- Section order specification

### Page Structure

```tsx
// src/app/(marketing)/page.tsx

import Hero from './components/home/Hero'
import ImpactMetrics from './components/home/ImpactMetrics'
import SolutionsGrid from './components/home/SolutionsGrid'
import Methodology from './components/home/Methodology'
import SuccessCases from './components/home/SuccessCases'
import Testimonials from './components/home/Testimonials'
import WhyLumia from './components/home/WhyLumia'
import InsightsPreview from './components/home/InsightsPreview'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ImpactMetrics />
      <SolutionsGrid />
      <Methodology />
      <SuccessCases />
      <Testimonials />
      <WhyLumia />
      <InsightsPreview />
    </main>
  )
}
```

### Section Spacing Pattern

```tsx
// Consistent section wrapper
<section className="py-16 md:py-24 lg:py-32">
  <div className="container mx-auto px-4">{/* Section content */}</div>
</section>
```

## Success Criteria

- [ ] All 8 sections render on home page in correct order
- [ ] Deprecated components removed from page.tsx (files kept)
- [ ] Anchor navigation from Hero to Solutions works
- [ ] Consistent spacing between sections
- [ ] Alternating backgrounds create visual rhythm
- [ ] Page renders correctly on mobile (375px) and desktop (1440px)
- [ ] No console errors or TypeScript warnings
- [ ] Integration test passes

## Relevant Files

**To Modify:**

- `src/app/(marketing)/page.tsx` — Main home page

**Components to Include:**

- `Hero.tsx` (modified in Task 2.0)
- `ImpactMetrics.tsx` (modified in Task 3.0)
- `SolutionsGrid.tsx` (created in Task 4.0)
- `Methodology.tsx` (modified in Task 6.0)
- `SuccessCases.tsx` (created in Task 7.0)
- `Testimonials.tsx` (created in Task 8.0)
- `WhyLumia.tsx` (created in Task 9.0)
- `InsightsPreview.tsx` (created in Task 10.0)

**Components to Remove from page.tsx (keep files):**

- `AboutSummary.tsx`
- `Clients.tsx`
- `BlogPreview.tsx`
- `FAQ.tsx`

**Reference:**

- `prd.md` — User Experience flow section
- `techspec.md` — Component overview and data flow
