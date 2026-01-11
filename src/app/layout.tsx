import type { Metadata } from 'next'
import Footer from '~/shared/components/Footer/Footer'
import Header from '~/shared/components/Header/Header'
import { mavenFonts, montserratFonts } from '~/shared/styles/fonts'
import '~/shared/styles/globals.css'

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
        <Header />
        <main id="main-content" className="flex-1 mx-auto w-full pt-16 ">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
