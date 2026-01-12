'use client'

import { useState } from 'react'
import { solutionContent } from '~/shared/data/solutionContent'
import * as C from './components'

export default function SolutionsPage() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null)

  const filteredSections = activeFilter
    ? solutionContent.filter((section) => section.href === activeFilter)
    : solutionContent

  return (
    <>
      <C.HeroSection />
      <C.FilterSection
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />
      <C.SolutionsAccordion sections={filteredSections} />
      <C.CtaSection />
    </>
  )
}
