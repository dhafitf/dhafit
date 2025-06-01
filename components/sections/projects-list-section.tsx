'use client'

import React, { useEffect } from 'react'
import { IoMdClose } from 'react-icons/io'

import ProjectsList from '@/blocks/projects-list'
import { Button } from '@/common/button'
import cn from '~/libs/cn'

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
    <div className='flex flex-col gap-5'>
      {tags.length > 0 && (
        <div className='flex flex-wrap items-center gap-3'>
          {tags.map((tag) => (
            <Button
              key={tag}
              onClick={() => handleSelectTag(tag as string)}
              className={cn(
                'px-3 py-1.5 h-fit cursor-pointer',
                selectedTags.includes(tag as string) ? 'bg-base-700' : ''
              )}>
              {selectedTags.includes(tag as string) && <IoMdClose />}
              <span>{tag}</span>
            </Button>
          ))}
          <button
            disabled={selectedTags.length === 0}
            className={cn(
              'text-sm cursor-pointer hover:underline disabled:no-underline disabled:cursor-not-allowed',
              selectedTags.length === 0 ? 'text-white/30' : 'text-white'
            )}
            onClick={() => setSelectedTags([])}>
            Reset filter
          </button>
        </div>
      )}
      <ProjectsList projects={projectsList} />
    </div>
  )
}

export default ProjectsListSection
