import { NextResponse, type NextRequest } from 'next/server'
import { handlePrismicPreview } from '~/shared/lib/prismicio'

export async function GET(request: NextRequest) {
  try {
    return await handlePrismicPreview(request)
  } catch (error) {
    console.error('Prismic preview failed', { error })
    return NextResponse.json(
      { message: 'Preview not available' },
      { status: 400 },
    )
  }
}
