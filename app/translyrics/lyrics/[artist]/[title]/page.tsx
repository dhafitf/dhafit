import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import TranslationSection from '@/sections/translation-section'
import { getTrackData, getTrackLyrics, getTranslationData } from '~/libs/lyrics'

interface LyricsPageProps {
  params: Promise<{
    artist: string
    title: string
  }>
}

export async function generateMetadata(props: LyricsPageProps): Promise<Metadata | undefined> {
  const params = await props.params
  const titleParams = decodeURIComponent(params.title)
  const track = getTrackData(params.artist, titleParams)
  if (!track) return

  const { image } = track
  const ogImage = image ?? `https://dhafit.vercel.app/og?title=${titleParams}`
  const romanizedTitle = track.romanizedTitle ? ` (${track.romanizedTitle})` : ''
  const title = `${params.artist} - ${titleParams + romanizedTitle} Lyrics`
  const description = `Lyrics for the track "${titleParams + romanizedTitle}" by ${params.artist}.`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      title,
      description,
      images: [ogImage],
    },
  }
}

export async function generateStaticParams() {
  const tracks = getTrackLyrics()

  return tracks.map((track) => ({
    artist: track.artists![0],
    title: track.title!,
  }))
}

const LyricsPage = async (props: LyricsPageProps) => {
  const params = await props.params
  const title = decodeURIComponent(params.title)
  const track = getTrackData(params.artist, title)
  if (!track) return notFound()

  const { metadata, content: lyrics } = getTranslationData(
    `contents/lyrics/${params.artist}/${title}.mdx`
  )

  return (
    <TranslationSection
      track={track}
      subtitle={track.romanizedTitle}
      lyrics={lyrics}
      lyricsFile={`${track.title}.mdx`}
      metadata={metadata}
    />
  )
}

export default LyricsPage
