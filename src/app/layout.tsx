import type { Metadata } from 'next'
import '~/shared/styles/colors.css'
import { mavenFonts, montserratFonts } from '~/shared/styles/fonts'
import '~/shared/styles/globals.css'
import { Header } from '~/shared/components/Header/Header'
import { Footer } from '~/shared/components/Footer/Footer'
import { headerContent } from '~/shared/data/headerContent'
import { footerContent } from '~/shared/data/footerContent'

export const metadata: Metadata = {
  metadataBase: new URL('https://lumia.com.br'),
  title: {
    template: '%s | LUMIA',
    default: 'LUMIA',
  },
  description:
    'Consultoria e engenharia ambiental com foco em alta performance, compliance e agilidade.',
  openGraph: {
    images: '/opengraph-image.png',
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
        <a className="skip-link" href="#main-content">
          Pular para o conteúdo principal
        </a>
        <Header content={headerContent} />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer content={footerContent} />
      </body>
    </html>
  )
}
