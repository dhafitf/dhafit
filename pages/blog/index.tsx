import * as React from "react";
import { Layout, Section } from "@components/Layout";
import { BlogItem } from "@components/Posts";
import { getAllBlogs } from "~/lib/getPosts";
import { GetStaticProps } from "next";
import { BlogMetaData } from "~/types/posts";

export default function Blog({ posts }: any) {
  return (
    <Layout title="Blog | DhafitF" metaDesc="Daftar blog yang diposting oleh Dhafit Farenza">
      <Section title="Blog" id="blog" className="mx-5 pt-24 md:pt-20 lg:mx-auto lg:max-w-[984px]">
        <div className="flex flex-col gap-4">
          {posts.map((blog: BlogMetaData, index: React.Key) => {
            return <BlogItem key={index} title={blog.title} subtitle={blog.subtitle} permalink={blog.permalink} timestamp={blog.timestamp} />;
          })}
        </div>
      </Section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPost = getAllBlogs();
  const posts: any = allPost.map(({ data, content, permalink }) => ({
    ...data,
    content,
    permalink,
  }));

  return {
    props: {
      posts: posts.sort((a: any, b: any) => (a.order > b.order ? -1 : 1)),
    },
  };
};
