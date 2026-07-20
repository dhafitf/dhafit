import type { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'

import BackLink from '@/common/back-link'
import { MdxArticle } from '@/mdx/mdx-article'
import { buildArticleMetadata } from '~/libs/article-metadata'
import { getPost, getPosts } from '~/libs/contents'
import { readingTime } from '~/libs/reading-time'

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>
}): Promise<Metadata | undefined> {
  const { slug } = await props.params
  const blog = getPost('BLOG', slug)
  if (!blog) return

  const { title, summary, publishedAt, image } = blog.metadata
  return buildArticleMetadata({ kind: 'blog', title, summary, slug, image, publishedAt })
}

export function generateStaticParams() {
  return getPosts('BLOG').map((blog) => ({ slug: blog.slug }))
}

export default async function BlogArticle(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params
  const blog = getPost('BLOG', slug)
  if (!blog) notFound()

  const { metadata, content } = blog

  return (
    <article className='mx-auto max-w-4xl px-6 py-8 sm:py-12'>
      <BackLink href='/blogs' label='All posts' />

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
