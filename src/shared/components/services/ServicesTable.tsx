import React from 'react'
import { ArrowRight, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import { buttonVariants } from '~/shared/components/Button/Button'
import GlassContainer from '~/shared/components/ui/GlassContainer'
import { Heading, Text } from '~/shared/components/Typography/Typography'
import { CONTACT_INFO } from '~/shared/config/constants'

interface IServiceItem {
  name: string
  description: string
  eta: string
  ctaLabel?: string
}

const services: IServiceItem[] = [
  {
    name: 'Licenciamento Ambiental (LP/LI/LO)',
    description:
      'Roteiro completo para implantação e operação legal de empreendimentos.',
    eta: 'LP: 3-6 meses · LI: 2-4 meses · LO: 30-90 dias',
    ctaLabel: 'Iniciar licenciamento',
  },
  {
    name: 'Gestão de Resíduos e PGRS',
    description:
      'Plano de Gerenciamento, logística reversa e condicionantes municipais/estaduais.',
    eta: 'Entrega inicial: 10-20 dias',
    ctaLabel: 'Solicitar PGRS',
  },
  {
    name: 'Regularização de Multas e Embargos',
    description:
      'Defesas técnicas, laudos e plano de correção para restabelecer operação.',
    eta: 'Diagnóstico: 24-72h',
    ctaLabel: 'Agendar diagnóstico',
  },
  {
    name: 'Laudos e Estudos Técnicos (EIA/RIMA, RAP, EAS)',
    description:
      'Estudos ambientais completos para viabilidade e grandes projetos.',
    eta: 'Prazo conforme escopo • previsão na proposta',
    ctaLabel: 'Falar com especialista',
  },
  {
    name: 'Outorga de Uso da Água',
    description:
      'Processo completo, medições e documentação para órgãos competentes.',
    eta: '30-60 dias',
    ctaLabel: 'Solicitar outorga',
  },
]

interface IServicesTableProps {
  id?: string
}

export function ServicesTable({ id = 'services-table' }: IServicesTableProps) {
  const outlineCta = buttonVariants({
    variant: 'outline',
    size: 'sm',
    class: 'justify-between w-full',
  })

  return (
    <section id={id} className="py-20 sm:py-24 bg-white-essential">
      <div className="section-shell mx-auto space-y-6">
        <div className="text-center sm:text-left space-y-3">
          <Heading level={2} className="text-3xl sm:text-4xl">
            Tabela de serviços e prazos estimados
          </Heading>
          <Text
            variant="lead"
            tone="muted"
            className="max-w-3xl mx-auto sm:mx-0"
          >
            Consulte rapidamente o que fazemos, o tempo médio de entrega e fale
            direto no WhatsApp para receber o roteiro ideal para o seu caso.
          </Text>
        </div>

        {/* Mobile-friendly cards */}
        <div className="grid grid-cols-1 gap-4 md:hidden">
          {services.map((service) => (
            <GlassContainer
              key={service.name}
              padding="lg"
              className="shadow-glass"
            >
              <div className="flex flex-col gap-2">
                <Heading level={4}>{service.name}</Heading>
                <Text className="text-neutral-700">{service.description}</Text>
                <Text variant="body-small" tone="muted">
                  {service.eta}
                </Text>
              </div>
              <div className="pt-2">
                <Link
                  href={CONTACT_INFO.whatsapp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={outlineCta.base()}
                >
                  {service.ctaLabel ?? 'Falar agora'}
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </div>
            </GlassContainer>
          ))}
        </div>

        {/* Desktop table */}
        <div className="hidden md:block">
          <GlassContainer padding="lg" className="shadow-glass overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left min-w-[720px]">
                <thead>
                  <tr className="border-b border-white/30 text-neutral-800">
                    <th className="pb-3 pr-4 font-semibold">Serviço</th>
                    <th className="pb-3 pr-4 font-semibold">Descrição</th>
                    <th className="pb-3 pr-4 font-semibold">Prazo estimado</th>
                    <th className="pb-3 pr-0 font-semibold text-right">CTA</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/20 text-neutral-700">
                  {services.map((service) => (
                    <tr key={service.name} className="align-top">
                      <td className="py-3 pr-4 font-semibold text-neutral-900">
                        {service.name}
                      </td>
                      <td className="py-3 pr-4">{service.description}</td>
                      <td className="py-3 pr-4 text-neutral-800">
                        {service.eta}
                      </td>
                      <td className="py-3 pr-0 text-right">
                        <Link
                          href={CONTACT_INFO.whatsapp.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={buttonVariants({
                            variant: 'secondary',
                            size: 'sm',
                            class: 'inline-flex justify-between min-w-[180px]',
                          }).base()}
                        >
                          {service.ctaLabel ?? 'Falar agora'}
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </GlassContainer>
        </div>
      </div>
    </section>
  )
}

export default ServicesTable
