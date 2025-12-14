# Product Requirements Document (PRD) — Lumia Home Page Refresh

## Overview

Refresh the marketing home page to capture SME owners within 10 seconds, communicating relief and credibility while guiding them to contact Lumia or explore solutions. The page will emphasize clear messaging, strong visual hierarchy with brand patterns, and frictionless CTAs. Work is front-end only (layout, content, animations, and components) with no new backend.

## Objectives

- Increase conversion to contact (primary CTA: WhatsApp “Fale com um Especialista”).
- Improve engagement (time on page) via clear storytelling and scroll-guided sections.
- Reinforce brand trust with proof points (metrics, cases, testimonials) and SEO-friendly structure.
- Ensure mobile-first, performant, and accessible experience.

## User Stories

- As an SME owner facing compliance pressure, I want to quickly understand if Lumia can handle environmental/legal bureaucracy so I feel safe to reach out.
- As an operations/compliance manager, I want to see Lumia’s process and proof (cases, testimonials, metrics) so I can justify contacting them.
- As a decision-maker browsing on mobile, I want fast loading, scannable sections, and clear CTAs so I can act without friction.

## Key Features

1. Hero for instant clarity and CTA

- Value props: headline “Conformidade Ambiental sem Burocracia: Agilidade e Clareza para Sua Empresa.” Subheadline explaining legal-to-action translation.
- Dual CTAs: primary WhatsApp (with preset message), secondary “Ver Nossas Soluções” anchoring to solutions section. Optional scroll cue.
- FR1: Display headline/subheadline using brand colors (Verde Horizonte/white) over branded background or patterns.
- FR2: Render two CTAs with correct styles (primary yellow with dark text; secondary outlined white) and ensure anchor link to solutions works.
- FR3: Show optional scroll indicator visible on desktop and mobile.

2. Impact metrics band

- 3–4 numeric stats with icons on light background to convey credibility.
- FR4: Present at least three metric cards with number, symbol (+/% when relevant), label, and icon in brand palette.
- FR5: Ensure cards lay out horizontally on desktop and stack responsively on mobile.

3. Solutions grid

- Grid of three cards linking to existing solution pages/anchors.
- FR6: Each card shows icon/shape, title, 1–2 line description, and “Saiba mais” link styled in brand colors.
- FR7: Cards use white background, subtle shadow, rounded corners; responsive 3-column desktop, single-column mobile.

4. Methodology section with illustration and animated timeline

- Headline/subhead explaining mediation role; central illustration `public/images/operating_diagram.svg`.
- Scroll-triggered timeline (4 steps) with alternating cards, progress line in yellow over green guide line.
- FR8: Render illustration with provided alt text.
- FR9: Display four step cards with numbered circles, titles, short descriptions, and a “diferencial” highlight per step.
- FR10: Animate progress line and card entrance on scroll; degrades gracefully with reduced-motion preference.
- FR11: Include concluding CTA “Fale com um de nossos especialistas” styled as primary button.

5. Success cases section

- 2–3 cards or carousel with client logo, result badge, concise Challenge/Action/Result text, and “Ver caso completo” link.
- FR12: Render at least two case cards with required fields and responsive layout.

6. Testimonials

- Carousel or stacked cards with quote, highlighted phrase, photo, name, role/company, subtle graphic accent.
- FR13: Present at least two testimonials with accessible navigation (keyboard/focus).

7. “Por que a Lumia?”

- Three value cards with large yellow icons, titles, and short descriptions; optional textured or light-green background.
- FR14: Render three value cards with consistent spacing and responsive stacking.

8. “Insights e Novidades”

- Grid of three blog previews with image (green overlay), category tag, title, date, and “Ler mais”/arrow link.
- FR15: Show three post cards; desktop grid, mobile stack.

9. Global UX/interaction

- FR16: Ensure all CTAs are keyboard-focusable and have visible focus states.
- FR17: Maintain mobile-first responsive behavior across sections.
- FR18: Apply SEO-friendly structure (H1 for hero headline, H2 per section, descriptive alt text).
- FR19: Optimize assets (use existing patterns/palette) and lazy-load imagery where appropriate.

## User Experience

- Flow: Hero clarity → Metrics trust → Solutions choice → Methodology (how) → Cases (proof) → Testimonials (human proof) → Why Lumia (values) → Insights (authority) → Footer/contact.
- Visuals: Use brand greens/yellow, optional patterns (`pattern_1/2/3.svg`), clean spacing, and soft shadows on white cards.
- Interaction: Smooth scroll-triggered animation for timeline; modest fade/slide on section reveal (respect reduced-motion).
- Mobile-first: Single-column stacks, touch targets ≥44px, sticky or easily reachable CTA where appropriate.
- Accessibility: Semantic headings, alt text on all imagery, aria labels for carousels/controls, sufficient contrast, focus-visible styles.

## High-Level Technical Constraints

- Front-end only; no backend or CMS changes. Implement within existing Next.js/Tailwind codebase and design tokens.
- Use existing design system components where possible; new UI elements allowed with approval and must align to brand palette.
- Performance: optimize LCP (hero image), defer non-critical scripts/animations, lazy-load images below the fold.
- SEO: structured headings, meaningful metadata per section, friendly link text; ensure no blocking assets.
- Privacy/security: do not log PII; WhatsApp link should not expose extra tracking parameters beyond preset message.

## Out of Scope

- Creating new site pages or backend/CMS features.
- Blog search or new blog functionality beyond listing posts.
- Any database, auth, or analytics pipeline changes.
- Non-marketing flows (e.g., service intake forms beyond existing CTAs).

## Open Questions

All key inputs provided; keep monitoring for future changes.

- Primary CTA message: “Olá, Lumia! Acabei de visitar o site de vocês e tenho interesse em conversar sobre conformidade ambiental para minha empresa. Podem me ajudar?” (gives context of site visit for support triage).
- Metrics to highlight: 15+ technical experts; 280+ clients in compliance; 1,200+ managed administrative processes; 98% client satisfaction.
- Solution cards:
  - Licenciamento Ambiental para Indústrias — `/solucoes/licenciamento-industrial` — “Obtenha e renove suas licenças (LP, LI, LO) com agilidade e segurança jurídica para operar sem interrupções.”
  - Regularização de Emergência e Defesa — `/solucoes/regularizacao-emergencia` — “Atuamos rapidamente em casos de autuação ou embargo. Nossa expertise é sua melhor defesa.”
  - Assessoria Contínua para Empresas — `/solucoes/assessoria-continua` — “Tenha um parceiro estratégico permanente para monitorar legislação e manter sua operação sempre regular.”
- Case studies:
  - Indústria de Componentes Metálicos S.A. (logo: stylized gear). Badge: “LICENÇA OPERACIONAL LIBERADA EM 60 DIAS.” CAR: Challenge—risk of shutdown due to expiring LO; Action—reviewed process, organized docs, met agency; Result—license renewed before deadline.
  - Construtora Horizonte Verde (logo: building with leaf). Badge: “AUTUAÇÃO DE R$ 350 MIL REVERTIDA.” CAR: Challenge—fine for alleged irregular vegetation suppression; Action—detailed appeal with technical grounding and negotiation; Result—fine canceled, project approved with compensatory measures.
- Testimonials:
  - “A Lumia trouxe uma clareza que não tínhamos. Eles não só resolveram nosso passivo ambiental, mas nos ensinaram a gerir isso internamente. A parceria é o diferencial.” — Carlos Mendes, Diretor de Operações | Indústria de Componentes Metálicos S.A. (photo: male exec 45–50, business casual, neutral background).
  - “Estávamos perdidos com prazos e exigências. A equipe da Lumia foi ágil, explicou tudo de forma simples e nos guiou com confiança em cada etapa. Foi um alívio.” — Ana Paula Silva, Sócia-Gerente | Construtora Horizonte Verde (photo: female exec 40–45, professional attire, office background).
- Insights & News posts:
  - “Licença Ambiental Vencendo: 5 Ações Imediatas para Evitar a Paralisação da Sua Empresa.”
  - “Auditoria Ambiental: É uma Obrigação ou uma Oportunidade para o Seu Negócio?”
  - “Entenda de Uma Vez: As Diferenças entre LA, LP, LI e LO (e Quais Sua Empresa Precisa).”
