import * as React from "react";
import { Layout } from "@components/Layout";
import { getAllBlogs, getBlogBySlug } from "~/lib/getPosts";
import { GetStaticProps, GetStaticPaths } from "next";
import PostThumb from "@components/Other/postThumb";
import { PostProps } from "~/types/posts";
import markdownToHtml from "~/lib/markdownToHtml";
import getTimestamp from "~/lib/getTimestamp";

export default function BlogPostPage({ tags, title, subtitle, timestamp, thumb, content }: PostProps) {
  const getDate = getTimestamp(timestamp);
  return (
    <Layout title={title} metaDesc={subtitle} ogImage={thumb}>
      <article className="pb-10">
        {thumb && (
          <div className="relative overflow-hidden pt-[56.25%]">
            <PostThumb src={thumb} alt={title} />
          </div>
        )}
        <div className="pt-4 font-mono text-sm tracking-widest">
          {getDate.day}, {getDate.date}
        </div>
        <h1 className="py-3 text-3xl font-bold">{title}</h1>
        <div className="flex gap-2">
          {tags.map((tag: {}, index: number) => (
            <span className="rounded-md bg-dark-gray p-2 text-xs" key={index}>
              {tag}
            </span>
          ))}
        </div>
        <div className="mb-8 mt-4 w-full border-[1px] border-[#3d3d3d]"></div>
        <section id="article" className="prose prose-invert" dangerouslySetInnerHTML={{ __html: content }} />
      </article>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { params } = ctx as any;
  const { data, content } = getBlogBySlug(params?.slug);
  const htmlContent = await markdownToHtml(content);

  return {
    props: {
      ...data,
      content: htmlContent,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: getAllBlogs().map((post) => ({
      params: {
        slug: post.permalink,
      },
    })),
    fallback: false,
  };
};
