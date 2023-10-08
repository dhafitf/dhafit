import React, { Suspense } from "react"

import { allProjects } from "contentlayer/generated"
import ProjectsListSection from "@/organisms/ProjectsListSection"

const ProjectsPage = () => {
  return (
    <div className="flex flex-col gap-7">
      <div className="relative">
        <h1 className="text-white font-bold text-3xl">Projects</h1>
        <p className="pt-3">
          The following is a list of some of the projects I have worked on. Among these projects,
          there are translating and programming projects.
        </p>
      </div>
      <Suspense fallback={<span>Loading projects...</span>}>
        <ProjectsListSection projects={allProjects} />
      </Suspense>
    </div>
  )
}

export default ProjectsPage
