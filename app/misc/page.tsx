import type { Metadata } from 'next'
import { Suspense } from 'react'

import SpotifyNowPlaying from '@/blocks/spotify-now-playing'
import TopTracksChart from '@/blocks/top-tracks-chart'
import ChartSkeleton from '@/skeletons/chart-skeleton'

export const metadata: Metadata = {
  title: 'Miscellaneous',
}

export default function Misc() {
  return (
    <div className='mx-auto max-w-7xl px-6 sm:px-12 py-12'>
      <div className='pb-8 sm:pb-10 w-full'>
        <div className='text-accent-400 mb-3 font-mono text-xs tracking-widest uppercase'>misc</div>
        <h1 className='text-foreground m-0 mb-4 text-5xl leading-none font-medium tracking-[-0.03em]'>
          Miscellaneous
        </h1>
        <p className='text-fg-3 max-w-[60ch] text-base leading-[1.6]'>
          Just a bunch of random stuff. Feel free to check them out!
        </p>
      </div>

      <SpotifyNowPlaying />

      <section className='relative mt-8'>
        <div className='mb-4 flex items-baseline justify-between'>
          <div>
            <div className='mb-2 font-mono text-xs tracking-widest text-accent-400 uppercase'>
              Chart
            </div>
            <h2 className='m-0 text-3xl leading-none font-medium tracking-[-0.02em] text-foreground'>
              Top tracks{' '}
              <span className='text-fg-4 text-base italic font-normal'>(last 4 weeks)</span>
            </h2>
          </div>
        </div>

        <Suspense fallback={<ChartSkeleton />}>
          <TopTracksChart />
        </Suspense>
      </section>
    </div>
  )
}
