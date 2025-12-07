import { exitPreview } from '@prismicio/next'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    return await exitPreview()
  } catch (error) {
    console.error('Prismic exit preview failed', { error })
    return NextResponse.json(
      { message: 'Unable to exit preview' },
      { status: 400 },
    )
  }
}
