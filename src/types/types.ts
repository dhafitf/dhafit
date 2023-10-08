interface BasicContentProps {
  title: string
  summary: string
  slug: string
}

interface ProjectCardProps extends BasicContentProps {
  category: string
  tags?: string[]
  thumbnail: string
}

interface BlogProps extends BasicContentProps {
  publishedAt: string
  tags?: string[]
}
