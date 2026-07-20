import type { Metadata } from 'next'

import BlogsFilteredList from '@/blocks/blogs-filtered-list'
import PageHeader from '@/common/page-header'
import { getPosts } from '~/libs/contents'

export const metadata: Metadata = {
  title: 'Blogs',
  description: "Whatever's currently being figured out, written down for anyone watching.",
}

export default function BlogsPage() {
  const posts = getPosts('BLOG')

  return (
    <div className='mx-auto max-w-7xl px-6 sm:px-12 py-12 flex-1'>
      <PageHeader
        title='Notes & essays.'
        description="Whatever's currently being figured out, written down for anyone watching."
        divider={false}
      />
      <BlogsFilteredList posts={posts} />
    </div>
  )
}
