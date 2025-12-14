# Task 1.0: Project Setup & Configuration

<critical>Read the prd.md and techspec.md files in this folder. **If you do not read these files, your task will be invalidated**</critical>

## Overview

Set up the foundational infrastructure for the home page refresh. This includes installing the animation library, updating shared configuration, and creating TypeScript interfaces that will be used across all new components.

<requirements>
- Install framer-motion with exact version pinning
- Update constants.ts with WhatsApp preset message configuration
- Create shared TypeScript interfaces for all home page components
- Ensure all changes pass linting and type checking
</requirements>

## Subtasks

- [ ] 1.1 Install Framer Motion dependency

  - Run `pnpm add framer-motion`
  - Verify exact version is pinned in package.json (no `^` or `~`)
  - Commit both package.json and pnpm-lock.yaml

- [ ] 1.2 Update constants.ts with WhatsApp configuration

  - Add preset message to CONTACT_INFO.whatsapp
  - URL-encode the message for the link
  - Message: "Olá, Lumia! Acabei de visitar o site de vocês e tenho interesse em conversar sobre conformidade ambiental para minha empresa. Podem me ajudar?"

- [ ] 1.3 Create shared TypeScript interfaces (types.ts)

  - Create `src/app/(marketing)/components/home/types.ts`
  - Define all interfaces with `I` prefix as per coding standards
  - Interfaces needed: IMetricCard, ISolutionCard, IMethodologyStep, ICaseStudy, ITestimonial, IValueCard, IBlogPreview

- [ ] 1.4 Verify setup
  - Run `pnpm lint:eslint:check` and ensure no errors
  - Run `pnpm lint:prettier:check` and ensure no errors
  - Verify TypeScript compilation passes

## Implementation Details

Refer to `techspec.md` for:

- Main Interfaces section (complete TypeScript interface definitions)
- constants.ts Updates section (exact WhatsApp configuration)
- Technical Dependencies table

### Key Interface Definitions

```typescript
// All interfaces should use LucideIcon type from lucide-react
import { LucideIcon } from 'lucide-react'

export interface IMetricCard {
  id: number
  value: string
  label: string
  icon: LucideIcon
}

// See techspec.md for complete interface definitions
```

## Success Criteria

- [ ] Framer Motion is installed and pinned to exact version
- [ ] `pnpm install` runs without errors
- [ ] constants.ts has updated WhatsApp link with URL-encoded preset message
- [ ] types.ts exists with all 7 interfaces defined
- [ ] All interfaces use `I` prefix naming convention
- [ ] No linting or TypeScript errors

## Relevant Files

**To Modify:**

- `package.json` — Add framer-motion dependency
- `src/shared/config/constants.ts` — Update CONTACT_INFO.whatsapp

**To Create:**

- `src/app/(marketing)/components/home/types.ts` — Shared interfaces

**Reference:**

- `techspec.md` — Interface definitions and constants updates
- `.cursor/rules/dependencies.mdc` — Dependency management guidelines
