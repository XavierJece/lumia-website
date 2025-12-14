# Task 3.0: Impact Metrics Update

<critical>Read the prd.md and techspec.md files in this folder. **If you do not read these files, your task will be invalidated**</critical>

## Overview

Update the existing ImpactMetrics component to display 4 key business metrics with icons, using the brand color palette. The metrics should convey credibility and trust at a glance.

<requirements>
- Modify existing ImpactMetrics.tsx component
- Display 4 metrics with icons from Lucide React
- Numbers in Verde Floresta (#10763e), symbols (+/%) in Amarelo Luz (#d2d658)
- Horizontal layout on desktop, stacked on mobile
- Light background (Branco Essencial #fffbf7)
- Use IMetricCard interface from types.ts
</requirements>

## Subtasks

- [ ] 3.1 Update metrics data

  - 15+ Especialistas técnicos (icon: Users)
  - 280+ Clientes em conformidade (icon: Building2)
  - 1.200+ Processos administrativos gerenciados (icon: FileCheck)
  - 98% Satisfação dos clientes (icon: ThumbsUp)

- [ ] 3.2 Add icon support

  - Import required icons from lucide-react
  - Display icon to the left or above each metric
  - Icon color: Verde Horizonte (#003a33)

- [ ] 3.3 Style metric cards

  - Number in Verde Floresta, large and bold
  - Symbol (+/%) in Amarelo Luz
  - Label in dark gray
  - Subtle shadow and rounded corners

- [ ] 3.4 Implement responsive layout

  - Desktop: 4 columns horizontal
  - Tablet: 2x2 grid
  - Mobile: Single column stack

- [ ] 3.5 Write unit tests
  - Test all 4 metrics render
  - Test icons are present
  - Test responsive layout behavior

## Implementation Details

Refer to `techspec.md` for:

- IMetricCard interface definition
- Static data array example
- Responsive layout specifications

### Metrics Data

```typescript
import { Users, Building2, FileCheck, ThumbsUp } from 'lucide-react'
import { IMetricCard } from './types'

const metrics: IMetricCard[] = [
  { id: 1, value: '15+', label: 'Especialistas técnicos', icon: Users },
  { id: 2, value: '280+', label: 'Clientes em conformidade', icon: Building2 },
  {
    id: 3,
    value: '1.200+',
    label: 'Processos administrativos gerenciados',
    icon: FileCheck,
  },
  { id: 4, value: '98%', label: 'Satisfação dos clientes', icon: ThumbsUp },
]
```

## Success Criteria

- [ ] All 4 metrics display with correct values and labels
- [ ] Icons render next to/above each metric
- [ ] Colors match brand palette (Verde Floresta numbers, Amarelo Luz symbols)
- [ ] Layout is horizontal on desktop (≥1024px)
- [ ] Layout stacks properly on mobile (<768px)
- [ ] Component uses IMetricCard interface from types.ts
- [ ] Unit tests pass

## Relevant Files

**To Modify:**

- `src/app/(marketing)/components/home/ImpactMetrics.tsx` — Metrics component

**Reference:**

- `src/app/(marketing)/components/home/types.ts` — IMetricCard interface
- `src/shared/styles/colors.ts` — Brand color definitions
- `prd.md` — Section 2 (Impact Metrics) requirements
- `techspec.md` — Data models section
