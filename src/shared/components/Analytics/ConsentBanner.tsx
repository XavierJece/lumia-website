'use client'

import Cookies from 'js-cookie'
import { useEffect, useState } from 'react'
import { Button } from '../atoms/ui/button'
import { Link } from '../atoms/ui/link'
export default function ConsentBanner({
  onConsent,
}: {
  onConsent: (consent: boolean) => void
}) {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const consent = Cookies.get('lgpd-consent')
    if (consent === undefined) {
      setShow(true)
    } else {
      onConsent(consent === 'true')
    }
  }, [onConsent])

  const acceptAll = () => {
    Cookies.set('lgpd-consent', 'true', { expires: 365 })
    setShow(false)
    onConsent(true)
  }

  const rejectAll = () => {
    Cookies.set('lgpd-consent', 'false', { expires: 365 })
    setShow(false)
    onConsent(false)
  }

  if (!show) return null

  return (
    <div className="fixed bottom-4 px-2 left-1/2 z-50 w-full container-lumia -translate-x-1/2">
      <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-border bg-background/80 p-4 md:p-6 shadow-2xl backdrop-blur-md md:flex-nowrap">
        <p className="text-sm text-foreground md:text-base">
          Este site utiliza cookies para melhorar sua experiência. Para estar em
          conformidade com a LGPD, solicitamos seu consentimento.{' '}
          <Link
            href="/privacy-policy"
            className="font-medium text-primary underline underline-offset-4 hover:text-primary/80"
            target="_blank"
          >
            Saiba mais
          </Link>
          .
        </p>
        <div className="flex flex-shrink-0 gap-3">
          <Button variant="outline" onClick={rejectAll}>
            Rejeitar todos
          </Button>
          <Button variant="default" onClick={acceptAll}>
            Aceitar todos
          </Button>
        </div>
      </div>
    </div>
  )
}
