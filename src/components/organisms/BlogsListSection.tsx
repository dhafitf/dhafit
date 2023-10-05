"use client"

import { useState, useEffect } from "react"

import cn from "~/libs/cn"
import { blogs as blogsList } from "~/libs/dummies"
import BlogsList from "@/molecules/BlogsList"

const BlogsListSection = () => {
  const [search, setSearch] = useState("")
  const [blogs, setBlogs] = useState(blogsList)

  useEffect(() => {
    const filteredBlogs = blogsList.filter((blog) => {
      return blog.title.toLowerCase().includes(search.toLowerCase())
    })
    setBlogs(filteredBlogs)
  }, [search])

  return (
    <div className="flex flex-col gap-5">
      <input
        type="text"
        placeholder="Search blogs..."
        onChange={(e) => setSearch(e.target.value)}
        className={cn(
          "appearance-none outline-none border-none bg-baseBg hover:bg-hoverBg",
          "focus-within:bg-hoverBg focus-within:ring-1 focus-within:ring-inset focus-within:ring-gray-400",
          "rounded-lg p-3 text-white w-full text-sm"
        )}
      />
      <BlogsList blogs={blogs} />
    </div>
  )
}

export default BlogsListSection
