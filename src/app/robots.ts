// app/robots.ts
import { MetadataRoute } from 'next'

function getBaseUrl(): string {
  const url =
    process.env.SITE_URL || process.env.VERCEL_URL || 'https://lumia.eng.br'
  if (!url) {
    throw new Error('Missing SITE_URL environment variable')
  }
  return url.startsWith('http') ? url : `https://${url}`
}

export default function robots(): MetadataRoute.Robots {
  const baseUrl = getBaseUrl()

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/private', '/api', '/login', '/_next/static'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
