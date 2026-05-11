import { MdxArticle } from '@/mdx/mdx-article'
import { type ActivityContent, type ActivityType } from '~/contents/activity-log'
import { formatDate } from '~/libs/utils'

const TYPE_COLOR: Record<ActivityType, string> = {
  Code: 'var(--color-accent-400)',
  Translation: '#5cd3a6',
  Writing: '#d8a8e6',
  Other: '#f4d06f',
}

export default function ActivityRow({
  date,
  content,
}: {
  date: Date | string
  content: ActivityContent
}) {
  return (
    <div className='grid sm:grid-cols-[140px_1fr] items-baseline gap-3 sm:gap-7'>
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
        <h3 className='text-foreground mb-1 text-base leading-[1.35] font-medium tracking-[-0.01em]'>
          {content.title}
        </h3>
        <MdxArticle
          source={content.description}
          className='prose-sm max-w-[64ch] text-fg-3'
          style={{ '--tw-prose-links': 'var(--color-fg-2)' } as React.CSSProperties}
        />
      </div>
    </div>
  )
}
