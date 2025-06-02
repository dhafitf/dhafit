import type { Metadata } from 'next'
import { Suspense } from 'react'

import ActivityLogSection from '~/components/sections/activity-log-section'

export const metadata: Metadata = {
  title: 'Activity Log',
  description:
    'A timeline of things I’ve built, translated, learned, or explored. Across development, language, and creative work.',
}

const ActivityPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) => {
  const { q } = await searchParams

  return (
    <div className='flex flex-col gap-7'>
      <div className='relative'>
        <h1 className='text-white font-bold text-3xl'>{metadata.title?.toString()}</h1>
        <p className='pt-3'>{metadata.description}</p>
      </div>
      <Suspense key={q?.toString()}>
        <ActivityLogSection query={q?.toString()} />
      </Suspense>
    </div>
  )
}

export default ActivityPage
