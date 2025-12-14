# Task 9.0: Why Lumia Section

<critical>Read the prd.md and techspec.md files in this folder. **If you do not read these files, your task will be invalidated**</critical>

## Overview

Create a new WhyLumia component displaying 3 value proposition cards. Each card features a large icon, title, and short description communicating Lumia's core differentiators.

<requirements>
- Create new WhyLumia.tsx component
- Display 3 value cards with large icons
- Icons in Amarelo Luz (#d2d658)
- Titles in Verde Horizonte (#003a33)
- Optional textured or light-green background
- Responsive layout: 3 columns desktop, stacked mobile
- Use IValueCard interface from types.ts
</requirements>

## Subtasks

- [ ] 9.1 Create WhyLumia.tsx component file

  - Create at `src/app/(marketing)/components/home/WhyLumia.tsx`
  - Export as default component
  - Add section title: "Mais que uma consultoria, uma parceria estratégica."

- [ ] 9.2 Implement value card structure

  - Large icon at top (Amarelo Luz color)
  - Title below icon (Verde Horizonte)
  - Short description text (gray)
  - Consistent spacing

- [ ] 9.3 Define value propositions

  - Agilidade que Respeita seu Tempo (icon: Zap/Lightning)
  - Clareza em Cada Etapa (icon: Target/Crosshair)
  - Confiança como Base (icon: Handshake/Shield)

- [ ] 9.4 Style section background

  - Consider subtle texture or Verde Horizonte at low opacity
  - Alternatively use pattern SVG as accent
  - Ensure text contrast remains high

- [ ] 9.5 Implement responsive layout

  - Desktop: 3-column grid
  - Tablet: 3-column or 2-column
  - Mobile: Single column stack with centered content

- [ ] 9.6 Write unit tests
  - Test all 3 value cards render
  - Test icons, titles, descriptions present
  - Test responsive layout

## Implementation Details

Refer to `techspec.md` for:

- IValueCard interface definition
- Component styling patterns
- Brand color specifications

### Value Cards Data

```typescript
import { Zap, Target, Handshake } from 'lucide-react'
import { IValueCard } from './types'

const values: IValueCard[] = [
  {
    id: 1,
    title: 'Agilidade que Respeita seu Tempo',
    description:
      'Processos otimizados e comunicação clara para você focar no que importa: seu negócio.',
    icon: Zap,
  },
  {
    id: 2,
    title: 'Clareza em Cada Etapa',
    description:
      'Traduzimos a linguagem técnica e jurídica em informações que você entende e pode agir.',
    icon: Target,
  },
  {
    id: 3,
    title: 'Confiança como Base',
    description:
      'Relacionamento transparente e resultados comprovados constroem parcerias duradouras.',
    icon: Handshake,
  },
]
```

### Card Styling Example

```typescript
// Large icon with brand color
<div className="text-light-yellow mb-4">
  <Icon className="h-16 w-16" strokeWidth={1.5} />
</div>

// Title in brand color
<h3 className="text-xl font-semibold text-horizon-green mb-2">
  {title}
</h3>

// Description
<p className="text-gray-600">
  {description}
</p>
```

## Success Criteria

- [ ] Component renders 3 value cards
- [ ] Each card has large icon, title, and description
- [ ] Icons are in Amarelo Luz color
- [ ] Titles are in Verde Horizonte color
- [ ] Section has H2 heading
- [ ] Layout is 3 columns on desktop, stacks on mobile
- [ ] Background styling adds visual interest without compromising contrast
- [ ] Unit tests pass

## Relevant Files

**To Create:**

- `src/app/(marketing)/components/home/WhyLumia.tsx` — New component

**Reference:**

- `src/app/(marketing)/components/home/types.ts` — IValueCard interface
- `src/shared/styles/colors.ts` — Brand colors
- `public/images/pattern_*.svg` — Optional background patterns
- `prd.md` — Section 7 (Por que a Lumia) requirements
- `techspec.md` — Component structure
