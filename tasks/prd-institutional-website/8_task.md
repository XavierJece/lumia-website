# Task 8.0: Blog & content hub

<critical>Read the prd.md and techspec.md files in this folder. **If you do not read these files, your task will be invalidated**</critical>

## Overview

Implement blog listing with category filters and post detail pages consuming Prismic content, including SEO metadata and sharing hooks.

<requirements>
- Blog listing page fetching posts from Prismic with pagination (if needed) and category filter (Licensing, Regularization).
- Post detail page rendering rich text, images, author info, published date, and share buttons.
- SEO-ready metadata (title/description/OG) per post; fallback for missing fields.
- Loading/error states; handle missing posts with 404.
- Client-safe rendering of rich text with accessible markup.
</requirements>

## Subtasks

- [ ] 8.1 Implement blog listing route with Prismic fetch, cards layout, and category filter UI.
- [ ] 8.2 Implement blog detail route `[slug]/page.tsx` with content slices/rich text, hero image, author block, dates.
- [ ] 8.3 Add metadata generation per post (Next Metadata API) with Open Graph/Twitter tags.
- [ ] 8.4 Add social sharing buttons and copy-to-clipboard link; ensure accessible buttons.
- [ ] 8.5 Testing: mock Prismic client for list/detail; render tests for filters and metadata generation.

## Implementation Details

PRD: FR3.1–FR3.4 (Blog & Content Hub). Techspec: Integration Points (Prismic), Data Models (IBlogPost), Development Sequencing (Step 4: Blog Feature), Technical Considerations (SSR/ISR).

## Success Criteria

- Listing loads posts with category filtering and handles empty/error states gracefully.
- Detail pages render rich content, images with alt text, author/date, and sharing actions.
- Metadata generated correctly for SEO/OG; 404 for missing posts.
- Tests cover mock fetching and render paths; no runtime errors.

## Relevant Files

- src/app/(blog)/page.tsx
- src/app/(blog)/[slug]/page.tsx
- src/shared/components/blog/\* (post cards, filters, share buttons)
- src/shared/lib/prismicio.ts (consumption)
