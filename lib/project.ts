import fs from 'fs'
import path from 'path'
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), '_project')

export function getAllPosts() {
  const allPost = fs.readdirSync(contentDirectory);

    return allPost.map(filename => {
      const permalink = filename.replace('.md', '')
      const fileContent = fs.readFileSync(
        path.join(contentDirectory, filename),
        'utf8'
      )

      const { data, content } = matter(fileContent)

      return {
        data,
        content,
        permalink,
      }
    })
}

export const blogPosts = [
  {}
]
