import Script from 'next/script'
import { jsonLdAbout, metadataAbout } from '~/shared/data/aboutContent'
import * as C from './components'

export const metadata = metadataAbout

export default function AboutPage() {
  return (
    <>
      <Script
        id="schema-about"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdAbout) }}
      />
      <C.HeroSection />
      <C.StorySection />
      <C.MissionVisionSection />
      <C.ValuesSection />
      <C.CTASection />
    </>
  )
}
