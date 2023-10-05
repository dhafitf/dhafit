import React from "react"
import ProjectCard from "@/atoms/ProjectCard"

const ProjectsList = ({ projects }: { projects: ProjectCardProps[] }) => {
  return (
    <div className="grid sm:grid-cols-2 gap-4">
      {projects.map((project) => (
        <ProjectCard key={project.href} {...project} />
      ))}
    </div>
  )
}

export default ProjectsList
