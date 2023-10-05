import React from "react"
import Link from "next/link"

const BlogCard = ({ title, href, description }: BlogCardProps) => {
  return (
    <Link
      href={href}
      title={title}
      className="bg-baseBg hover:bg-hoverBg rounded-lg overflow-hidden p-4 flex flex-col gap-1.5"
    >
      <h4 className="text-lg font-semibold text-white">{title}</h4>
      <p className="text-sm">{description}</p>
    </Link>
  )
}

export default BlogCard
