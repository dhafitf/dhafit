import React from "react"
import ProjectCard from "@/atoms/ProjectCard"

const ProjectsList = ({ projects }: { projects: PostData[] }) => {
  return (
    <>
      {projects.length > 0 ? (
        <div className="grid sm:grid-cols-2 gap-4">
          {projects.map((project) => (
            <ProjectCard key={project.slug} {...project} />
          ))}
        </div>
      ) : (
        <p className="text-sm text-center">No projects found</p>
      )}
    </>
  )
}

export default ProjectsList
