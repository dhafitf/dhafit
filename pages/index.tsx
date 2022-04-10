import type { GetStaticProps, NextPage } from "next";
import MoreButton from "~/components/Other/moreButton";
import { Layout, Section } from "@components/Layout";
import { getAllProjects, getAllBlogs } from "~/lib/getPosts";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { ProjectMetaData, BlogMetaData } from "~/types/posts";
import { DraggableH1, DraggableH2 } from "~/components/Motions/draggableHeading";
import { ProjectItem, BlogItem } from "~/components/Posts";
import { SpotifyTopTracks } from "~/components/Spotify";

const Home: NextPage = ({ featProject, featBlog }: any) => {
  return (
    <>
      <Layout title="DhafitF" metaDesc="Dhafit Farenza blog dan portfolio">
        <div className="mx-5 lg:mx-auto lg:max-w-[984px]">
          <div className="flex h-screen flex-col justify-center">
            <p className="pb-1 md:text-lg">Halo, nama saya</p>
            <DraggableH1 initialX={-100} className="pb-1 text-4xl font-bold text-main md:text-7xl" text="Dhafit Farenza" />
            <DraggableH2 initialX={100} className="pb-2 text-2xl font-semibold text-secondary md:text-4xl" text="Penerjemah & Frontend web developers." />
            <p className="mb-4 max-w-[492px]">
              Saya seorang penerjemah, yang biasanya menerjemahkan bahasa Jepang dan Inggris ke bahasa Indonesia. Serta seorang frontend web developers.
            </p>
            <Link href="/about" passHref>
              <motion.a whileHover={{ y: -6 }} whileTap={{ scale: 0.9 }} className="max-w-[130px] rounded-md border-2 border-secondary p-2 text-center text-sm text-white">
                Profil lengkap
              </motion.a>
            </Link>
          </div>
          <Section title="Projects Unggulan" id="featured-projects" className="mb-7">
            <div className="relative grid gap-6 pb-6 md:grid-cols-2">
              {featProject.map((post: ProjectMetaData) => {
                return <ProjectItem key={post.permalink} {...post} />;
              })}
            </div>
            <MoreButton href="/project" name="project" />
          </Section>
          <Section title="Blog" id="blog" className="mb-7">
            <div className="relative grid gap-6 pb-6">
              {featBlog.map((post: BlogMetaData) => {
                return <BlogItem key={post.permalink} {...post} />;
              })}
            </div>
            <MoreButton href="/blog" name="blog" />
          </Section>
          <Section title="Top Tracks" id="top-track" className="relative mb-7">
            <div className="relative flex flex-col gap-4">
              <SpotifyTopTracks />
            </div>
          </Section>
        </div>
      </Layout>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  function getFeaturedPosts(allPosts: any) {
    const posts = allPosts.map(({ data, content, permalink }: any) => ({
      ...data,
      content,
      permalink,
    }));

    posts.sort((a: any, b: any) => (a.order > b.order ? -1 : 1));
    const filtered = posts.filter((post: any) => post.featured);

    return filtered;
  }

  const allProject = getFeaturedPosts(getAllProjects());
  const allBlog = getFeaturedPosts(getAllBlogs());

  return {
    props: {
      featProject: allProject,
      featBlog: allBlog,
    },
  };
};
