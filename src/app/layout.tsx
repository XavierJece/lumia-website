import type { Metadata } from 'next'
import { TooltipProvider } from '~/shared/components/atoms/ui/tooltip'
import Footer from '~/shared/components/Footer/Footer'
import Header from '~/shared/components/Header/Header'
import { heroContent } from '~/shared/data/homeContent'
import { mavenFonts, montserratFonts } from '~/shared/styles/fonts'
import '~/shared/styles/globals.css'

export const metadata: Metadata = {
  // ----- BASE URL -----
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'https://lumia.eng.br',
  ),

  // ----- TITLE -----
  title: {
    template: '%s | LUMIA',
    default: `LUMIA - ${heroContent.tagline}`,
  },

  // ----- DEFAULT DESCRIPTION -----
  description: heroContent.description,

  // ----- ROBOTS (indexing) -----
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // ----- OPEN GRAPH (Facebook, LinkedIn, Instagram, WhatsApp) -----
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: 'LUMIA',
    title: {
      default: `LUMIA - ${heroContent.tagline}`,
      template: '%s | LUMIA',
    },
    description: heroContent.description,
    // Default image for sharing – use PNG/JPEG with resolution of 1200x630px

    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: `LUMIA - ${heroContent.tagline}`,
      },
    ],
  },

  // ----- TWITTER CARD -----
  twitter: {
    card: 'summary_large_image',
    site: '@lumia.eng',
    creator: '@lumia.eng',
    images: ['/og-image.png'],
  },

  // ----- ICONS (favicon, apple touch, etc.) -----
  icons: {
    icon: [
      { url: '/icons/icon-180.png', type: 'image/svg+xml' },
      { url: '/icons/icon-192.png', type: 'image/png', sizes: '192x192' },
      { url: '/icons/icon-512.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: [
      { url: '/icons/icon-180.png', sizes: '180x180', type: 'image/png' },
    ],
  },

  // ----- OTHERS METADADOS ÚTEIS -----
  category:
    'Consultoria ambiental, sanitária e de engenharia para regularização de empresas, indústrias e comércios',
  classification:
    'Serviços de consultoria ambiental e sanitária; Engenharia ambiental, sanitária e civil; Regularização de indústrias e comércios; Licenciamento ambiental, sanitário e de bombeiros; Gestão de resíduos e estudos ambientais',
  keywords: [
    'soluções ambientais',
    'gestão de resíduos',
    'sustentabilidade',
    heroContent.tagline,
    'Lumia Consultoria e Engenharia',
    'consultoria ambiental em São Paulo',
    'engenharia ambiental e sanitária',
    'regularização ambiental de empresas',
    'licença ambiental para indústrias',
    'licença sanitária para comércios',
    'licenciamento IBAMA',
    'licença do corpo de bombeiros',
    'regularização de imóveis comerciais',
    'gestão de resíduos industriais',
    'estudos e laudos ambientais',
    'projetos ambientais personalizados',
    'conformidade com normas ambientais',
    'regularização de empresas e comércios',
    'consultoria para vigilância sanitária',
    'segurança contra incêndio em empresas',
    'engenharia para regularização de empreendimentos',
    'adequação legal de indústrias e comércios',
    'consultoria técnica para regularização',
    'soluções completas em conformidade legal',
  ],
  authors: [{ name: 'LUMIA', url: 'https://lumia.eng.br' }],
  publisher: 'LUMIA',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  // ----- APPLE WEB APP -----
  appleWebApp: {
    capable: true,
    title: 'LUMIA',
    statusBarStyle: 'black-translucent',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      className={`${mavenFonts.variable} ${montserratFonts.variable}`}
      lang="pt-BR"
    >
      <body className="flex min-h-screen flex-col bg-white-essential text-neutral-900 antialiased">
        <Header />
        <main id="main-content" className="flex-1 mx-auto w-full pt-16 ">
          <TooltipProvider>{children}</TooltipProvider>
        </main>
        <Footer />
      </body>
    </html>
  )
}
