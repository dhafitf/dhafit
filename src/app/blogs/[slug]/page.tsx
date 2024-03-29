import Image from "next/image"
import React from "react"
import { notFound } from "next/navigation"
import type { Metadata } from "next"

import { Blog, allBlogs } from "contentlayer/generated"
import getPostFromSlug from "~/libs/getPostFromSlug"
import { MdxArticle } from "@/organisms/MdxArticle"
import BlogFooter from "@/molecules/BlogFooter"

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata | undefined> {
  const blog = (await getPostFromSlug(allBlogs, params.slug)) as Blog
  if (!blog) return

  const { title, summary: description, publishedAt: publishedTime, thumbnail, slug } = blog
  const ogImage = thumbnail
    ? `https://dhafit.vercel.app${thumbnail}`
    : `https://dhafit.vercel.app/og?title=${title}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `https://dhafit.vercel.app/${slug}`,
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

const BlogArticle = async ({ params }: { params: { slug: string } }) => {
  const blog = (await getPostFromSlug(allBlogs, params.slug)) as Blog
  if (!blog) notFound()

  const GITHUB_REPO_URL = `https://github.com/dhafitf/dhafit/blob/master/contents/blogs/${blog.slugAsParams}.mdx`

  return (
    <section className="relative">
      {blog.thumbnail && (
        <div className="aspect-video relative overflow-hidden rounded-lg">
          <Image
            src={blog.thumbnail}
            alt={`${blog.title}'s thumbnail`}
            fill
            className="object-cover object-center"
          />
        </div>
      )}
      <div className="flex flex-col gap-2 py-6">
        <h1 className="text-3xl text-white font-bold tracking-wide">{blog.title}</h1>
        <span className="text-sm font-light tracking-wider">{blog.publishedAt}</span>
      </div>
      <MdxArticle code={blog.body.code} />
      <BlogFooter filePath={GITHUB_REPO_URL} />
    </section>
  )
}

export default BlogArticle
