# Task 5.0: Home page

<critical>Read the prd.md and techspec.md files in this folder. **If you do not read these files, your task will be invalidated**</critical>

## Overview

Build the high-conversion home page featuring the value proposition, dual CTAs, featured services, impact metrics, and social proof aligned with the glass design system.

<requirements>
- Hero with primary CTA (“Hire Consulting” → WhatsApp) and secondary CTA (“Portfolio”/services).
- Featured Services section with icon cards.
- Impact Metrics section showing dynamic key numbers (clients, projects).
- Social proof/portfolio teaser and footer callouts.
- Responsive/mobile-first with smooth hover/scroll transitions.
</requirements>

## Subtasks

- [ ] 5.1 Implement hero section with headline, subcopy, and dual CTAs using design system buttons.
- [ ] 5.2 Build Featured Services grid/cards with icons and short descriptions.
- [ ] 5.3 Build Impact Metrics with animated or stat display; ensure accessibility for numbers.
- [ ] 5.4 Add social proof/portfolio teaser section and footer CTA alignment.
- [ ] 5.5 Testing: snapshot/render tests for sections; manual responsive check (mobile/tablet/desktop).

## Implementation Details

Reference PRD: FR1.1–FR1.4 (Home page). Techspec: Development Sequencing (Step 3: Core Pages), design system usage and performance considerations.

## Success Criteria

- Hero CTAs link correctly (primary to WhatsApp, secondary to portfolio/services).
- Featured services and impact metrics render responsively without layout shifts.
- Sections use design system components and meet accessibility (aria labels, contrast).
- No console errors; passes lint/format; tested across breakpoints.

## Relevant Files

- src/app/(marketing)/page.tsx (or equivalent home route)
- src/app/(marketing)/components/home/\* (hero, services, metrics, social proof) - for exclusive components page
- Assets/icons referenced by services/metrics
