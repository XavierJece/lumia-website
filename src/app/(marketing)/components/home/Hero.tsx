import React from 'react'
import { ArrowRight, MessageCircle } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { buttonVariants } from '~/shared/components/Button/Button'
import { CONTACT_INFO } from '~/shared/config/constants'
import { glassTokens } from '~/shared/styles/tokens'

export function Hero() {
  const primaryBtn = buttonVariants({ variant: 'primary', size: 'lg' })
  const secondaryBtn = buttonVariants({ variant: 'secondary', size: 'lg' })

  return (
    <section className="relative isolate flex min-h-[90vh] flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-green-50/80 to-white px-6 py-24 sm:py-32 lg:px-8">
      {/* Background decorative elements - softer blur */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-[30%] left-[20%] h-[500px] w-[500px] rounded-full bg-green-200/20 blur-[120px]" />
        <div className="absolute bottom-[10%] right-[10%] h-[400px] w-[400px] rounded-full bg-blue-200/20 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-4xl text-center z-10 relative">
        <div
          className={`inline-flex items-center rounded-full border border-green-200 bg-white/80 backdrop-blur-md px-4 py-1.5 text-sm font-medium text-green-800 ${glassTokens.shadow} mb-8`}
        >
          <span className="flex h-2 w-2 rounded-full bg-green-600 mr-2 animate-pulse"></span>
          Excelência Técnica em Consultoria Ambiental
        </div>

        <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-6xl font-maven leading-tight lg:leading-tight">
          Regularize sua operação com{' '}
          <span className="text-primary-green relative whitespace-nowrap">
            segurança jurídica
            <svg
              className="absolute -bottom-2 left-0 w-full h-2 text-green-200/60 -z-10"
              viewBox="0 0 100 10"
              preserveAspectRatio="none"
            >
              <path
                d="M0 5 Q 50 10 100 5"
                stroke="currentColor"
                strokeWidth="8"
                fill="none"
              />
            </svg>
          </span>{' '}
          e agilidade
        </h1>

        <p className="mt-6 text-lg leading-8 text-neutral-700 max-w-2xl mx-auto font-medium">
          Especialistas em Licenciamento Ambiental, Gestão de Áreas Contaminadas
          e Projetos de Engenharia. Transformamos conformidade legal em vantagem
          competitiva para o seu negócio.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href={CONTACT_INFO.whatsapp.link}
            target="_blank"
            rel="noopener noreferrer"
            className={primaryBtn.base()}
            aria-label="Falar com especialista no WhatsApp"
          >
            <MessageCircle className={primaryBtn.icon()} />
            Falar com Especialista
          </Link>
          <Link href="/servicos" className={secondaryBtn.base()}>
            Conhecer Serviços
            <ArrowRight className={secondaryBtn.icon()} />
          </Link>
        </div>
      </div>

      {/* Hero Image with Glass Overlay */}
      <div className="mt-16 flow-root sm:mt-24 w-full max-w-6xl px-4 lg:px-0">
        <div className="relative rounded-2xl bg-white/30 p-2 ring-1 ring-inset ring-white/40 lg:-m-4 lg:rounded-3xl lg:p-4 backdrop-blur-sm shadow-2xl">
          <div className="relative aspect-[16/9] sm:aspect-[21/9] overflow-hidden rounded-xl bg-neutral-100">
            <Image
              src="/images/woman_in_meeting.webp"
              alt="Equipe da Lumia Consultoria em reunião estratégica sobre licenciamento ambiental"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            />
            {/* Overlay Gradient for better text integration if we had text over image */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
