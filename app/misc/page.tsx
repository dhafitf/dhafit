import type { Metadata } from 'next'
import { Suspense } from 'react'

import SpotifyNowPlaying from '@/blocks/spotify-now-playing'
import TopTracksChart from '@/blocks/top-tracks-chart'
import PageHeader from '@/common/page-header'
import ChartSkeleton from '@/skeletons/chart-skeleton'

export const metadata: Metadata = {
  title: 'Miscellaneous',
}

export default function Misc() {
  return (
    <div className='mx-auto max-w-7xl px-6 sm:px-12 py-12'>
      <PageHeader
        title='Miscellaneous'
        description='Just a bunch of random stuff. Feel free to check them out!'
        divider={false}
      />

      <SpotifyNowPlaying />

      <section className='relative mt-8'>
        <div className='mb-4'>
          <h2 className='m-0 text-3xl leading-none font-medium tracking-[-0.02em] text-foreground'>
            Top tracks{' '}
            <span className='text-fg-4 text-base italic font-normal'>(last 4 weeks)</span>
          </h2>
        </div>

        <Suspense fallback={<ChartSkeleton />}>
          <TopTracksChart />
        </Suspense>
      </section>
    </div>
  )
}
