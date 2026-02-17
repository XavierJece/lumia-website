'use client'

import { useCallback, useState } from 'react'
import ConsentBanner from './ConsentBanner'
import GoogleAnalytics from './GoogleAnalytics'

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [consent, setConsent] = useState<boolean | null>(null)

  const handleConsent = useCallback((value: boolean) => {
    setConsent(value)
  }, [])

  return (
    <>
      <ConsentBanner onConsent={handleConsent} />
      {/* Render GA only after consent is known */}
      {consent !== null && <GoogleAnalytics consent={consent} />}
      {children}
    </>
  )
}
