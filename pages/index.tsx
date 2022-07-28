import type { GetStaticProps, NextPage } from "next";
import MoreButton from "~/components/Other/moreButton";
import { Layout, Section } from "@components/Layout";
import { getFeaturedProjects, getFeaturedBlogs } from "~/lib/getPosts";
import React from "react";
import { ProjectMetaData } from "~/types/posts";
import { ProjectItemCard } from "~/components/Posts";
import HeroSection from "@section/heroSection";
import TechSection from "@section/techSection";
import FeaturedBlogs from "@section/featuredBlogs";

const Home: NextPage = ({ featProject, featBlog }: any) => {
  return (
    <>
      <Layout title="DhafitF" metaDesc="Dhafit Farenza blog dan portfolio">
        <HeroSection />
        <TechSection />
        <Section title="Projek Unggulan" id="featured-projects" className="mb-7">
          <div className="relative grid gap-6 pb-6 md:grid-cols-2">
            {featProject.map((post: ProjectMetaData) => {
              return <ProjectItemCard key={post.permalink} {...post} />;
            })}
          </div>
          <MoreButton href="/project" name="project" />
        </Section>
        <FeaturedBlogs blogs={featBlog} withLoadmore />
      </Layout>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const featProject = await getFeaturedProjects();
  const featBlog = await getFeaturedBlogs();

  return {
    props: {
      featProject,
      featBlog,
    },
  };
};
