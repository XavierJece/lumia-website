import { ImageResponse } from 'next/og'
import { colors } from '~/shared/styles/colors'
import { fetchGoogleFont } from '~/shared/styles/fonts'

// Image metadata
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

// Image generation
export default async function Image() {
  const [mavenBold, mavenRegular, montserratRegular] = await Promise.all([
    fetchGoogleFont('Maven Pro', 700),
    fetchGoogleFont('Maven Pro', 400),
    fetchGoogleFont('Montserrat', 400),
  ])

  return new ImageResponse(
    (
      <div
        style={{
          // background: `linear-gradient(
          //   to bottom,
          //   rgba(16, 118, 62, 0.5),
          //   rgba(0, 58, 51, 0.5)
          // )`,
          background: colors.green[900],
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          fontFamily: 'mavenFonts, montserratFonts, sans-serif',
        }}
      >
        <img
          src="https://www.lumia.eng.br/contact-og-image.png"
          alt=""
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'contain',
          }}
        />
        {/* Gradient Overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: `linear-gradient(
                to bottom,
                rgba(16, 118, 62, 0.6),
                rgba(0, 58, 51, 0.8)
              )`,
          }}
        />
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            padding: '40px',
          }}
        >
          <img
            src="https://www.lumia.eng.br/logos/simple-white-logo.svg"
            alt=""
            style={{
              position: 'absolute',
              width: '160px',
              height: '46px',
              top: 40,
              left: 40,
            }}
          />
          <header
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              gap: '16px',
              flex: '1 1 0%',
            }}
          >
            <h1
              style={{
                fontSize: '60px',
                fontFamily: 'Maven Pro, sans-serif',
                fontWeight: 700,
                color: colors['white-essential'],
                lineHeight: '1',
                letterSpacing: '-2px',
                textTransform: 'uppercase',
                textShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
                margin: 0,
              }}
            >
              FALE CONOSCO
            </h1>
            <h2
              style={{
                fontSize: '40px',
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 400,
                color: colors['light-yellow'],
                letterSpacing: '0.5px',
                marginTop: '-5px',
                margin: 0,
              }}
            >
              Atendimento rápido e personalizado
            </h2>
          </header>
          <footer
            style={{
              width: '100%',
              height: 'auto',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
            }}
          >
            <span
              style={{
                fontSize: '24px',
                fontWeight: 400,
                color: colors['white-essential'],
                letterSpacing: '0.8px',
                marginTop: '5px',
              }}
            >
              lumia.eng.br
            </span>
          </footer>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Maven Pro',
          data: mavenBold,
          weight: 700,
          style: 'normal',
        },
        {
          name: 'Maven Pro',
          data: mavenRegular,
          weight: 400,
          style: 'normal',
        },
        {
          name: 'Montserrat',
          data: montserratRegular,
          weight: 400,
          style: 'normal',
        },
      ],
      // headers: {
      // }
    },
  )
}
