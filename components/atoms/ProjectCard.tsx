import React from "react"
import Image from "next/image"

import CustomLink from "@/common/custom-link"

const ProjectCard = ({ metadata, slug }: PostData) => {
  const { title, subtitle, image } = metadata

  return (
    <CustomLink
      href={`/projects/${slug}`}
      className="bg-base-800 hover:bg-base-700 rounded-lg overflow-hidden"
    >
      {image && (
        <div className="aspect-video relative overflow-hidden" title={title}>
          <Image src={image} alt="Project title" fill className="object-cover object-center" />
        </div>
      )}
      <div className="flex flex-col gap-1.5 p-4">
        <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">
          {subtitle}
        </span>
        <h4 className="text-lg font-semibold text-white">{title}</h4>
      </div>
    </CustomLink>
  )
}

export default ProjectCard
