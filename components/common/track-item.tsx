'use client'

import Image from 'next/image'
import { useRef, type MouseEvent } from 'react'

import formatDuration from '~/libs/formatDuration'

interface Props extends TrackItem {
  index: number
}

const TrackItem = ({ index, album, albumImageUrl, artists, title, duration, songUrl }: Props) => {
  const trackRef = useRef<HTMLAnchorElement>(null)
  const artistRef = useRef<HTMLAnchorElement>(null)

  const handleClick = (e: MouseEvent) => {
    if (e.target === artistRef.current) return
    if (e.metaKey || e.ctrlKey || e.shiftKey) {
      window.open(songUrl, '_blank', 'noopener,noreferrer')
      return
    }
    trackRef.current?.click()
  }

  const handleAuxClick = (e: MouseEvent) => {
    if (e.button !== 1) return
    if (e.target === artistRef.current) return
    e.preventDefault()
    window.open(songUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <li
      onClick={handleClick}
      onAuxClick={handleAuxClick}
      onMouseDown={(e) => {
        if (e.button === 1 && e.target !== artistRef.current) e.preventDefault()
      }}
      className='group grid grid-cols-[36px_48px_1fr_auto] items-center gap-4 border-b border-border px-3.5 py-3 transition-colors hover:bg-accent-400/6 cursor-pointer'>
      <span className='font-mono text-xs tracking-[0.08em] text-fg-4 tabular-nums group-hover:text-accent-400'>
        {String(index + 1).padStart(2, '0')}
      </span>
      <Image
        src={albumImageUrl}
        alt={album}
        width={48}
        height={48}
        className='rounded border border-border object-cover'
      />
      <div className='min-w-0 flex-1'>
        <a
          ref={trackRef}
          href={songUrl}
          target='_blank'
          rel='noreferrer'
          className='block truncate text-base font-medium tracking-[-0.01em] text-foreground no-underline transition-colors group-hover:text-accent-400'>
          {title}
        </a>
        <div className='mt-0.5 truncate text-sm text-fg-3'>
          {artists.map((artist, i) => (
            <span key={i} className="after:content-[','] last:after:content-[''] mr-1">
              <a
                ref={artistRef}
                href={artist.url}
                target='_blank'
                rel='noreferrer'
                className='no-underline hover:underline'>
                {artist.name}
              </a>
            </span>
          ))}
        </div>
      </div>
      <span className='font-mono text-xs text-fg-4 tabular-nums'>{formatDuration(duration)}</span>
    </li>
  )
}

export default TrackItem
