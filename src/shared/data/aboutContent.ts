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
    'A Lumia atua na simplificação do que normalmente é tratado como complicado: normas, licenças e exigências ambientais, sanitárias e de segurança contra incêndio.',
    'À frente da Lumia estou eu, Kethilyn Freitas Xavier, engenheira ambiental e sanitária. Minha trajetória é técnica e construída no dia a dia, no chão de fábrica e nos bastidores de clínicas, indústrias e comércios que precisam operar de forma regular, segura e dentro da lei, sem risco, sem multa e sem improviso.',
    'O trabalho da Lumia envolve desde a regularização de imóveis até a adequação de empreendimentos às exigências do Corpo de Bombeiros, Vigilância Sanitária e órgãos ambientais, sempre considerando a realidade operacional de cada cliente.',
    'o engenheiro civil Fabrício Cardoso, com mais de 20 anos de atuação no mercado, agregando visão prática e consistência técnica aos projetos desenvolvidos.',
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
