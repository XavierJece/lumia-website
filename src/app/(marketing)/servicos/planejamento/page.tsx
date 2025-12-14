import { MessageCircle, NotebookPen } from 'lucide-react'
import Link from 'next/link'
import { Heading, Text } from '~/shared/components/Typography/Typography'
import { StartHereSection } from '~/shared/components/services'
import { CONTACT_INFO } from '~/shared/config/constants'

export default function PlanningServicesPage() {
  return (
    <main className="bg-white-essential">
      <section className="section-shell mx-auto py-16 sm:py-20">
        <div className="flex flex-col gap-4 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 self-center sm:self-start rounded-full bg-green-50 text-primary-green px-4 py-2 text-sm font-semibold border border-green-100">
            <NotebookPen className="h-4 w-4" />
            Planejamento seguro
          </div>
          <Heading level={1} className="text-4xl sm:text-5xl">
            Start Here: abra e opere com licenças em dia
          </Heading>
          <Text
            variant="lead"
            tone="muted"
            className="max-w-3xl mx-auto sm:mx-0"
          >
            Roteiro completo de LP, LI e LO, com previsões de prazo e checklist
            do que precisa para evitar atrasos no lançamento do seu negócio.
          </Text>
          <div className="flex flex-col sm:flex-row gap-3 justify-center sm:justify-start">
            <Link
              href={CONTACT_INFO.whatsapp.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Falar no WhatsApp para iniciar licenciamento"
            >
              <MessageCircle />
              Falar com especialista
            </Link>
            <Link href="/servicos#services-table">Ver tabela de prazos</Link>
          </div>
        </div>
      </section>

      <StartHereSection compact />
    </main>
  )
}
