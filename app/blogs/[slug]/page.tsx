import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { MdxArticle } from '@/mdx/mdx-article'
import { getPosts } from '~/libs/contents'
import { readingTime } from '~/libs/reading-time'

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>
}): Promise<Metadata | undefined> {
  const params = await props.params
  const blog = getPosts('BLOG').find((post) => post.slug === params.slug)
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
      type: 'article',
      publishedTime,
      url: `https://dhafit.vercel.app/blogs/${blog.slug}`,
      images: [{ url: ogImage }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}

export function generateStaticParams() {
  return getPosts('BLOG').map((blog) => ({ slug: blog.slug }))
}

export default async function BlogArticle(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params
  const blog = getPosts('BLOG').find((post) => post.slug === params.slug)
  if (!blog) notFound()

  const { metadata, content } = blog

  return (
    <article className='mx-auto max-w-4xl px-6 py-8 sm:py-12'>
      <Link
        href='/blogs'
        className='text-fg-3 hover:text-accent-400 mb-8 sm:mb-10 inline-block font-mono text-xs tracking-widest uppercase no-underline transition-colors'>
        ← All posts
      </Link>

      <header className='mb-12'>
        <h1 className='text-foreground m-0 mb-5 text-[clamp(36px,5vw,64px)] leading-[1.1] font-medium tracking-[-0.03em]'>
          {metadata.title}
        </h1>
        {metadata.summary && (
          <p className='text-fg-3 mb-7 sm:text-lg leading-[1.55]'>{metadata.summary}</p>
        )}
        <div className='text-fg-4 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-xs tracking-[0.04em]'>
          {metadata.publishedAt && (
            <>
              <span>{metadata.publishedAt}</span>
              <span>·</span>
            </>
          )}
          <span>{readingTime(content)}</span>
          {metadata.tags?.map((t) => (
            <span key={t}>· {t}</span>
          ))}
        </div>
      </header>

      {metadata.image && (
        <div className='border-border relative mb-12 aspect-video overflow-hidden rounded-xl border'>
          <Image
            src={metadata.image}
            alt={`${metadata.title} cover`}
            fill
            className='object-cover'
          />
        </div>
      )}

      <MdxArticle source={content} className='max-w-4xl' />
    </article>
  )
}
