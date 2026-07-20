'use client'

import FilteredList from '@/blocks/filtered-list'
import PolaroidCard from '@/common/polaroid-card'

type Props = { projects: PostData[] }

export default function ProjectsFilteredList({ projects }: Props) {
  return (
    <FilteredList
      items={projects}
      getFacets={(p) => (p.metadata.subtitle ? [p.metadata.subtitle] : [])}
      getKey={(p) => p.slug}
      gridClassName='grid grid-cols-1 gap-x-10 gap-y-16 md:grid-cols-2 xl:grid-cols-3'
      emptyNoun='projects'
      renderItem={(p, i) => <PolaroidCard post={p} index={i} />}
    />
  )
}
