import { Suspense } from 'react'

import SpotifyNowPlaying from '@/molecules/SpotifyNowPlaying'
import SpotifyTopTracks from '@/organisms/SpotifyTopTracks'
import SpotifyTopTracks_ from '@/skeletons/SpotifyTopTracks_'

const Miscellaneous = () => {
  return (
    <div className='flex flex-col gap-7'>
      <div className='relative'>
        <h1 className='text-white font-bold text-3xl'>Miscellaneous</h1>
        <p className='pt-3'>Just a bunch of random stuff. Feel free to check them out!</p>
      </div>
      <div className='flex flex-col'>
        <h2 className='text-2xl font-bold tracking-wider text-white pb-1'>Music</h2>
        <span className='text-sm text-gray-400 mb-6'>
          List of my top tracks & current playing song.
        </span>
        <SpotifyNowPlaying />
        <div className='flex flex-col gap-2 pt-6'>
          <h3 className='text-xl font-semibold tracking-wider text-white'>
            Top Tracks{' '}
            <span className='text-sm text-gray-400 italic font-normal'>(Last 4 Weeks)</span>
          </h3>
          {/* <SpotifyTopTracks /> */}
          <Suspense fallback={<SpotifyTopTracks_ />}>
            <SpotifyTopTracks />
          </Suspense>
        </div>
      </div>
    </div>
  )
}

export default Miscellaneous
