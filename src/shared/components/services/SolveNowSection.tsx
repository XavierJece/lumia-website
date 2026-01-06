import {
  AlarmClock,
  ArrowRight,
  PhoneCall,
  ShieldAlert,
  Siren,
} from 'lucide-react'
import Link from 'next/link'
import { buttonVariants } from '~/shared/components/atoms/ui/button'
import { cn } from '~/shared/components/shadcn'
import { Heading, Text } from '~/shared/components/Typography/Typography'
import { GlassCard } from '~/shared/components/ui/GlassCard'
import { CONTACT_INFO } from '~/shared/config/constants'

interface ISolveNowSectionProps {
  id?: string
  compact?: boolean
}

const solveNowItems = [
  {
    title: 'Multas e autuações ambientais',
    description:
      'Diagnóstico em até 72h com plano de correção, defesas administrativas e renegociação de prazos.',
    eta: 'Diagnóstico inicial: 24-72h',
    eyebrow: 'Urgente',
    icon: ShieldAlert,
  },
  {
    title: 'Embargo de obra ou operação',
    description:
      'Análise técnica, laudos e plano de retomada com comunicação aos órgãos ambientais.',
    eta: 'Plano de ação: 3-5 dias',
    eyebrow: 'Crítico',
    icon: Siren,
  },
  {
    title: 'Notificação de adequação',
    description:
      'Correção de condicionantes, regularização documental e atualização de licenciamentos.',
    eta: 'Entrega de documentação: 5-10 dias',
    eyebrow: 'Correção',
    icon: AlarmClock,
  },
]

export function SolveNowSection({
  id = 'solve-now',
  compact = false,
}: ISolveNowSectionProps) {
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
            Soluções imediatas para quem foi autuado
          </Heading>
          <Text
            variant="lead"
            tone="muted"
            className="max-w-3xl mx-auto sm:mx-0"
          >
            Resolvemos multas, embargos e notificações com foco em reduzir
            riscos e restaurar sua operação com segurança jurídica.
          </Text>
          {!compact && (
            <div className="flex flex-col sm:flex-row gap-3 justify-center sm:justify-start">
              <Link
                href={CONTACT_INFO.whatsapp.link}
                target="_blank"
                rel="noopener noreferrer"
                className={primaryCta}
                aria-label="Agendar diagnóstico imediato via WhatsApp"
              >
                <PhoneCall className="h-4 w-4 shrink-0" />
                Agendar Diagnóstico
              </Link>
              <Link href="#services-table" className={ghostCta}>
                Ver tabela completa
                <ArrowRight className="h-4 w-4 shrink-0" />
              </Link>
            </div>
          )}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {solveNowItems.map((item) => {
            const Icon = item.icon
            return (
              <GlassCard
                key={item.title}
                padding="lg"
                tone="light"
                title={
                  <div className="flex items-center gap-3">
                    <Icon className="h-6 w-6 text-primary-green" />
                    <span className="leading-tight">{item.title}</span>
                  </div>
                }
                eyebrow={item.eyebrow}
                footer={
                  <div className="flex flex-col gap-1 w-full">
                    <span className="text-caption text-neutral-600">
                      {item.eta}
                    </span>
                    <Link
                      href={CONTACT_INFO.whatsapp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        buttonVariants({
                          variant: 'outline',
                          size: 'sm',
                        }),
                        'justify-between w-full',
                      )}
                    >
                      Falar agora
                      <ArrowRight className="h-4 w-4 shrink-0" />
                    </Link>
                  </div>
                }
              >
                <Text className="text-neutral-700">{item.description}</Text>
              </GlassCard>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default SolveNowSection
