import { Eye, Heart, Leaf, Shield, Star, Target } from 'lucide-react'

export interface IStoryContent {
  title: string
  description: string[]
  image?: string
}

export interface IAboutContent {
  icon: React.ElementType
  title: string
  description: string
}

export interface IValuesContent {
  title: string
  description: string
  values: IAboutContent[]
}

export const storyContent: IStoryContent = {
  title: 'Nascemos para Simplificar',
  description: [
    'A Lumia nasceu com o propósito de trazer soluções especializadas para indústrias e comércios que precisam se adequar às legislações e atender requisitos para seu funcionamento de maneira clara e acessível.',
    'Fundada por profissionais com vasta experiência em engenharia ambiental, sanitária e civil, nossa missão é ser a ponte entre as exigências legais e a realidade da empresa.',
    'Combinamos conhecimento técnico com uma abordagem humanizada, traduzindo a complexidade das normas ambientais em soluções práticas e aplicáveis ao dia a dia das empresas.',
  ],
}

export const missionContent: IAboutContent = {
  icon: Target,
  title: 'Missão',
  description:
    'Levar soluções eficientes, seguras e acessíveis para empresas de todos os portes, contribuindo para o desenvolvimento sustentável e a conformidade legal dos nossos clientes.',
}

export const visionContent: IAboutContent = {
  icon: Eye,
  title: 'Visão',
  description:
    'Ser referência em soluções especializadas, contribuindo para a sustentabilidade e a excelência em cada projeto, sempre com ética, transparência e comprometimento com o cliente.',
}

export const valuesContent: IValuesContent = {
  title: 'Nossos Valores',
  description:
    'Os princípios que norteiam cada decisão e cada projeto que realizamos.',
  values: [
    {
      icon: Shield,
      title: 'Ética',
      description:
        'Atuamos com transparência e integridade em todas as nossas relações.',
    },
    {
      icon: Leaf,
      title: 'Responsabilidade Ambiental',
      description:
        'Comprometidos com a preservação e o desenvolvimento sustentável.',
    },
    {
      icon: Heart,
      title: 'Compromisso com o Cliente',
      description: 'Sua satisfação é nossa prioridade em cada projeto.',
    },
    {
      icon: Star,
      title: 'Excelência Técnica',
      description:
        'Profissionais capacitados e atualizados nas melhores práticas do mercado.',
    },
  ],
}
