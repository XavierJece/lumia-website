# Implementation Tasks Summary — Timeline Methodology Component

## Overview

This document outlines all implementation tasks for creating the "How We Eliminate Bureaucracy" interactive timeline component for the Lumia Consultoria Ambiental homepage. The component will replace the existing Methodology section with a focused, visually compelling vertical timeline that explains Lumia's four-step process for eliminating bureaucracy through scroll animations, progressive line coloring, and hover interactions.

**Total Tasks:** 8
**Estimated Phases:** 4
**Dependencies:** Existing `framer-motion`, `lucide-react`, `useScrollProgress` hook

## Prerequisites

Before starting implementation:

1. Ensure Node.js 20.x is installed
2. Run `pnpm install` to sync dependencies
3. Read both `prd.md` and `techspec.md` in this folder
4. Familiarize yourself with the existing Methodology component at `src/app/(marketing)/components/home/Methodology.tsx`
5. Review the design system rules at `.cursor/rules/design-system.mdc`
6. Understand the existing scroll animation infrastructure at `src/app/(marketing)/components/home/hooks/useScrollProgress.ts`

## Phase Overview

| Phase | Focus Area                  | Tasks           | Parallelizable |
| ----- | --------------------------- | --------------- | -------------- |
| 1     | Foundation & Data Structure | 1.0             | -              |
| 2     | Core Components             | 2.0 ⏐ 3.0 → 4.0 | 2.0 ⏐ 3.0      |
| 3     | Responsive & Accessibility  | 5.0 ⏐ 6.0       | 5.0 ⏐ 6.0      |
| 4     | Integration & Quality       | 7.0 → 8.0       | -              |

## Tasks

### Phase 1: Foundation & Data Structure

- [ ] **1.0 Create ITimelineStep Interface and Static Data** ✅

  - Define new `ITimelineStep` interface with PRD-required fields
  - Create static data array with 4 steps (all content from PRD)
  - Select appropriate Lucide React icons for each step
  - Add interface to `types.ts` file
  - _File: `01_task.md`_

### Phase 2: Core Components

- [ ] **2.0 Implement TimelineStepCard Component** ⏐

  - Build card component with PRD-required layout structure
  - Implement hover state (border changes to Light Yellow #d2d658)
  - Add fade-up animation (300-400ms duration)
  - Ensure proper semantic HTML structure
  - _File: `02_task.md`_

- [ ] **3.0 Create TimelineProgress Component** ⏐

  - Build vertical connecting line component
  - Implement scroll-based color transition (Forest Green #10763e → Light Yellow #d2d658)
  - Ensure perfect alignment with step markers
  - Add circular markers at each step position
  - _File: `03_task.md`_

- [ ] **4.0 Build TimelineMethodology Container Component**

  - Integrate TimelineStepCard and TimelineProgress components
  - Implement scroll detection with `useScrollProgress` hook
  - Add stagger animation (50-100ms delay between cards)
  - Add section header ("Como Eliminamos a Burocracia")
  - Ensure semantic HTML structure (H2, H3 tags)
  - _Depends on: 2.0, 3.0_
  - _File: `04_task.md`_

### Phase 3: Responsive & Accessibility

- [ ] **5.0 Implement Responsive Mobile Layout** ⏐

  - Adapt timeline for mobile viewports (320px+)
  - Ensure line and cards align properly on all screen sizes
  - Test tablet breakpoints (768px, 1024px)
  - Maintain visual hierarchy across breakpoints
  - _Depends on: 4.0_
  - _File: `05_task.md`_

- [ ] **6.0 Integrate Accessibility Features** ⏐

  - Add reduced motion support (`useReducedMotion` hook)
  - Ensure WCAG AA color contrast compliance
  - Add proper ARIA labels and semantic HTML
  - Test keyboard navigation
  - Verify screen reader compatibility
  - _Depends on: 4.0_
  - _File: `06_task.md`_

### Phase 4: Integration & Quality

- [ ] **7.0 Replace Methodology Section on Homepage**

  - Update `page.tsx` to use TimelineMethodology component
  - Remove or archive old Methodology component
  - Ensure smooth integration with existing layout
  - Verify section spacing and visual flow
  - _Depends on: 4.0, 5.0, 6.0_
  - _File: `07_task.md`_

- [ ] **8.0 Testing and Performance Optimization**

  - Write unit tests for components and hooks
  - Verify animation performance (60fps target)
  - Ensure Lighthouse scores remain stable (no degradation)
  - Cross-browser testing (Chrome, Firefox, Safari, Edge)
  - Validate all PRD success criteria
  - _Depends on: 7.0_
  - _File: `08_task.md`_

## Key Technical Details

### Color Palette

- **Light Yellow:** `#d2d658` (amarelo-luz in Tailwind)
- **Forest Green:** `#10763e` (primary-green in Tailwind)
- **Horizon Green:** `#003a33` (horizon-green in Tailwind)
- **Background Highlight:** `#fffbf7` (white-essential in Tailwind)

### Animation Specifications

- **Card Entrance:** Fade-up effect, 300-400ms duration
- **Stagger Delay:** 50-100ms between cards
- **Line Color Transition:** Smooth CSS transition, 200-300ms duration
- **Hover Border:** Instant feedback, Light Yellow border

### Component Structure

```
TimelineMethodology (container)
├── Section.Header
│   ├── Section.Title (H2)
│   └── Section.Subtitle
├── TimelineProgress (vertical line with markers)
└── TimelineStepCard[] (4 cards)
    ├── Step Header (ETAPA X)
    ├── Step Title (H3)
    ├── Key Question
    ├── Description
    ├── Differential Highlight Box
    └── Practical Example
```

## Success Criteria

- All 4 steps render correctly with PRD-specified content
- Scroll animations trigger smoothly (300-400ms fade-up)
- Timeline line changes color progressively (Forest Green → Light Yellow)
- Hover states work on all cards (border → Light Yellow)
- Component is fully responsive (mobile 320px+ to desktop)
- Accessibility: WCAG AA compliance, reduced motion support
- Performance: No Lighthouse score degradation
- All unit tests pass

## Dependencies

- **Existing Libraries:** `framer-motion`, `lucide-react`, `tailwindcss`
- **Existing Hooks:** `useScrollProgress`, `useReducedMotion` (from Methodology component)
- **Existing Components:** `Section`, `Button` (if CTA needed)

## Notes

- The component replaces the existing Methodology section but maintains similar animation patterns
- All content is static (no CMS integration required)
- Icons will use Lucide React library (already in dependencies)
- Component must be scalable for future addition of 5th/6th steps
