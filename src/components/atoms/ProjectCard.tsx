import React from "react"
import Image from "next/image"

import CustomLink from "@/atoms/CustomLink"

const ProjectCard = ({ title, tags, image, href }: ProjectCardProps) => {
  return (
    <CustomLink href={href} className="bg-baseBg hover:bg-hoverBg rounded-lg overflow-hidden">
      <div className="aspect-video relative overflow-hidden" title={title}>
        <Image src={image} alt="Project title" fill objectFit="cover" objectPosition="center" />
      </div>
      <div className="flex flex-col gap-1.5 p-4">
        <span className="text-xs font-medium uppercase tracking-wider">{tags[0]}</span>
        <h4 className="text-lg font-semibold text-white">{title}</h4>
      </div>
    </CustomLink>
  )
}

export default ProjectCard
