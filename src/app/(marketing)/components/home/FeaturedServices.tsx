import React from 'react'
import Link from 'next/link'
import { GlassCard } from '~/shared/components/ui/GlassCard'
import {
  FileCheck,
  ClipboardCheck,
  Factory,
  Sprout,
  ArrowRight,
} from 'lucide-react'
import { buttonVariants } from '~/shared/components/Button/Button'

const services = [
  {
    title: 'Licenciamento Ambiental',
    description:
      'Gestão completa de LP, LI e LO para indústrias e empreendimentos. Garantimos a regularidade junto à CETESB e órgãos municipais.',
    icon: FileCheck,
    href: '/servicos/licenciamento',
    tone: 'dark' as const,
    eyebrow: 'Essencial',
  },
  {
    title: 'Gerenciamento de Áreas Contaminadas',
    description:
      'Investigação (Confirmatória e Detalhada), Avaliação de Risco e Projetos de Remediação para passivos ambientais.',
    icon: Factory,
    href: '/servicos/areas-contaminadas',
    tone: 'light' as const,
    eyebrow: 'Técnico',
  },
  {
    title: 'PGRS e Resíduos Sólidos',
    description:
      'Elaboração e implantação do Plano de Gerenciamento de Resíduos Sólidos e Logística Reversa conforme a legislação.',
    icon: ClipboardCheck,
    href: '/servicos/residuos',
    tone: 'light' as const,
    eyebrow: 'Gestão',
  },
  {
    title: 'Estudos e Laudos Técnicos',
    description:
      'EIA/RIMA, RAP, EAS, Outorga de Água e Laudos de Fauna/Flora para viabilidade de grandes projetos.',
    icon: Sprout,
    href: '/servicos/estudos',
    tone: 'light' as const,
    eyebrow: 'Consultoria',
  },
]

export function FeaturedServices() {
  const secondaryBtn = buttonVariants({ variant: 'outline' })

  return (
    <section className="py-24 sm:py-32 bg-white-essential relative">
      <div className="section-shell mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl font-maven">
            Soluções Técnicas Integradas
          </h2>
          <p className="mt-6 text-lg leading-8 text-neutral-600">
            Atuamos em todas as etapas do ciclo ambiental do seu negócio, do
            planejamento à operação.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 mb-16">
          {services.map((service) => {
            const btnStyles = buttonVariants({
              variant: service.tone === 'dark' ? 'secondary' : 'ghost',
              size: 'sm',
              class: 'mt-auto w-full justify-between group',
            })

            return (
              <GlassCard
                key={service.title}
                className="flex flex-col h-full"
                padding="lg"
                tone={service.tone}
                eyebrow={service.eyebrow}
                title={
                  <div className="flex items-center gap-3 mb-2">
                    <service.icon
                      className={`h-6 w-6 ${service.tone === 'dark' ? 'text-green-300' : 'text-green-600'}`}
                    />
                    <span className="leading-tight">{service.title}</span>
                  </div>
                }
                footer={
                  <Link href={service.href} className={btnStyles.base()}>
                    Ver Detalhes
                    <ArrowRight
                      className={`h-4 w-4 transition-transform group-hover:translate-x-1 ${btnStyles.icon()}`}
                    />
                  </Link>
                }
              >
                <p
                  className={`text-sm leading-relaxed ${service.tone === 'dark' ? 'text-green-50' : 'text-neutral-600'}`}
                >
                  {service.description}
                </p>
              </GlassCard>
            )
          })}
        </div>

        <div className="flex justify-center">
          <Link href="/servicos" className={secondaryBtn.base()}>
            Ver Tabela Completa de Serviços
            <ArrowRight className={secondaryBtn.icon()} />
          </Link>
        </div>
      </div>
    </section>
  )
}
