import * as prismic from '@prismicio/client'
import { enableAutoPreviews, redirectToPreviewURL } from '@prismicio/next'
import type { NextRequest } from 'next/server'
import type { IBlogPost, IServicePage } from '~/shared/types/prismic'

const repositoryName = process.env.PRISMIC_REPOSITORY_NAME || 'lumia-eng'
const accessToken = process.env.PRISMIC_ACCESS_TOKEN

const DEFAULT_TAGS = ['prismic']
const BLOG_TAGS = [...DEFAULT_TAGS, 'prismic:blog_post']
const SERVICE_TAGS = [...DEFAULT_TAGS, 'prismic:service_page']

export const PRISMIC_CACHE_TAGS = {
  default: DEFAULT_TAGS,
  blog: BLOG_TAGS,
  service: SERVICE_TAGS,
} as const

export const createPrismicClient = (config: prismic.ClientConfig = {}) => {
  const client = prismic.createClient(repositoryName, {
    accessToken,
    ...config,
  })

  const request = (config as { req?: NextRequest })?.req

  if (request) {
    enableAutoPreviews({ client, req: request })
  }

  return client
}

export async function getAllBlogPosts(options?: {
  pageSize?: number
  page?: number
}) {
  const client = createPrismicClient()
  const pageSize = options?.pageSize ?? 10
  const page = options?.page ?? 1

  const posts = await client.getAllByType<IBlogPost>('blog_post', {
    orderings: [
      { field: 'my.blog_post.published_date', direction: 'desc' },
      { field: 'document.first_publication_date', direction: 'desc' },
    ],
    pageSize,
    page,
    fetchOptions: {
      next: { tags: BLOG_TAGS },
    },
  })

  return posts
}

export async function getBlogPostByUid(uid: string) {
  const client = createPrismicClient()

  try {
    const post = await client.getByUID<IBlogPost>('blog_post', uid, {
      fetchOptions: {
        next: { tags: BLOG_TAGS },
      },
    })

    return post
  } catch (error) {
    console.warn('Prismic blog_post not found', { uid, error })
    return null
  }
}

export async function getServicePageByUid(uid: string) {
  const client = createPrismicClient()

  try {
    const servicePage = await client.getByUID<IServicePage>(
      'service_page',
      uid,
      {
        fetchOptions: {
          next: { tags: SERVICE_TAGS },
        },
      },
    )

    return servicePage
  } catch (error) {
    console.warn('Prismic service_page not found', { uid, error })
    return null
  }
}

export async function handlePrismicPreview(request: NextRequest) {
  const client = createPrismicClient()
  return redirectToPreviewURL({ client, request })
}
