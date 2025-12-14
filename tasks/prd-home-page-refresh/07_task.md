# Task 7.0: Success Cases Section

<critical>Read the prd.md and techspec.md files in this folder. **If you do not read these files, your task will be invalidated**</critical>

## Overview

Create a new SuccessCases component displaying 2-3 case study cards that demonstrate real client results. Each case follows the Challenge → Action → Result structure. Implement both carousel and stacked layout variants to allow future A/B testing.

<requirements>
- Create new SuccessCases.tsx component
- Display at least 2 case study cards
- Each card: client logo placeholder, result badge, Challenge/Action/Result text, "Ver caso completo" link
- Implement both carousel and stacked layout variants
- Cards use white background with shadow
- Use ICaseStudy interface from types.ts
</requirements>

## Subtasks

- [ ] 7.1 Create SuccessCases.tsx component file

  - Create at `src/app/(marketing)/components/home/SuccessCases.tsx`
  - Export as default component
  - Add section title: "Resultados que falam por nós."

- [ ] 7.2 Implement case card structure

  - Client logo placeholder (small, top of card)
  - Result badge in Amarelo Luz (dark background)
  - Challenge: brief problem description
  - Action: what Lumia did
  - Result: outcome achieved
  - "Ver caso completo" link in Verde Floresta

- [ ] 7.3 Add case studies data

  - Case 1: Indústria de Componentes Metálicos S.A.
    - Badge: "LICENÇA OPERACIONAL LIBERADA EM 60 DIAS"
    - Challenge: Risk of shutdown due to expiring LO
    - Action: Reviewed process, organized docs, met agency
    - Result: License renewed before deadline
  - Case 2: Construtora Horizonte Verde
    - Badge: "AUTUAÇÃO DE R$ 350 MIL REVERTIDA"
    - Challenge: Fine for alleged irregular vegetation suppression
    - Action: Detailed appeal with technical grounding
    - Result: Fine canceled, project approved

- [ ] 7.4 Implement stacked layout variant

  - Simple grid/column layout
  - All cards visible at once
  - Responsive stacking

- [ ] 7.5 Implement carousel layout variant

  - Horizontal carousel with navigation
  - Previous/Next buttons or dots
  - Touch swipe support for mobile
  - Follow WAI-ARIA carousel pattern

- [ ] 7.6 Add layout toggle (for future A/B testing)

  - Prop to switch between 'carousel' and 'stacked'
  - Default to one variant initially

- [ ] 7.7 Ensure keyboard accessibility

  - Carousel navigation via keyboard
  - Focus management between slides
  - ARIA labels for controls

- [ ] 7.8 Write unit tests
  - Test both layout variants render
  - Test all case cards display correctly
  - Test keyboard navigation (carousel)
  - Test link destinations

## Implementation Details

Refer to `techspec.md` for:

- ICaseStudy interface definition
- Carousel accessibility requirements
- Component styling patterns

### Case Studies Data

```typescript
import { ICaseStudy } from './types'

const caseStudies: ICaseStudy[] = [
  {
    id: 1,
    clientName: 'Indústria de Componentes Metálicos S.A.',
    logoAlt: 'Logo estilizado de engrenagem',
    badge: 'LICENÇA OPERACIONAL LIBERADA EM 60 DIAS',
    challenge: 'Risco de paralisação por LO vencendo em semanas.',
    action:
      'Revisão completa do processo, organização documental e reunião estratégica com o órgão.',
    result:
      'Licença renovada antes do prazo, operação mantida sem interrupções.',
    href: '/cases/componentes-metalicos',
  },
  {
    id: 2,
    clientName: 'Construtora Horizonte Verde',
    logoAlt: 'Logo de edifício com folha',
    badge: 'AUTUAÇÃO DE R$ 350 MIL REVERTIDA',
    challenge: 'Multa por supressão de vegetação supostamente irregular.',
    action:
      'Recurso detalhado com fundamentação técnica e negociação junto ao órgão.',
    result: 'Multa cancelada, projeto aprovado com medidas compensatórias.',
    href: '/cases/horizonte-verde',
  },
]
```

## Success Criteria

- [ ] Component renders at least 2 case cards
- [ ] Each card displays logo placeholder, badge, CAR structure, and link
- [ ] Both carousel and stacked variants are implemented
- [ ] Carousel variant has keyboard-accessible navigation
- [ ] Cards have proper styling (white bg, shadow)
- [ ] "Ver caso completo" links work correctly
- [ ] Section has appropriate heading (H2)
- [ ] Unit tests pass

## Relevant Files

**To Create:**

- `src/app/(marketing)/components/home/SuccessCases.tsx` — New component

**Reference:**

- `src/app/(marketing)/components/home/types.ts` — ICaseStudy interface
- `src/shared/components/ui/GlassCard.tsx` — Possible card base
- `prd.md` — Section 5 (Success Cases) requirements
- `techspec.md` — Carousel accessibility and layout specs
