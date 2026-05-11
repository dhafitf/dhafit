import type { Metadata } from 'next'

import { MdxArticle } from '@/mdx/mdx-article'
import { activityData, type ActivityType } from '~/contents/activity-log'
import { formatDate } from '~/libs/utils'

export const metadata: Metadata = {
  title: 'Activity',
  description: 'A running log of things I’ve built, translated, written, or stumbled into.',
}

const TYPE_COLOR: Record<ActivityType, string> = {
  Code: 'var(--color-accent-400)',
  Translation: '#5cd3a6',
  Writing: '#d8a8e6',
  Other: '#f4d06f',
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
          <div key={i} className='grid sm:grid-cols-[140px_1fr] items-baseline gap-3 sm:gap-7'>
            <div className='text-fg-3 m-0 flex items-center gap-2.5 font-mono text-xs tracking-[0.04em] uppercase'>
              <span
                className='size-1.5 shrink-0 rounded-full'
                aria-label={content.type}
                title={content.type}
                style={{ background: TYPE_COLOR[content.type] }}
              />
              <span>{formatDate(date)}</span>
            </div>
            <div className='m-0'>
              <h2 className='text-foreground mb-1 text-base leading-[1.35] font-medium tracking-[-0.01em]'>
                {content.title}
              </h2>
              <MdxArticle
                source={content.description}
                className='prose-sm max-w-[64ch] text-fg-3'
                style={
                  {
                    '--tw-prose-links': 'var(--color-fg-2)',
                  } as React.CSSProperties
                }
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
