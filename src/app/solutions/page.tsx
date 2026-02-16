import Script from 'next/script'
import {
  jsonLdSolutions,
  metadataSolutions,
} from '~/shared/data/solutionContent'
import * as C from './components'

export const metadata = metadataSolutions

export default function SolutionsPage() {
  return (
    <>
      <Script
        id="schema-about"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSolutions) }}
      />
      <C.HeroSection />
      <C.FilterSection />
      <C.SolutionsGallery />
      <C.CtaSection />
    </>
  )
}
