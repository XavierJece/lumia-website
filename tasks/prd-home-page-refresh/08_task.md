# Task 8.0: Testimonials Section

<critical>Read the prd.md and techspec.md files in this folder. **If you do not read these files, your task will be invalidated**</critical>

## Overview

Create a new Testimonials component displaying client quotes with photos and identification. Implement both carousel and stacked layout variants. Focus on humanizing the brand with credible, emotional testimonials.

<requirements>
- Create new Testimonials.tsx component
- Display at least 2 testimonials
- Each testimonial: quote with highlighted phrase, photo, name, role, company
- Implement both carousel and stacked layout variants
- Stylized quote marks as visual accent
- Keyboard-accessible carousel navigation
- Use ITestimonial interface from types.ts
</requirements>

## Subtasks

- [ ] 8.1 Create Testimonials.tsx component file

  - Create at `src/app/(marketing)/components/home/Testimonials.tsx`
  - Export as default component
  - White background (Branco Essencial)

- [ ] 8.2 Implement testimonial card structure

  - Large stylized quote marks (Verde Floresta, low opacity)
  - Quote text with key phrase in bold or Verde Horizonte
  - Circular author photo (placeholder or real)
  - Author name in Verde Horizonte
  - Role and company in gray below name

- [ ] 8.3 Add testimonials data

  - Testimonial 1: Carlos Mendes
    - Quote: "A Lumia trouxe uma clareza que não tínhamos..."
    - Highlight: "A parceria é o diferencial"
    - Role: Diretor de Operações | Indústria de Componentes Metálicos S.A.
  - Testimonial 2: Ana Paula Silva
    - Quote: "Estávamos perdidos com prazos e exigências..."
    - Highlight: "Foi um alívio"
    - Role: Sócia-Gerente | Construtora Horizonte Verde

- [ ] 8.4 Implement stacked layout variant

  - Centered layout with cards stacked
  - All testimonials visible
  - Responsive sizing

- [ ] 8.5 Implement carousel layout variant

  - Centered carousel with one testimonial in focus
  - Navigation dots or arrows
  - Touch swipe for mobile
  - Smooth transitions

- [ ] 8.6 Add layout toggle prop

  - Prop to switch between 'carousel' and 'stacked'
  - Default to one variant

- [ ] 8.7 Ensure keyboard accessibility

  - Full keyboard navigation for carousel
  - Focus visible states
  - ARIA labels for navigation controls
  - Announce slide changes to screen readers

- [ ] 8.8 Write unit tests
  - Test both layout variants
  - Test all testimonials render
  - Test keyboard navigation
  - Test accessibility attributes

## Implementation Details

Refer to `techspec.md` for:

- ITestimonial interface definition
- Carousel keyboard navigation requirements
- WAI-ARIA carousel pattern

### Testimonials Data

```typescript
import { ITestimonial } from './types'

const testimonials: ITestimonial[] = [
  {
    id: 1,
    quote:
      'A Lumia trouxe uma clareza que não tínhamos. Eles não só resolveram nosso passivo ambiental, mas nos ensinaram a gerir isso internamente. A parceria é o diferencial.',
    highlight: 'A parceria é o diferencial',
    authorName: 'Carlos Mendes',
    authorRole: 'Diretor de Operações',
    authorCompany: 'Indústria de Componentes Metálicos S.A.',
    authorImage: '/images/testimonials/carlos-mendes.jpg', // placeholder
  },
  {
    id: 2,
    quote:
      'Estávamos perdidos com prazos e exigências. A equipe da Lumia foi ágil, explicou tudo de forma simples e nos guiou com confiança em cada etapa. Foi um alívio.',
    highlight: 'Foi um alívio',
    authorName: 'Ana Paula Silva',
    authorRole: 'Sócia-Gerente',
    authorCompany: 'Construtora Horizonte Verde',
    authorImage: '/images/testimonials/ana-paula.jpg', // placeholder
  },
]
```

### Carousel Accessibility Pattern

```typescript
// ARIA attributes for carousel
<div role="region" aria-label="Depoimentos de clientes" aria-roledescription="carousel">
  <div role="group" aria-roledescription="slide" aria-label="1 de 2">
    {/* testimonial content */}
  </div>
  <button aria-label="Anterior">←</button>
  <button aria-label="Próximo">→</button>
</div>
```

## Success Criteria

- [ ] Component renders at least 2 testimonials
- [ ] Each testimonial displays quote, photo, name, role, company
- [ ] Key phrase is visually highlighted in quote
- [ ] Both carousel and stacked variants implemented
- [ ] Carousel is fully keyboard navigable
- [ ] ARIA labels present for screen readers
- [ ] Focus states are visible
- [ ] Stylized quote marks add visual interest
- [ ] Unit tests pass

## Relevant Files

**To Create:**

- `src/app/(marketing)/components/home/Testimonials.tsx` — New component

**Reference:**

- `src/app/(marketing)/components/home/types.ts` — ITestimonial interface
- `prd.md` — Section 6 (Testimonials) requirements
- `techspec.md` — Carousel accessibility specifications
