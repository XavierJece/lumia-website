# Task 7.0: About page

<critical>Read the prd.md and techspec.md files in this folder. **If you do not read these files, your task will be invalidated**</critical>

## Overview

Create the institutional About page highlighting Lumia’s history, team/experts, and certifications/associations with trust-focused presentation.

<requirements>
- Team/Experts section with bios, roles, and photos/avatars.
- Certifications/associations grid with logos and alt text.
- Narrative about company mission/history consistent with PRD tone.
- Responsive layout using design system components.
- Accessibility: proper alt text and headings hierarchy.
</requirements>

## Subtasks

- [ ] 7.1 Build hero/intro for About with mission statement.
- [ ] 7.2 Implement Team/Experts grid with bios and roles; support fallback avatars.
- [ ] 7.3 Implement Certifications/Associations grid with logos and captions.
- [ ] 7.4 Add trust copy and optional timeline/story section.
- [ ] 7.5 Testing: render/snapshot tests; alt-text and heading structure validation.

## Implementation Details

PRD: FR5.1–FR5.2 (About Lumia). Techspec: Development Sequencing (Step 3: Core Pages) and design system usage.

## Success Criteria

- About page includes team bios and certifications with accurate alt text.
- Layout responsive and consistent with glass aesthetic.
- Headings and ARIA/alt attributes meet accessibility expectations.
- Tests pass; no console errors.

## Relevant Files

- src/app/(marketing)/about/page.tsx
- src/shared/components/about/* (team grid, certifications grid)

