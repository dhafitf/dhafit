import PostCard from '@/common/post-card'
import SectionHeader from '@/common/section-header'
import { readingTime } from '~/libs/reading-time'

export default function WritingSection({ posts }: { posts: PostData[] }) {
  return (
    <section id='writing' className='border-border mx-auto max-w-7xl border-t px-6 md:px-12 py-24'>
      <SectionHeader title='Notes & essays.' href='/blogs' linkLabel='All posts' />
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
