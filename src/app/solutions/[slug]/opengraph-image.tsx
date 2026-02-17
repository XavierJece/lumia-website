// app/solutions/[slug]/opengraph-image.tsx
import { ImageResponse } from 'next/og'
import { solutionsServiceContent } from '~/shared/data/solutionContent'
import { slugFy } from '~/shared/utils/string'

export const runtime = 'edge' // optional, but recommended for performance

export default async function Image({ params }: { params: { slug: string } }) {
  const { slug } = params

  // Find the matching solution
  const solution = solutionsServiceContent.find((s) => slugFy(s.title) === slug)

  if (!solution) {
    // Return a fallback image or a 404 (you can also return a default ImageResponse)
    return new ImageResponse(<div>Not found</div>, { status: 404 })
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          position: 'relative',
          fontFamily: 'Inter, sans-serif',
        }}
      >
        {/* Background Image */}
        <img
          src={solution.coverURL}
          alt=""
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
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
            background:
              'linear-gradient(135deg, rgba(16,118,62,0.9) 0%, rgba(0,58,51,0.9) 100%)',
          }}
        />

        {/* Content Container */}
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
          {/* Top Left Logo */}
          <div style={{ position: 'absolute', top: 40, left: 40 }}>
            <svg width="60" height="60" viewBox="0 0 24 24" fill="white">
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="white"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M12 8 L12 16 M8 12 L16 12"
                stroke="white"
                strokeWidth="2"
              />
            </svg>
          </div>

          {/* Center Title */}
          <div
            style={{
              fontSize: 80,
              fontWeight: 800,
              letterSpacing: '-0.02em',
              textAlign: 'center',
              lineHeight: 1.2,
              maxWidth: '1000px',
            }}
          >
            {solution.title}
          </div>

          {/* Subtitle */}
          <div
            style={{
              fontSize: 36,
              color: '#d2d658',
              marginTop: 16,
              textAlign: 'center',
            }}
          >
            CTR text | SEO TEXT
          </div>

          {/* Bottom Center */}
          <div
            style={{
              position: 'absolute',
              bottom: 40,
              fontSize: 24,
              color: 'white',
              opacity: 0.9,
            }}
          >
            lumia.eng.br
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      // If you need a custom font, add the fonts array here
      // fonts: [...]
    },
  )
}
