# Task 3.0: Prismic integration

<critical>Read the prd.md and techspec.md files in this folder. **If you do not read these files, your task will be invalidated**</critical>

## Overview

Integrate Prismic CMS for blog/content: configure client, types, preview/exit handlers, and ISR webhook to fetch content for listing/detail pages.

<requirements>
- Configure `prismicio.ts` with repository `lumia-eng`; support access token if provided.
- Add Prismic helper utilities/hooks and type definitions for `blog_post` and optional `service_page`.
- Implement preview and exit-preview route handlers; on-demand revalidate endpoint for ISR.
- Handle errors gracefully (fallback 404 or safe defaults).
- No backend persistence; read-only content fetch.
</requirements>

## Subtasks

- [ ] 3.1 Add Prismic client setup (`prismicio.ts`) with repository envs and fetch helpers.
- [ ] 3.2 Define TypeScript interfaces aligning to techspec (IBlogPost, optional service_page).
- [ ] 3.3 Implement `/api/preview` and `/api/exit-preview` route handlers.
- [ ] 3.4 Implement `/api/revalidate` webhook handler for Prismic publish events (guarded by secret).
- [ ] 3.5 Testing: mock Prismic client to validate list/detail fetch functions and preview flow.

## Implementation Details

Reference techspec: System Architecture (Prismic CMS), Integration Points (Prismic CMS), Data Models, API Endpoints, Development Sequencing (Step 2: Prismic Integration).

## Success Criteria

- Prismic client can fetch mock or live documents without runtime errors.
- Preview mode works and exits correctly; ISR webhook triggers revalidation.
- Type definitions align with PRD fields (title, summary, content, category, author).
- Errors surface as 404 or safe fallbacks without crashing the app.

## Relevant Files

- src/shared/lib/prismicio.ts
- src/app/api/preview/route.ts, src/app/api/exit-preview/route.ts
- src/app/api/revalidate/route.ts
- src/shared/@types/prismic.ts
