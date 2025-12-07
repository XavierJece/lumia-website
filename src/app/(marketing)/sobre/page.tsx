import React from 'react'
import type { Metadata } from 'next'
import { HeroAbout } from './components/HeroAbout'
import { TeamGrid } from './components/TeamGrid'
import { CertificationsGrid } from './components/CertificationsGrid'
import { StorySection } from './components/StorySection'

export const metadata: Metadata = {
  title: 'Sobre a Lumia | Consultoria Ambiental e ESG',
  description:
    'Conheça a história da Lumia, equipe de especialistas e certificações que garantem diagnósticos rápidos e planos completos de conformidade ambiental e ESG.',
}

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white-essential">
      <HeroAbout />
      <TeamGrid />
      <CertificationsGrid />
      <StorySection />
    </div>
  )
}
