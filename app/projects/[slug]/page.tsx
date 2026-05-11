import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { MdxArticle } from '@/mdx/mdx-article'
import { getPosts } from '~/libs/contents'
import { getYear } from '~/libs/utils'

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>
}): Promise<Metadata | undefined> {
  const params = await props.params
  const project = getPosts('PROJECT').find((post) => post.slug === params.slug)
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
      type: 'article',
      url: `https://dhafit.vercel.app/projects/${params.slug}`,
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
  return getPosts('PROJECT').map((project) => ({ slug: project.slug }))
}

export default async function ProjectArticle(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params
  const project = getPosts('PROJECT').find((post) => post.slug === params.slug)
  if (!project) notFound()

  const { metadata, content } = project
  const year = getYear(metadata.publishedAt)

  return (
    <article className='mx-auto max-w-4xl px-6 py-8 sm:py-12'>
      <Link
        href='/projects'
        className='text-fg-3 hover:text-accent-400 mb-8 sm:mb-10 inline-block font-mono text-xs tracking-widest uppercase no-underline transition-colors'>
        ← All projects
      </Link>

      <header className='mb-8 sm:mb-10'>
        <h1 className='text-foreground m-0 mb-4 text-5xl leading-none font-medium tracking-[-0.03em]'>
          {metadata.title}
        </h1>
        {metadata.summary && (
          <p className='text-fg-3 mb-7 sm:text-lg leading-[1.55]'>{metadata.summary}</p>
        )}
        {metadata.tags?.length ? (
          <div className='mt-7 flex flex-wrap gap-2'>
            {metadata.tags.map((t) => (
              <span
                key={t}
                className='border-border text-fg-3 rounded-full border px-2.5 py-1 font-mono text-xs tracking-[0.12em]'>
                {t}
              </span>
            ))}
          </div>
        ) : null}
      </header>

      <div className='relative aspect-video mb-12 sm:mb-16'>
        {metadata.image && (
          <Image
            src={metadata.image}
            alt={`${metadata.title} cover`}
            fill
            priority
            className='object-cover'
          />
        )}
      </div>

      <div className='relative'>
        <MdxArticle source={content} className='max-w-none' />
      </div>
    </article>
  )
}
