import * as React from "react";
import Layout from "../../components/Layout";
import { getAllPosts } from "../../lib/data";
import B from "../project/project.module.css";
import { GetStaticProps, GetStaticPaths } from "next";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import PostThumb from "../../modules/PostThumb";

interface Props {
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

export default function BlogPostPage({
  tags,
  title,
  subtitle,
  timestamp,
  thumb,
  mdxSource,
}: Props) {
  return (
    <Layout title={title} metaDesc={subtitle}>
      <article className="blog-post">
        <div className="thumb">
          <PostThumb src={thumb} alt={title} />
        </div>
        <section className={B.timestamp}>
          <span>Diposting pada {timestamp}</span>
        </section>
        <h1 className={B.title}>{title}</h1>
        <h3 className={B.subtitle}>{subtitle}</h3>
        <div className={B.tags}>
          {tags.map((tag: {}, index: React.Key | null | undefined) => (
            <span key={index}>{tag}</span>
          ))}
        </div>
        <div className={B.content}>
          <MDXRemote {...mdxSource} />
        </div>
      </article>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { params } = ctx;
  const allPost = getAllPosts();
  const { data, content }: any = allPost.find(
    (blog) => blog.permalink === params?.slug
  );
  const mdxSource = await serialize(content);
  return {
    props: {
      ...data,
      mdxSource,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: getAllPosts().map((post) => ({
      params: {
        slug: post.permalink,
      },
    })),
    fallback: false,
  };
};
