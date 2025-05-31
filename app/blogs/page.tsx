import type { Metadata } from 'next'

import BlogsListSection from '@/sections/blogs-list-section'
import { getAllPosts } from '~/libs/contents'

export const metadata: Metadata = {
  title: 'Blogs',
  description: 'A list of my writings on various topics.',
}

const BlogsPage = () => {
  const blogs = getAllPosts('BLOG')

  return (
    <div className='flex flex-col gap-7'>
      <div className='relative'>
        <h1 className='text-white font-bold text-3xl'>Blogs</h1>
        <p className='pt-3'>
          This is my blog, where I share a variety of posts ranging from tutorials to tips on
          various topics. Feel free to utilize the search feature below to find what you&apos;re
          looking for.
        </p>
      </div>
      <BlogsListSection blogs={blogs} />
    </div>
  )
}

export default BlogsPage
