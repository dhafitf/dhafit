import AlbumCover from '@/common/album-cover'
import BackLink from '@/common/back-link'
import type { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { type JSX } from 'react'
import { SiSpotify, SiYoutube } from 'react-icons/si'

import LyricsBlocks from '~/components/blocks/lyrics-blocks'
import { getTrackData, getTrackLyrics, getTrackWithLyrics } from '~/libs/lyrics'

interface LyricsPageProps {
  params: Promise<{ artist: string; title: string }>
}

export async function generateMetadata(props: LyricsPageProps): Promise<Metadata | undefined> {
  const params = await props.params
  const artist = decodeURIComponent(params.artist)
  const titleParam = decodeURIComponent(params.title)
  const track = getTrackData(artist, titleParam)
  if (!track) return

  const ogImage = track.image ?? `https://dhafit.vercel.app/og?title=${titleParam}`
  const romanized = track.romanizedTitle ? ` (${track.romanizedTitle})` : ''
  const title = `${artist} - ${titleParam}${romanized} Lyrics`
  const description = `Lyrics for "${titleParam}${romanized}" by ${artist}.`

  return {
    title,
    description,
    openGraph: { title, description, images: [{ url: ogImage }] },
    twitter: { title, description, images: [ogImage] },
  }
}

export function generateStaticParams() {
  return getTrackLyrics().map((track) => ({
    artist: track.artists![0],
    title: track.title!,
  }))
}

const LINK_ICONS: Record<string, JSX.Element> = {
  Spotify: <SiSpotify className='size-4' />,
  Youtube: <SiYoutube className='size-4' />,
}

export default async function LyricsPage(props: LyricsPageProps) {
  const params = await props.params
  const artistParams = decodeURIComponent(params.artist)
  const title = decodeURIComponent(params.title)
  const result = getTrackWithLyrics(artistParams, title)
  if (!result) notFound()

  const { track, metadata, blocks: lyrics } = result
  const artist = track.artists?.[0] ?? 'Unknown'
  const subtitle = track.romanizedTitle

  return (
    <article className='mx-auto max-w-4xl px-6 py-8 sm:py-12'>
      <BackLink href='/translyrics' label='All translyrics' />

      <header className='mb-10 flex flex-col items-center text-center'>
        <div className='border-border relative mb-6 aspect-square w-44 overflow-hidden rounded-xl border shadow-[0_18px_40px_-18px_#000]'>
          {track.image ? (
            <Image
              src={track.image}
              alt={`${track.title} cover`}
              fill
              sizes='176px'
              className='object-cover'
            />
          ) : (
            <AlbumCover title={track.title ?? ''} artist={artist} size={300} />
          )}
        </div>
        {track.artists && track.artists.length > 0 && (
          <div className='text-fg-3 mb-3 font-mono text-xs tracking-widest uppercase'>
            {track.artists.join(' · ')}
          </div>
        )}
        <h1 className='text-foreground m-0 text-3xl leading-[1.1] font-medium tracking-[-0.03em]'>
          {track.title}
        </h1>
        {subtitle && <p className='text-fg-3 mt-2 text-base italic'>{subtitle}</p>}

        {track.links && track.links.length > 0 && (
          <div className='mt-7 flex flex-wrap items-center justify-center gap-2'>
            {track.links.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target='_blank'
                rel='noreferrer'
                className='border-border bg-surface text-fg-2 hover:border-accent-400 hover:text-accent-300 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 font-mono text-xs tracking-[0.04em] no-underline transition-colors'>
                {LINK_ICONS[link.name]}
                {link.name}
              </a>
            ))}
          </div>
        )}
      </header>

      <div className='border-border border-t pt-10'>
        <LyricsBlocks blocks={lyrics} />
      </div>

      {metadata?.usedIn && metadata.usedIn.length > 0 && (
        <section className='border-border mt-12 border-t pt-10'>
          <h2 className='mb-5 text-fg-2'>This lyrics used in</h2>
          <div className='space-y-4'>
            {metadata.usedIn.map((item, i) => (
              <div
                key={i}
                className='border-border relative aspect-video overflow-hidden rounded-xl border'>
                <iframe
                  className='size-full'
                  src={item.url}
                  title={item.name}
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                  allowFullScreen
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {metadata?.contributors && metadata.contributors.length > 0 && (
        <section className='border-border mt-12 border-t pt-6'>
          <div className='text-fg-4 mb-1 font-mono text-xs tracking-[0.18em] uppercase'>
            Contributors
          </div>
          <div className='text-fg-3 text-sm'>
            {metadata.contributors.map((c, i) => (
              <span key={i}>
                {c.url ? (
                  <a
                    href={c.url}
                    target='_blank'
                    rel='noreferrer'
                    className='text-fg-2 hover:text-accent-400 no-underline transition-colors'>
                    {c.name}
                  </a>
                ) : (
                  c.name
                )}
                {i < metadata.contributors.length - 1 && ', '}
              </span>
            ))}
          </div>
        </section>
      )}
    </article>
  )
}
