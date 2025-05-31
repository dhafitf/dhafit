import ProjectCard from '@/common/project-card'

const ProjectsList = ({ projects }: { projects: PostData[] }) => {
  return (
    <div className='grid sm:grid-cols-2 gap-4'>
      {projects.length > 0 ? (
        projects.map((project) => <ProjectCard key={project.slug} {...project} />)
      ) : (
        <p className='text-sm text-center col-span-3 py-4'>No projects found</p>
      )}
    </div>
  )
}

export default ProjectsList
