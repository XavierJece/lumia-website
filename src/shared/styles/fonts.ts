import { Inter } from 'next/font/google'
import localFont from 'next/font/local'

export const aristaProFonts = localFont({
  src: [
    {
      path: 'fonts/AristaPro-Fat.otf',
      weight: '900',
      style: 'normal',
    },
    {
      path: 'fonts/AristaPro-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: 'fonts/AristaPro-Light.otf',
      weight: '500',
      style: 'normal',
    },
  ],
  variable: '--font-arista-pro',
})

export const aristaProAlternateFonts = localFont({
  src: [
    {
      path: 'fonts/AristaProAlternate-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: 'fonts/AristaProAlternate-Fat.otf',
      weight: '900',
      style: 'normal',
    },
    {
      path: 'fonts/AristaProAlternate-Light.otf',
      weight: '500',
      style: 'normal',
    },
  ],
  variable: '--font-arista-pro-alternate',
})

// Importando a fonte do Google
export const interFonts = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})
