I'll create a Technical Specification for the home page refresh. Let me start by reading the PRD, the template, and understanding the project's design system and current codebase.

Now I have a comprehensive understanding of the codebase. Before I create the tech spec, I have a few clarifications to ensure the specification is accurate:
Clarifying Questions
Before finalizing the Technical Specification, I need to confirm a few points:

1. Scroll-Triggered Timeline Animation (FR10)
   The PRD mentions a scroll-triggered animated timeline for the Methodology section with a "progress line in yellow over green guide line." Should I:
   a. Use CSS-only animations (simpler, but limited control)?
   b. Use a lightweight animation library like framer-motion (already common in Next.js ecosystems)?
   c. Use the native Intersection Observer API directly with custom hooks?

2. Carousel vs Stacked Layout (FR12 & FR13)
   For Success Cases and Testimonials, the PRD allows either carousel or stacked cards. Given mobile-first and accessibility requirements:
   Preferred approach: Should I implement carousels with accessible navigation, or use stacked cards for simplicity and better accessibility?

3. New Component vs. Modify Existing
   The current Hero.tsx has a different headline structure. Should I:
   a. Modify the existing Hero.tsx in place?
   b. Create a new component and swap it in the page (for easier rollback)?

4. WhatsApp Message
   The PRD specifies a preset message. Should this be URL-encoded and appended to the WhatsApp link in constants.ts, or managed directly in the Hero component?

5. Blog Post Titles
   The PRD provides specific blog post titles for "Insights e Novidades." Are these:
   a. Placeholder text for now (will eventually come from Prismic CMS)?
   b. Static content to be hardcoded in the component?

Please confirm or provide guidance on these points, and I'll proceed to generate the complete Technical Specification.

---

1. b, but if possible, create a merge that doesn't weigh so heavily on the home system.
2. Create both styles to choose from later.
3. a, modification.
4. Leave it in constants.ts; always focus on making this data easier to manage.
5. A, you can create a structure in the session component, but you shouldn't worry about how the Prismic part will be handled.
