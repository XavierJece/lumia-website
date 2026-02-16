import { Factory, ShoppingBag, Stethoscope } from 'lucide-react'
import { Metadata } from 'next'

export interface IProject {
  icon: React.ElementType
  category: string
  title: string
  problem: string
  solution: string
  result: string
  testimonial?: string
}

export const projects: IProject[] = [
  {
    icon: Factory,
    category: 'Indústria Alimentícia - Torrefação e Moagem de Café',
    title: 'Regularização Sanitária',
    problem:
      'Indústria de torrefação e moagem de café em fase inicial de operação.',
    solution:
      'Elaboração de LTA - Laudo Técnico de Avaliação para regularização junto à Vigilância Sanitária Municipal, incluindo diagnóstico de instalações, avaliação do processo produtivo,  atendimento às exigências sanitárias.',
    result:
      'LTA aprovado para obtenção da licença sanitária em 90 dias, permitindo a regularização da atividade.',
    testimonial: `Confesso que a parte burocrária da abertura da torrefação me deixou bem perdido. A Kethilyn nos guiou com clareza.`,
  },
  {
    icon: Stethoscope,
    category: 'Farmácia de Manipulação',
    title: 'Regularização Sanitária',
    problem:
      'Farmácia de manipulação em fase de instalação, sem licença sanitária, necessidade de aprovação prévia junto à Vigilância Sanitária Municipal para início das atividades.',
    solution:
      'Elaboração de LTA - Laudo Técnico de Avaliação para regularização.',
    result:
      'Aprovação do LTA e obtenção da licença sanitária, viabilizando o início das operações da farmácia em conformidade com os requisitos sanitários.',
    testimonial: '',
  },
  {
    icon: ShoppingBag,
    category: 'Rede de Supermercados',
    title: 'Gestão de Resíduos',
    problem:
      'Supermercado sem Plano de Gerenciamento de Resíduos, solicitação em condicionante do alvará da prefeitura.',
    solution: 'Elaboração do PGRS específico para supermercados.',
    result:
      'Atendimento ao requisito obrigatório do alvará de funcionamento, prevenindo multas ou embargo do supermercado.',
  },
  {
    icon: Factory,
    category: 'Indústria de Plásticos',
    title: 'Regularização Ambiental Federal - IBAMA',
    problem:
      'Necessidade de RAPP para emissão do Certificado de Regularidade - CR IBAMA.',
    solution:
      'Elaboração e envio do Relatório de Anual de Atividades Potencialmente Poluidoras - RAPP para regularização federal.',
    result:
      'Regularização completa junto ao IBAMA, permitindo operação nacional.',
    testimonial:
      'Para nossa indústria de plásticos, o IBAMA era bicho de sete cabeças, aqui na empresa ninguém conseguia resolver. Com ajuda da Kethilyn, conseguimos regularizar em pouco tempo.',
  },
]

export const metadataProjects: Metadata = {
  // ----- TITLE -----
  title: 'Projetos e Cases de Sucesso',

  // ----- DEFAULT DESCRIPTION -----
  description: `Conheça cases reais da LUMIA: regularização sanitária em indústria alimentícia, farmácia de manipulação, gestão de resíduos em supermercados e regularização IBAMA. Resultados comprovados.`,

  // ----- ROBOTS (indexing) -----
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://lumia.eng.br/projects',
  },

  // ----- OPEN GRAPH (Facebook, LinkedIn, Instagram, WhatsApp) -----
  openGraph: {
    title: 'Cases de Sucesso',
    description:
      'Veja como ajudamos nossos clientes a obter licenças, regularizar atividades e crescer com segurança. Resultados reais em diversos segmentos.',

    images: [
      {
        url: '/projects-og-image.png',
        width: 1200,
        height: 630,
        alt: `Projetos LUMIA`,
      },
    ],
  },

  // ----- TWITTER CARD -----
  twitter: {
    card: 'summary_large_image',
    images: ['/projects-og-image.png'],
  },

  // ----- OTHERS METADADOS ÚTEIS -----
  keywords:
    'projetos lumia, cases de sucesso, regularização sanitária, indústria alimentícia, farmácia de manipulação, gestão de resíduos, supermercados, rapp ibama, licenciamento ambiental, são paulo',

  authors: [{ name: 'LUMIA' }],
}

export const jsonLdProjects = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'CollectionPage',
      name: 'Projetos e Cases de Sucesso da LUMIA',
      description:
        'Conheça alguns dos projetos realizados pela LUMIA e os resultados alcançados para nossos clientes.',
      url: 'https://lumia.eng.br/projects',
      mainEntity: {
        '@type': 'ItemList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            item: {
              '@type': 'CreativeWork',
              name: 'Regularização Sanitária - Indústria Alimentícia',
              description:
                'Torrefação e moagem de café: elaboração de LTA para regularização junto à Vigilância Sanitária Municipal.',
              result:
                'LTA aprovado para obtenção da licença sanitária em 90 dias.',
            },
          },
          {
            '@type': 'ListItem',
            position: 2,
            item: {
              '@type': 'CreativeWork',
              name: 'Regularização Sanitária - Farmácia de Manipulação',
              description:
                'Farmácia em fase de instalação: elaboração de LTA para aprovação prévia junto à Vigilância Sanitária.',
              result:
                'Aprovação do LTA e obtenção da licença sanitária, viabilizando o início das operações.',
            },
          },
          {
            '@type': 'ListItem',
            position: 3,
            item: {
              '@type': 'CreativeWork',
              name: 'Gestão de Resíduos - Rede de Supermercados',
              description:
                'Elaboração do Plano de Gerenciamento de Resíduos (PGRS) para atender condicionante do alvará da prefeitura.',
              result:
                'Atendimento ao requisito obrigatório, prevenindo multas ou embargo.',
            },
          },
          {
            '@type': 'ListItem',
            position: 4,
            item: {
              '@type': 'CreativeWork',
              name: 'Regularização IBAMA - Indústria de Plásticos',
              description:
                'Elaboração e envio do Relatório Anual de Atividades Potencialmente Poluidoras (RAPP).',
              result:
                'Regularização completa junto ao IBAMA, permitindo operação nacional.',
            },
          },
        ],
      },
    },
    {
      '@type': 'Review',
      itemReviewed: {
        '@type': 'Organization',
        name: 'Indústria de Plásticos',
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: 5,
        bestRating: 5,
      },
      author: {
        '@type': 'Person',
        name: 'Cliente da Indústria de Plásticos',
      },
      reviewBody:
        'Para nossa indústria de plásticos, o IBAMA era bicho de sete cabeças, aqui na empresa ninguém conseguia resolver. Com ajuda da Kethilyn, conseguimos regularizar em pouco tempo.',
    },
  ],
}
