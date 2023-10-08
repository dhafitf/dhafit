interface ProjectCardProps {
  title: string
  tags: string[]
  image: string
  href: string
}

interface BlogCardProps {
  title: string
  summary: string
  slug: string
}

interface BlogProps extends BlogCardProps {
  publishedAt: string
  tags?: string[]
}
