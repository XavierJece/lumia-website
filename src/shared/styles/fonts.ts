import { Maven_Pro, Montserrat } from 'next/font/google'

// Maven Pro - Primary font for headings
export const mavenFonts = Maven_Pro({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-maven',
  display: 'swap',
})

// Montserrat - Secondary font for body text and interface
export const montserratFonts = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-montserrat',
  display: 'swap',
})
