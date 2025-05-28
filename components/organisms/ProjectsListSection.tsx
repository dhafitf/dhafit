"use client"

import React, { useEffect } from "react"
import { IoMdClose } from "react-icons/io"

import cn from "~/libs/cn"
import ProjectsList from "@/molecules/ProjectsList"

const ProjectsListSection = ({ projects }: { projects: PostData[] }) => {
  const tags = [...new Set(projects.flatMap((project) => project.metadata.tags))].filter(Boolean)
  const [selectedTags, setSelectedTags] = React.useState<string[]>([])
  const [projectsList, setProjectsList] = React.useState<PostData[]>(projects)

  const handleSelectTag = (tag: string) => {
    const newSelectedTags = selectedTags.includes(tag)
      ? selectedTags.filter((t) => t !== tag)
      : [...selectedTags, tag]

    setSelectedTags(newSelectedTags)
  }

  useEffect(() => {
    if (selectedTags.length === 0) return setProjectsList(projects)

    const filteredProjects = projectsList.filter((project) => {
      return selectedTags.every((tag) => project.metadata.tags?.includes(tag))
    })

    setProjectsList(filteredProjects)
  }, [projects, selectedTags])

  return (
    <div className="flex flex-col gap-5">
      {tags.length > 0 && (
        <div className="flex flex-wrap items-center gap-3">
          {tags.map((tag) => (
            <div
              key={tag}
              onClick={() => handleSelectTag(tag as string)}
              className={cn(
                "w-fit rounded-lg px-3 py-2 text-sm font-semibold cursor-pointer flex items-center gap-1",
                selectedTags.includes(tag as string)
                  ? "bg-white/10 text-white"
                  : "bg-white/5 hover:bg-white/10"
              )}
            >
              {selectedTags.includes(tag as string) && <IoMdClose />}
              <span>{tag}</span>
            </div>
          ))}
          <button
            disabled={selectedTags.length === 0}
            className={cn(
              "text-sm cursor-pointer hover:underline disabled:no-underline disabled:cursor-not-allowed",
              selectedTags.length === 0 ? "text-white/30" : "text-white"
            )}
            onClick={() => setSelectedTags([])}
          >
            Reset filter
          </button>
        </div>
      )}
      <ProjectsList projects={projectsList} />
    </div>
  )
}

export default ProjectsListSection
