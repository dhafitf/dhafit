import * as React from "react";
import { Layout } from "@components/Layout";
import { getProjectBySlug, getAllProjects } from "~/lib/getPosts";
import { GetStaticProps, GetStaticPaths } from "next";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import PostThumb from "@components/Other/postThumb";
import { PostMetaData } from "~/types/posts";

export default function BlogPostPage({ tags, title, subtitle, timestamp, thumb, mdxSource }: PostMetaData) {
  return (
    <Layout title={title} metaDesc={subtitle} ogImage={thumb}>
      <article className="pb-10">
        <div className="relative overflow-hidden pt-[56.25%]">
          <PostThumb src={thumb} alt={title} />
        </div>
        <section className="pt-4 font-mono text-sm tracking-widest">{timestamp}</section>
        <h1 className="py-3 text-3xl font-bold">{title}</h1>
        <div className="flex gap-2">
          {tags.map((tag: {}, index: number) => (
            <span className="rounded-md bg-cont p-2 text-xs" key={index}>
              {tag}
            </span>
          ))}
        </div>
        <div className="mb-8 mt-4 w-full border-[1px] border-[#3d3d3d]"></div>
        <section id="article" className="prose prose-invert">
          <MDXRemote {...mdxSource} />
        </section>
      </article>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { params } = ctx;
  const { data, content } = getProjectBySlug(params?.slug);
  const mdxPrism = require("mdx-prism");
  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [mdxPrism],
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
    paths: getAllProjects().map((post) => ({
      params: {
        slug: post.permalink,
      },
    })),
    fallback: false,
  };
};
