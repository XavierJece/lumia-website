# Product Requirements Document (PRD): Lumia Environmental Consulting Website

## Overview

This project involves the development of a modern institutional website for Lumia Environmental Consulting and Engineering. The primary goal is to establish the company as an authority in the environmental sector through a high-performance, conversion-optimized platform. The design will strictly follow an "Apple iOS" aesthetic—clean, minimalist, and fluid—while the content strategy focuses on segmenting users by urgency ("Solve Now" vs. "Start Here") to maximize lead generation via WhatsApp.

## Objectives

1.  **Maximize Lead Generation:** Capture qualified leads by directing users to WhatsApp for immediate resolution or structured forms for detailed quotes.
2.  **Establish Brand Authority:** Showcase expertise through a professional portfolio, detailed service pages, and an active blog managed via CMS.
3.  **Optimize for Speed and SEO:** Achieve top-tier performance and search engine visibility for environmental keywords to drive organic traffic.
4.  **Intuitive User Navigation:** Reduce friction by clearly segmenting services based on client needs (Urgent Problems vs. New Projects).

## User Stories

### Primary Users (Clients)

1.  **As a business owner with a fine (Urgent),** I want to quickly find the "Solve Now" section so that I can resolve my legal issues immediately.
2.  **As an entrepreneur opening a business (Planning),** I want to understand the necessary licenses ("Start Here") so that I can open my establishment legally.
3.  **As a corporate manager,** I want to view success cases and client logos so that I can trust Lumia's capability to handle complex projects.

### Secondary Users (Internal)

4.  **As a marketing manager,** I want to easily publish new articles and case studies via a CMS (Prismic) without touching code so that the site content remains fresh.

## Key Features

### 1. Home Page (High-Conversion Landing)

- **Description:** The central hub featuring a strong value proposition, clear segmentation of services, and social proof.
- **Functional Requirements:**
  - FR1.1: Hero section must display primary CTA ("Hire Consulting") linking to WhatsApp and secondary CTA ("Portfolio").
  - FR1.2: "Featured Services" section must display cards with icons.
  - FR1.3: "Impact Metrics" section must dynamically display key numbers (clients served, projects).
  - FR1.4: Footer must include quick links, social media, and privacy policy.

### 2. Services Hub (Segmented Navigation)

- **Description:** A structured approach to services based on user intent/urgency rather than just technical categories.
- **Functional Requirements:**
  - FR2.1: **Solve Now:** Dedicated page/section for urgent issues (fines, corrections) with a "Schedule Diagnosis" CTA.
  - FR2.2: **Start Here:** Dedicated page/section for new licenses (LP, LI, LO) with a step-by-step guide.
  - FR2.3: **Master Table:** A unified view/table of all services with estimated deadlines.

### 3. Blog & Content Hub

- **Description:** An educational resource to drive SEO and authority, managed via Headless CMS.
- **Functional Requirements:**
  - FR3.1: Integration with **Prismic CMS** for article management.
  - FR3.2: Article listing page must support filtering by category (Licensing, Regularization).
  - FR3.3: Individual article pages must support rich text, images, and social sharing buttons.
  - FR3.4: Content must be SEO-optimized with customizable meta tags.

### 4. Contact & Lead Capture System

- **Description:** A pervasive, low-friction contact system prioritizing instant communication.
- **Functional Requirements:**
  - FR4.1: **Floating WhatsApp Button:** Fixed in the bottom-right corner on all pages.
  - FR4.2: **Smart Forms:** Contact forms must generate a pre-filled WhatsApp message string upon submission for the user to send.
  - FR4.3: Contact page must display "Quick Channels" cards (Phone, Email, Schedule Call).

### 5. About Lumia (Institutional)

- **Description:** Builds trust through history, team presentation, and certifications.
- **Functional Requirements:**
  - FR5.1: Section for Team/Experts with bios.
  - FR5.2: Grid display for Certifications and Association logos.

## User Experience

### Design Philosophy: "Apple iOS Layout"

- **Visuals:** Heavy use of glassmorphism (blur effects), rounded corners (large border-radius), high-quality iconography, and generous whitespace.
- **Typography:** Clean sans-serif fonts (San Francisco style or similar system fonts) ensuring high readability.
- **Interaction:** Smooth transitions and subtle animations (e.g., cards lifting on hover, smooth scroll).
- **Mobile-First:** All layouts must be optimized for touch interaction first, then scaled up for desktop.

## High-Level Technical Constraints

1.  **CMS:** Must use **Prismic** for content management (Blog/Articles).
2.  **Performance:** Must meet Core Web Vitals standards (Industry Standard).
3.  **Localization:** Content must be in Portuguese (pt-BR).
4.  **Responsiveness:** Fully responsive design targeting mobile, tablet, and desktop.
5.  **Accessibility:** WCAG 2.1 AA compliance required.

## Out of Scope

1.  **Client Login Area:** No private portal for clients to check report status in this version.
2.  **E-commerce/Payments:** No direct online payment processing or checkout flow.
3.  **Complex Backend:** No custom backend database for form storage; relies on CMS and frontend integrations.

## Open Questions

1.  Specific API credentials for Prismic need to be set up.
2.  Final confirmation on specific "Success Cases" content to be populated.
