"use client"

import React, { useEffect } from "react"
import { IoMdClose } from "react-icons/io"

import cn from "~/libs/cn"
import { projects as projectsList } from "~/libs/dummies"
import ProjectsList from "@/molecules/ProjectsList"

const tags = ["Translations", "Web development", "App development"]

const ProjectsListSection = () => {
  const [selectedTags, setSelectedTags] = React.useState<string[]>([])
  const [projects, setProjects] = React.useState<ProjectCardProps[]>(projectsList)

  const handleSelectTag = (tag: string) => {
    const newSelectedTags = selectedTags.includes(tag)
      ? selectedTags.filter((t) => t !== tag)
      : [...selectedTags, tag]

    setSelectedTags(newSelectedTags)
  }

  useEffect(() => {
    const filteredProjects = projectsList.filter((project) => {
      project.tags = project.tags.map((tag) => tag.toLowerCase())
      return selectedTags.every((tag) => project.tags.includes(tag.toLowerCase()))
    })

    setProjects(filteredProjects)
  }, [selectedTags])

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center gap-3">
        {tags.map((tag) => (
          <div
            key={tag}
            onClick={() => handleSelectTag(tag)}
            className={cn(
              "w-fit rounded-lg px-3 py-2 text-sm font-semibold capitalize cursor-pointer flex items-center gap-1",
              selectedTags.includes(tag) ? "bg-white/10 text-white" : "bg-white/5 hover:bg-white/10"
            )}
          >
            {selectedTags.includes(tag) && <IoMdClose />}
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
      <ProjectsList projects={projects} />
    </div>
  )
}

export default ProjectsListSection
