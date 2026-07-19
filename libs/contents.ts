import fs from 'fs'
import path from 'path'

import { readFrontmatter } from '~/libs/frontmatter'

function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx')
}

function readMDXFile(filePath: string) {
  const rawContent = fs.readFileSync(filePath, 'utf-8')
  return readFrontmatter<Metadata>(rawContent)
}

function getMDXData(dir: string) {
  const mdxFiles = getMDXFiles(dir)
  return mdxFiles.map((file) => {
    const { metadata, content } = readMDXFile(path.join(dir, file))
    const slug = path.basename(file, path.extname(file))

    return { metadata, slug, content }
  })
}

function sortByPublishedDate(a: PostData, b: PostData) {
  return new Date(b.metadata.publishedAt!).getTime() - new Date(a.metadata.publishedAt!).getTime()
}

const POST_DIRS = {
  BLOG: 'contents/blogs',
  PROJECT: 'contents/projects',
} as const

export function getPost(dir: keyof typeof POST_DIRS, slug: string): PostData | undefined {
  // Guard against path traversal: a slug must be a bare file basename.
  if (!slug || slug !== path.basename(slug)) return undefined

  const filePath = path.join(process.cwd(), POST_DIRS[dir], `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return undefined

  const { metadata, content } = readMDXFile(filePath)
  return { metadata, slug, content }
}

export function getPosts(dir: keyof typeof POST_DIRS) {
  const mdxDatas = getMDXData(path.join(process.cwd(), POST_DIRS[dir]))
  return mdxDatas
    .map(({ metadata, slug, content }) => ({ metadata, slug, content }))
    .sort(sortByPublishedDate)
}

export function getFeaturedPosts(dir: keyof typeof POST_DIRS) {
  const posts = getPosts(dir)
  return posts.filter((post) => post.metadata.featured)
}

