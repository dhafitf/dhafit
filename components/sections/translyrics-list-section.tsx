'use client'

import { motion } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'
import { IoSearch } from 'react-icons/io5'

import AlbumCover from '@/common/album-cover'
import { useMemo, useState } from 'react'
import cn from '~/libs/cn'
import { reveal } from '~/libs/motion'

const ALL = 'All'

export default function TranslyricsListSection({
  tracks,
  initialArtist,
}: {
  tracks: Track[]
  initialArtist?: string
}) {
  const [query, setQuery] = useState('')

  const artists = useMemo(() => {
    const set = new Set<string>()
    tracks.forEach((t) => t.artists?.forEach((a) => set.add(a)))
    return [ALL, ...Array.from(set).sort()]
  }, [tracks])

  const [activeArtist, setActiveArtist] = useState<string>(() => {
    if (!initialArtist) return ALL
    const match = artists.find((a) => a.toLowerCase() === initialArtist.toLowerCase())
    return match ?? ALL
  })

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return tracks.filter((t) => {
      const matchesArtist = activeArtist === ALL || t.artists?.includes(activeArtist)
      if (!matchesArtist) return false
      if (!q) return true
      const haystack = [t.title, t.romanizedTitle, ...(t.artists ?? [])]
        .filter(Boolean)
        .join(' ')
        .toLowerCase()
      return haystack.includes(q)
    })
  }, [tracks, query, activeArtist])

  return (
    <div className='flex flex-col gap-8'>
      <motion.div {...reveal} className='flex flex-col gap-5'>
        <div className='border-border bg-surface focus-within:border-accent-400 flex items-center gap-3 rounded-xl border px-4 py-3 transition-colors'>
          <IoSearch className='text-fg-3 size-4 shrink-0' />
          <input
            type='search'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder='Search by title or artist…'
            aria-label='Search tracks'
            className='text-foreground placeholder:text-fg-4 w-full bg-transparent text-sm outline-none'
          />
          {query && (
            <button
              type='button'
              onClick={() => setQuery('')}
              className='text-fg-3 hover:text-foreground font-mono text-[10px] tracking-[0.18em] uppercase'>
              Clear
            </button>
          )}
        </div>

        <div className='flex flex-wrap gap-2'>
          {artists.map((artist) => (
            <button
              key={artist}
              type='button'
              onClick={() => setActiveArtist(artist)}
              className={cn(
                'font-mono text-xs tracking-widest rounded-full border px-3 py-1.5 transition-colors duration-200ms ease-out-soft',
                activeArtist === artist
                  ? 'border-accent-400 bg-accent-400/10 text-accent-300'
                  : 'border-border text-fg-3 hover:border-border-strong hover:text-fg-2',
              )}>
              {artist}
            </button>
          ))}
        </div>
      </motion.div>

      {filtered.length > 0 ? (
        <div className='grid grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6'>
          {filtered.map((t, i) => {
            const artist = t.artists?.[0] ?? 'Unknown'
            return (
              <motion.div
                key={`${artist}-${t.title}`}
                {...reveal}
                transition={{ ...reveal.transition, delay: Math.min(i, 8) * 0.04 }}>
                <Link
                  href={`/translyrics/${artist}/${t.title}`}
                  className='group block no-underline'>
                  <div className='border-border group-hover:border-accent-400 relative aspect-square overflow-hidden rounded-sm border transition-all duration-400 ease-out-soft group-hover:-translate-y-1 group-hover:shadow-[0_14px_30px_-12px_#000000aa,0_0_36px_-12px_color-mix(in_oklab,var(--color-accent-400)_28%,transparent)]'>
                    {t.image ? (
                      <Image
                        src={t.image}
                        alt={`${t.title} cover`}
                        fill
                        sizes='(min-width: 1280px) 12rem, (min-width: 768px) 18vw, 45vw'
                        className='object-cover'
                      />
                    ) : (
                      <AlbumCover index={i} title={t.title ?? ''} artist={artist} size={300} />
                    )}
                    <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity duration-400 group-hover:opacity-100' />
                  </div>
                  <div className='mt-3 px-1'>
                    <div className='text-foreground truncate text-sm leading-tight font-medium tracking-[-0.02em]'>
                      {t.title}
                    </div>
                    {t.romanizedTitle && (
                      <div className='text-fg-4 mt-0.5 truncate text-xs font-mono tracking-[0.04em]'>
                        {t.romanizedTitle}
                      </div>
                    )}
                    <div className='text-fg-3 mt-1 truncate text-xs italic'>
                      {t.artists?.join(', ')}
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      ) : (
        <div className='border-border border-t border-dashed py-20 text-center'>
          <div className='text-fg-3 font-mono text-xs tracking-[0.18em] uppercase flex flex-col gap-1 truncate'>
            <span>No tracks match</span>
            <span className='text-accent-400'>{query ? `“${query}”` : activeArtist}</span>
          </div>
        </div>
      )}
    </div>
  )
}
