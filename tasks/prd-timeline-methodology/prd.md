# Product Requirements Document (PRD): Timeline Methodology

## Overview

This PRD defines the requirements for a new section on the Lumia Consultoria Ambiental homepage, titled **"How We Eliminate Bureaucracy"**. The section will be an **interactive and visual timeline** explaining Lumia's unique methodological process in four steps. The goal is to **convert potential clients** (managers and business owners without specialist knowledge) by making the consultancy's value tangible, demonstrating agility, clarity, and reliability in an easy-to-understand and visually appealing way. This feature is crucial for educating the client, building trust, and differentiating Lumia in the market.

## Objectives

- **Engagement:** Increase the average time spent on the Homepage by 15% within 3 months post-launch.
- **Conversion:** Increase the click-through rate (CTR) on the primary Homepage Call-to-Action (CTA) buttons by 10%, directing more visitors to "Fale com um Especialista" or solution pages.
- **Message Clarity:** In usability tests, 9 out of 10 users must be able to correctly describe at least 3 of the 4 steps in the Lumia process after interacting with the section.
- **Business Objective:** Position Lumia as a consultancy that transforms complexity into clear and efficient processes, reinforcing its values of agility and transparency.

## User Stories

- **As an industrial manager without environmental expertise**, I want to quickly and visually understand how Lumia would solve my licensing problems, so that I can trust the process and make contact without fear of complexity.
- **As a construction sector entrepreneur under tight deadlines**, I want to see a clear step-by-step of how the consultancy would speed up my project's regularization, so that I perceive the service's value and request a proposal.
- **As a lay visitor to the site (potential client)**, I want to consume complex information in a scannable and attractive way (with animations), so that I engage with the content and don't abandon the page out of boredom or confusion.
- **As Lumia's marketing specialist**, I want a section on the Homepage that is a strong visual converter, so that we can better qualify leads and reduce the time spent educating clients about our differential.

## Key Features

### 1. Connected Vertical Timeline

- **What it does:** Visually presents a logical sequence of 4 steps, connected by a continuous line, creating a narrative of progress.
- **Why it's important:** Provides structure and guides the user through the process, communicating order and organization. The "timeline" metaphor is universally understood.
- **Functionalities:**
  1.  A continuous vertical line serves as the backbone of the section, connecting the 4 step cards.
  2.  The line must be visible on all viewports (desktop and mobile).
  3.  Each step is represented by a card that visually connects to this line via a circular marker.

### 2. Interactive and Standardized Step Cards

- **What it does:** Each of the 4 steps in the Lumia process is detailed in a visually distinct card, but with a consistent layout.
- **Why it's important:** Consistency allows for quick reading and easy comparison. The clear structure organizes complex information.
- **Functionalities & Content (Structure per Card):**
  _Each card must contain, in the defined order:_
  1.  **Step Header (E.g., "STEP 1")**: Uppercase text, small and bold. Color: **Light Yellow (#d2d658)**.
  2.  **Step Title (H3)**: Conceptual name of the step. Font: Medium/Large. Color: **Horizon Green (#003a33)**.
  3.  **Key Question**: Introductory phrase in italics or with a small question mark (?) icon before the text, followed by the question the step answers. E.g., _"Question we answer: How do we understand your challenge?"_. Color: Dark gray or **Forest Green (#10763e)**.
  4.  **Concise Description**: 1-2 sentences explaining Lumia's main activity in this phase. Tone: Direct and beneficial.
  5.  **Lumia Differential (Highlight Box)**: A block with a subtly colored background (e.g., `background-color: #fffbf7` with `border-left: 4px solid #d2d658;`) containing text explaining **how** Lumia uniquely executes this step (e.g., "Using our jurisprudence database..."). Pre-text: **"Our differential:"** in bold.
  6.  **Practical Example**: Title "**Practical Example:**" in bold, followed by a generic but realistic case illustrating the step. E.g., "For a medium-sized industry, this means mapping all necessary licenses (LP, LI, LO) and their conditions within 5 business days."

### 3. Specific Content for the 4 Cards

_(Note: Icons are suggestions for the design team. They can be simple illustrations or line icons.)_

- **Card 1: Diagnosis & Strategy**

  - **Header:** ETAPA 1
  - **Title:** Diagnóstico & Estratégia
  - **Key Question:** _"Pergunta que respondemos: Qual é o cenário completo de exigências legais para o seu negócio?"_
  - **Description:** Realizamos uma análise técnica minuciosa para identificar todos os requisitos legais municipais, estaduais e federais aplicáveis à sua operação.
    - **Nosso diferencial:** Utilizamos um checklist inteligente e um banco de dados de processos similares para garantir que nenhuma exigência passe despercebida, eliminando surpresas futuras.
    - **Exemplo Prático:** Para um novo empreendimento comercial, identificamos a necessidade de licenças prévias do corpo de bombeiros, secretaria de meio ambiente e departamento de zoneamento urbano no primeiro relatório.
  - **Suggested Icon:** A stylized **magnifying glass** over a document.

- **Card 2: Tradução & Planejamento**

  - **Header:** ETAPA 2
  - **Title:** Tradução & Planejamento
  - **Key Question:** _"Pergunta que respondemos: Como transformamos a legislação complexa em um plano de ação claro para a sua equipe?"_
  - **Description:** Traduzimos a linguagem técnica e burocrática dos órgãos em um roadmap claro, com responsabilidades, prazos e documentos necessários, todos em linguagem acessível.
    - **Nosso diferencial:** Desenvolvemos cronogramas visuais e relatórios executivos que permitem que você, gestor, acompanhe o progresso sem necessidade de conhecimento técnico profundo.
    - **Exemplo Prático:** Para a renovação de uma licença de operação, criamos um calendário compartilhado com todos os prazos de envio de relatórios, vistorias e pagamentos de taxas.
  - **Suggested Icon:** Two **speech bubbles** connecting (symbolizing translation) or a simple **Gantt chart**.

- **Card 3: Mediação & Gestão**

  - **Header:** ETAPA 3
  - **Title:** Mediação & Gestão
  - **Key Question:** _"Pergunta que respondemos: Como atuamos como sua ponte com os órgãos fiscais, poupando seu tempo e nervosismo?"_
  - **Description:** Atuamos como seu representante técnico e gestor do processo, realizando todos os trâmites, protocolos e comunicações necessárias com as instâncias governamentais.
    - **Nosso diferencial:** Nossos consultores possuem relacionamento construído e know-how das vias mais ágeis em cada órgão, acelerando respostas e resolvendo pendências de forma proativa.
    - **Exemplo Prático:** Em um processo de licenciamento, nossa equipe é responsável por protocolar a documentação, acompanhar o andamento processual e responder a todos os ofícios e requerimentos dos analistas.
  - **Suggested Icon:** A stylized **bridge** or two hands shaking.

- **Card 4: Conformidade & Entrega**
  - **Header:** ETAPA 4
  - **Title:** Conformidade & Entrega
  - **Key Question:** _"Pergunta que respondemos: Como garantimos que sua empresa não apenas se regularize, mas opere com segurança jurídica contínua?"_
  - **Description:** Conduzimos o processo até a emissão final do documento e oferecemos um plano de compliance pós-entrega, para que você mantenha-se em conformidade.
    - **Nosso diferencial:** Entregamos um "Kit de Conformidade" personalizado com os documentos, alertas de renovação e um canal direto para consultas rápidas, assegurando tranquilidade duradoura.
    - **Exemplo Prático:** Após a concessão da Licença de Operação, emitimos um certificado de conformidade e agendamos automaticamente uma reunião de alerta 6 meses antes do vencimento para a renovação.
  - **Suggested Icon:** A **shield** with a checkmark or a **document** with a seal.

### 4. Scroll Animations and Interactivity

- **What it does:** Elements enter the screen smoothly and sequentially as the user scrolls the page. Additionally, the timeline line and cards respond to user interaction, creating clear visual feedback.
- **Why it's important:** Increases engagement, creates a sense of dynamism (agility), and visually reinforces the connection between the steps and the progress narrative.
- **Functionalities (Updated and Expanded):**
  1.  **Card Entrance:** Each card (`.process-step`) should "enter" the viewport with a smooth **"fade-up"** effect. The "technical yet fluid" tone translates to:
      - **Animation Duration:** Short and energetic, between **300ms and 400ms**.
      - **Sequencing (Stagger):** The delay between animating one card and the next should be **50ms to 100ms**, creating a steady, fluid rhythm that guides the eye downward.
  2.  **Line Progression (Illumination):** The connecting vertical line should have its color dynamically change as the user scrolls, transitioning from a base color (**Forest Green #10763e** or a neutral gray) to **Light Yellow (#d2d658)**. This effect should simulate "lighting up" or "illuminating" the journey as the user progresses through the reading.
  3.  **Card Hover Interaction:** When the user hovers over a card, the **border of that specific card** should change to **Light Yellow (#d2d658)**, instantly reinforcing its connection to the timeline line and highlighting the step in focus.

## User Experience

- **Personas:** **Primary:** Manager/Entrepreneur (40-55 years old), time-pressured, fearful of fines, without detailed technical knowledge. **Secondary:** Environmental Specialist from another company looking for benchmarking.

* **Interactive User Journey:** 1) User scrolls and cards enter in quick sequence. 2) The timeline line "lights up" in yellow as they advance, showing visual progress. 3) When hovering over a step of interest, the card is highlighted with a yellow border, creating a tactile moment of immediate clarity.

- **UI/UX Considerations:**
  - The section must have **generous vertical padding** to breathe.
  - The timeline line and card markers must be **perfectly aligned**.
  - **Color contrast** must follow Lumia's identity and be accessible.
  - Texts must be **short, in direct and beneficial language**, avoiding jargon.
- **Accessibility:**
  - All animations must respect a **preference for reduced motion** (`prefers-reduced-motion`).
  - The HTML structure must be semantically correct (header tags `H2`, `H3`, lists for examples).
  - Colors must pass WCAG AA contrast checkers for normal and large text.
  - **Visual Feedback:** Interactions (scroll and hover) must provide immediate and subtle visual feedback, aligned with the identity of agility and clarity.
  - **Smooth Transitions:** All color changes (line, borders) must use smooth CSS transitions (`transition`) with a duration between 200ms and 300ms to be perceptible without seeming slow.

## High-Level Technical Constraints

- **Integrations:** No external back-end integration is required for this section. It is a static front-end component.
- **Performance:** The section must not negatively impact the page's Lighthouse Performance Score. Animations must be efficient (preferably using CSS transforms/opacity) to not block the main thread. Scroll-controlled animations must be implemented efficiently (e.g., using `Intersection Observer` and CSS transitions) to avoid _jank_ and not impact the "Smoothness" metric.

* **Interactivity:** The logic for changing the line color on scroll and the hover effect on the cards are **mandatory functional requirements**.

- **Scalability:** The component must be developed so that adding a 5th or 6th step in the future does not break the layout.
- **Responsiveness:** The design and animations must work perfectly on mobile (from 320px), tablet, and desktop viewports. The timeline line must adapt gracefully.
- **Accessibility:** As defined in the UX section.

## Out of Scope

- Horizontal "swipe" functionality to navigate between cards on mobile.
- Complex particle or 3D animations.
- Advanced interactivity on the cards (like expanding/collapsing content).
- Integration with a CMS for dynamic editing of card content. Content will be static at launch.
- Personalization of the user experience based on their profile (e.g., showing different examples for different sectors).

## Open Questions

1.  The design team needs to define the final **icons/illustrations** for each step, within Lumia's visual identity.
    - **Status:** Will use the `lucide-react` library.
2.  It is necessary to validate with marketing the proposed **practical examples** to ensure they are the most relevant for the primary target audience.
    - **Status:** Content is already validated.
3.  We need to define the exact **visual soundtrack**: what should be the exact duration and delay between card animations to be perceived as agile but not anxious?
    - **Resolution:** Animation duration: **300-400ms**. Delay between cards (stagger): **50-100ms**. This implements the "fluid and energetic" tone.
4.  How exactly should the timeline line behave during scroll? Should it fill? Change color? The effect should be subtle.
    - **Resolution:** The line should **change color** from **Forest Green/Gray** to **Light Yellow** progressively as the user scrolls. Additionally, the cards should have a **hover** state that changes their border to **Light Yellow**.
