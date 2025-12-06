# Resumo de Tarefas de Implementação de Lumia Environmental Consulting Website

## Overview

Task breakdown for delivering the Lumia institutional website per PRD/techspec: Apple iOS aesthetic, Prismic CMS, lead-gen WhatsApp flows, and performance/SEO targets.

## Prerequisites

- Node 20.x and pnpm set up; Next.js 14 App Router baseline.
- Environment variables planned (`PRISMIC_REPOSITORY_NAME=lumia-eng`, `NEXT_PUBLIC_WHATSAPP_NUMBER`, GA ID).
- Access to Prismic repo or mocks for local development.

## Phases

- Phase 1: Foundations & design system (1.0–2.0)
- Phase 2: Data/CMS integration & layout (3.0–4.0)
- Phase 3: Core pages (5.0–7.0)
- Phase 4: Blog & contact flows (8.0–9.0)
- Phase 5: Analytics/SEO and QA (10.0–11.0)

## Tarefas

- [x] 1.0 Project setup & foundations (depends: —)
- [x] 2.0 Design system (glassmorphism UI atoms/molecules) (depends: 1.0)
- [ ] 3.0 Prismic integration (client, preview, ISR webhook) (depends: 1.0)
- [x] 4.0 Global layout & navigation (header, footer, metadata, pt-BR) (depends: 1.0, uses 2.0)
- [ ] 5.0 Home page (hero, featured services, impact metrics, social proof) (depends: 2.0, 4.0)
- [ ] 6.0 Services hub (Solve Now, Start Here, master services table) ⏐ (depends: 2.0, 4.0)
- [ ] 7.0 About page (team grid, certifications) ⏐ (depends: 2.0, 4.0)
- [ ] 8.0 Blog & content hub (listing, filters, post detail) ⏐ (depends: 3.0, 4.0; UI uses 2.0)
- [ ] 9.0 Smart contact system (floating WhatsApp, smart forms, quick channels) (depends: 2.0, 4.0)
- [ ] 10.0 Analytics, SEO, performance (GA, sitemap/robots, metadata, CWV checks) ⏐ (depends: 4.0; aligns with 5.0–9.0)
- [ ] 11.0 Testing & QA (unit, integration flows, accessibility, lint/prettier) (depends: related features)
