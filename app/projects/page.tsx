import type { Metadata } from 'next'

import ProjectsFilteredList from '@/blocks/projects-filtered-list'
import PageHeader from '@/common/page-header'
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
      <PageHeader
        title="What I've worked on."
        description="A few projects and translations I've cared enough about to keep around."
        divider={false}
      />
      <ProjectsFilteredList projects={projects} />
    </div>
  )
}
