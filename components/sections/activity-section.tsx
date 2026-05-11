import Link from 'next/link'

import ActivityRow from '@/common/activity-row'
import { type ActivityContent } from '~/contents/activity-log'

type Entry = { date: Date | string; content: ActivityContent }

export default function ActivitySection({ entries }: { entries: Entry[] }) {
  return (
    <section id='activity' className='border-border mx-auto max-w-7xl border-t px-6 md:px-12 py-24'>
      <div className='mb-12 flex items-baseline justify-between'>
        <div>
          <div className='text-accent-400 mb-3 font-mono text-xs tracking-widest uppercase'>
            05 · ACTIVITY LOG
          </div>
          <h2 className='text-foreground m-0 text-5xl leading-none font-medium tracking-[-0.03em]'>
            Lately.
          </h2>
        </div>
        <Link
          href='/activity'
          className='text-accent-400 font-mono text-xs tracking-widest no-underline'>
          ALL ENTRIES →
        </Link>
      </div>
      <div className='grid gap-6'>
        {entries.map((entry, i) => (
          <ActivityRow key={i} date={entry.date} content={entry.content} />
        ))}
      </div>
    </section>
  )
}
