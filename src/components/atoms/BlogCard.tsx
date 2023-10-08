import React from "react"
import Link from "next/link"

const BlogCard = ({ title, slug, summary }: BlogCardProps) => {
  return (
    <Link
      href={slug}
      title={title}
      className="bg-baseBg hover:bg-hoverBg rounded-lg overflow-hidden p-4 flex flex-col gap-1.5"
    >
      <h4 className="text-lg font-semibold text-white">{title}</h4>
      <p className="text-sm">{summary}</p>
    </Link>
  )
}

export default BlogCard
