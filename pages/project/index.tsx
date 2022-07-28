import * as React from "react";
import { Layout, Section } from "@components/Layout";
import { getAllProjects } from "~/lib/getPosts";
import { GetStaticProps } from "next";
import { ProjectMetaData } from "~/types/posts";
import { ProjectItemCard } from "~/components/Posts";

export default function Project({ posts }: any) {
  return (
    <Layout title="Project | DhafitF" metaDesc="Daftar project yang telah dan sedang dikerjakan oleh Dhafit Farenza">
      <h1 className="pb-4 text-4xl font-bold">Projek</h1>
      <p className="pb-4">
        Berikut ini adalah daftar dari beberapa projek yang pernah ataupun yang terus saya kerjakan. Diantara projek ini, ada projek menerjemahkan dan juga pemrograman.
      </p>
      <div className="relative grid gap-6 pb-10 md:grid-cols-2">
        {posts.map((post: ProjectMetaData) => {
          return <ProjectItemCard key={post.permalink} {...post} />;
        })}
      </div>
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
