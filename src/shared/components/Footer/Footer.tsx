'use client'

import Link from 'next/link'
import { InstagramLogo, LinkedinLogo, TiktokLogo } from 'phosphor-react'
import * as React from 'react'
import type { FooterContent } from '~/shared/@types/navigation'
import { cn } from '~/shared/components/shadcn'
import { Button } from '../atoms/ui/button'
import { Input } from '../atoms/ui/input'

export interface FooterProps extends React.HTMLAttributes<HTMLElement> {
  content?: FooterContent
}

const Footer = React.forwardRef<HTMLElement, FooterProps>(
  ({ content, className, ...props }, ref) => {
    const [email, setEmail] = React.useState('')
    const [isSubmitting, setIsSubmitting] = React.useState(false)

    const defaultContent: FooterContent = {
      columns: [],
      social: { items: [] },
      newsletter: {
        title: 'Receba dicas semanais',
        placeholder: 'Seu e-mail',
        button: 'Inscrever',
      },
      finalCta: {
        text: 'Ainda não pediu um orçamento?',
        buttonText: 'Clique Aqui → Orçamento Rápido',
        href: '/orcamento',
      },
      legal: {
        copyright: '© 2025 Lumia Consultoria. Todos os direitos reservados.',
      },
    }

    const footerContent = content || defaultContent

    const handleNewsletterSubmit = async (e: React.FormEvent) => {
      e.preventDefault()
      setIsSubmitting(true)
      // TODO: Implement newsletter subscription logic
      setTimeout(() => {
        setIsSubmitting(false)
        setEmail('')
        alert('Inscrição realizada com sucesso!')
      }, 500)
    }

    const getSocialIcon = (platform: string) => {
      const iconProps = {
        size: 24,
        weight: 'fill' as const,
        className:
          'text-neutral-600 hover:text-primary-green transition-colors',
      }

      switch (platform) {
        case 'instagram':
          return <InstagramLogo {...iconProps} />
        case 'linkedin':
          return <LinkedinLogo {...iconProps} />
        case 'tiktok':
          return <TiktokLogo {...iconProps} />
        default:
          return null
      }
    }

    return (
      <footer
        ref={ref}
        className={cn(
          'bg-neutral-900 text-neutral-200 border-t border-neutral-800',
          className,
        )}
        {...props}
      >
        <div className="container mx-auto px-4 lg:px-6 py-12 lg:py-16">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6 mb-12">
            {footerContent.columns.map((column, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-sm font-semibold text-white uppercase tracking-wide">
                  {column.title}
                </h3>
                <nav className="space-y-2" aria-label={column.title}>
                  {column.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block text-sm text-neutral-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>
            ))}
          </div>

          {/* Social Media Section */}
          {footerContent.social.items.length > 0 && (
            <section className="mb-12 pb-8 border-b border-neutral-800">
              {footerContent.social.title && (
                <p className="text-sm text-neutral-400 mb-4">
                  {footerContent.social.title}
                </p>
              )}
              <div className="flex items-center gap-4">
                {footerContent.social.items.map((social) => (
                  <Link
                    key={social.platform}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full hover:bg-neutral-800 transition-colors"
                    aria-label={social.label}
                  >
                    {getSocialIcon(social.platform)}
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Newsletter Section */}
          <section className="mb-12 pb-8 border-b border-neutral-800">
            <h3 className="text-lg font-semibold text-white mb-2">
              {footerContent.newsletter.title}
            </h3>
            <form
              onSubmit={handleNewsletterSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md"
            >
              <Input
                type="email"
                placeholder={footerContent.newsletter.placeholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-neutral-800 border-neutral-700 text-white placeholder:text-neutral-500 focus:border-primary-green"
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-primary-green hover:bg-green-600 text-white whitespace-nowrap"
              >
                {isSubmitting ? 'Enviando...' : footerContent.newsletter.button}
              </Button>
            </form>
            {footerContent.newsletter.disclaimer && (
              <p className="text-xs text-neutral-500 mt-2">
                {footerContent.newsletter.disclaimer}
              </p>
            )}
          </section>

          {/* Final CTA Section */}
          <section className="mb-12 pb-8 border-b border-neutral-800">
            <div className="bg-gradient-to-r from-primary-green to-green-600 rounded-lg p-6 lg:p-8 text-center">
              <p className="text-lg lg:text-xl font-semibold text-white mb-4">
                {footerContent.finalCta.text}
              </p>
              <Button
                asChild
                className="bg-white text-primary-green hover:bg-neutral-100 font-semibold"
              >
                <Link href={footerContent.finalCta.href}>
                  {footerContent.finalCta.buttonText}
                </Link>
              </Button>
            </div>
          </section>

          {/* Trust Signals */}
          {footerContent.trustSignals && (
            <section className="mb-8 text-center">
              <p className="text-sm text-neutral-400">
                {footerContent.trustSignals.rating && (
                  <span className="font-semibold text-white">
                    {footerContent.trustSignals.rating}{' '}
                  </span>
                )}
                {footerContent.trustSignals.clients}
              </p>
            </section>
          )}

          {/* Legal Information */}
          <section className="pt-8 border-t border-neutral-800">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-500">
              <p>{footerContent.legal.copyright}</p>
              <div className="flex flex-col md:flex-row gap-2 md:gap-4">
                {footerContent.legal.cnpj && (
                  <span>{footerContent.legal.cnpj}</span>
                )}
                {footerContent.legal.stateRegistration && (
                  <span>{footerContent.legal.stateRegistration}</span>
                )}
              </div>
            </div>
          </section>
        </div>
      </footer>
    )
  },
)
Footer.displayName = 'Footer'

export { Footer }
