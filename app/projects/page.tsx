import type { Metadata } from 'next'

import ProjectsPolaroidSection from '@/sections/projects-polaroid-section'
import { getPosts } from '~/libs/contents'

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'A working catalogue of side-projects, tools, and weekend experiments by Dhafit Farenza.',
}

export default function ProjectsPage() {
  const projects = getPosts('PROJECT')

  return (
    <div className='mx-auto max-w-7xl px-6 sm:px-12 py-12'>
      <div className='pb-8 sm:pb-10 mb-5 border-border border-b w-full'>
        <div className='text-accent-400 mb-3 font-mono text-xs tracking-widest uppercase'>
          Projects
        </div>
        <h1 className='text-foreground m-0 mb-4 text-5xl leading-none font-medium tracking-[-0.03em]'>
          What I've worked on.
        </h1>
        <p className='text-fg-3 max-w-[60ch] text-base leading-[1.6]'>
          A few projects and translations I've cared enough about to keep around.
        </p>
      </div>
      <ProjectsPolaroidSection projects={projects} />
    </div>
  )
}
