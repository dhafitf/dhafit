import React from "react"
import { RiExternalLinkLine } from "react-icons/ri"
import { MdOutlineKeyboardBackspace } from "react-icons/md"

import CustomLink from "@/atoms/CustomLink"

const BlogFooter = ({ filePath }: { filePath: string }) => {
  return (
    <div className="flex items-center justify-between border-t-2 border-white/10 py-4 mt-6 text-sm">
      <CustomLink href="/blog" className="flex items-center gap-1">
        <MdOutlineKeyboardBackspace />
        <span>Back to Blog</span>
      </CustomLink>
      <CustomLink href={filePath} className="flex items-center gap-1">
        <span>Edit this page on github</span>
        <RiExternalLinkLine />
      </CustomLink>
    </div>
  )
}

export default BlogFooter
