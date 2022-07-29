import fs from "fs";
import path from "path";
import matter from "gray-matter";

import { PostLoaderProps, PostProps } from "~/types/posts";

const blogDirectory = path.join(process.cwd(), "posts/blog");
const projectDirectory = path.join(process.cwd(), "posts/project");

function getAllPostData(postPath: string) {
  const allPost = fs.readdirSync(postPath);

  return allPost.map((filename) => {
    const permalink = filename.replace(".md", "");
    const fileContent = fs.readFileSync(path.join(postPath, filename), "utf8");
    const { data, content } = matter(fileContent);

    return {
      data,
      content,
      permalink,
    };
  });
}

function getPostDataBySlug(slug: string, postPath: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = path.join(postPath, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { slug: realSlug, data, content };
}

export function getAllBlogs() {
  return getAllPostData(blogDirectory) as PostLoaderProps[];
}

export function getBlogBySlug(slug: string) {
  return getPostDataBySlug(slug, blogDirectory);
}

export function getAllProjects() {
  return getAllPostData(projectDirectory) as PostLoaderProps[];
}

export function getProjectBySlug(slug: string) {
  return getPostDataBySlug(slug, projectDirectory);
}

function getFeaturedPosts(allPosts: PostLoaderProps[]) {
  const posts: PostProps[] = allPosts.map(({ data, content, permalink }) => ({
    ...data,
    content,
    permalink,
  }));

  posts.sort((a, b) => (a.order > b.order ? -1 : 1));
  const filtered = posts.filter((post) => post.featured);

  return filtered;
}

export function getFeaturedBlogs() {
  return getFeaturedPosts(getAllBlogs());
}

export function getFeaturedProjects() {
  return getFeaturedPosts(getAllProjects());
}
