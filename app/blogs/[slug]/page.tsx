import Image from "next/image"
import React from "react"
import { notFound } from "next/navigation"
import type { Metadata } from "next"

import { getAllPosts } from "~/libs/contents"
import { MdxArticle } from "@/organisms/MdxArticle"
import BlogFooter from "@/molecules/BlogFooter"

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>
}): Promise<Metadata | undefined> {
  const params = await props.params
  const blog = getAllPosts("BLOG").find((post) => post.slug === params.slug)
  if (!blog) return

  const { title, summary: description, publishedAt: publishedTime, image } = blog.metadata
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
      publishedTime,
      url: `https://dhafit.vercel.app/${blog.slug}`,
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
  const blogs = getAllPosts("BLOG")

  return blogs.map((blog) => ({
    slug: blog.slug,
  }))
}

const BlogArticle = async (props: { params: Promise<{ slug: string }> }) => {
  const params = await props.params
  const blog = getAllPosts("BLOG").find((post) => post.slug === params.slug)
  if (!blog) notFound()

  const GITHUB_REPO_URL = `https://github.com/dhafitf/dhafit/blob/master/contents/blogs/${blog.slug}.mdx`

  return (
    <section className="relative">
      {blog.metadata.image && (
        <div className="aspect-video relative overflow-hidden rounded-lg">
          <Image
            src={blog.metadata.image}
            alt={`${blog.metadata.title}'s thumbnail`}
            fill
            className="object-cover object-center"
          />
        </div>
      )}
      <div className="flex flex-col gap-2 py-6">
        <h1 className="text-3xl text-white font-bold tracking-wide">{blog.metadata.title}</h1>
        <span className="text-sm font-light tracking-wider">{blog.metadata.publishedAt}</span>
      </div>
      <MdxArticle source={blog.content} />
      <BlogFooter filePath={GITHUB_REPO_URL} />
    </section>
  )
}

export default BlogArticle
