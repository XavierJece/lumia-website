# Implementation Tasks Summary — Lumia Home Page Refresh

## Overview

This document outlines all implementation tasks for refreshing the Lumia marketing home page. The goal is to increase conversion, improve engagement through clear storytelling, and reinforce brand trust with a mobile-first, performant, and accessible experience.

**Total Tasks:** 13
**Estimated Phases:** 5
**New Dependency:** `framer-motion`

## Prerequisites

Before starting implementation:

1. Ensure Node.js 20.x is installed
2. Run `pnpm install` to sync dependencies
3. Read both `prd.md` and `techspec.md` in this folder
4. Familiarize yourself with the existing codebase structure at `src/app/(marketing)/`
5. Review the design system rules at `.cursor/rules/design-system.mdc`

## Phase Overview

| Phase | Focus Area            | Tasks            | Parallelizable |
| ----- | --------------------- | ---------------- | -------------- |
| 1     | Foundation & Core     | 1.0, 2.0, 3.0    | 2.0 ⏐ 3.0      |
| 2     | New Content Sections  | 4.0, 5.0, 6.0    | 4.0 ⏐ 5.0      |
| 3     | Social Proof          | 7.0, 8.0         | 7.0 ⏐ 8.0      |
| 4     | Authority & Value     | 9.0, 10.0        | 9.0 ⏐ 10.0     |
| 5     | Integration & Quality | 11.0, 12.0, 13.0 | 12.0 ⏐ 13.0    |

## Tasks

### Phase 1: Foundation & Core

- [x] **1.0 Project Setup & Configuration** ✅

  - Install Framer Motion dependency
  - Update constants.ts with WhatsApp preset message
  - Create shared TypeScript interfaces (types.ts)
  - _File: `01_task.md`_

- [ ] **2.0 Hero Section Enhancement** ⏐

  - Modify Hero.tsx with new headline/subheadline
  - Implement dual CTAs (WhatsApp primary + anchor secondary)
  - Add scroll cue indicator
  - Ensure proper H1 tag for SEO
  - _File: `02_task.md`_

- [x] **3.0 Impact Metrics Update** ✅
  - Update ImpactMetrics.tsx with new metrics data
  - Add Lucide icon support
  - Ensure responsive horizontal/stacked layout
  - _File: `03_task.md`_

### Phase 2: New Content Sections

- [x] **4.0 Solutions Grid Component** ✅

  - Create new SolutionsGrid.tsx component
  - Implement 3-card responsive grid
  - Apply brand styling with GlassCard patterns
  - _File: `04_task.md`_

- [x] **5.0 Scroll Animation Infrastructure** ✅

  - Create useScrollProgress custom hook
  - Set up LazyMotion with Framer Motion
  - Implement reduced-motion preference fallback
  - _File: `05_task.md`_

- [x] **6.0 Methodology Section Enhancement** ✅
  - Add operating diagram illustration
  - Implement animated timeline with 4 steps
  - Add scroll-triggered progress line animation
  - Include final CTA
  - _Depends on: 5.0_
  - _File: `06_task.md`_

### Phase 3: Social Proof

- [ ] **7.0 Success Cases Section** ⏐

  - Create SuccessCases.tsx component
  - Implement both carousel and stacked layout variants
  - Add case studies with Challenge/Action/Result structure
  - _File: `07_task.md`_

- [ ] **8.0 Testimonials Section** ⏐
  - Create Testimonials.tsx component
  - Implement both carousel and stacked layout variants
  - Ensure keyboard accessibility for navigation
  - _File: `08_task.md`_

### Phase 4: Authority & Value

- [ ] **9.0 Why Lumia Section** ⏐

  - Create WhyLumia.tsx component
  - Implement 3 value cards with large icons
  - Apply brand styling
  - _File: `09_task.md`_

- [ ] **10.0 Insights & News Section** ⏐
  - Create InsightsPreview.tsx component
  - Implement 3 blog preview cards grid
  - Replace existing BlogPreview.tsx usage
  - _File: `10_task.md`_

### Phase 5: Integration & Quality

- [ ] **11.0 Page Assembly & Cleanup**

  - Update page.tsx with new section order
  - Remove deprecated components from home page
  - Ensure proper section flow and spacing
  - _Depends on: 2.0-10.0_
  - _File: `11_task.md`_

- [ ] **12.0 Accessibility Audit** ⏐

  - Add ARIA labels for carousels and controls
  - Verify keyboard navigation throughout
  - Ensure visible focus states
  - Audit semantic headings (H1, H2 per section)
  - _Depends on: 11.0_
  - _File: `12_task.md`_

- [ ] **13.0 Performance Optimization** ⏐
  - Optimize LCP for hero section
  - Implement lazy loading for below-fold images
  - Prevent CLS with proper image dimensions
  - Verify Core Web Vitals targets
  - _Depends on: 11.0_
  - _File: `13_task.md`_

## Dependency Graph

```
[1.0] ─────┬────────▶ [2.0] ──────────────────────────┐
           │                                          │
           ├────────▶ [3.0] ──────────────────────────┤
           │                                          │
           ├────────▶ [4.0] ──────────────────────────┤
           │                                          │
           ├────────▶ [5.0] ──▶ [6.0] ────────────────┤
           │                                          │
           ├────────▶ [7.0] ──────────────────────────┤
           │                                          │
           ├────────▶ [8.0] ──────────────────────────┤
           │                                          │
           ├────────▶ [9.0] ──────────────────────────┤
           │                                          │
           └────────▶ [10.0] ─────────────────────────┘
                                                      │
                                                      ▼
                                                  [11.0]
                                                      │
                                            ┌─────────┴─────────┐
                                            ▼                   ▼
                                        [12.0] ⏐            [13.0] ⏐
```

## Files Summary

### Files to Modify

| File                                                    | Task | Changes                                |
| ------------------------------------------------------- | ---- | -------------------------------------- |
| `src/shared/config/constants.ts`                        | 1.0  | Add WhatsApp preset message            |
| `src/app/(marketing)/page.tsx`                          | 11.0 | Update section order, add new sections |
| `src/app/(marketing)/components/home/Hero.tsx`          | 2.0  | New headline, dual CTAs, scroll cue    |
| `src/app/(marketing)/components/home/ImpactMetrics.tsx` | 3.0  | New metrics data, icon support         |
| `src/app/(marketing)/components/home/Methodology.tsx`   | 6.0  | Illustration, animated timeline        |

### Files to Create

| File                                                             | Task | Purpose                      |
| ---------------------------------------------------------------- | ---- | ---------------------------- |
| `src/app/(marketing)/components/home/types.ts`                   | 1.0  | Shared TypeScript interfaces |
| `src/app/(marketing)/components/home/SolutionsGrid.tsx`          | 4.0  | 3-card solution grid         |
| `src/app/(marketing)/components/home/hooks/useScrollProgress.ts` | 5.0  | Scroll animation hook        |
| `src/app/(marketing)/components/home/SuccessCases.tsx`           | 7.0  | Case studies section         |
| `src/app/(marketing)/components/home/Testimonials.tsx`           | 8.0  | Client testimonials          |
| `src/app/(marketing)/components/home/WhyLumia.tsx`               | 9.0  | Value proposition cards      |
| `src/app/(marketing)/components/home/InsightsPreview.tsx`        | 10.0 | Blog preview grid            |

### Files to Deprecate (Remove from Home Page)

| File                                                   | Task       | Action                                   |
| ------------------------------------------------------ | ---------- | ---------------------------------------- |
| `src/app/(marketing)/components/home/BlogPreview.tsx`  | 10.0, 11.0 | Replace with InsightsPreview             |
| `src/app/(marketing)/components/home/AboutSummary.tsx` | 11.0       | Remove from home page                    |
| `src/app/(marketing)/components/home/Clients.tsx`      | 11.0       | Replace with SuccessCases + Testimonials |
| `src/app/(marketing)/components/home/FAQ.tsx`          | 11.0       | Remove from home page                    |

## Success Criteria

The implementation is complete when:

1. ✅ All 13 tasks are marked as complete
2. ✅ No TypeScript or ESLint errors
3. ✅ All unit tests pass
4. ✅ Page renders correctly on mobile and desktop
5. ✅ Core Web Vitals meet targets (LCP < 2.5s, FID < 100ms, CLS < 0.1)
6. ✅ Accessibility audit passes (keyboard nav, ARIA, contrast)
7. ✅ WhatsApp CTA contains correct preset message
8. ✅ All CTAs are functional and properly linked
