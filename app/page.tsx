import { getFeaturedPosts } from "~/libs/contents"
import CustomLink from "@/atoms/CustomLink"
import ProjectsList from "@/molecules/ProjectsList"
import BlogsList from "@/molecules/BlogsList"
import CallToAction from "@/molecules/CallToAction"
import HeroSection from "@/organisms/HeroSection"

export default function Home() {
  const featuredBlogs = getFeaturedPosts("BLOG")
  const featuredProjects = getFeaturedPosts("PROJECT")
  return (
    <div className="flex flex-col gap-12 mb-8">
      <HeroSection />
      <div className="relative">
        <h3 className="text-2xl font-bold tracking-wider pb-5 text-white">Featured Projects</h3>
        <ProjectsList projects={featuredProjects} />
        <CustomLink
          href="/projects"
          className="px-4 py-2 flex items-center justify-center w-full mt-4 border-2 border-base-bg rounded-lg cursor-pointer text-sm hover:text-white hover:bg-base-bg"
        >
          View other projects
        </CustomLink>
      </div>
      <CallToAction />
      <div className="relative">
        <h3 className="text-2xl font-bold tracking-wider pb-5 text-white">Blogs</h3>
        <BlogsList blogs={featuredBlogs} />
        <CustomLink
          href="/blogs"
          className="px-4 py-2 flex items-center justify-center w-full mt-4 border-2 border-base-bg rounded-lg cursor-pointer text-sm hover:text-white hover:bg-base-bg"
        >
          View other blogs
        </CustomLink>
      </div>
    </div>
  )
}
