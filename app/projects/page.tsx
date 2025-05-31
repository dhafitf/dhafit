import type { Metadata } from 'next'

import ProjectsListSection from '@/sections/projects-list-section'
import { getAllPosts } from '~/libs/contents'

export const metadata: Metadata = {
  title: 'Projects',
  description: "A list of Dhafit's projects.",
}

const ProjectsPage = () => {
  const projects = getAllPosts('PROJECT')

  return (
    <div className='flex flex-col gap-7'>
      <div className='relative'>
        <h1 className='text-white font-bold text-3xl'>Projects</h1>
        <p className='pt-3'>
          The following is a list of some of the projects I have worked on. Among these projects,
          there are translating and programming projects.
        </p>
      </div>
      <ProjectsListSection projects={projects} />
    </div>
  )
}

export default ProjectsPage
