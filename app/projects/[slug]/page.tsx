import React from "react"
import Image from "next/image"
import { notFound } from "next/navigation"
import type { Metadata } from "next"

import { getAllPosts } from "~/libs/contents"
import { MdxArticle } from "@/organisms/MdxArticle"

export async function generateMetadata(
  props: {
    params: Promise<{ slug: string }>
  }
): Promise<Metadata | undefined> {
  const params = await props.params;
  const project = getAllPosts("PROJECT").find((post) => post.slug === params.slug)
  if (!project) return

  const { title, summary: description, image } = project.metadata
  const ogImage = image
    ? `https://dhafit.vercel.app${image}`
    : `https://dhafit.vercel.app/og?title=${title}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      url: `https://dhafit.vercel.app/${params.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  }
}

export async function generateStaticParams() {
  const projects = getAllPosts("PROJECT")

  return projects.map((project) => ({
    slug: project.slug,
  }))
}

const ProjectArticle = async (props: { params: Promise<{ slug: string }> }) => {
  const params = await props.params;
  const project = getAllPosts("PROJECT").find((post) => post.slug === params.slug)
  if (!project) notFound()

  return (
    <section className="relative">
      <div className="flex flex-col gap-3">
        <span className="text-sm font-medium text-gray-400 uppercase tracking-wider">
          {project.metadata.subtitle}
        </span>
        <h1 className="text-3xl text-white font-bold tracking-wide">{project.metadata.title}</h1>
        <p>{project.metadata.summary}</p>
      </div>
      {project.metadata.image && (
        <div className="aspect-video relative overflow-hidden rounded-lg my-6">
          <Image
            src={project.metadata.image}
            alt={`${project.metadata.title}'s thumbnail`}
            fill
            className="object-cover object-center"
          />
        </div>
      )}
      <MdxArticle source={project.content} />
    </section>
  )
}

export default ProjectArticle
