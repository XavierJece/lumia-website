import { ArrowRight, MessageCircle } from 'lucide-react'
import Link from 'next/link'
import { buttonVariants } from '~/shared/components/atoms/ui/button'
import {
  ServicesTable,
  SolveNowSection,
  StartHereSection,
} from '~/shared/components/services'
import { Heading, Text } from '~/shared/components/Typography/Typography'
import { CONTACT_INFO } from '~/shared/config/constants'

export default function ServicesHubPage() {
  const primaryBtn = buttonVariants({ variant: 'default', size: 'lg' })
  const outlineBtn = buttonVariants({ variant: 'outline', size: 'lg' })

  return (
    <main className="bg-white-essential">
      <section className="relative isolate overflow-hidden bg-gradient-to-b from-green-50/80 to-white px-6 py-20 sm:py-24">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 left-12 h-64 w-64 rounded-full bg-green-200/30 blur-[120px]" />
          <div className="absolute bottom-0 right-10 h-72 w-72 rounded-full bg-green-100/30 blur-[120px]" />
        </div>
        <div className="section-shell mx-auto relative">
          <div className="max-w-4xl space-y-6 text-center sm:text-left">
            <Heading level={1} className="text-4xl sm:text-5xl">
              Hub de serviços: escolha conforme sua urgência
            </Heading>
            <Text
              variant="lead"
              tone="muted"
              className="max-w-3xl mx-auto sm:mx-0"
            >
              Caminhos claros para quem precisa resolver multas e embargos agora
              ou para quem está planejando licenciar e abrir novas operações.
            </Text>
            <div className="flex flex-col sm:flex-row gap-3 justify-center sm:justify-start">
              <Link
                href={CONTACT_INFO.whatsapp.link}
                target="_blank"
                rel="noopener noreferrer"
                className={primaryBtn}
                aria-label="Falar no WhatsApp para prioridade"
              >
                <MessageCircle className="h-4 w-4 shrink-0" />
                Atendimento imediato
              </Link>
              <Link href="#services-table" className={outlineBtn}>
                Ver tabela completa
                <ArrowRight className="h-4 w-4 shrink-0" />
              </Link>
            </div>
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-sm text-neutral-700">
              <Link
                href="#solve-now"
                className="underline decoration-green-200 underline-offset-4"
              >
                🚨 Preciso resolver agora
              </Link>
              <span className="text-neutral-400">•</span>
              <Link
                href="#start-here"
                className="underline decoration-green-200 underline-offset-4"
              >
                📋 Quero começar meu licenciamento
              </Link>
              <span className="text-neutral-400">•</span>
              <Link
                href="#services-table"
                className="underline decoration-green-200 underline-offset-4"
              >
                📊 Ver prazos e CTAs
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SolveNowSection />
      <StartHereSection />
      <ServicesTable />
    </main>
  )
}
