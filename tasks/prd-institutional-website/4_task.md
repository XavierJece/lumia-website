# Task 4.0: Global layout & navigation

<critical>Read the prd.md and techspec.md files in this folder. **If you do not read these files, your task will be invalidated**</critical>

## Overview

Implement the global shell: header/nav, footer, route grouping, metadata defaults, and pt-BR locale setup to support marketing and blog sections consistently.

<requirements>
- Header with navigation to Home, Services (Solve Now/Start Here), Blog, About, Contact.
- Footer with quick links, social media, privacy policy, and contact info.
- Route groups/layouts for marketing vs blog if needed; consistent glass styling.
- Default metadata (title/description/open graph) in `layout.tsx`; pt-BR locale.
- Responsive and accessible (keyboard focus, skip links, aria labels).
</requirements>

## Subtasks

- [ ] 4.1 Build header with nav links and CTA alignment; ensure mobile menu behavior.
- [ ] 4.2 Build footer with quick links, socials, WhatsApp/contact link, privacy policy.
- [ ] 4.3 Configure layout route groups ((marketing) etc.) and apply shared shells.
- [ ] 4.4 Set default metadata and language attributes (pt-BR) in root layout.
- [ ] 4.5 Testing: accessibility check for nav (keyboard, focus order); snapshot/render smoke tests.

## Implementation Details

- Techspec: System Architecture (layout), Implementation Design (Route Grouping), Technical Considerations (Apple iOS styling), Development Sequencing (Step 3–4).
- PRD: Functional requirements for header/footer presence across pages.

## Success Criteria

- Header/footer render across pages with responsive behavior and accessible navigation.
- Metadata defaults set; language attribute pt-BR applied.
- Layout uses design system components without breaking glass aesthetics.
- Basic tests pass and no console errors in navigation interactions.

## Relevant Files

- src/app/layout.tsx, src/app/(marketing)/layout.tsx, src/app/(blog)/layout.tsx (if used)
- src/shared/components/layout/Header.tsx, Footer.tsx
- src/shared/styles/app/globals.css (global nav styles if needed)

