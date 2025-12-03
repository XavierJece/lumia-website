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
  description: 'Melhor serviço para você!',
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
      lang="pt-br"
    >
      <body className="flex flex-col min-h-screen">
        <Header content={headerContent} />
        <main className="flex-1">{children}</main>
        <Footer content={footerContent} />
      </body>
    </html>
  )
}
