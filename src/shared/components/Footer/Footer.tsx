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
          'relative overflow-hidden bg-horizon-green text-white-essential pt-20 pb-10',
          'before:absolute before:top-0 before:left-0 before:w-full before:h-px before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent',
          className,
        )}
        {...props}
      >
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-primary-green/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-accent-yellow/5 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          {/* Top Section: CTA & Newsletter */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20 border-b border-white/10 pb-16">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-maven font-bold text-white leading-tight">
                {footerContent.finalCta.text}
              </h2>
              <Button
                asChild
                className="bg-white text-horizon-green hover:bg-neutral-100 font-semibold text-lg h-12 px-8 rounded-full shadow-lg transition-transform hover:scale-105"
              >
                <Link href={footerContent.finalCta.href} target="_blank">
                  {footerContent.finalCta.buttonText}
                </Link>
              </Button>
              {footerContent.trustSignals && (
                <div className="flex items-center gap-3 pt-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full bg-neutral-200 border-2 border-horizon-green"
                      />
                    ))}
                  </div>
                  <p className="text-sm text-neutral-300">
                    <span className="font-semibold text-white">
                      {footerContent.trustSignals.rating}
                    </span>{' '}
                    {footerContent.trustSignals.clients}
                  </p>
                </div>
              )}
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 space-y-4">
              <h3 className="text-xl font-semibold text-white">
                {footerContent.newsletter.title}
              </h3>
              <p className="text-neutral-300 text-sm">
                {footerContent.newsletter.disclaimer}
              </p>
              <form
                onSubmit={handleNewsletterSubmit}
                className="flex flex-col sm:flex-row gap-3"
              >
                <Input
                  type="email"
                  placeholder={footerContent.newsletter.placeholder}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-neutral-400 focus:border-accent-yellow focus:ring-accent-yellow h-12 rounded-xl"
                />
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-primary-green hover:bg-green-600 text-white h-12 px-6 rounded-xl font-medium"
                >
                  {isSubmitting ? '...' : 'Assinar'}
                </Button>
              </form>
            </div>
          </div>

          {/* Middle Section: Navigation & Info */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
            <div className="col-span-2 lg:col-span-2 space-y-6">
              <Link href="/" className="text-2xl font-bold text-white">
                LUMIA
              </Link>
              <p className="text-neutral-400 text-sm max-w-xs leading-relaxed">
                Engenharia e Consultoria Ambiental focada em resultados,
                compliance e sustentabilidade estratégica para o seu negócio.
              </p>
              <div className="flex gap-4 pt-2">
                {footerContent.social.items.map((social) => (
                  <Link
                    key={social.platform}
                    href={social.href}
                    target="_blank"
                    className="text-neutral-400 hover:text-accent-yellow transition-colors"
                    aria-label={social.label}
                  >
                    {getSocialIcon(social.platform)}
                  </Link>
                ))}
              </div>
            </div>

            {footerContent.columns.map((column, index) => (
              <div key={index} className="space-y-4">
                <h4 className="text-white font-semibold tracking-wide">
                  {column.title}
                </h4>
                <ul className="space-y-2">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-neutral-400 hover:text-accent-yellow text-sm transition-colors block py-1"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Section: Copyright */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-500">
            <p>{footerContent.legal.copyright}</p>
            <div className="flex gap-4">
              {footerContent.legal.cnpj && (
                <span>{footerContent.legal.cnpj}</span>
              )}
            </div>
          </div>
        </div>
      </footer>
    )
  },
)
Footer.displayName = 'Footer'

export { Footer }
