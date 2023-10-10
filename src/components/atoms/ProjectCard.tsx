import React from "react"
import Image from "next/image"

import CustomLink from "@/atoms/CustomLink"

const ProjectCard = ({ title, category, thumbnail, slug }: ProjectCardProps) => {
  return (
    <CustomLink href={slug} className="bg-baseBg hover:bg-hoverBg rounded-lg overflow-hidden">
      <div className="aspect-video relative overflow-hidden" title={title}>
        <Image src={thumbnail} alt="Project title" fill className="object-cover object-center" />
      </div>
      <div className="flex flex-col gap-1.5 p-4">
        <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">
          {category}
        </span>
        <h4 className="text-lg font-semibold text-white">{title}</h4>
      </div>
    </CustomLink>
  )
}

export default ProjectCard
