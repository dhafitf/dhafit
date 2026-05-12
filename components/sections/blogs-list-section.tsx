'use client'

import { motion } from 'motion/react'
import { useMemo, useState } from 'react'
import { IoSearch } from 'react-icons/io5'

import PostCard from '@/common/post-card'
import cn from '~/libs/cn'
import { reveal } from '~/libs/motion'
import { readingTime } from '~/libs/reading-time'

type Props = { posts: PostData[] }

const ALL = 'All'

export default function BlogsListSection({ posts }: Props) {
  const [query, setQuery] = useState('')
  const [activeTag, setActiveTag] = useState<string>(ALL)

  const tags = useMemo(() => {
    const set = new Set<string>()
    posts.forEach((p) => p.metadata.tags?.forEach((t) => set.add(t)))
    return [ALL, ...Array.from(set).sort()]
  }, [posts])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return posts.filter((p) => {
      const matchesTag = activeTag === ALL || p.metadata.tags?.includes(activeTag)
      if (!matchesTag) return false
      if (!q) return true
      const haystack = [p.metadata.title, p.metadata.summary, ...(p.metadata.tags ?? [])]
        .join(' ')
        .toLowerCase()
      return haystack.includes(q)
    })
  }, [posts, query, activeTag])

  return (
    <div className='flex flex-col gap-8'>
      <motion.div {...reveal} className='flex flex-col gap-5'>
        <div className='border-border bg-surface focus-within:border-accent-400 flex items-center gap-3 rounded-xl border px-4 py-3 transition-colors'>
          <IoSearch className='text-fg-3 size-4 shrink-0' />
          <input
            type='search'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder='Search posts…'
            aria-label='Search posts'
            className='text-foreground placeholder:text-fg-4 w-full bg-transparent text-sm outline-none'
          />
          {query && (
            <button
              type='button'
              onClick={() => setQuery('')}
              className='text-fg-3 hover:text-foreground font-mono text-[10px] tracking-[0.18em] uppercase'>
              Clear
            </button>
          )}
        </div>

        <div className='flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <button
              key={tag}
              type='button'
              onClick={() => setActiveTag(tag)}
              className={cn(
                'font-mono text-xs tracking-widest rounded-full border px-3 py-1.5 transition-colors duration-200ms ease-out-soft',
                activeTag === tag
                  ? 'border-accent-400 bg-accent-400/10 text-accent-300'
                  : 'border-border text-fg-3 hover:border-border-strong hover:text-fg-2',
              )}>
              {tag}
            </button>
          ))}
        </div>
      </motion.div>

      {filtered.length > 0 ? (
        <div className='grid sm:grid-cols-2 gap-4'>
          {filtered.map((p, i) => (
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
      ) : (
        <div className='border-border border-t border-dashed py-20 text-center'>
          <div className='text-fg-3 flex flex-col gap-1 font-mono text-xs tracking-[0.18em] uppercase truncate'>
            <span>No posts match</span>
            <span className='text-accent-400'>{query ? `“${query}”` : activeTag}</span>
          </div>
        </div>
      )}
    </div>
  )
}
