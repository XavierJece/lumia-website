'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import Script from 'next/script'
import { useEffect } from 'react'

// Extend Window interface
declare global {
  interface Window {
    gtag: (...args: unknown[]) => void
  }
}

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

const sendPageView = (path: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: path,
    })
  }
}

export default function GoogleAnalytics({ consent }: { consent: boolean }) {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  // Track page views when the route changes
  useEffect(() => {
    if (!consent) return // Do not track if no consent
    if (pathname) {
      const url =
        pathname +
        (searchParams?.toString() ? `?${searchParams.toString()}` : '')
      sendPageView(url)
    }
  }, [pathname, searchParams, consent])

  // If no consent, don't load the script or track
  if (!consent) return null

  return (
    <>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
              anonymize_ip: true, // Important for LGPD – anonymizes the last octet of the IP
            });
          `,
        }}
      />
    </>
  )
}
