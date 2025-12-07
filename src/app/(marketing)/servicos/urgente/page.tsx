import { AlertCircle, MessageCircle } from 'lucide-react'
import Link from 'next/link'
import { buttonVariants } from '~/shared/components/Button/Button'
import { Heading, Text } from '~/shared/components/Typography/Typography'
import { SolveNowSection } from '~/shared/components/services'
import { CONTACT_INFO } from '~/shared/config/constants'

export default function UrgentServicesPage() {
  const primaryBtn = buttonVariants({ variant: 'primary', size: 'lg' })

  return (
    <main className="bg-white-essential">
      <section className="section-shell mx-auto py-16 sm:py-20">
        <div className="flex flex-col gap-4 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 self-center sm:self-start rounded-full bg-red-50 text-red-800 px-4 py-2 text-sm font-semibold border border-red-100">
            <AlertCircle className="h-4 w-4" />
            Prioridade máxima
          </div>
          <Heading level={1} className="text-4xl sm:text-5xl">
            Solve Now: multado ou embargado?
          </Heading>
          <Text
            variant="lead"
            tone="muted"
            className="max-w-3xl mx-auto sm:mx-0"
          >
            Atuamos rápido para destravar sua operação: defesa técnica, laudos,
            renegociação de prazos e plano de correção com comunicação direta
            aos órgãos.
          </Text>
          <div className="flex flex-col sm:flex-row gap-3 justify-center sm:justify-start">
            <Link
              href={CONTACT_INFO.whatsapp.link}
              target="_blank"
              rel="noopener noreferrer"
              className={primaryBtn.base()}
              aria-label="Falar agora no WhatsApp"
            >
              <MessageCircle className={primaryBtn.icon()} />
              Agendar diagnóstico imediato
            </Link>
            <Link
              href="/servicos#services-table"
              className={buttonVariants({ variant: 'ghost' }).base()}
            >
              Ver prazos e serviços
            </Link>
          </div>
        </div>
      </section>

      <SolveNowSection compact />
    </main>
  )
}
