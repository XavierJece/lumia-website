import { NextRequest, NextResponse } from 'next/server'
import { describe, expect, it, vi, beforeEach } from 'vitest'
import {
  getAllBlogPosts,
  getBlogPostByUid,
  handlePrismicPreview,
  PRISMIC_CACHE_TAGS,
} from '~/shared/lib/prismicio'

const prismicMocks = vi.hoisted(() => ({
  createClient: vi.fn(),
  getAllByType: vi.fn(),
  getByUID: vi.fn(),
  enableAutoPreviews: vi.fn(),
  redirectToPreviewURL: vi.fn(),
}))

vi.mock('@prismicio/client', () => ({
  createClient: prismicMocks.createClient,
}))

vi.mock('@prismicio/next', () => ({
  enableAutoPreviews: prismicMocks.enableAutoPreviews,
  redirectToPreviewURL: prismicMocks.redirectToPreviewURL,
}))

describe('prismicio helpers', () => {
  beforeEach(() => {
    vi.resetAllMocks()
    prismicMocks.createClient.mockReturnValue({
      getAllByType: prismicMocks.getAllByType,
      getByUID: prismicMocks.getByUID,
    })
    prismicMocks.getAllByType.mockResolvedValue([])
    prismicMocks.getByUID.mockResolvedValue(null)
    vi.spyOn(console, 'warn').mockImplementation(() => {})
  })

  it('fetches blog posts with cache tags and ordering', async () => {
    await getAllBlogPosts({ page: 2, pageSize: 5 })

    expect(prismicMocks.getAllByType).toHaveBeenCalledWith(
      'blog_post',
      expect.objectContaining({
        page: 2,
        pageSize: 5,
        fetchOptions: { next: { tags: PRISMIC_CACHE_TAGS.blog } },
      }),
    )
  })

  it('returns a blog post by uid with cache tags', async () => {
    const post = { uid: 'my-post' }
    prismicMocks.getByUID.mockResolvedValueOnce(post)

    const result = await getBlogPostByUid('my-post')

    expect(result).toEqual(post)
    expect(prismicMocks.getByUID).toHaveBeenCalledWith(
      'blog_post',
      'my-post',
      expect.objectContaining({
        fetchOptions: { next: { tags: PRISMIC_CACHE_TAGS.blog } },
      }),
    )
  })

  it('returns null when blog post is missing', async () => {
    prismicMocks.getByUID.mockRejectedValueOnce(new Error('not found'))

    const result = await getBlogPostByUid('missing')

    expect(result).toBeNull()
  })

  it('delegates preview handling to redirectToPreviewURL', async () => {
    const request = new NextRequest('https://example.com/preview')
    const redirectResponse = NextResponse.redirect('https://example.com/post')
    prismicMocks.redirectToPreviewURL.mockResolvedValueOnce(redirectResponse)

    const response = await handlePrismicPreview(request)

    expect(prismicMocks.redirectToPreviewURL).toHaveBeenCalled()
    expect(response.headers.get('location')).toBe('https://example.com/post')
  })
})
