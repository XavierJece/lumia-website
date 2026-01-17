'use client'

import { ArrowRight } from 'lucide-react'
import { useSearchParams } from 'next/navigation'
import { Button } from '~/shared/components/atoms/ui/button'
import { ISolutionServiceContent } from '~/shared/data/solutionContent'

interface SolutionItemProps {
  service: ISolutionServiceContent
}

export function CompleteView({ service }: SolutionItemProps) {
  return (
    <div
      key={service.title}
      className="bg-card rounded-2xl shadow-soft border border-border overflow-hidden hover-lift"
    >
      <div className="grid lg:grid-cols-3 gap-0">
        {/* Icon & Title */}
        <div className="px-3 py-4 sm:p-8 lg:border-r border-border bg-muted/30">
          <div className="size-9 md:size-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
            {service.icon && (
              <service.icon className="size-5 md:size-6 text-primary" />
            )}
          </div>
          <h2 className="text-xl font-heading font-bold text-foreground mb-3">
            {service.title}
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            {service.description}
          </p>
        </div>

        {/* Benefits */}
        <div className="p-4 sm:p-8 lg:col-span-2 ">
          <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Vantagens para seu negócio
          </h3>

          <ul className="space-y-3 mb-6">
            {service.businessAdvantages.map((businessAdvantage) => (
              <li key={businessAdvantage} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <ArrowRight className="w-3 h-3 text-accent" />
                </div>
                <span className="text-foreground">{businessAdvantage}</span>
              </li>
            ))}
          </ul>

          <Button
            asChild
            variant="outline"
            className="font-semibold max-sm:w-full"
          >
            <a
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=Gostaria de saber mais sobre ${encodeURIComponent(service.title)}.`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Solicitar Orçamento
              <ArrowRight className="ml-2" size={16} />
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}

export function SummaryView({ service }: SolutionItemProps) {
  return (
    <div className="bg-muted/30 rounded-xl border border-border p-6 hover-lift">
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Title & Description */}
        <div className="lg:col-span-2">
          <h3 className="text-lg font-heading font-bold text-foreground mb-2">
            {service.title}
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            {service.description || 'Descrição não disponível'}
          </p>
        </div>

        {/* CTA */}
        <div className="flex items-center lg:justify-end">
          <Button
            asChild
            variant="outline"
            className="font-semibold w-full lg:w-auto"
          >
            <a
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=Gostaria de saber mais sobre ${encodeURIComponent(service.title)}.`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Solicitar Orçamento
              <ArrowRight className="ml-2" size={16} />
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}

export function SolutionItem({ service }: SolutionItemProps) {
  const view = useSearchParams().get('view') ?? 'complete'

  return view === 'summary' ? (
    <SummaryView service={service} />
  ) : (
    <CompleteView service={service} />
  )
}
