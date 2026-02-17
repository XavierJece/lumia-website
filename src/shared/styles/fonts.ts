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

export async function fetchGoogleFont(
  family: string,
  weight: number,
): Promise<ArrayBuffer> {
  // Google Fonts CSS API returns a CSS file with @font-face rules pointing to the actual font file.
  const cssUrl = `https://fonts.googleapis.com/css2?family=${family}:wght@${weight}&display=swap`
  const css = await fetch(cssUrl).then((res) => res.text())

  // Extract the font URL from the CSS (first src: url(...))
  const match = css.match(/src: url\((.+?)\)/)
  if (!match)
    throw new Error(`Could not extract font URL for ${family} weight ${weight}`)

  const fontUrl = match[1]
  const fontData = await fetch(fontUrl).then((res) => res.arrayBuffer())
  return fontData
}
