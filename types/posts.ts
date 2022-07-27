import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { DefaultPostsProps } from "./default";

export interface ProjectMetaData extends DefaultPostsProps {
  tags: string[];
  thumb: string;
}

export interface BlogMetaData extends DefaultPostsProps {
  timestamp: string;
}

export interface PostMetaData extends DefaultPostsProps {
  mdxSource: MDXRemoteSerializeResult;
  tags: string[];
  thumb: string;
  data: string;
  content: string;
  timestamp: string;
}

export interface PostsMetaData {
  posts: {
    content: string;
    permalink: string;
  }[];
}

export interface PostProps {
  title: string;
  subtitle: string;
  timestamp: string;
  thumb: string;
  tags: string[];
  order: number;
  content: string;
  permalink: string;
}
