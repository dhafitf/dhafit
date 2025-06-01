import ActivityList from '@/blocks/activity-list'
import BlogsList from '@/blocks/blogs-list'
import CallToAction from '@/blocks/call-to-action'
import ProjectsList from '@/blocks/projects-list'
import { Button } from '@/common/button'
import CustomLink from '@/common/custom-link'
import HeroSection from '@/sections/hero-section'
import { getNewestActivity } from '~/contents/activity-log'
import { getFeaturedPosts } from '~/libs/contents'

export default function Home() {
  const featuredBlogs = getFeaturedPosts('BLOG')
  const featuredProjects = getFeaturedPosts('PROJECT')
  const newestActivity = getNewestActivity()

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
      <div className='relative'>
        <h3 className='text-2xl font-bold tracking-wider pb-5 text-white'>Activity Log</h3>
        <ActivityList activity={newestActivity} />
        <Button asChild variant='outline' className='mt-4 w-full'>
          <CustomLink href='/activity'>View other activity</CustomLink>
        </Button>
      </div>
    </div>
  )
}
