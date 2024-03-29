type Metadata = {
  title: string
  subtitle?: string
  summary: string
  tags: string[]
  image?: string
  publishedAt?: string
  featured: boolean
}

type PostData = {
  metadata: Metadata
  slug: string
  content: string
}
