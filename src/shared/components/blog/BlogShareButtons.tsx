'use client'

import { useEffect, useMemo, useState } from 'react'
import { Copy, LinkIcon, Share2, Whatsapp } from 'lucide-react'

interface IBlogShareButtonsProps {
  title: string
  canonicalUrl: string
}

const buildWhatsAppShareUrl = (title: string, url: string) => {
  const message = `${title} - ${url}`
  return `https://wa.me/?text=${encodeURIComponent(message)}`
}

const buildLinkedInShareUrl = (url: string) =>
  `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`

export function BlogShareButtons({
  title,
  canonicalUrl,
}: IBlogShareButtonsProps) {
  const [copied, setCopied] = useState(false)
  const [shareUrl, setShareUrl] = useState(canonicalUrl)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setShareUrl(window.location.href || canonicalUrl)
    }
  }, [canonicalUrl])

  const whatsappHref = useMemo(
    () => buildWhatsAppShareUrl(title, shareUrl),
    [title, shareUrl],
  )
  const linkedInHref = useMemo(
    () => buildLinkedInShareUrl(shareUrl),
    [shareUrl],
  )

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      console.error('Copy link failed', error)
    }
  }

  return (
    <div className="flex flex-wrap items-center gap-3">
      <a
        href={whatsappHref}
        target="_blank"
        rel="noreferrer noopener"
        className="inline-flex items-center gap-2 rounded-full bg-primary-green px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700"
        aria-label="Compartilhar via WhatsApp"
      >
        <Whatsapp className="h-4 w-4" aria-hidden />
        WhatsApp
      </a>
      <a
        href={linkedInHref}
        target="_blank"
        rel="noreferrer noopener"
        className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-neutral-800"
        aria-label="Compartilhar no LinkedIn"
      >
        <Share2 className="h-4 w-4" aria-hidden />
        LinkedIn
      </a>
      <button
        type="button"
        onClick={handleCopy}
        className="inline-flex items-center gap-2 rounded-full border border-neutral-200 px-4 py-2 text-sm font-semibold text-neutral-700 transition hover:border-neutral-300 hover:bg-neutral-50"
        aria-label="Copiar link do artigo"
      >
        {copied ? (
          <>
            <LinkIcon className="h-4 w-4" aria-hidden />
            Link copiado!
          </>
        ) : (
          <>
            <Copy className="h-4 w-4" aria-hidden />
            Copiar link
          </>
        )}
      </button>
    </div>
  )
}

export default BlogShareButtons
