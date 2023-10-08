import React, { Suspense } from "react"

import { allBlogs } from "contentlayer/generated"
import BlogsListSection from "@/organisms/BlogsListSection"

const BlogsPage = () => {
  return (
    <div className="flex flex-col gap-7">
      <div className="relative">
        <h1 className="text-white font-bold text-3xl">Blogs</h1>
        <p className="pt-3">
          This is my blog, where I share a variety of posts ranging from tutorials to tips on
          various topics. Feel free to utilize the search feature below to find what you&apos;re
          looking for.
        </p>
      </div>
      <Suspense fallback={<span>Loading blogs...</span>}>
        <BlogsListSection blogs={allBlogs} />
      </Suspense>
    </div>
  )
}

export default BlogsPage
