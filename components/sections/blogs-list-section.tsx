'use client'

import { useEffect, useState } from 'react'

import BlogsList from '@/blocks/blogs-list'
import cn from '~/libs/cn'

const BlogsListSection = ({ blogs }: { blogs: PostData[] }) => {
  const [search, setSearch] = useState('')
  const [blogsList, setBlogsList] = useState(blogs)

  useEffect(() => {
    const filteredBlogs = blogs.filter((blog) => {
      return blog.metadata.title.toLowerCase().includes(search.toLowerCase())
    })
    setBlogsList(filteredBlogs)
  }, [blogs, search])

  return (
    <div className='flex flex-col gap-5'>
      <input
        type='text'
        placeholder='Search blogs...'
        onChange={(e) => setSearch(e.target.value)}
        className={cn(
          'appearance-none outline-none border-none bg-base-800 hover:bg-base-700',
          'focus-within:bg-base-700 focus-within:ring-1 focus-within:ring-inset focus-within:ring-gray-400',
          'rounded-lg p-3 text-white w-full text-sm'
        )}
      />
      <BlogsList blogs={blogsList} />
    </div>
  )
}

export default BlogsListSection
