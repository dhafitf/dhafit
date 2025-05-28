import React from "react"
import { notFound } from "next/navigation"
import type { Metadata } from "next"

import { getCombinedContents, getTrackData, getTrackLyrics } from "~/libs/lyrics"
import TranslationSection from "@/organisms/TranslationSection"

interface LyricsPageProps {
  params: Promise<{
    artist: string
    title: string
  }>
}

export async function generateMetadata(props: LyricsPageProps): Promise<Metadata | undefined> {
  const params = await props.params;
  const titleParams = decodeURIComponent(params.title)
  const track = getTrackData(params.artist, titleParams)
  if (!track) return

  const { image } = track
  const ogImage = image ?? `https://dhafit.vercel.app/og?title=${titleParams}`
  const romanizedTitle = track.romanizedTitle ? ` (${track.romanizedTitle})` : ""
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
  const params = await props.params;
  const title = decodeURIComponent(params.title)
  const track = getTrackData(params.artist, title)
  if (!track) return notFound()

  const lyrics = getCombinedContents([
    `contents/lyrics/${params.artist}/${title}/${track.defaultLyricsFile}`,
  ])

  return (
    <TranslationSection
      track={track}
      subtitle={track.romanizedTitle}
      lyrics={lyrics}
      translations={track.translations}
      lyricsFile={`${track.defaultLyricsFile}`}
    />
  )
}

export default LyricsPage
