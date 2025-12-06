# Task 1.0: Project setup & foundations

<critical>Read the prd.md and techspec.md files in this folder. **If you do not read these files, your task will be invalidated**</critical>

## Overview

Set up the Next.js 14 App Router project baseline with Tailwind, TypeScript strictness, and workspace standards (pnpm, linting, formatting) to support all subsequent features.

<requirements>
- Next.js 14 App Router with TypeScript enabled and strict mode.
- Tailwind configured with base tokens (colors, radius, blur) aligned to glassmorphism direction.
- pnpm as the package manager; no unpinned dependencies.
- Linting/formatting scripts wired (ESLint, Prettier); Husky/commitlint preserved.
- Base layout shell (`src/app/layout.tsx`) with global styles loaded.
</requirements>

## Subtasks

- [ ] 1.1 Ensure Next.js 14 + TS App Router scaffolding is present and configured for pnpm.
- [ ] 1.2 Configure Tailwind (theme extension for colors/blur/radius/typography) and global CSS reset.
- [ ] 1.3 Verify lint/format scripts and Husky hooks run with pnpm; update configs if needed without altering policy.
- [ ] 1.4 Add baseline layout structure (html/body classes, font setup) to support design system usage.
- [ ] 1.5 Testing: run `pnpm lint:eslint:check` and `pnpm lint:prettier:check`; ensure `pnpm test` (if present) passes.

## Implementation Details

Reference techspec: Executive Summary, System Architecture, Development Sequencing (Step 1: Foundation & Design System Setup), and Standards Compliance sections.

## Success Criteria

- Project builds locally with `pnpm dev` and type checks without errors.
- Tailwind utilities are available with extended theme tokens for glass UI.
- Lint/format commands succeed; Husky/commitlint remain intact.
- Base layout ready for consuming design system components.

## Relevant Files

- package.json, pnpm-lock.yaml (**YOU MUST NOT** edit these files directly.)
- tailwind.config.ts, postcss.config.js, src/shared/styles/globals.css, src/shared/styles/colors.ts, src/shared/styles/fonts.ts
- src/app/layout.tsx
- .eslintrc.*, .prettierrc.*, .husky/*

