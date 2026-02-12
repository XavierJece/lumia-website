'use client'

import { ArrowRight, ClipboardEdit } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import ReactMarkdown from 'react-markdown'
import { Badge } from '~/shared/components/atoms/ui/badge'
import { Button } from '~/shared/components/atoms/ui/button'
import {
  ISolutionCategoryContent,
  ISolutionServiceContent,
} from '~/shared/data/solutionContent'
import { slugFy } from '~/shared/utils/string'

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '~/shared/components/atoms/ui/tooltip'

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

export function CardView({
  service,
  categoryInfo,
}: SolutionItemProps & {
  categoryInfo: Pick<ISolutionCategoryContent, 'quickLinks' | 'icon'>
}) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Link
          href={`/solutions/${slugFy(service.title)}`}
          className="group bg-card rounded-2xl shadow-soft border border-border overflow-hidden hover-lift transition-all duration-300 flex flex-col"
        >
          {/* Image */}
          <div className="relative h-48 overflow-hidden">
            <Image
              src={
                service.coverURL ||
                'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=600&h=400&fit=crop'
              }
              alt={service.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              layout="fill"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            <Badge className="absolute top-4 left-4 bg-primary/90 text-primary-foreground">
              <categoryInfo.icon size={12} className="mr-1" />
              {categoryInfo.quickLinks}
            </Badge>
          </div>

          {/* Content */}
          <div className="p-6 flex flex-col flex-1">
            <h3 className="text-lg font-heading font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
              {service.title}
            </h3>
            <ReactMarkdown
              components={{
                p: ({ _, ...props }) => (
                  <p
                    className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2 flex-1"
                    {...props}
                  />
                ),
              }}
            >
              {service.description.split('\n\n')[0]}
            </ReactMarkdown>
            {/* CTA */}
            <div className="flex items-center gap-2 justify-between flex-col sm:flex-row">
              <span className="flex-shrink-0 flex items-center text-primary font-semibold text-sm">
                Saiba mais
                <ArrowRight
                  size={16}
                  className="ml-2 transition-transform group-hover:translate-x-1"
                />
              </span>

              <Button
                // asChild
                size="sm"
                variant="tertiary"
                className="w-full sm:w-fit break-words"
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  window.open(
                    `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=${encodeURIComponent(`Gostaria de saber mais sobre *${service.title} *.`)}`,
                    '_blank',
                  )
                }}
              >
                Solicitar Orçamento
                <ClipboardEdit
                  size={16}
                  className="ml-2 transition-transform group-hover:translate-x-1"
                />
              </Button>
            </div>
          </div>
        </Link>
      </TooltipTrigger>

      <TooltipContent side="right" className="max-w-xs text-sm prose-sm">
        <ReactMarkdown
          components={{
            p: ({ _, ...props }) => (
              <p
                className="text-muted-foreground text-sm leading-relaxed mb-4"
                {...props}
              />
            ),
          }}
        >
          {service.description}
        </ReactMarkdown>
      </TooltipContent>
    </Tooltip>
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
