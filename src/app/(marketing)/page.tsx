import Link from 'next/link'

export default function MarketingHome() {
  return (
    <section className="relative isolate overflow-hidden bg-white-essential">
      <div className="section-shell mx-auto">
        <div className="glass-surface flex flex-col gap-6 p-8 lg:p-12">
          <p className="text-sm font-semibold uppercase tracking-wide text-neutral-600">
            Lumia Environmental Consulting
          </p>
          <div className="space-y-4">
            <h1 className="text-4xl font-semibold text-neutral-900 lg:text-5xl">
              Consultoria ambiental com agilidade e compliance total
            </h1>
            <p className="text-lg text-neutral-700 lg:max-w-3xl">
              Segmentamos a jornada em dois caminhos: <strong>Solve Now</strong>{' '}
              para casos urgentes e <strong>Start Here</strong> para novos
              projetos. Sempre com atendimento direto via WhatsApp.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/servicos/urgente"
              className="inline-flex items-center justify-center rounded-pill bg-primary-green px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-green-600"
            >
              Resolver Agora (WhatsApp)
            </Link>
            <Link
              href="/servicos/planejamento"
              className="inline-flex items-center justify-center rounded-pill border border-neutral-300 px-6 py-3 text-base font-semibold text-neutral-900 transition-colors hover:bg-neutral-100"
            >
              Começar Projeto
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
