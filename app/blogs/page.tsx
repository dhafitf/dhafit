import type { Metadata } from 'next'

import BlogsListSection from '@/sections/blogs-list-section'
import { getPosts } from '~/libs/contents'

export const metadata: Metadata = {
  title: 'Blogs',
  description: "Whatever's currently being figured out, written down for anyone watching.",
}

export default function BlogsPage() {
  const posts = getPosts('BLOG')

  return (
    <div className='mx-auto max-w-7xl px-6 sm:px-12 py-12 flex-1'>
      <div className='mb-8 sm:mb-10'>
        <div className='text-accent-400 mb-3 font-mono text-xs tracking-widest uppercase'>
          WRITING
        </div>
        <h1 className='text-foreground m-0 mb-4 text-5xl leading-none font-medium tracking-[-0.03em]'>
          Notes &amp; essays.
        </h1>
        <p className='text-fg-3 max-w-[60ch] text-base leading-[1.6]'>
          Whatever's currently being figured out, written down for anyone watching.
        </p>
      </div>
      <BlogsListSection posts={posts} />
    </div>
  )
}
