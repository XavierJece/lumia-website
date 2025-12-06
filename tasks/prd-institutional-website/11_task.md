# Task 11.0: Testing & QA

<critical>Read the prd.md and techspec.md files in this folder. **If you do not read these files, your task will be invalidated**</critical>

## Overview

Execute testing and QA across features: unit tests for services/forms, integration for key flows, accessibility checks, and lint/format gates.

<requirements>
- Unit tests for WhatsApp service link generation and contact form validation.
- Component tests for design system primitives and key page sections.
- Integration tests for contact flow (submit opens WhatsApp), blog navigation (list → detail), and navigation shell.
- Accessibility checks (ARIA, alt text, keyboard) on public pages.
- Lint/format/type checks clean.
</requirements>

## Subtasks

- [ ] 11.1 Add/extend unit tests (Vitest/RTL) for whatsapp service and forms validation.
- [ ] 11.2 Add component tests for design system (buttons, glass cards) and page sections (hero/services cards).
- [ ] 11.3 Add integration tests for contact flow and blog navigation; mock Prismic where needed.
- [ ] 11.4 Run accessibility smoke (axe/aria) on key pages; fix critical issues.
- [ ] 11.5 Gate with `pnpm lint:eslint:check`, `pnpm lint:prettier:check`, and type checks.

## Implementation Details

Techspec: Testing Approach (Unit and Integration Tests), Known Risks (performance), and workspace testing standards. Use mocks for Prismic and router; avoid network.

## Success Criteria

- Tests for services/forms and critical flows pass in CI/local.
- Accessibility findings resolved for critical issues; focus/aria/alt verified.
- Lint/format/type checks clean; no flaky tests.
- Coverage includes main user flows: contact WhatsApp and blog read.

## Relevant Files

- tests/**/* or __tests__/*
- src/shared/services/whatsapp.ts, src/shared/components/forms/ContactForm.tsx
- Page components under src/app/** and shared components under src/shared/components/**

