import Link from 'next/link'

import PostCard from '@/common/post-card'
import { readingTime } from '~/libs/reading-time'

export default function WritingSection({ posts }: { posts: PostData[] }) {
  return (
    <section id='writing' className='border-border mx-auto max-w-7xl border-t px-6 md:px-12 py-24'>
      <div className='mb-12 flex items-baseline justify-between'>
        <div>
          <div className='text-accent-400 mb-3 font-mono text-xs tracking-widest uppercase'>
            03 · WRITING
          </div>
          <h2 className='text-foreground m-0 text-5xl leading-none font-medium tracking-[-0.03em]'>
            Notes &amp; essays.
          </h2>
        </div>
        <Link
          href='/blogs'
          className='text-accent-400 font-mono text-xs tracking-widest no-underline'>
          ALL POSTS →
        </Link>
      </div>
      <div className='grid sm:grid-cols-2 gap-4'>
        {posts.map((p, i) => (
          <PostCard
            key={p.slug}
            href={`/blogs/${p.slug}`}
            title={p.metadata.title}
            summary={p.metadata.summary}
            date={p.metadata.publishedAt}
            meta={readingTime(p.content)}
            index={i}
          />
        ))}
      </div>
    </section>
  )
}
