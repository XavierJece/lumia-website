# Task 6.0: Methodology Section Enhancement

<critical>Read the prd.md and techspec.md files in this folder. **If you do not read these files, your task will be invalidated**</critical>

## Overview

Enhance the Methodology section with a central illustration, an animated 4-step timeline with scroll-triggered progress animation, and a final CTA. This is the most visually complex section, requiring coordination between layout, animation, and content.

<requirements>
- Modify existing Methodology.tsx component
- Add operating_diagram.svg illustration with proper alt text
- Implement 4-step timeline with alternating card layout
- Animate progress line (yellow over green) on scroll
- Each step card has: number, title, description, diferencial highlight
- Include final CTA button linking to WhatsApp
- Graceful degradation for reduced-motion preference
- Depends on Task 5.0 (scroll animation infrastructure)
</requirements>

## Subtasks

- [ ] 6.1 Add section header

  - Title: "Nós facilitamos o diálogo. Você foca no seu negócio."
  - Subtitle explaining mediation role
  - Use H2 for section title

- [ ] 6.2 Add operating diagram illustration

  - Use `/images/operating_diagram.svg`
  - Include detailed alt text (see prd.md)
  - Responsive sizing

- [ ] 6.3 Implement timeline structure

  - Green guide line (Verde Horizonte #003a33) as base
  - Yellow progress line (Amarelo Luz #d2d658) on top
  - Desktop: horizontal layout with alternating above/below cards
  - Mobile: vertical layout with cards to the right

- [ ] 6.4 Create step cards (4 steps)

  - Step 1: Diagnóstico & Estratégia
  - Step 2: Tradução & Preparação
  - Step 3: Mediação & Gestão
  - Step 4: Conformidade Concluída
  - Each includes: numbered circle, title, description, diferencial

- [ ] 6.5 Implement scroll-triggered animation

  - Use useScrollProgress hook from Task 5.0
  - Progress line fills as user scrolls
  - Cards fade in when progress reaches their position
  - Use LazyMotion with domAnimation

- [ ] 6.6 Add reduced-motion fallback

  - Check prefers-reduced-motion preference
  - Show all content immediately without animation
  - Maintain visual structure

- [ ] 6.7 Add final CTA

  - Text: "Fale com um de nossos especialistas"
  - Primary button style (Amarelo Luz with dark text)
  - Link to WhatsApp from constants.ts

- [ ] 6.8 Write unit tests
  - Test all 4 steps render with correct order
  - Test reduced-motion behavior
  - Test final CTA links to WhatsApp
  - Test illustration has alt text

## Implementation Details

Refer to `techspec.md` for:

- IMethodologyStep interface
- Methodology Timeline Layout sketch
- Animation behavior specifications

### Timeline Steps Data

```typescript
import { Search, FileText, Users, CheckCircle } from 'lucide-react'
import { IMethodologyStep } from './types'

const steps: IMethodologyStep[] = [
  {
    id: 1,
    title: 'Diagnóstico & Estratégia',
    description:
      'Mapeamos todos os requisitos legais aplicáveis ao seu negócio com um diagnóstico transparente e sem custos ocultos.',
    diferencial:
      'Utilizamos nosso banco de dados de processos semelhantes para definir a estratégia mais rápida e segura desde o início.',
    icon: Search,
  },
  {
    id: 2,
    title: 'Tradução & Preparação',
    description:
      'Convertemos exigências técnicas em documentação clara e organizamos todo o necessário para submissão.',
    diferencial:
      'Nossa equipe multidisciplinar elimina idas e vindas com órgãos reguladores.',
    icon: FileText,
  },
  {
    id: 3,
    title: 'Mediação & Gestão',
    description:
      'Representamos sua empresa junto aos órgãos ambientais, gerenciando prazos e comunicações.',
    diferencial: 'Relacionamento consolidado com órgãos agiliza aprovações.',
    icon: Users,
  },
  {
    id: 4,
    title: 'Conformidade Concluída',
    description:
      'Entregamos sua licença ou regularização com toda documentação organizada para futuras renovações.',
    diferencial:
      'Você recebe um dossiê completo para gestão contínua da conformidade.',
    icon: CheckCircle,
  },
]
```

### Timeline Layout (Desktop)

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  (green line)
▬▬▬▬▬▬▬▬▬▬▬                        (yellow progress)

①─────────②─────────③─────────④
Card 1    Card 2    Card 3    Card 4
(above)   (below)   (above)   (below)
```

## Success Criteria

- [ ] Section displays with correct header and illustration
- [ ] All 4 timeline steps render in correct order
- [ ] Progress line animates on scroll (yellow fills over green)
- [ ] Cards animate in sequence as progress reaches them
- [ ] Reduced-motion users see all content without animation
- [ ] Final CTA links to WhatsApp correctly
- [ ] Illustration has descriptive alt text
- [ ] Layout adapts properly for mobile (vertical timeline)
- [ ] Unit tests pass

## Relevant Files

**To Modify:**

- `src/app/(marketing)/components/home/Methodology.tsx` — Methodology component

**Reference:**

- `src/app/(marketing)/components/home/hooks/useScrollProgress.ts` — Scroll hook (Task 5.0)
- `src/app/(marketing)/components/home/types.ts` — IMethodologyStep interface
- `src/shared/config/constants.ts` — WhatsApp link
- `public/images/operating_diagram.svg` — Central illustration
- `prd.md` — Section 4 (Methodology) detailed requirements
- `techspec.md` — Timeline layout sketch and animation specs
