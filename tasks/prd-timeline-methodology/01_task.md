# Task 1.0: Create ITimelineStep Interface and Static Data

<critical>Read the prd.md and techspec.md files in this folder. **If you do not read these files, your task will be invalidated**</critical>

## Overview

Create the TypeScript interface and static data structure for the Timeline Methodology component. This task establishes the foundation for all subsequent components by defining the data model that matches the PRD's content structure requirements.

<requirements>
- Define `ITimelineStep` interface in `types.ts` with all PRD-required fields
- Create static `timelineSteps` array with 4 complete step objects
- Select appropriate Lucide React icons for each step
- Ensure all content matches PRD specifications exactly
- Interface must be exported and reusable
</requirements>

## Subtasks

- [ ] 1.1 Add ITimelineStep interface to types.ts

  - Define interface with fields: `id`, `header`, `title`, `keyQuestion`, `description`, `diferencial`, `practicalExample`, `icon`
  - Use `LucideIcon` type from `lucide-react` for icon field
  - Add JSDoc comment explaining the interface purpose
  - Export interface for use in other components

- [ ] 1.2 Create static data for Step 1: Diagnóstico & Estratégia

  - Header: "ETAPA 1"
  - Title: "Diagnóstico & Estratégia"
  - Key Question: "Pergunta que respondemos: Qual é o cenário completo de exigências legais para o seu negócio?"
  - Description: "Realizamos uma análise técnica minuciosa para identificar todos os requisitos legais municipais, estaduais e federais aplicáveis à sua operação."
  - Diferencial: "Utilizamos um checklist inteligente e um banco de dados de processos similares para garantir que nenhuma exigência passe despercebida, eliminando surpresas futuras."
  - Practical Example: "Para um novo empreendimento comercial, identificamos a necessidade de licenças prévias do corpo de bombeiros, secretaria de meio ambiente e departamento de zoneamento urbano no primeiro relatório."
  - Icon: `Search` from lucide-react (magnifying glass)

- [ ] 1.3 Create static data for Step 2: Tradução & Planejamento

  - Header: "ETAPA 2"
  - Title: "Tradução & Planejamento"
  - Key Question: "Pergunta que respondemos: Como transformamos a legislação complexa em um plano de ação claro para a sua equipe?"
  - Description: "Traduzimos a linguagem técnica e burocrática dos órgãos em um roadmap claro, com responsabilidades, prazos e documentos necessários, todos em linguagem acessível."
  - Diferencial: "Desenvolvemos cronogramas visuais e relatórios executivos que permitem que você, gestor, acompanhe o progresso sem necessidade de conhecimento técnico profundo."
  - Practical Example: "Para a renovação de uma licença de operação, criamos um calendário compartilhado com todos os prazos de envio de relatórios, vistorias e pagamentos de taxas."
  - Icon: `FileText` or `Calendar` from lucide-react (document/planning)

- [ ] 1.4 Create static data for Step 3: Mediação & Gestão

  - Header: "ETAPA 3"
  - Title: "Mediação & Gestão"
  - Key Question: "Pergunta que respondemos: Como atuamos como sua ponte com os órgãos fiscais, poupando seu tempo e nervosismo?"
  - Description: "Atuamos como seu representante técnico e gestor do processo, realizando todos os trâmites, protocolos e comunicações necessárias com as instâncias governamentais."
  - Diferencial: "Nossos consultores possuem relacionamento construído e know-how das vias mais ágeis em cada órgão, acelerando respostas e resolvendo pendências de forma proativa."
  - Practical Example: "Em um processo de licenciamento, nossa equipe é responsável por protocolar a documentação, acompanhar o andamento processual e responder a todos os ofícios e requerimentos dos analistas."
  - Icon: `Users` or `Handshake` from lucide-react (mediation/bridge)

- [ ] 1.5 Create static data for Step 4: Conformidade & Entrega

  - Header: "ETAPA 4"
  - Title: "Conformidade & Entrega"
  - Key Question: "Pergunta que respondemos: Como garantimos que sua empresa não apenas se regularize, mas opere com segurança jurídica contínua?"
  - Description: "Conduzimos o processo até a emissão final do documento e oferecemos um plano de compliance pós-entrega, para que você mantenha-se em conformidade."
  - Diferencial: "Entregamos um 'Kit de Conformidade' personalizado com os documentos, alertas de renovação e um canal direto para consultas rápidas, assegurando tranquilidade duradoura."
  - Practical Example: "Após a concessão da Licença de Operação, emitimos um certificado de conformidade e agendamos automaticamente uma reunião de alerta 6 meses antes do vencimento para a renovação."
  - Icon: `CheckCircle` or `Shield` from lucide-react (compliance/shield)

- [ ] 1.6 Export timelineSteps array

  - Create `timelineSteps` constant array of type `ITimelineStep[]`
  - Ensure all 4 steps are included in correct order
  - Export from appropriate location (consider creating separate data file or adding to component file)
  - Verify TypeScript compilation passes without errors

- [ ] 1.7 Write unit tests for data structure
  - Test that `timelineSteps` array has exactly 4 items
  - Test that each step has all required fields
  - Test that icons are valid Lucide React components
  - Test that headers follow pattern "ETAPA X"
  - Verify no duplicate IDs

## Implementation Details

### Interface Definition

The `ITimelineStep` interface should be added to `src/app/(marketing)/components/home/types.ts`:

```typescript
export interface ITimelineStep {
  id: number
  header: string // "ETAPA 1", "ETAPA 2", etc.
  title: string // Step conceptual name (H3)
  keyQuestion: string // Question the step answers
  description: string // Main activity description
  diferencial: string // Lumia's unique approach
  practicalExample: string // Real-world application example
  icon: LucideIcon // Visual representation from lucide-react
}
```

### Data Location

The static data can be:

- Option A: Defined in the TimelineMethodology component file itself
- Option B: Created in a separate `timelineData.ts` file in the same directory
- Option C: Added to an existing data file if one exists

**Recommendation:** Option B for better separation of concerns.

### Icon Selection

Icons should be imported from `lucide-react`:

- Step 1: `Search` (magnifying glass)
- Step 2: `FileText` or `Calendar` (document/planning)
- Step 3: `Users` or `Handshake` (mediation)
- Step 4: `CheckCircle` or `Shield` (compliance)

## Success Criteria

- [ ] `ITimelineStep` interface is defined and exported from `types.ts`
- [ ] All 4 steps are created with complete content matching PRD exactly
- [ ] Icons are properly imported from `lucide-react`
- [ ] TypeScript compilation passes without errors
- [ ] Unit tests pass for data structure validation
- [ ] Data is ready to be consumed by TimelineStepCard component

## Relevant Files

- `src/app/(marketing)/components/home/types.ts` - Add ITimelineStep interface
- `src/app/(marketing)/components/home/timelineData.ts` - Create new file for static data (or add to component file)
- `test/unit/home/timeline-data.test.ts` - Create unit tests

## Notes

- Content is static and validated (per PRD Open Questions section)
- Icons are suggestions - final selection may be adjusted by design team, but Lucide React library is confirmed
- All text content must match PRD exactly, including punctuation and capitalization
- The interface design allows for future scalability (adding 5th/6th steps)
