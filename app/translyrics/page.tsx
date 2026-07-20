import type { Metadata } from 'next'

import TranslyricsFilteredList from '@/blocks/translyrics-filtered-list'
import PageHeader from '@/common/page-header'
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
      <PageHeader
        title='Translyrics.'
        description='Random Japanese songs translated into Indonesian.'
        divider={false}
      />
      <TranslyricsFilteredList tracks={tracks} initialArtist={initialArtist} />
    </div>
  )
}
