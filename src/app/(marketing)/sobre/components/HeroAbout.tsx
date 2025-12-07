import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { buttonVariants } from '~/shared/components/Button/Button'
import GlassContainer from '~/shared/components/ui/GlassContainer'
import { Heading, Text } from '~/shared/components/Typography/Typography'
import { aboutHero } from '~/shared/data/aboutContent'

export function HeroAbout() {
  return (
    <section className="bg-white-essential py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-6 lg:px-10">
        <GlassContainer padding="lg" overlay>
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex-1 space-y-6">
              <Text
                as="p"
                variant="caption"
                weight="semibold"
                tone="strong"
                className="uppercase tracking-wide text-primary-green"
              >
                {aboutHero.eyebrow}
              </Text>
              <Heading level={1}>{aboutHero.title}</Heading>
              <Text variant="lead">{aboutHero.subtitle}</Text>
              <ul className="grid gap-4 sm:grid-cols-2">
                {aboutHero.missionHighlights.map((item) => (
                  <li
                    key={item}
                    className="rounded-xl border border-white/40 bg-white/60 px-4 py-3 text-sm text-neutral-700 shadow-soft"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/contato"
                  className={buttonVariants({ variant: 'primary' }).base()}
                >
                  <span className={buttonVariants().label()}>
                    Falar com especialista
                  </span>
                  <ArrowRight className={buttonVariants().icon()} />
                </Link>
                <Link
                  href="/servicos"
                  className={buttonVariants({ variant: 'outline' }).base()}
                >
                  <span className={buttonVariants().label()}>
                    Ver portfólio de serviços
                  </span>
                </Link>
              </div>
            </div>
            <div className="flex-1">
              <div className="rounded-3xl bg-gradient-to-br from-primary-green/10 via-white to-green-200/30 p-[1px]">
                <div className="rounded-[calc(theme(borderRadius.glass)+8px)] bg-white/60 p-8 shadow-glass">
                  <Heading level={3} className="mb-4">
                    O que nos move
                  </Heading>
                  <Text className="mb-3">
                    Aceleramos diagnósticos em cenários críticos e estruturamos
                    planos de conformidade que reduzem riscos e custos futuros.
                  </Text>
                  <Text tone="muted">
                    Cada projeto recebe squad dedicado com engenharia,
                    jurídico-regulatório e ESG para condução ponta a ponta.
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </GlassContainer>
      </div>
    </section>
  )
}
