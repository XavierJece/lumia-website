import { ArrowRight, CheckCircle2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { buttonVariants } from '~/shared/components/Button/Button'

export function AboutSummary() {
  const btnStyles = buttonVariants({ variant: 'outline' })

  return (
    <section className="py-24 bg-white-essential">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-primary-green">
                Sobre a Lumia
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl font-maven">
                Experiência e confiança para o seu negócio
              </p>
              <p className="mt-6 text-lg leading-8 text-neutral-600">
                Atuamos com excelência técnica e agilidade para garantir que sua
                empresa esteja em conformidade com todas as normas ambientais e
                sanitárias.
              </p>
              <ul className="mt-10 max-w-xl space-y-4 text-base leading-7 text-neutral-600">
                <li className="flex gap-x-3">
                  <CheckCircle2
                    className="h-7 w-5 flex-none text-primary-green"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-neutral-900">
                      Atendimento Diferenciado.
                    </strong>{' '}
                    Suporte próximo e personalizado para cada cliente.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <CheckCircle2
                    className="h-7 w-5 flex-none text-primary-green"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-neutral-900">
                      Capital Intelectual.
                    </strong>{' '}
                    Equipe técnica altamente qualificada e atualizada.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <CheckCircle2
                    className="h-7 w-5 flex-none text-primary-green"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-neutral-900">
                      Facilidade de Pagamento.
                    </strong>{' '}
                    Opções flexíveis para se adequar ao seu fluxo de caixa.
                  </span>
                </li>
              </ul>
              <div className="mt-10 flex items-center gap-x-6">
                <Link href="/sobre" className={btnStyles.base()}>
                  Conheça nossa história
                  <ArrowRight className={btnStyles.icon()} />
                </Link>
                <span className="text-sm font-semibold leading-6 text-neutral-500">
                  Desde 2015
                </span>
              </div>
            </div>
          </div>
          <div className="relative aspect-[5/4] lg:aspect-square max-w-xl lg:max-w-none rounded-2xl bg-neutral-100 object-cover shadow-xl overflow-hidden">
            <Image
              src="/images/team_debate_EGS.webp"
              alt="Equipe Lumia em debate técnico sobre ESG e conformidade ambiental"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
