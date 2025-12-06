# Task 6.0: Services hub (Solve Now / Start Here)

<critical>Read the prd.md and techspec.md files in this folder. **If you do not read these files, your task will be invalidated**</critical>

## Overview

Implement the services hub segmented by urgency: “Solve Now” for fines/urgent corrections, “Start Here” for new licenses, plus a master services table with deadlines and CTAs.

<requirements>
- Solve Now section with clear CTA (“Schedule Diagnosis”) targeting urgent users.
- Start Here section with step-by-step guidance for LP/LI/LO licensing.
- Master services table listing services with estimated deadlines/SLAs.
- Consistent glass styling and responsive layout.
- Clear navigation from header and internal links.
</requirements>

## Subtasks

- [ ] 6.1 Build Solve Now section/cards with CTA pointing to contact/WhatsApp.
- [ ] 6.2 Build Start Here section with step-by-step guide and supportive CTA.
- [ ] 6.3 Implement master services table with columns (service, description, deadline/ETA, CTA).
- [ ] 6.4 Wire links from header/nav and internal anchors to these sections.
- [ ] 6.5 Testing: render/snapshot tests; check responsiveness and CTA targets.

## Implementation Details

PRD: FR2.1–FR2.3 (Services Hub). Techspec: Development Sequencing (Step 3: Core Pages) and design system guidance.

## Success Criteria

- Both Solve Now and Start Here sections are reachable and clearly segmented.
- Master table displays deadlines/ETAs and CTAs without overflow on mobile.
- CTAs route to the contact/WhatsApp flow correctly.
- Layout matches glass aesthetic and passes basic tests without console errors.

## Relevant Files

- src/app/(marketing)/services/page.tsx (or segmented sections)
- src/shared/components/services/* (solve-now, start-here, services-table)

