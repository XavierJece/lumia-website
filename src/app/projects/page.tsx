import Script from 'next/script'
import {
  jsonLdProjects,
  metadataProjects,
  projects,
} from '~/shared/data/projectContent'
import * as C from './components'

export const metadata = metadataProjects

export default function ProjectPage() {
  return (
    <>
      <Script
        id="schema-about"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdProjects) }}
      />
      <C.HeroSection />
      <C.ProjectList projects={projects} />
      <C.CtaSection />
    </>
  )
}
