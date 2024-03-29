import fs from "fs"
import path from "path"

function parseFrontmatter(fileContent: string) {
  const frontmatterRegex = /---\s*([\s\S]*?)\s*---/
  const match = frontmatterRegex.exec(fileContent)
  const frontMatterBlock = match![1]
  const content = fileContent.replace(frontmatterRegex, "").trim()
  const frontMatterLines = frontMatterBlock.trim().split("\n")
  const metadata: Partial<Metadata> = {}

  frontMatterLines.forEach((line) => {
    const [key, ...valueArr] = line.split(": ")
    let value = valueArr.join(": ").trim()

    if (key === "tags") metadata[key as keyof Metadata] = JSON.parse(value)
    else if (key === "featured") metadata["featured"] = value === "true"
    else {
      value = value.replace(/^['"](.*)['"]$/, "$1") // Remove quotes
      metadata[key as keyof Omit<Metadata, "tags" | "featured">] = value
    }
  })

  return { metadata: metadata as Metadata, content }
}

function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx")
}

function readMDXFile(filePath: string) {
  const rawContent = fs.readFileSync(filePath, "utf-8")
  return parseFrontmatter(rawContent)
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
  BLOG: "contents/blogs",
  PROJECT: "contents/projects",
} as const

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

export function getAllPosts(dir: keyof typeof POST_DIRS) {
  return getPosts(dir)
}
