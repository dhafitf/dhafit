import React, { Suspense } from "react"

import BlogsListSection from "@/organisms/BlogsListSection"

const BlogsPage = () => {
  return (
    <div className="flex flex-col gap-7">
      <div className="relative">
        <h1 className="text-white font-bold text-3xl">Blogs</h1>
        <p className="pt-3">
          I use this blog to share posts or just share tutorials and tips about anything. Use the
          search feature below to search.
        </p>
      </div>
      <Suspense fallback={<span>Loading blogs...</span>}>
        <BlogsListSection />
      </Suspense>
    </div>
  )
}

export default BlogsPage
