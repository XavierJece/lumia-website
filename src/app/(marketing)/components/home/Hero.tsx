import { ArrowRight, ChevronDown, MessageCircle } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'
import { buttonVariants } from '~/shared/components/Button/Button'
import { CONTACT_INFO } from '~/shared/config/constants'
import { glassTokens } from '~/shared/styles/tokens'

interface HeroProps {
  showImage?: boolean
  imagePosition?: 'bottom' | 'side'
}

export function Hero({ showImage = false, imagePosition = 'side' }: HeroProps) {
  const primaryBtn = buttonVariants({
    variant: 'primary',
    size: 'lg',
  })

  const secondaryBtn = buttonVariants({
    variant: 'outline',
    size: 'lg',
  })

  const isSideLayout = showImage && imagePosition === 'side'

  return (
    <section
      className={twMerge(
        'relative isolate min-h-[90vh] overflow-hidden bg-white-essential px-6 py-24 sm:py-32 lg:px-8',
        !isSideLayout && 'flex flex-col items-center justify-center',
      )}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-20 opacity-30 mix-blend-multiply animate-pulse">
        <Image
          src="/images/pattern_1.svg"
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Background decorative elements - light theme adaptation */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-[30%] left-[20%] h-[500px] w-[500px] rounded-full bg-green-200/30 blur-[120px]" />
        <div className="absolute bottom-[10%] right-[10%] h-[400px] w-[400px] rounded-full bg-yellow-200/30 blur-[120px]" />
      </div>

      <div
        className={twMerge(
          'mx-auto w-full max-w-7xl z-10 relative',
          isSideLayout
            ? 'grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-left'
            : 'text-center',
        )}
      >
        <div className={twMerge('max-w-4xl', !isSideLayout && 'mx-auto')}>
          <div
            className={twMerge(
              `inline-flex items-center rounded-full border border-green-600/10 bg-green-50/50 backdrop-blur-md px-4 py-1.5 text-sm font-medium text-secondary-green ${glassTokens.shadow} mb-8`,
            )}
          >
            <span className="flex h-2 w-2 rounded-full bg-primary-green mr-2 animate-pulse"></span>
            Excelência Técnica em Consultoria Ambiental
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-secondary-green sm:text-6xl font-maven leading-tight lg:leading-tight">
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

          <p
            className={twMerge(
              'mt-6 text-lg leading-8 text-neutral-600 max-w-2xl font-medium',
              !isSideLayout && 'mx-auto',
            )}
          >
            Traduzimos exigências legais em processos simples e eficientes.
            Garanta a segurança jurídica da sua operação sem perder o foco no
            negócio.
          </p>

          <div
            className={twMerge(
              'mt-10 flex gap-4',
              isSideLayout
                ? 'flex-col sm:flex-row justify-start'
                : 'flex-col sm:flex-row items-center justify-center',
            )}
          >
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
                'border-secondary-green text-secondary-green hover:bg-green-50',
              )}
            >
              Ver Nossas Soluções
              <ArrowRight
                className={twMerge(secondaryBtn.icon(), 'text-secondary-green')}
              />
            </Link>
          </div>
        </div>

        {showImage && (
          <div
            className={twMerge(
              'w-full px-4 lg:px-0',
              imagePosition === 'bottom'
                ? 'mt-16 flow-root sm:mt-24 max-w-6xl mx-auto'
                : 'mt-12 lg:mt-0',
            )}
          >
            <div className="relative rounded-2xl bg-white/40 p-2 ring-1 ring-inset ring-black/5 lg:-m-4 lg:rounded-3xl lg:p-4 backdrop-blur-md shadow-2xl">
              <div
                className={twMerge(
                  'relative overflow-hidden rounded-xl bg-neutral-100',
                  imagePosition === 'bottom'
                    ? 'aspect-[16/9] sm:aspect-[21/9]'
                    : 'aspect-[4/3] lg:aspect-square',
                )}
              >
                <Image
                  src="/images/woman_in_meeting.webp"
                  alt="Equipe da Lumia Consultoria em reunião estratégica sobre licenciamento ambiental"
                  fill
                  className="object-cover"
                  priority
                  sizes={
                    imagePosition === 'bottom'
                      ? '(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px'
                      : '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px'
                  }
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Scroll Cue Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-xs text-secondary-green/70 mb-1 uppercase tracking-widest">
          Scroll
        </span>
        <ChevronDown
          className="h-6 w-6 text-secondary-green"
          aria-label="Role para baixo"
        />
      </div>
    </section>
  )
}
