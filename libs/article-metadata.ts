import type { Metadata } from 'next'

type ArticleKind = 'blog' | 'project'

const BASE_PATH: Record<ArticleKind, string> = {
  blog: '/blogs',
  project: '/projects',
}

export function buildArticleMetadata(args: {
  kind: ArticleKind
  title: string
  summary?: string
  slug: string
  image?: string
  publishedAt?: string
}): Metadata {
  const { kind, title, summary: description, slug, image, publishedAt } = args

  const ogImage =
    image ?? (kind === 'blog' ? `/og?title=${title}&date=${publishedAt}` : `/og?title=${title}`)

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      url: `${BASE_PATH[kind]}/${slug}`,
      ...(kind === 'blog' ? { publishedTime: publishedAt } : {}),
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
