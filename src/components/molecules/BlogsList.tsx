import React from "react"
import BlogCard from "@/atoms/BlogCard"

const BlogsList = ({ blogs }: { blogs: BlogCardProps[] }) => {
  return (
    <div className="flex flex-col gap-4">
      {blogs.length > 0 ? (
        blogs.map((blog) => <BlogCard key={blog.href} {...blog} />)
      ) : (
        <p className="text-sm text-center">No blogs found</p>
      )}
    </div>
  )
}

export default BlogsList
