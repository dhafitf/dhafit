import React from "react"
import Image from "next/image"
import { notFound } from "next/navigation"

import getPostFromSlug from "~/libs/getPostFromSlug"
import { Project, allProjects } from "contentlayer/generated"
import { MdxArticle } from "@/organisms/MdxArticle"

const ProjectArticle = async ({ params }: { params: { slug: string } }) => {
  const project = (await getPostFromSlug(allProjects, params.slug)) as Project
  if (!project) notFound()

  return (
    <section className="relative">
      <div className="flex flex-col gap-3">
        <span className="text-sm font-medium text-gray-400 uppercase tracking-wider">
          {project.category}
        </span>
        <h1 className="text-3xl text-white font-bold tracking-wide">{project.title}</h1>
        <p>{project.summary}</p>
      </div>
      <div className="aspect-video relative overflow-hidden rounded-lg my-6">
        <Image
          src={project.thumbnail}
          alt={`${project.title}'s thumbnail`}
          fill
          className="object-cover object-center"
        />
      </div>
      <MdxArticle code={project.body.code} />
    </section>
  )
}

export default ProjectArticle
