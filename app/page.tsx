import CustomLink from '@/common/custom-link'
import BlogsList from '@/molecules/BlogsList'
import CallToAction from '@/molecules/CallToAction'
import ProjectsList from '@/molecules/ProjectsList'
import HeroSection from '@/organisms/HeroSection'
import { Button } from '@/ui/button'
import { getFeaturedPosts } from '~/libs/contents'

export default function Home() {
  const featuredBlogs = getFeaturedPosts('BLOG')
  const featuredProjects = getFeaturedPosts('PROJECT')
  return (
    <div className='flex flex-col gap-12 mb-8'>
      <HeroSection />
      <div className='relative'>
        <h3 className='text-2xl font-bold tracking-wider pb-5 text-white'>Featured Projects</h3>
        <ProjectsList projects={featuredProjects} />
        <Button asChild variant='outline' className='mt-4 w-full'>
          <CustomLink href='/projects'>View other projects</CustomLink>
        </Button>
      </div>
      <CallToAction />
      <div className='relative'>
        <h3 className='text-2xl font-bold tracking-wider pb-5 text-white'>Blogs</h3>
        <BlogsList blogs={featuredBlogs} />
        <Button asChild variant='outline' className='mt-4 w-full'>
          <CustomLink href='/blogs'>View other blogs</CustomLink>
        </Button>
      </div>
    </div>
  )
}
