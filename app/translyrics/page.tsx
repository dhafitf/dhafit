import type { Metadata } from 'next'

import TranslyricsListSection from '@/sections/translyrics-list-section'
import { getTrackLyrics } from '~/libs/lyrics'

export const metadata: Metadata = {
  title: 'Translyrics',
  description: "A collection of translated lyrics that I've written for various tracks.",
}

interface TranslyricsPageProps {
  searchParams: Promise<{ artist?: string }>
}

export default async function TranslyricsPage(props: TranslyricsPageProps) {
  const { artist } = await props.searchParams
  const initialArtist = artist ? decodeURIComponent(artist) : undefined

  const tracks = getTrackLyrics().sort(
    (a, b) => new Date(b.updatedAt ?? 0).getTime() - new Date(a.updatedAt ?? 0).getTime(),
  )

  return (
    <div className='mx-auto max-w-7xl px-6 md:px-12 py-12'>
      <div className='mb-8 sm:mb-10'>
        <div className='text-accent-400 mb-3 font-mono text-xs tracking-widest uppercase'>
          TRANSLATION
        </div>
        <h1 className='text-foreground m-0 mb-4 text-5xl leading-none font-medium tracking-[-0.03em]'>
          Translyrics.
        </h1>
        <p className='text-fg-3 max-w-[60ch] text-base leading-[1.6]'>
          Random Japanese songs translated into Indonesian.
        </p>
      </div>
      <TranslyricsListSection tracks={tracks} initialArtist={initialArtist} />
    </div>
  )
}
