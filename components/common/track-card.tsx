import Image from 'next/image'
import Link from 'next/link'

import AlbumCover from '@/common/album-cover'

export default function TrackCard({ track, index }: { track: Track; index: number }) {
  const artist = track.artists?.[0] ?? 'Unknown'

  return (
    <Link
      href={`/translyrics/${encodeURIComponent(artist)}/${encodeURIComponent(track.title ?? '')}`}
      className='group block no-underline'>
      <div className='border-border group-hover:border-accent-400 relative aspect-square overflow-hidden rounded-sm border transition-all duration-400 ease-out-soft group-hover:-translate-y-1 group-hover:shadow-[0_14px_30px_-12px_#000000aa,0_0_36px_-12px_color-mix(in_oklab,var(--color-accent-400)_28%,transparent)]'>
        {track.image ? (
          <Image
            src={track.image}
            alt={`${track.title} cover`}
            fill
            sizes='(min-width: 1280px) 12rem, (min-width: 768px) 18vw, 45vw'
            className='object-cover'
          />
        ) : (
          <AlbumCover index={index} title={track.title ?? ''} artist={artist} size={300} />
        )}
        <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity duration-400 group-hover:opacity-100' />
      </div>
      <div className='mt-3 px-1'>
        <div className='text-foreground truncate text-sm leading-tight font-medium tracking-[-0.02em]'>
          {track.title}
        </div>
        {track.romanizedTitle && (
          <div className='text-fg-4 mt-0.5 truncate text-xs font-mono tracking-[0.04em]'>
            {track.romanizedTitle}
          </div>
        )}
        <div className='text-fg-3 mt-1 truncate text-xs italic'>{track.artists?.join(', ')}</div>
      </div>
    </Link>
  )
}
