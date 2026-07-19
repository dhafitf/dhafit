'use client'

import FilteredList from '@/blocks/filtered-list'
import PostCard from '@/common/post-card'
import { readingTime } from '~/libs/reading-time'

type Props = { posts: PostData[] }

export default function BlogsFilteredList({ posts }: Props) {
  return (
    <FilteredList
      items={posts}
      getFacets={(p) => p.metadata.tags}
      getSearchText={(p) =>
        [p.metadata.title, p.metadata.summary, ...(p.metadata.tags ?? [])].join(' ')
      }
      getKey={(p) => p.slug}
      gridClassName='grid sm:grid-cols-2 gap-4'
      searchPlaceholder='Search posts…'
      searchAriaLabel='Search posts'
      emptyNoun='posts'
      renderItem={(p, i) => (
        <PostCard
          href={`/blogs/${p.slug}`}
          title={p.metadata.title}
          summary={p.metadata.summary}
          date={p.metadata.publishedAt}
          meta={readingTime(p.content)}
          index={i}
        />
      )}
    />
  )
}
