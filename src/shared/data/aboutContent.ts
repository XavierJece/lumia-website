import { Eye, Heart, Leaf, Shield, Star, Target } from 'lucide-react'
import { Metadata } from 'next'

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

export const metadataAbout: Metadata = {
  // ----- TITLE -----
  title: 'Quem Somos',

  // ----- DEFAULT DESCRIPTION -----
  description:
    'Conheça a história da LUMIA, nossa missão, visão e valores. Somos especialistas em soluções ambientais, sanitárias e segurança contra incêndio.',

  // ----- ROBOTS (indexing) -----
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://lumia.eng.br/contact',
  },

  // ----- OPEN GRAPH (Facebook, LinkedIn, Instagram, WhatsApp) -----
  openGraph: {
    title: 'Nossa História e Valores',
    description:
      'Conheça a trajetória de Kethilyn Freitas Xavier e Fabrício Cardoso, e como a LUMIA simplifica a regularização ambiental e sanitária para empresas.',

    images: [
      {
        url: '/about-og-image.png',
        width: 1200,
        height: 630,
        alt: `Kethilyn Freitas Xavier`,
      },
    ],
  },

  // ----- TWITTER CARD -----
  twitter: {
    card: 'summary_large_image',
    images: ['/about-og-image.png'],
  },

  // ----- OTHERS METADADOS ÚTEIS -----
  keywords:
    'contato lumia, telefone lumia, whatsapp lumia, email lumia, consultoria ambiental contato, regularização de empresas, são paulo, engenharia ambiental',

  authors: [{ name: 'LUMIA' }],
}

export const jsonLdAbout = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'AboutPage',
      name: 'Sobre a LUMIA',
      description:
        'Conheça a história da LUMIA, nossa missão, visão e valores.',
      url: 'https://lumia.eng.br/about',
      mainEntity: { '@id': 'https://lumia.eng.br/#organization' },
    },
    {
      '@type': 'Organization',
      '@id': 'https://lumia.eng.br/#organization',
      name: 'LUMIA Consultoria e Engenharia',
      url: 'https://lumia.eng.br',
      logo: 'https://lumia.eng.br/logos/logo.png',
      sameAs: [
        'https://www.instagram.com/lumia.eng',
        'https://www.linkedin.com/company/lumia-eng',
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+55-11-94226-5492',
        contactType: 'customer service',
        areaServed: 'BR',
        availableLanguage: 'Portuguese',
      },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'São Paulo',
        addressRegion: 'SP',
        addressCountry: 'BR',
      },
      founders: [
        { '@id': 'https://lumia.eng.br/#person-kethilyn' },
        { '@id': 'https://lumia.eng.br/#person-fabricio' },
      ],
    },
    {
      '@type': 'Person',
      '@id': 'https://lumia.eng.br/#person-kethilyn',
      name: 'Kethilyn Freitas Xavier',
      jobTitle: 'Engenheira Ambiental e Sanitária',
      worksFor: { '@id': 'https://lumia.eng.br/#organization' },
      description:
        'Fundadora da LUMIA, engenheira com experiência em regularização ambiental e sanitária.',
    },
    {
      '@type': 'Person',
      '@id': 'https://lumia.eng.br/#person-fabricio',
      name: 'Fabrício Cardoso',
      jobTitle: 'Engenheiro Civil',
      worksFor: { '@id': 'https://lumia.eng.br/#organization' },
      description:
        'Engenheiro civil com mais de 20 anos de mercado, especialista em projetos e segurança.',
    },
  ],
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
