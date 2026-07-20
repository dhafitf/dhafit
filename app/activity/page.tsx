import type { Metadata } from 'next'

import ActivityRow from '@/common/activity-row'
import PageHeader from '@/common/page-header'
import { activityData } from '~/contents/activity-log'

export const metadata: Metadata = {
  title: 'Activity',
  description: 'A running log of things I’ve built, translated, written, or stumbled into.',
}

export default function ActivityPage() {
  const entries = [...activityData].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  )

  return (
    <div className='mx-auto max-w-7xl px-6 sm:px-12 py-12'>
      <PageHeader
        title='Lately, in order.'
        description='A running log of things I’ve built, translated, written, or stumbled into.'
      />

      <div className='m-0 grid gap-6'>
        {entries.map(({ date, content }, i) => (
          <ActivityRow key={i} date={date} content={content} />
        ))}
      </div>
    </div>
  )
}
