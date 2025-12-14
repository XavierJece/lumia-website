# Task 4.0: Solutions Grid Component

<critical>Read the prd.md and techspec.md files in this folder. **If you do not read these files, your task will be invalidated**</critical>

## Overview

Create a new SolutionsGrid component displaying 3 solution cards that link to specific solution pages. Each card should clearly communicate the service offering and include a "Saiba mais" action link.

<requirements>
- Create new SolutionsGrid.tsx component
- Display 3 solution cards in a responsive grid
- Each card: icon, title, description (1-2 lines), "Saiba mais" link
- Cards use white background with subtle shadow and rounded corners
- Section has id="solucoes" for anchor link from Hero
- Use ISolutionCard interface from types.ts
</requirements>

## Subtasks

- [ ] 4.1 Create SolutionsGrid.tsx component file

  - Create at `src/app/(marketing)/components/home/SolutionsGrid.tsx`
  - Export as default component
  - Add section id="solucoes" for anchor navigation

- [ ] 4.2 Implement solution card structure

  - Icon/shape at top (using Lucide icons)
  - Title in Verde Horizonte
  - Description in gray (1-2 lines)
  - "Saiba mais" link with arrow in Verde Floresta

- [ ] 4.3 Add solutions data

  - Licenciamento Ambiental para Indústrias → `/solucoes/licenciamento-industrial`
  - Regularização de Emergência e Defesa → `/solucoes/regularizacao-emergencia`
  - Assessoria Contínua para Empresas → `/solucoes/assessoria-continua`

- [ ] 4.4 Style cards with brand patterns

  - White background (Branco Essencial)
  - Subtle shadow and rounded corners
  - Consider using GlassCard or similar existing component
  - Icon with Amarelo Luz accent

- [ ] 4.5 Implement responsive layout

  - Desktop: 3-column grid
  - Tablet: 2-column grid or 3-column
  - Mobile: Single column stack

- [ ] 4.6 Add section header

  - Title: "Soluções para o seu desafio." in Verde Horizonte
  - Optional subtitle in gray

- [ ] 4.7 Write unit tests
  - Test all 3 cards render
  - Test links navigate to correct paths
  - Test card content displays correctly

## Implementation Details

Refer to `techspec.md` for:

- ISolutionCard interface definition
- Solutions data array example
- Component file location

### Solutions Data

```typescript
import { Factory, AlertTriangle, Handshake } from 'lucide-react'
import { ISolutionCard } from './types'

const solutions: ISolutionCard[] = [
  {
    title: 'Licenciamento Ambiental para Indústrias',
    description:
      'Obtenha e renove suas licenças (LP, LI, LO) com agilidade e segurança jurídica para operar sem interrupções.',
    href: '/solucoes/licenciamento-industrial',
    icon: Factory,
  },
  {
    title: 'Regularização de Emergência e Defesa',
    description:
      'Atuamos rapidamente em casos de autuação ou embargo. Nossa expertise é sua melhor defesa.',
    href: '/solucoes/regularizacao-emergencia',
    icon: AlertTriangle,
  },
  {
    title: 'Assessoria Contínua para Empresas',
    description:
      'Tenha um parceiro estratégico permanente para monitorar legislação e manter sua operação sempre regular.',
    href: '/solucoes/assessoria-continua',
    icon: Handshake,
  },
]
```

## Success Criteria

- [ ] Component renders 3 solution cards
- [ ] Each card displays icon, title, description, and "Saiba mais" link
- [ ] Links navigate to correct solution page paths
- [ ] Section has id="solucoes" that works with Hero anchor
- [ ] Layout is 3 columns on desktop, stacks on mobile
- [ ] Card styling matches brand (white bg, shadow, rounded corners)
- [ ] Unit tests pass

## Relevant Files

**To Create:**

- `src/app/(marketing)/components/home/SolutionsGrid.tsx` — New component

**Reference:**

- `src/app/(marketing)/components/home/types.ts` — ISolutionCard interface
- `src/shared/components/ui/GlassCard.tsx` — Possible card base component
- `src/shared/styles/colors.ts` — Brand colors
- `prd.md` — Section 3 (Solutions Grid) requirements
- `techspec.md` — Component structure and data
