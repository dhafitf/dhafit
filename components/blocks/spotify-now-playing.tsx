'use client'

import { SiSpotify } from 'react-icons/si'
import useSWR from 'swr'

import SpotifyItem from '@/common/spotify-item'
import cn from '~/libs/cn'
import fetcher from '~/libs/fetcher'

const SpotifyNowPlaying = () => {
  const { data } = useSWR<CurrentlyPlayingItem>('/api/spotify/playing', fetcher)

  return (
    <div className='flex items-center gap-2 text-sm'>
      <div className='overflow-hidden rounded-full min-w-[20px] min-h-[20px]'>
        <SiSpotify
          className={cn('h-5 w-5', data?.isPlaying ? 'text-[#1DB954]' : 'text-gray-400')}
        />
      </div>
      {data?.isPlaying ? (
        <SpotifyItem {...data} />
      ) : (
        <p className='text-gray-400'>Not playing music</p>
      )}
    </div>
  )
}

export default SpotifyNowPlaying
