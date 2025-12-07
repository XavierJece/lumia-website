import React from 'react'
import Image from 'next/image'
import { GlassCard } from '~/shared/components/ui/GlassCard'
import { Heading, Text } from '~/shared/components/Typography/Typography'
import { teamMembers } from '~/shared/data/aboutContent'

const getInitials = (name: string) =>
  name
    .split(' ')
    .filter(Boolean)
    .map((part) => part[0]?.toUpperCase())
    .join('')
    .slice(0, 2)

export function TeamGrid() {
  return (
    <section className="bg-white-essential py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="max-w-2xl">
          <Heading level={2}>Equipe sênior e multidisciplinar</Heading>
          <Text className="mt-3 max-w-3xl">
            Especialistas que combinam engenharia, compliance regulatório e ESG
            para conduzir projetos urgentes e planejados com a mesma precisão.
          </Text>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <GlassCard
              key={member.name}
              data-testid="team-card"
              title={
                <Heading level={3} className="text-h5">
                  {member.name}
                </Heading>
              }
              subtitle={<Text tone="muted">{member.role}</Text>}
              padding="lg"
            >
              <div className="flex items-start gap-4">
                <div className="relative h-14 w-14 overflow-hidden rounded-full border border-white/50 bg-green-100">
                  {member.avatar ? (
                    <Image
                      src={member.avatar}
                      alt={`Foto de ${member.name}`}
                      fill
                      sizes="56px"
                      className="object-cover"
                    />
                  ) : (
                    <span className="flex h-full w-full items-center justify-center text-sm font-semibold text-primary-green">
                      {getInitials(member.name)}
                    </span>
                  )}
                </div>
                <Text>{member.bio}</Text>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}
