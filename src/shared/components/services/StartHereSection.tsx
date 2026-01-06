import {
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  Landmark,
  Sprout,
} from 'lucide-react'
import Link from 'next/link'
import { buttonVariants } from '~/shared/components/atoms/ui/button'
import { cn } from '~/shared/components/shadcn'
import { Heading, Text } from '~/shared/components/Typography/Typography'
import { GlassCard } from '~/shared/components/ui/GlassCard'
import { CONTACT_INFO } from '~/shared/config/constants'

interface IStartHereSectionProps {
  id?: string
  compact?: boolean
}

const steps = [
  {
    title: 'LP - Licença Prévia',
    description:
      'Viabilidade ambiental do empreendimento e definição das condicionantes.',
    icon: Landmark,
    eta: '3-6 meses • dependendo do órgão',
  },
  {
    title: 'LI - Licença de Instalação',
    description:
      'Autorização para construir e implantar as medidas de controle ambiental.',
    icon: ClipboardList,
    eta: '2-4 meses',
  },
  {
    title: 'LO - Licença de Operação',
    description:
      'Avalia se todas as exigências foram cumpridas para operar com segurança.',
    icon: Sprout,
    eta: '30-90 dias',
  },
]

export function StartHereSection({
  id = 'start-here',
  compact = false,
}: IStartHereSectionProps) {
  const primaryCta = buttonVariants({ variant: 'default', size: 'lg' })
  const ghostCta = cn(
    buttonVariants({
      variant: 'ghost',
      size: 'sm',
    }),
    'mt-2 justify-start',
  )

  return (
    <section id={id} className="py-20 sm:py-24 bg-white-essential">
      <div className="section-shell mx-auto">
        <div className="flex flex-col gap-4 sm:gap-6 text-center sm:text-left">
          <Heading level={2} className="text-3xl sm:text-4xl">
            Comece certo: licenciamento LP, LI e LO
          </Heading>
          <Text
            variant="lead"
            tone="muted"
            className="max-w-3xl mx-auto sm:mx-0"
          >
            Guiamos seu licenciamento ambiental do zero, com roteiros claros e
            prazos para abrir ou expandir seu negócio com segurança.
          </Text>
          {!compact && (
            <div className="flex flex-col sm:flex-row gap-3 justify-center sm:justify-start">
              <Link
                href={CONTACT_INFO.whatsapp.link}
                target="_blank"
                rel="noopener noreferrer"
                className={primaryCta}
                aria-label="Iniciar licenciamento via WhatsApp"
              >
                <CheckCircle2 className="h-4 w-4 shrink-0" />
                Iniciar licenciamento
              </Link>
              <Link href="#services-table" className={ghostCta}>
                Ver tabela completa
                <ArrowRight className="h-4 w-4 shrink-0" />
              </Link>
            </div>
          )}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {steps.map((step) => {
            const Icon = step.icon
            return (
              <GlassCard
                key={step.title}
                padding="lg"
                tone="light"
                eyebrow="Passo"
                title={
                  <div className="flex items-center gap-3">
                    <Icon className="h-6 w-6 text-primary-green" />
                    <span className="leading-tight">{step.title}</span>
                  </div>
                }
                footer={
                  <span className="text-caption text-neutral-600">
                    {step.eta}
                  </span>
                }
              >
                <Text className="text-neutral-700">{step.description}</Text>
              </GlassCard>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default StartHereSection
