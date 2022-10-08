import type { GetStaticProps, NextPage } from "next";
import MoreButton from "~/components/Other/moreButton";
import { Layout, Section } from "@components/Layout";
import { getFeaturedProjects, getFeaturedBlogs } from "~/lib/getPosts";
import React from "react";
import { PostProps } from "~/types/posts";
import { ProjectItemCard } from "~/components/Posts";
import HeroSection from "@section/heroSection";
import TechSection from "@section/techSection";
import FeaturedBlogs from "@section/featuredBlogs";
import useTranslation from "~/lib/useTranslation";

const Home: NextPage = ({ featProject, featBlog }: any) => {
  const { locale } = useTranslation();

  return (
    <>
      <Layout>
        <HeroSection />
        <TechSection />
        <Section title={locale["featured.project"]} id="featured-projects" className="mb-7">
          <div className="relative grid gap-6 pb-6 md:grid-cols-2">
            {featProject.map((post: PostProps) => {
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
