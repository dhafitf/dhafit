import { NextResponse } from 'next/server'
import { getNowPlaying } from '~/libs/spotify'

export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    return NextResponse.json(await getNowPlaying())
  } catch (error) {
    console.error(error)
    return NextResponse.json({ success: false, message: 'Internal Server Error' }, { status: 500 })
  }
}
