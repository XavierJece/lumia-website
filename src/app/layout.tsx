import type { Metadata } from 'next'
import '~/shared/styles/colors.css'
import {
  aristaProAlternateFonts,
  aristaProFonts,
  interFonts,
} from '~/shared/styles/fonts'
import '~/shared/styles/globals.css'

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
      className={`${aristaProAlternateFonts.variable} ${aristaProFonts.variable} ${interFonts.variable}`}
      lang="pt-br"
    >
      <body>{children}</body>
    </html>
  )
}
