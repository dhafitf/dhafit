import * as React from "react";
import Layout from "@components/Layout";
import { getAllProject } from "~/lib/data";
import projectStyle from "~/styles/md.module.css";
import { GetStaticProps, GetStaticPaths } from "next";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import PostThumb from "@components/Other/postThumb";
import { PostMetaData } from "~/types/posts";

export default function BlogPostPage({ tags, title, subtitle, timestamp, thumb, mdxSource }: PostMetaData) {
  return (
    <Layout title={title} metaDesc={subtitle}>
      <article className="blog-post">
        <div className="thumb">
          <PostThumb src={thumb} alt={title} />
        </div>
        <section className={projectStyle.timestamp}>
          <span>Diposting pada {timestamp}</span>
        </section>
        <h1 className={projectStyle.title}>{title}</h1>
        <h3 className={projectStyle.subtitle}>{subtitle}</h3>
        <div className={projectStyle.tags}>
          {tags.map((tag: {}, index: React.Key | null | undefined) => (
            <span key={index}>{tag}</span>
          ))}
        </div>
        <div className={projectStyle.content}>
          <MDXRemote {...mdxSource} />
        </div>
      </article>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { params } = ctx;
  const allPost = getAllProject();
  const { data, content }: any = allPost.find((item) => item.permalink === params?.slug);
  const prism = require("mdx-prism");
  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [prism],
    },
  });
  return {
    props: {
      ...data,
      mdxSource,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: getAllProject().map((post) => ({
      params: {
        slug: post.permalink,
      },
    })),
    fallback: false,
  };
};
