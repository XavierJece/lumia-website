import { Clock, Instagram, Linkedin, Mail, Phone } from 'lucide-react'
import { Metadata } from 'next'

export interface ISocialNetworkContactItem {
  platform: 'instagram' | 'linkedin' | 'tiktok'
  icon: React.ElementType
  href: string
  label: string
}

export interface IContactInfoItem {
  type: 'phone' | 'mail' | 'address' | 'hours'
  icon: React.ElementType
  href: string
  label: string
  title: string
}

export interface IFAQItem {
  id: string
  question: string
  answer: string
}

export const socialNetworksContent: ISocialNetworkContactItem[] = [
  {
    platform: 'instagram',
    icon: Instagram,
    href: 'https://instagram.com/lumia.eng',
    label: 'Instagram',
  },
  {
    icon: Linkedin,
    platform: 'linkedin',
    href: 'https://linkedin.com/company/lumiaeng',
    label: 'LinkedIn',
  },
]

export const contactInfo: IContactInfoItem[] = [
  {
    type: 'phone',
    title: 'Telefone / WhatsApp',
    icon: Phone,
    label: `(11) 94226-5492`,
    href: `tel:11942265492`,
  },
  {
    icon: Mail,
    title: 'E-mail',
    type: 'mail',
    label: 'contato@lumia.eng.br',
    href: `mailto:contato@lumia.eng.br`,
  },
  {
    icon: Clock,
    title: 'Horário de Atendimento',
    type: 'hours',
    label: 'Segunda a Sexta: 8h às 18h',
    href: '#',
  },
]

export const FAQQuestionsContent: IFAQItem[] = [
  {
    id: '1',
    question: 'Quanto tempo leva para obter uma licença ambiental?',
    answer:
      'O prazo varia conforme o tipo de licença e complexidade do empreendimento. Trabalhamos com agilidade e eficiência, acompanhando todo o processo junto aos órgãos competentes para garantir os melhores prazos possíveis, sempre mantendo você informado em cada etapa.',
  },
  {
    id: '2',
    question: 'A LUMIA atende em todo o território nacional?',
    answer:
      'Sim! Atuamos em todo o Brasil, com conhecimento específico das legislações federal, estaduais e municipais. Nossa equipe possui experiência em diversos estados e mantemos contato direto com os órgãos ambientais de cada região para garantir uma atuação eficiente em qualquer localidade.',
  },
  {
    id: '3',
    question: 'Qual a diferença entre PGRS, PGRSS e PGRSCC?',
    answer:
      'O PGRS (Plano de Gerenciamento de Resíduos Sólidos) é geral para qualquer empresa. O PGRSS é específico para serviços de saúde (clínicas, hospitais, farmácias) e segue normas da ANVISA. Já o PGRSCC é para construção civil, atendendo à Resolução CONAMA 307. Desenvolvemos cada plano conforme as exigências do seu segmento.',
  },
  {
    id: '4',
    question: 'Preciso renovar minhas licenças periodicamente?',
    answer:
      'Sim, muitas licenças ambientais têm validade determinada e exigem renovação. Oferecemos serviço de monitoramento e gestão de prazos, notificando você com antecedência e cuidando de todo o processo de renovação para evitar qualquer irregularidade ou multa por atraso.',
  },
  {
    id: '5',
    question: 'Como funciona a assessoria ambiental mensal?',
    answer:
      'É um serviço contínuo onde nossa equipe fica à disposição para suporte técnico, atualizações legislativas, resolução de dúvidas e acompanhamento da conformidade ambiental da sua empresa. Ideal para quem busca tranquilidade e prevenção, com um custo fixo mensal que otimiza seus investimentos em compliance ambiental.',
  },
]

export const metadataContact: Metadata = {
  // ----- TITLE -----
  title: 'Contato',

  // ----- DEFAULT DESCRIPTION -----
  description: `Entre em contato com a LUMIA. Telefone/WhatsApp ${contactInfo[0].label}, e-mail ${contactInfo[1].label} e horário de atendimento: ${contactInfo[2].label}. Fale com um especialista agora!`,

  // ----- ROBOTS (indexing) -----
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://lumia.eng.br/Contact',
  },

  // ----- OPEN GRAPH (Facebook, LinkedIn, Instagram, WhatsApp) -----
  openGraph: {
    title: 'FAle conosco',
    description:
      'Estamos prontos para atender você. Telefone, WhatsApp, e-mail e redes sociais. Respondemos rapidamente!',

    images: [
      {
        url: '/contact-og-image.png',
        width: 630,
        height: 1200,
        alt: `Fale com a Lumia`,
      },
    ],
  },

  // ----- TWITTER CARD -----
  twitter: {
    card: 'summary_large_image',
    images: ['/contact-og-image.png'],
  },

  // ----- OTHERS METADADOS ÚTEIS -----
  keywords:
    'sobre a lumia, engenheira ambiental, kethilyn freitas xavier, engenheiro civil fabricio cardoso, consultoria ambiental, regularização de imóveis, segurança contra incêndio, são paulo',

  authors: [{ name: 'LUMIA' }],
}

export const jsonLdContact = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ContactPage',
      name: 'Contato LUMIA',
      description: 'Página de contato da LUMIA Consultoria e Engenharia',
      url: 'https://lumia.eng.br/contact',
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
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: '+55-11-94226-5492',
          contactType: 'customer service',
          areaServed: 'BR',
          availableLanguage: 'Portuguese',
        },
        {
          '@type': 'ContactPoint',
          email: 'contato@lumia.eng.br',
          contactType: 'customer service',
          areaServed: 'BR',
          availableLanguage: 'Portuguese',
        },
      ],
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'São Paulo',
        addressRegion: 'SP',
        addressCountry: 'BR',
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: FAQQuestionsContent.map((q) => ({
        '@type': 'Question',
        name: q.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: q.answer,
        },
      })),
    },
  ],
}
