# Task 2.0: Design system (glassmorphism UI)

<critical>Read the prd.md and techspec.md files in this folder. **If you do not read these files, your task will be invalidated**</critical>

## Overview

Build reusable glassmorphism components and tokens (atoms/molecules) to deliver the Apple iOS aesthetic: cards, containers, buttons, typography scales, spacing, and utility helpers using Tailwind/tailwind-variants.

<requirements>
- Create base glass components (GlassCard, GlassContainer) with blur, translucency, border, shadow tokens.
- Implement button variants and typography styles aligned with brand; use tailwind-variants for variants.
- Ensure components are accessible (focus states, ARIA where needed).
- Enable class merging (tailwind-merge/clsx) and support className overrides safely.
- Keep components tree-shakable and under 200 lines each; export defaults.
</requirements>

## Subtasks

- [ ] 2.1 Define theme tokens (colors, radius, blur, spacing, shadows) in Tailwind and/or constants.
- [ ] 2.2 Implement GlassCard/GlassContainer components with responsive padding and hover/transition options.
- [ ] 2.3 Implement Button variants (primary/secondary/ghost) with loading/disabled states and icon slots.
- [ ] 2.4 Add typography helpers (heading/body styles) or utility classes for consistent text rhythm.
- [ ] 2.5 Testing: visual smoke via Story/Playground (if available) or render tests; accessibility check for focus/contrast.

## Implementation Details

Reference techspec: System Architecture (Design System), Implementation Design (Glassmorphism via Tailwind Utility Classes), Development Sequencing (Step 1: Foundation & Design System Setup).

## Success Criteria

- Components render with glassmorphism styling consistent with PRD aesthetic.
- Variants are type-safe and override-friendly; class merging works.
- Focus/hover states meet accessibility contrast and keyboard navigation.
- Components ready for reuse by pages without additional styling glue.

## Relevant Files

- tailwind.config.ts
- src/shared/components/ui/GlassCard.tsx, GlassContainer.tsx, Button.tsx, typography helpers
- src/shared/styles/globals.css (utility classes)
