import React from 'react'
import { ArrowRight, ChevronDown, MessageCircle } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'
import { buttonVariants } from '~/shared/components/Button/Button'
import { CONTACT_INFO } from '~/shared/config/constants'
import { glassTokens } from '~/shared/styles/tokens'

export function Hero() {
  const primaryBtn = buttonVariants({
    variant: 'primary',
    size: 'lg',
  })

  const secondaryBtn = buttonVariants({
    variant: 'outline',
    size: 'lg',
  })

  return (
    <section className="relative isolate flex min-h-[90vh] flex-col items-center justify-center overflow-hidden bg-secondary-green px-6 py-24 sm:py-32 lg:px-8">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-20 opacity-10 mix-blend-overlay">
        <Image
          src="/images/pattern_1.svg"
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Background decorative elements - darker/subtle for depth */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-[30%] left-[20%] h-[500px] w-[500px] rounded-full bg-green-500/10 blur-[120px]" />
        <div className="absolute bottom-[10%] right-[10%] h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-4xl text-center z-10 relative">
        <div
          className={`inline-flex items-center rounded-full border border-green-400/30 bg-white/5 backdrop-blur-md px-4 py-1.5 text-sm font-medium text-green-100 ${glassTokens.shadow} mb-8`}
        >
          <span className="flex h-2 w-2 rounded-full bg-accent-yellow mr-2 animate-pulse"></span>
          Excelência Técnica em Consultoria Ambiental
        </div>

        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl font-maven leading-tight lg:leading-tight">
          Conformidade Ambiental sem Burocracia:{' '}
          <span className="text-accent-yellow relative whitespace-nowrap">
            Agilidade e Clareza
            <svg
              className="absolute -bottom-2 left-0 w-full h-2 text-yellow-200/40 -z-10"
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
          para Sua Empresa.
        </h1>

        <p className="mt-6 text-lg leading-8 text-neutral-200 max-w-2xl mx-auto font-medium">
          Traduzimos exigências legais em processos simples e eficientes.
          Garanta a segurança jurídica da sua operação sem perder o foco no
          negócio.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href={CONTACT_INFO.whatsapp.link}
            target="_blank"
            rel="noopener noreferrer"
            className={twMerge(
              primaryBtn.base(),
              'bg-accent-yellow text-secondary-green hover:bg-yellow-400 border-none shadow-lg hover:shadow-xl transition-all',
            )}
            aria-label="Falar com especialista no WhatsApp"
          >
            <MessageCircle
              className={twMerge(primaryBtn.icon(), 'text-secondary-green')}
            />
            Fale com um Especialista
          </Link>
          <Link
            href="#solucoes"
            className={twMerge(
              secondaryBtn.base(),
              'border-white text-white hover:bg-white/10 hover:text-white',
            )}
          >
            Ver Nossas Soluções
            <ArrowRight
              className={twMerge(secondaryBtn.icon(), 'text-white')}
            />
          </Link>
        </div>
      </div>

      {/* Hero Image with Glass Overlay */}
      <div className="mt-16 flow-root sm:mt-24 w-full max-w-6xl px-4 lg:px-0">
        <div className="relative rounded-2xl bg-white/10 p-2 ring-1 ring-inset ring-white/20 lg:-m-4 lg:rounded-3xl lg:p-4 backdrop-blur-md shadow-2xl">
          <div className="relative aspect-[16/9] sm:aspect-[21/9] overflow-hidden rounded-xl bg-neutral-900/50">
            <Image
              src="/images/woman_in_meeting.webp"
              alt="Equipe da Lumia Consultoria em reunião estratégica sobre licenciamento ambiental"
              fill
              className="object-cover opacity-90 hover:opacity-100 transition-opacity duration-700"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            />
            {/* Overlay Gradient for better integration with dark theme */}
            <div className="absolute inset-0 bg-gradient-to-t from-secondary-green/80 via-transparent to-transparent" />
          </div>
        </div>
      </div>

      {/* Scroll Cue Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-xs text-white/70 mb-1 uppercase tracking-widest">
          Scroll
        </span>
        <ChevronDown
          className="h-6 w-6 text-accent-yellow"
          aria-label="Role para baixo"
        />
      </div>
    </section>
  )
}
