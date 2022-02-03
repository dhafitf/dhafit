import { MDXRemoteSerializeResult } from "next-mdx-remote";

export interface ProjectMetaData {
  title: string;
  subtitle: string;
  permalink: string;
  tags: any;
  thumb: string;
}

export interface BlogMetaData {
  title: string;
  subtitle: string;
  permalink: string;
  timestamp: string;
}

export interface PostMetaData {
  mdxSource: MDXRemoteSerializeResult;
  tags: any;
  title: string;
  timestamp: string;
  subtitle: string;
  thumb: string;
  permalink: string;
  data: string;
  content: string;
}
