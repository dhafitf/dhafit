import type { Metadata } from 'next'

import TranslyricsListSection from '@/sections/translyrics-list-section'
import { getTrackLyrics } from '~/libs/lyrics'

export const metadata: Metadata = {
  title: 'Translation Lyrics',
  description: "A collection of translation lyrics I've written for various tracks.",
}

const TranslyricsPage = () => {
  const tracks = getTrackLyrics()
  const sortedTracks = tracks.sort(
    (a, b) => new Date(b.updatedAt!).getTime() - new Date(a.updatedAt!).getTime()
  )

  return (
    <div className='flex flex-col gap-7'>
      <div className='relative'>
        <h1 className='text-white font-bold text-3xl'>
          Translation Lyrics{' '}
          <span className='text-sm text-gray-400 italic font-normal'>(Translyrics)</span>
        </h1>
        <p className='pt-3'>
          A collection of translation lyrics I&apos;ve written for various tracks. Feel free to
          utilize the search feature below to find what you&apos;re looking for.
        </p>
      </div>
      <TranslyricsListSection tracks={sortedTracks} />
    </div>
  )
}

export default TranslyricsPage
