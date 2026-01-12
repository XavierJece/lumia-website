'use client'

import { ArrowRight } from 'lucide-react'
import { Button } from '~/shared/components/atoms/ui/button'

interface SolutionItemProps {
  service: string
}

export function SolutionItem({ service }: SolutionItemProps) {
  return (
    <div className="bg-muted/30 rounded-xl border border-border p-6 hover-lift">
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Title & Description */}
        <div className="lg:col-span-2">
          <h3 className="text-lg font-heading font-bold text-foreground mb-2">
            {service}
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            Solução especializada para garantir conformidade e eficiência no seu
            negócio.
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
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=Gostaria de saber mais sobre ${encodeURIComponent(service)}.`}
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
