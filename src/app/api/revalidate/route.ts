import { revalidatePath, revalidateTag } from 'next/cache'
import { NextResponse, type NextRequest } from 'next/server'
import { PRISMIC_CACHE_TAGS } from '~/shared/lib/prismicio'

const { default: DEFAULT_TAGS } = PRISMIC_CACHE_TAGS

const UNAUTHORIZED_RESPONSE = NextResponse.json(
  { message: 'Unauthorized' },
  { status: 401 },
)

export async function POST(request: NextRequest) {
  const secret = process.env.PRISMIC_WEBHOOK_SECRET
  const providedSecret = request.nextUrl.searchParams.get('secret')

  if (secret && secret !== providedSecret) {
    return UNAUTHORIZED_RESPONSE
  }

  let payload: unknown

  try {
    payload = await request.json()
  } catch (error) {
    console.warn('Prismic revalidate: unable to parse payload', { error })
  }

  const paths = Array.isArray((payload as { paths?: string[] })?.paths)
    ? ((payload as { paths?: string[] }).paths ?? [])
    : []

  DEFAULT_TAGS.forEach((tag) => {
    revalidateTag(tag)
  })

  paths.forEach((path) => {
    if (typeof path === 'string' && path.trim()) {
      revalidatePath(path)
    }
  })

  return NextResponse.json({
    revalidated: true,
    pathsRevalidated: paths,
    timestamp: Date.now(),
  })
}
