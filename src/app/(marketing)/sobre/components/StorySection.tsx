import React from 'react'
import { GlassCard } from '~/shared/components/ui/GlassCard'
import { Heading, Text } from '~/shared/components/Typography/Typography'
import { timeline } from '~/shared/data/aboutContent'

export function StorySection() {
  return (
    <section className="bg-white-essential py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="max-w-2xl">
          <Heading level={2}>Nossa história e evolução</Heading>
          <Text className="mt-3 max-w-3xl">
            Crescemos para atender demandas urgentes e estratégicas, mantendo o
            mesmo padrão de clareza técnica e atendimento próximo.
          </Text>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {timeline.map((item) => (
            <GlassCard
              key={item.year}
              tone="light"
              interactive={false}
              padding="lg"
              divider="none"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-green text-white font-semibold">
                  {item.year}
                </div>
                <div className="space-y-2">
                  <Heading level={3} className="text-h5">
                    {item.title}
                  </Heading>
                  <Text>{item.description}</Text>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}
