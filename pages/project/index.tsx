import { Layout } from "@components/Layout";
import { getAllProjects } from "~/lib/getPosts";
import { GetStaticProps } from "next";
import { PostProps } from "~/types/posts";
import { ProjectItemCard } from "~/components/Posts";
import useTranslation from "~/lib/useTranslation";

export default function Project({ posts }: { posts: PostProps[] }) {
  const { locale } = useTranslation();

  return (
    <Layout title="Project - Dhafit Farenza" description="Projects by Dhafit Farenza">
      <h1 className="pb-4 text-4xl font-bold">{locale["project.allProject"]}</h1>
      <p className="pb-4">{locale["project.description"]}</p>
      <div className="relative grid gap-6 pb-10 md:grid-cols-2">
        {posts.map((post: PostProps) => {
          return <ProjectItemCard key={post.permalink} {...post} />;
        })}
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPost = getAllProjects();
  const posts = allPost.map(({ data, content, permalink }) => ({
    ...data,
    content,
    permalink,
  }));

  return {
    props: {
      posts: posts.sort((a, b) => (a.order > b.order ? -1 : 1)),
    },
  };
};
