import fs from "fs";
import path from "path";
import matter from "gray-matter";

const blogDirectory = path.join(process.cwd(), "posts/blog");
const projectDirectory = path.join(process.cwd(), "posts/project");

export function getAllPosts() {
  const allPost = fs.readdirSync(blogDirectory);

  return allPost.map((filename) => {
    const permalink = filename.replace(".md", "");
    const fileContent = fs.readFileSync(
      path.join(blogDirectory, filename),
      "utf8"
    );

    const { data, content } = matter(fileContent);

    return {
      data,
      content,
      permalink,
    };
  });
}

export function getAllProject() {
  const allPost = fs.readdirSync(projectDirectory);

  return allPost.map((filename) => {
    const permalink = filename.replace(".md", "");
    const fileContent = fs.readFileSync(
      path.join(projectDirectory, filename),
      "utf8"
    );

    const { data, content } = matter(fileContent);

    return {
      data,
      content,
      permalink,
    };
  });
}

export const blogPosts = [{}];
