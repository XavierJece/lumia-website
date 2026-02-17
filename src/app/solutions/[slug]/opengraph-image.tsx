import { ImageResponse } from 'next/og'
import { solutionsServiceContent } from '~/shared/data/solutionContent'
import { slugFy } from '~/shared/utils/string'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

interface Props {
  params: { slug: string }
}

export default async function Image({ params }: Props) {
  const solution = solutionsServiceContent.find(
    (s) => slugFy(s.title) === params.slug,
  )

  const title = solution?.title || 'Solução LUMIA'
  const coverUrl = solution?.coverURL || 'og-image.png' // fallback

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          backgroundColor: '#0a3b2e', // tom escuro de fallback
        }}
      >
        {/* Imagem de fundo com overlay verde escuro */}
        <img
          src={coverUrl}
          alt=""
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'brightness(0.5)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 80, 60, 0.6)', // verde semi-transparente
          }}
        />

        {/* Logo no canto superior esquerdo */}
        <div
          style={{
            position: 'absolute',
            top: 40,
            left: 40,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <img
            src="https://lumia.eng.br/logos/simple-white-logo.svg"
            alt="LUMIA"
            width={120}
            height={40}
            style={{ objectFit: 'contain' }}
          />
        </div>

        {/* Título centralizado */}
        <div
          style={{
            maxWidth: '1000px',
            padding: '20px 40px',
            textAlign: 'center',
            zIndex: 10,
          }}
        >
          <h1
            style={{
              fontSize: '64px',
              fontWeight: 'bold',
              color: 'white',
              textShadow: '2px 2px 8px rgba(0,0,0,0.7)',
              lineHeight: 1.2,
              margin: 0,
              fontFamily: 'sans-serif',
            }}
          >
            {title}
          </h1>
        </div>
      </div>
    ),
    {
      ...size,
    },
  )
}
