import React from 'react'
import Link from 'next/link'
import GlassCard from '~/shared/components/ui/GlassCard'
import {
  AlertTriangle,
  FileText,
  ShieldCheck,
  Leaf,
  ArrowRight,
} from 'lucide-react'
import { buttonVariants } from '~/shared/components/Button/Button'

const services = [
  {
    title: 'Resolução de Conflitos',
    description:
      'Defesa técnica contra multas, autos de infração e embargos. Atuação imediata para desbloquear sua operação.',
    icon: AlertTriangle,
    href: '/servicos/urgente',
    tone: 'dark' as const,
    eyebrow: 'Solve Now',
  },
  {
    title: 'Licenciamento Ambiental',
    description:
      'Obtenção de LP, LI e LO com segurança jurídica. Processos estruturados para indústrias e empreendimentos.',
    icon: FileText,
    href: '/servicos/planejamento',
    tone: 'light' as const,
    eyebrow: 'Start Here',
  },
  {
    title: 'Gestão de Condicionantes',
    description:
      'Monitoramento contínuo para garantir a conformidade da sua licença e evitar penalidades futuras.',
    icon: ShieldCheck,
    href: '/servicos/gestao',
    tone: 'light' as const,
    eyebrow: 'Compliance',
  },
  {
    title: 'Estudos Ambientais',
    description:
      'EIA/RIMA, RAP, EAS e laudos técnicos elaborados por equipe multidisciplinar experiente.',
    icon: Leaf,
    href: '/servicos/estudos',
    tone: 'light' as const,
    eyebrow: 'Técnico',
  },
]

export function FeaturedServices() {
  return (
    <section className="py-24 sm:py-32 bg-white-essential relative">
      <div className="section-shell mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl font-maven">
            Soluções para cada momento do seu negócio
          </h2>
          <p className="mt-6 text-lg leading-8 text-neutral-600">
            Seja para resolver um problema imediato ou planejar o futuro, temos
            a expertise técnica que você precisa.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
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
                    <span>{service.title}</span>
                  </div>
                }
                footer={
                  <Link href={service.href} className={btnStyles.base()}>
                    Saiba mais
                    <ArrowRight
                      className={`h-4 w-4 transition-transform group-hover:translate-x-1 ${btnStyles.icon()}`}
                    />
                  </Link>
                }
              >
                <p
                  className={`text-sm leading-6 ${service.tone === 'dark' ? 'text-green-100' : 'text-neutral-600'}`}
                >
                  {service.description}
                </p>
              </GlassCard>
            )
          })}
        </div>
      </div>
    </section>
  )
}
