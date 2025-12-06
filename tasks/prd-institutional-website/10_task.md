# Task 10.0: Analytics, SEO, performance

<critical>Read the prd.md and techspec.md files in this folder. **If you do not read these files, your task will be invalidated**</critical>

## Overview

Integrate analytics and SEO foundations: Google Analytics via `@next/third-parties`, metadata, sitemap/robots, and performance/CWV optimizations aligned with the Apple iOS aesthetic.

<requirements>
- Add Google Analytics 4 using `<GoogleAnalytics gaId="...">` in root layout (env-based).
- Configure `sitemap.xml` and `robots.txt` using Next route handlers.
- Implement Metadata API across pages (titles/descriptions/OG) with sensible defaults.
- Performance passes: image optimization, font strategy, avoid heavy blur jank, and ensure good LCP/CLS.
- Respect privacy (no PII logging); conditional debug logs only in development.
</requirements>

## Subtasks

- [ ] 10.1 Add GA component in layout with env guard; document required GA ID.
- [ ] 10.2 Implement sitemap/robots route handlers reflecting marketing/blog routes.
- [ ] 10.3 Apply metadata generation to key pages (Home, Services, About, Blog list/detail, Contact).
- [ ] 10.4 Performance tune: audit glass effects, add `prefetch/prefetch` where safe, optimize images.
- [ ] 10.5 Testing: verify GA renders only with env; check sitemap/robots responses; run basic CWV checks (Lighthouse/Next analytics).

## Implementation Details

Techspec: Integration Points (Google Analytics), Development Sequencing (Step 6: Optimization & SEO), Technical Considerations (Performance with Glassmorphism), Monitoring and Observability.

## Success Criteria

- GA script loads when GA ID is set; not loaded otherwise.
- Sitemap/robots generated correctly and reachable.
- Metadata present for key routes; links render correct OG tags.
- Performance checks show no major regressions; logging avoids PII.

## Relevant Files

- src/app/layout.tsx (GA, defaults)
- src/app/sitemap.ts, src/app/robots.ts
- Page files with metadata exports
- next.config.js (if needed for perf tweaks)
