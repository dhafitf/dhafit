import ActivityRow from '@/common/activity-row'
import SectionHeader from '@/common/section-header'
import { type ActivityContent } from '~/contents/activity-log'

type Entry = { date: Date | string; content: ActivityContent }

export default function ActivitySection({ entries }: { entries: Entry[] }) {
  return (
    <section id='activity' className='border-border mx-auto max-w-7xl border-t px-6 md:px-12 py-28'>
      <SectionHeader title='Lately.' href='/activity' linkLabel='All entries' />
      <div className='grid gap-6'>
        {entries.map((entry, i) => (
          <ActivityRow key={i} date={entry.date} content={entry.content} />
        ))}
      </div>
    </section>
  )
}
