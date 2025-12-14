import { ArrowRight, ChevronDown, MessageCircle } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { twMerge } from 'tailwind-merge'
import { buttonVariants } from '~/shared/components/Button/Button'
import { CONTACT_INFO } from '~/shared/config/constants'

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
    <section
      className={twMerge(
        'min-h-[100dvh]',
        'bg-gradient-to-b from-green-50/80 to-white',
        'flex flex-col items-center justify-center',
        'gap-8 sm:gap-12',
        'px-6 py-12 sm:py-24',
      )}
    >
      <div className="max-w-4xl mx-auto gap-4 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold tracking-tight text-secondary-green sm:text-5xl lg:text-5xl font-maven leading-tight lg:leading-tight text-center">
          Conformidade Ambiental sem Burocracia:{' '}
          <span className="text-primary-green relative whitespace-nowrap">
            Agilidade e Clareza
            <svg
              className="absolute -bottom-2 left-0 w-full h-2 text-yellow-400/60 -z-10"
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

        <p className=" text-lg leading-8 text-neutral-600 max-w-xl font-medium text-center">
          Traduzimos exigências legais em processos simples e eficientes.
          Garanta a segurança jurídica da sua operação sem perder o foco no
          negócio.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full sm:w-auto">
          <Link
            href={CONTACT_INFO.whatsapp.link}
            target="_blank"
            rel="noopener noreferrer"
            className={twMerge(
              primaryBtn.base(),
              'bg-accent-yellow text-secondary-green hover:bg-yellow-400 border-none shadow-lg hover:shadow-xl transition-all',
              'w-full sm:w-auto',
            )}
            aria-label="Falar com especialista no WhatsApp"
          >
            <MessageCircle
              className={twMerge(primaryBtn.icon(), 'text-secondary-green')}
            />
            Fale com um Especialista
          </Link>
          <Link
            href="/solucoes"
            className={twMerge(
              secondaryBtn.base(),
              'border-secondary-green text-secondary-green hover:bg-green-50',
              'w-full sm:w-auto',
            )}
          >
            Ver Nossas Soluções
            <ArrowRight
              className={twMerge(secondaryBtn.icon(), 'text-secondary-green')}
            />
          </Link>
        </div>
      </div>

      {/* Scroll Cue Indicator */}
      <ChevronDown
        className="size-8 text-secondary-green animate-bounce mt-auto sm:mt-0"
        aria-label="Role para baixo"
      />
    </section>
  )
}
