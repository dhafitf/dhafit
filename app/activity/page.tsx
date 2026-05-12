import type { Metadata } from 'next'

import ActivityRow from '@/common/activity-row'
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
      <div className='pb-8 sm:pb-10 mb-10 border-border border-b w-full'>
        <div className='text-accent-400 mb-3 font-mono text-xs tracking-widest uppercase'>
          Activity
        </div>
        <h1 className='text-foreground m-0 mb-4 text-5xl leading-none font-medium tracking-[-0.03em]'>
          Lately, in order.
        </h1>
        <p className='text-fg-3 max-w-[60ch] text-base leading-[1.6]'>
          A running log of things I’ve built, translated, written, or stumbled into.
        </p>
      </div>

      <div className='m-0 grid gap-6'>
        {entries.map(({ date, content }, i) => (
          <ActivityRow key={i} date={date} content={content} />
        ))}
      </div>
    </div>
  )
}
