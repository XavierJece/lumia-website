import { describe, expect, it, vi } from 'vitest'

vi.mock('~/shared/lib/prismicio', () => ({
  getBlogPostByUid: vi.fn(),
  getAllBlogPosts: vi.fn(),
}))

import { getBlogPostByUid } from '~/shared/lib/prismicio'
import { generateMetadata } from '~/app/(blog)/[slug]/page'

describe('blog metadata generation', () => {
  it('returns SEO metadata from prismic data', async () => {
    vi.mocked(getBlogPostByUid).mockResolvedValueOnce({
      uid: 'meu-post',
      data: {
        title: 'Título padrão',
        seo_title: 'SEO Title',
        seo_description: 'Descrição SEO',
        subtitle: 'Subtitulo',
        summary: 'Resumo',
        main_image: { url: 'https://example.com/image.jpg', alt: 'img' },
        content: [],
        category: 'Licensing',
        published_date: '2025-12-07',
      },
    } as never)

    const metadata = await generateMetadata({
      params: Promise.resolve({ slug: 'meu-post' }),
    })

    expect(metadata.title).toBe('SEO Title')
    expect(metadata.description).toBe('Descrição SEO')
    expect(metadata.openGraph?.images?.[0]?.url).toBe(
      'https://example.com/image.jpg',
    )
  })

  it('falls back when post is missing', async () => {
    vi.mocked(getBlogPostByUid).mockResolvedValueOnce(null)

    const metadata = await generateMetadata({
      params: Promise.resolve({ slug: 'inexistente' }),
    })

    expect(metadata.title).toContain('não encontrado')
  })
})
