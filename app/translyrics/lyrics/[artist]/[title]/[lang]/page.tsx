import React from "react"
import { notFound } from "next/navigation"
import type { Metadata } from "next"

import {
  getCombinedContents,
  getTrackData,
  getTrackLyrics,
  getTranslationMetadata,
} from "~/libs/lyrics"
import TranslationSection from "@/organisms/TranslationSection"

interface LyricsPageProps {
  params: {
    artist: string
    title: string
    lang: string
  }
}

export async function generateMetadata({ params }: LyricsPageProps): Promise<Metadata | undefined> {
  const titleParams = decodeURIComponent(params.title)
  const track = getTrackData(params.artist, titleParams)
  const translation = track?.translations?.find(
    (translation) => translation.language.toLowerCase() === params.lang.toLowerCase()
  )

  if (!track || !translation) return notFound()

  const { image } = track
  const ogImage = image ?? `https://dhafit.vercel.app/og?title=${titleParams}`
  const title = `[${translation.language}] ${params.artist} - ${titleParams} (${translation.title}) Lyrics`
  const description = `Lyrics for the track "${titleParams} (${translation.title})" by ${params.artist} with ${translation.language} translations.`

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

  return tracks.flatMap((track) =>
    track.translations?.map((translation) => {
      return {
        artist: track.artists![0],
        title: track.title!,
        lang: translation.language,
      }
    })
  )
}

const TranslationPage = ({ params }: LyricsPageProps) => {
  const title = decodeURIComponent(params.title)
  const track = getTrackData(params.artist, title)
  const translation = track?.translations?.find(
    (translation) => translation.language.toLowerCase() === params.lang.toLowerCase()
  )

  if (!track || !translation) return notFound()

  const subtitle =
    track.translations?.find((translation) => translation.language === params.lang)?.title ?? ""

  const lyrics = getCombinedContents([
    `contents/lyrics/${params.artist}/${title}/${track.defaultLyricsFile}`,
    `contents/lyrics/${params.artist}/${title}/${translation.lyricsFile}`,
  ])

  const metadata = getTranslationMetadata(
    `contents/lyrics/${params.artist}/${title}/${translation.lyricsFile}`
  )

  return (
    <TranslationSection
      track={track}
      lyrics={lyrics}
      translations={track.translations}
      subtitle={subtitle}
      metadata={metadata}
      lyricsFile={`${translation.lyricsFile}`}
    />
  )
}

export default TranslationPage
