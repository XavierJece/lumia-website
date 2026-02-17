import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Script from 'next/script'
import { stripMarkdown } from '~/shared/components/atoms/ui/text'
import {
  solutionsCategoryContent,
  solutionsServiceContent,
} from '~/shared/data/solutionContent'
import { generateServiceMetadata } from '~/shared/utils/metadata'
import { slugFy } from '~/shared/utils/string'
import * as C from './components'

interface ISolutionsPageProps {
  params: { slug: string }
}

export async function generateStaticParams() {
  return solutionsServiceContent.map((solution) => ({
    slug: slugFy(solution.title),
  }))
}

export async function generateMetadata({
  params,
}: ISolutionsPageProps): Promise<Metadata> {
  const solution = solutionsServiceContent.find(
    (s) => slugFy(s.title) === params.slug,
  )

  if (!solution) {
    return {
      title: 'Solução não encontrada',
    }
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://lumia.eng.br'
  const { title, openGraphTitle } = generateServiceMetadata(solution.title)
  const description =
    stripMarkdown(solution.description).slice(0, 160).trim() ||
    'Conheça esta solução completa para o seu negócio.'

  const ogImageUrl = `${siteUrl}/solutions/${params.slug}/opengraph-image` // URL da imagem dinâmica
  const fallbackImage = solution.coverURL || `${siteUrl}/og-image.png`

  return {
    title,
    description,
    openGraph: {
      title: openGraphTitle,
      description,
      url: `${siteUrl}/solutions/${params.slug}`,
      images: [ogImageUrl, fallbackImage],
    },
    twitter: {
      card: 'summary_large_image',
      images: [ogImageUrl, fallbackImage],
    },
    keywords: `${solution.title}, ${solution.keywords}, regularização ambiental, soluções LUMIA`,
    alternates: {
      canonical: `${siteUrl}/solutions/${params.slug}`,
    },
  }
}

export default function SolutionsPage({ params }: ISolutionsPageProps) {
  const { slug } = params

  const solution = solutionsServiceContent.find((s) => slugFy(s.title) === slug)

  if (!solution) {
    notFound()
  }

  const category = solutionsCategoryContent.find(
    (c) => c.slug === solution.categorySlug,
  )!

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://lumia.eng.br'

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: solution.title,
        description: solution.description,
        provider: {
          '@type': 'Organization',
          name: 'LUMIA Consultoria e Engenharia',
          url: siteUrl,
          logo: `${siteUrl}/logos/simple-color-logo.svg`,
          sameAs: [
            'https://www.instagram.com/lumia.eng',
            'https://www.linkedin.com/company/lumia-eng',
          ],
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'São Paulo',
            addressRegion: 'SP',
            addressCountry: 'BR',
          },
        },
        areaServed: {
          '@type': 'Country',
          name: 'Brasil',
        },
        serviceType: category.title,
        offers: {
          '@type': 'Offer',
          priceSpecification: {
            '@type': 'PriceSpecification',
            priceCurrency: 'BRL',
            price: 'Sob consulta',
          },
          availability: 'https://schema.org/OnlineOnly',
        },
        url: `${siteUrl}/solutions/${params.slug}`,
        image: solution.coverURL || `${siteUrl}/og-image.png`,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: siteUrl,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Soluções',
            item: `${siteUrl}/solutions`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: solution.title,
            item: `${siteUrl}/solutions/${params.slug}`,
          },
        ],
      },
    ],
  }

  return (
    <>
      <Script
        id="schema-solution"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <C.HeroSection
        category={{
          icon: category.icon,
          quickLinks: category.quickLinks,
        }}
        solution={{
          title: solution.title,
          icon: solution.icon,
          subtitle: solution.subtitle,
        }}
      />
      <C.GallerySection
        imagensURL={solution.coverURL ? [solution.coverURL] : undefined}
      />
      <C.ContentSection
        solution={{
          title: solution.title,
          businessAdvantages: solution.businessAdvantages,
          description: solution.description,
        }}
      />
      {/* <C.ProcessSection
        solution={{
          process: solution.process,
        }}
      /> */}
      <C.CtaSection />
    </>
  )
}
