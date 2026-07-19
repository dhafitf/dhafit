'use client'

import { motion } from 'motion/react'

import FilteredList from '@/blocks/filtered-list'
import TrackCard from '@/common/track-card'
import { reveal } from '~/libs/motion'

export default function TranslyricsFilteredList({
  tracks,
  initialArtist,
}: {
  tracks: Track[]
  initialArtist?: string
}) {
  return (
    <FilteredList
      items={tracks}
      getFacets={(t) => t.artists}
      getSearchText={(t) =>
        [t.title, t.romanizedTitle, ...(t.artists ?? [])].filter(Boolean).join(' ')
      }
      getKey={(t) => `${t.artists?.[0] ?? 'unknown'}-${t.title}`}
      gridClassName='grid grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6'
      searchPlaceholder='Search by title or artist…'
      searchAriaLabel='Search tracks'
      emptyNoun='tracks'
      initialFacet={initialArtist}
      renderItem={(t, i) => (
        <motion.div {...reveal} transition={{ ...reveal.transition, delay: Math.min(i, 8) * 0.04 }}>
          <TrackCard track={t} index={i} />
        </motion.div>
      )}
    />
  )
}
