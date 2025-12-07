import React from 'react'
import Image from 'next/image'
import { GlassCard } from '~/shared/components/ui/GlassCard'
import { Heading, Text } from '~/shared/components/Typography/Typography'
import { certifications } from '~/shared/data/aboutContent'

export function CertificationsGrid() {
  return (
    <section className="bg-gradient-to-b from-white-essential via-white to-green-50/50 py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <Heading level={2}>Certificações e associações</Heading>
            <Text className="mt-3 max-w-3xl">
              Participamos de redes técnicas e seguimos normas que garantem
              governança, rastreabilidade e segurança em cada entrega.
            </Text>
          </div>
          <Text variant="caption" tone="muted">
            Alt text aplicado em todos os logos para acessibilidade.
          </Text>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((cert) => (
            <GlassCard
              key={cert.name}
              data-testid="cert-card"
              tone="light"
              padding="md"
              interactive
              divider="none"
              className="h-full"
            >
              <div className="flex h-full flex-col items-start gap-4">
                <div className="relative h-14 w-36">
                  <Image
                    src={cert.logo}
                    alt={cert.alt}
                    fill
                    className="object-contain"
                    sizes="150px"
                  />
                </div>
                <Heading level={3} className="text-h6">
                  {cert.name}
                </Heading>
                <Text tone="muted" variant="body-small">
                  {cert.caption}
                </Text>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}
