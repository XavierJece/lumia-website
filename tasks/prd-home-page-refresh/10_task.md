# Task 10.0: Insights & News Section

<critical>Read the prd.md and techspec.md files in this folder. **If you do not read these files, your task will be invalidated**</critical>

## Overview

Create a new InsightsPreview component displaying 3 blog post preview cards. This section shows Lumia's thought leadership and provides ongoing value to visitors. Replaces the existing BlogPreview component on the home page.

<requirements>
- Create new InsightsPreview.tsx component
- Display 3 blog preview cards in a grid
- Each card: image with green overlay, category tag, title, date, "Ler mais" link
- Desktop: 3-column grid
- Mobile: Single column stack
- White background (Branco Essencial)
- Use IBlogPreview interface from types.ts
</requirements>

## Subtasks

- [ ] 10.1 Create InsightsPreview.tsx component file

  - Create at `src/app/(marketing)/components/home/InsightsPreview.tsx`
  - Export as default component
  - Add section title: "Insights para sua decisão."

- [ ] 10.2 Implement blog card structure

  - Image with subtle green gradient overlay
  - Category tag (Amarelo Luz background, dark text)
  - Title in Verde Horizonte (1-2 lines, truncate if needed)
  - Date in light gray
  - "Ler mais" link/arrow in Verde Floresta

- [ ] 10.3 Add sample blog posts data

  - Post 1: "Licença Ambiental Vencendo: 5 Ações Imediatas..."
  - Post 2: "Auditoria Ambiental: É uma Obrigação ou uma Oportunidade..."
  - Post 3: "Entenda de Uma Vez: As Diferenças entre LA, LP, LI e LO..."

- [ ] 10.4 Implement image overlay effect

  - Subtle green gradient on hover or permanent
  - Ensure title remains readable over image

- [ ] 10.5 Implement responsive layout

  - Desktop: 3-column grid
  - Tablet: 2-column or 3-column
  - Mobile: Single column stack

- [ ] 10.6 Consider integration with Prismic/CMS

  - For now, use static data
  - Structure component to accept dynamic data prop
  - Future: fetch from Prismic API

- [ ] 10.7 Write unit tests
  - Test all 3 post cards render
  - Test card structure (image, category, title, date, link)
  - Test responsive layout

## Implementation Details

Refer to `techspec.md` for:

- IBlogPreview interface definition
- Component file location
- Integration with existing blog system

### Blog Preview Data

```typescript
import { IBlogPreview } from './types'

const blogPosts: IBlogPreview[] = [
  {
    id: '1',
    title:
      'Licença Ambiental Vencendo: 5 Ações Imediatas para Evitar a Paralisação da Sua Empresa',
    category: 'Licenciamento',
    date: '10 Dez 2024',
    image: '/images/blog/licenca-vencendo.jpg', // placeholder
    href: '/blog/licenca-ambiental-vencendo',
  },
  {
    id: '2',
    title:
      'Auditoria Ambiental: É uma Obrigação ou uma Oportunidade para o Seu Negócio?',
    category: 'Auditoria',
    date: '05 Dez 2024',
    image: '/images/blog/auditoria-ambiental.jpg',
    href: '/blog/auditoria-ambiental-oportunidade',
  },
  {
    id: '3',
    title:
      'Entenda de Uma Vez: As Diferenças entre LA, LP, LI e LO (e Quais Sua Empresa Precisa)',
    category: 'Licenciamento',
    date: '28 Nov 2024',
    image: '/images/blog/diferencas-licencas.jpg',
    href: '/blog/diferencas-licencas-ambientais',
  },
]
```

### Card Image Overlay

```typescript
// Image with gradient overlay
<div className="relative overflow-hidden rounded-t-lg">
  <Image
    src={image}
    alt={title}
    className="w-full h-48 object-cover"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-horizon-green/60 to-transparent" />
</div>

// Category tag
<span className="absolute top-4 left-4 bg-light-yellow text-horizon-green text-xs font-semibold px-2 py-1 rounded">
  {category}
</span>
```

## Success Criteria

- [ ] Component renders 3 blog preview cards
- [ ] Each card displays image, category, title, date, and link
- [ ] Images have green gradient overlay
- [ ] Category tags styled with Amarelo Luz background
- [ ] Layout is 3 columns on desktop, stacks on mobile
- [ ] "Ler mais" links navigate to correct blog posts
- [ ] Section has H2 heading
- [ ] Component accepts dynamic data prop for future CMS integration
- [ ] Unit tests pass

## Relevant Files

**To Create:**

- `src/app/(marketing)/components/home/InsightsPreview.tsx` — New component

**To Deprecate (handled in Task 11.0):**

- `src/app/(marketing)/components/home/BlogPreview.tsx` — Replace with InsightsPreview

**Reference:**

- `src/app/(marketing)/components/home/types.ts` — IBlogPreview interface
- `src/shared/lib/prismicio.ts` — Future CMS integration
- `prd.md` — Section 8 (Insights e Novidades) requirements
- `techspec.md` — Component structure
