import React from "react"
import Link from "next/link"

const BlogCard = ({ metadata, slug }: PostData) => {
  const { title, summary } = metadata

  return (
    <Link
      href={`/blogs/${slug}`}
      title={title}
      className="bg-base-800 hover:bg-base-700 rounded-lg overflow-hidden p-4 flex flex-col gap-1.5"
    >
      <h4 className="text-lg font-semibold text-white">{title}</h4>
      <p className="text-sm">{summary}</p>
    </Link>
  )
}

export default BlogCard
