# Task 7.0: Replace Methodology Section on Homepage

<critical>Read the prd.md and techspec.md files in this folder. **If you do not read these files, your task will be invalidated**</critical>

## Overview

Replace the existing Methodology component with the new TimelineMethodology component on the homepage. Ensure smooth integration with the existing layout, verify section spacing and visual flow, and optionally archive the old component for reference.

<requirements>
- Update page.tsx to use TimelineMethodology component
- Remove or archive old Methodology component
- Ensure smooth integration with existing layout
- Verify section spacing and visual flow
- Test homepage renders correctly
- Ensure no broken imports or references
</requirements>

## Subtasks

- [ ] 7.1 Review current homepage structure

  - Read `src/app/(marketing)/page.tsx`
  - Identify where Methodology component is used
  - Review section order and spacing
  - Document current integration points

- [ ] 7.2 Import TimelineMethodology component

  - Add import statement for TimelineMethodology
  - Ensure import path is correct
  - Verify component is exported properly
  - Check for any TypeScript errors

- [ ] 7.3 Replace Methodology with TimelineMethodology

  - Replace `<Methodology />` with `<TimelineMethodology />`
  - Maintain same position in component tree
  - Ensure proper component structure
  - Verify no syntax errors

- [ ] 7.4 Remove old Methodology import

  - Remove import statement for old Methodology component
  - Check for any other references to Methodology
  - Ensure no broken imports
  - Verify TypeScript compilation passes

- [ ] 7.5 Archive old Methodology component (optional)

  - Consider moving old component to archive folder
  - Or keep for reference but mark as deprecated
  - Document why component was replaced
  - Ensure archived component doesn't break build

- [ ] 7.6 Verify section spacing

  - Check spacing before TimelineMethodology section
  - Check spacing after TimelineMethodology section
  - Ensure consistent spacing with other sections
  - Test on mobile and desktop

- [ ] 7.7 Verify visual flow

  - Ensure section flows naturally from previous section
  - Ensure section flows naturally to next section
  - Check background colors don't clash
  - Verify visual hierarchy is maintained

- [ ] 7.8 Test homepage rendering

  - Start development server
  - Navigate to homepage
  - Verify TimelineMethodology renders correctly
  - Check for console errors
  - Verify no layout breaks

- [ ] 7.9 Test scroll behavior

  - Test scroll animations work correctly
  - Verify timeline line changes color on scroll
  - Test card animations trigger properly
  - Ensure smooth scrolling experience

- [ ] 7.10 Verify responsive behavior

  - Test homepage on mobile (320px+)
  - Test homepage on tablet (768px+)
  - Test homepage on desktop (1024px+)
  - Ensure timeline section adapts correctly

- [ ] 7.11 Check for broken references

  - Search codebase for references to old Methodology
  - Update any documentation that references Methodology
  - Check test files for Methodology references
  - Ensure no broken links or imports

- [ ] 7.12 Verify performance impact

  - Run Lighthouse audit on homepage
  - Ensure Performance score hasn't degraded
  - Check bundle size impact
  - Verify no new performance issues

- [ ] 7.13 Update documentation if needed
  - Update README if it references Methodology
  - Update component documentation
  - Add notes about TimelineMethodology component
  - Document any breaking changes

## Implementation Details

### Homepage Integration

```typescript
// src/app/(marketing)/page.tsx
import { TimelineMethodology } from './components/home/TimelineMethodology'
// Remove: import { Methodology } from './components/home/Methodology'

export default function MarketingHome() {
  return (
    <div className="flex flex-col min-h-screen bg-white-essential">
      <Hero />
      <ImpactMetrics />
      <SolutionsGrid />
      <TimelineMethodology /> {/* Replaced Methodology */}
      <Clients />
      <FAQ />
      <BlogPreview />
      <LeadCapture />
    </div>
  )
}
```

### Component Export

Ensure TimelineMethodology is exported:

```typescript
// src/app/(marketing)/components/home/TimelineMethodology.tsx
export function TimelineMethodology() {
  // Component implementation
}
```

### Archiving Old Component (Optional)

If archiving:

```bash
# Create archive directory
mkdir -p src/app/(marketing)/components/home/archive

# Move old component
mv src/app/(marketing)/components/home/Methodology.tsx \
   src/app/(marketing)/components/home/archive/Methodology.old.tsx
```

Or mark as deprecated:

```typescript
/**
 * @deprecated This component has been replaced by TimelineMethodology.
 * Kept for reference only. Do not use in new code.
 */
export function Methodology() {
  // ...
}
```

### Section Spacing

Verify spacing matches other sections:

```typescript
// TimelineMethodology should use Section component
// which provides consistent spacing
<Section className="py-16 md:py-24">
  {/* Content */}
</Section>
```

## Success Criteria

- [ ] TimelineMethodology component is imported and used on homepage
- [ ] Old Methodology component is removed or archived
- [ ] Homepage renders without errors
- [ ] Section spacing is consistent with other sections
- [ ] Visual flow is maintained (no jarring transitions)
- [ ] Scroll animations work correctly
- [ ] Responsive behavior works on all viewports
- [ ] No broken imports or references
- [ ] Lighthouse Performance score hasn't degraded
- [ ] All tests pass

## Relevant Files

- `src/app/(marketing)/page.tsx` - Update to use TimelineMethodology
- `src/app/(marketing)/components/home/TimelineMethodology.tsx` - Ensure component is exported
- `src/app/(marketing)/components/home/Methodology.tsx` - Archive or remove (optional)
- `README.md` - Update documentation if needed

## Notes

- Keep old Methodology component for reference if it contains useful patterns
- Ensure component export matches import statement
- Test thoroughly before considering task complete
- Consider keeping old component tests if they test shared functionality
- PRD specifies this component replaces the existing Methodology section
- Verify no other pages or components depend on Methodology component
