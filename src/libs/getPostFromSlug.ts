import { Blog, Project } from "contentlayer/generated"

const getPostFromSlug = async (posts: Blog[] | Project[], slug: string) => {
  const post = posts.find((post) => post.slugAsParams === slug)
  if (!post) return null
  return post
}

export default getPostFromSlug
