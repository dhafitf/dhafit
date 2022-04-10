import * as React from "react";
import { Layout, Section } from "@components/Layout";
import { getAllProjects } from "~/lib/getPosts";
import { GetStaticProps } from "next";
import { ProjectMetaData } from "~/types/posts";
import { ProjectItem } from "~/components/Posts";

export default function Project({ posts }: any) {
  return (
    <Layout title="Project | DhafitF" metaDesc="Daftar project yang telah dan sedang dikerjakan oleh Dhafit Farenza">
      <Section title="Projects" id="project" className="mx-5 pt-24 pb-10 md:pt-20 lg:mx-auto lg:max-w-[984px]">
        <div className="relative grid gap-6 pb-6 md:grid-cols-2">
          {posts.map((post: ProjectMetaData) => {
            return <ProjectItem key={post.permalink} {...post} />;
          })}
        </div>
      </Section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPost = getAllProjects();
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
