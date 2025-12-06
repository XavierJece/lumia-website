import { Maven_Pro as MavenPro, Montserrat } from 'next/font/google'

// Maven Pro - Primary font for headings
export const mavenFonts = MavenPro({
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
