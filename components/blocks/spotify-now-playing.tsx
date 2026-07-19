'use client'

import { motion } from 'motion/react'
import { SiSpotify } from 'react-icons/si'
import useSWR from 'swr'
import cn from '~/libs/cn'

import fetcher from '~/libs/fetcher'
import { fadeUp } from '~/libs/motion'

const SpotifyNowPlaying = ({ className }: { className?: string }) => {
  const { data } = useSWR<CurrentlyPlayingItem>('/api/spotify/playing', fetcher)
  const playing = data?.isPlaying

  return (
    <motion.div
      {...fadeUp}
      transition={{ ...fadeUp.transition, delay: 0.22 }}
      className={cn(
        'text-fg-4 flex items-center gap-2 font-mono text-xs tracking-wider uppercase',
        className,
      )}>
      <SiSpotify className={`size-3.5 min-w-3.5 ${playing ? 'text-[#1DB954]' : 'text-fg-4'}`} />
      {playing && data ? (
        <span className='inline-flex items-center gap-1.5 tracking-wide normal-case truncate'>
          <span className='text-fg-3'>Playing</span>
          <a
            href={data.songUrl}
            target='_blank'
            rel='noreferrer'
            className='text-accent-400 hover:underline'>
            {data.title}
          </a>
          <span className='text-fg-3'>—</span>
          <span className='text-fg-3 truncate'>
            {data.artists.map((artist, index) => (
              <span key={index} className="after:content-[','] last:after:content-[''] mr-1">
                <a
                  href={artist.url}
                  target='_blank'
                  rel='noreferrer'
                  className='truncate no-underline hover:text-fg-2'>
                  {artist.name}
                </a>
              </span>
            ))}
          </span>
        </span>
      ) : (
        <span>Not playing music</span>
      )}
    </motion.div>
  )
}

export default SpotifyNowPlaying
