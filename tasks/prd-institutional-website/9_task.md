# Task 9.0: Smart contact system

<critical>Read the prd.md and techspec.md files in this folder. **If you do not read these files, your task will be invalidated**</critical>

## Overview

Implement the lead-capture system: floating WhatsApp button, smart forms that generate pre-filled WhatsApp messages, and quick contact channels.

<requirements>
- Floating WhatsApp button fixed bottom-right on all pages.
- Smart contact forms with Zod validation and WhatsApp link generation (`wa.me`) via service.
- Prefill message using form inputs (intent: URGENT/PLANNING/GENERAL, service type, etc.).
- Quick Channels cards (Phone, Email, Schedule Call) on contact page.
- No backend storage; client-side only; respect privacy (no sensitive logging).
</requirements>

## Subtasks

- [ ] 9.1 Implement WhatsApp service utility (generateLink/formatMessage) using techspec interface.
- [ ] 9.2 Build floating WhatsApp button component present globally.
- [ ] 9.3 Build smart contact form with intent selection, validation, and submit → `window.open` WhatsApp link.
- [ ] 9.4 Build Contact page Quick Channels cards; ensure CTAs route correctly.
- [ ] 9.5 Testing: unit tests for WhatsApp service and form validation; integration test for submit flow opening correct link.

## Implementation Details

PRD: FR4.1–FR4.3 (Contact & Lead Capture). Techspec: Main Interfaces (IContactFormData, IWhatsAppService), WhatsApp Integration, Development Sequencing (Step 5: Smart Contact System).

## Success Criteria

- Floating WhatsApp button visible and working on all pages.
- Form submission opens correct `wa.me` link with encoded message; validation errors surfaced inline.
- Quick Channels present with correct actions; no data stored client-side beyond form submission.
- Tests cover link generation and submit flow; no console errors.

## Relevant Files

- src/shared/services/whatsapp.ts
- src/shared/components/forms/ContactForm.tsx
- src/shared/components/contact/FloatingWhatsApp.tsx, QuickChannels.tsx
- src/app/(marketing)/contact/page.tsx

