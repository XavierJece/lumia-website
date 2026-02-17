import Script from 'next/script'
import * as C from './components'

const jsonLdHome = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': 'https://www.lumia.eng.br/#organization',
  name: 'Lumia Consultoria e Engenharia',
  alternateName: 'LUMIA',
  url: 'https://www.lumia.eng.br',
  logo: 'https://www.lumia.eng.br/logo.png',
  description:
    'Atuação completa na regularização de indústrias e comércios, garantindo conformidade com as normas ambientais, vigilância sanitária e segurança contra incêndio e liberação legal do estabelecimento. Expertise Técnica com Atendimento Humanizado.',
  telephone: '+5511942265492',
  email: 'contato@lumia.eng.br',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'São Paulo',
    addressRegion: 'SP',
    addressCountry: 'BR',
  },
  areaServed: 'Brazil',
  serviceArea: {
    '@type': 'AdministrativeArea',
    name: 'Brazil',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Serviços de Regularização e Engenharia',
    itemListElement: [
      { '@type': 'Service', name: 'Desenvolvimento de Projetos Ambientais' },
      { '@type': 'Service', name: 'Gestão de Resíduos' },
      { '@type': 'Service', name: 'Licença Ambiental' },
      { '@type': 'Service', name: 'Licença Sanitária' },
      { '@type': 'Service', name: 'Regularização IBAMA' },
      { '@type': 'Service', name: 'Estudos e Laudos' },
      { '@type': 'Service', name: 'Licença Bombeiros' },
      { '@type': 'Service', name: 'Regularização de Imóveis' },
      { '@type': 'Service', name: 'Assessoria Técnica' },
    ],
  },
}

export default function Home() {
  return (
    <>
      <Script
        id="schema-about"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdHome) }}
      />
      <C.HeroSection />
      <C.AboutSummarySection />
      <C.SolutionSummarySection />
      <C.DifferentialsSection />
      <C.CTASection />
    </>
  )
}
