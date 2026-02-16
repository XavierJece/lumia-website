import Script from 'next/script'
import { jsonLdContact, metadataContact } from '~/shared/data/contact'
import * as C from './components'

export const metadata = metadataContact

export default function ContactPage() {
  return (
    <>
      <Script
        id="schema-about"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdContact) }}
      />
      <C.HeroSection />
      <C.MainSection />
      <C.FAQPreviewSection />
    </>
  )
}
