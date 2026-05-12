'use client'

import { motion } from 'motion/react'
import { IoSearch } from 'react-icons/io5'

import TrackCard from '@/common/track-card'
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
          {filtered.map((t, i) => (
            <motion.div
              key={`${t.artists?.[0] ?? 'unknown'}-${t.title}`}
              {...reveal}
              transition={{ ...reveal.transition, delay: Math.min(i, 8) * 0.04 }}>
              <TrackCard track={t} index={i} />
            </motion.div>
          ))}
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
