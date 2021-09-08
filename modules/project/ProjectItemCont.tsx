import * as React from 'react'
import { ProjectMetadata } from '../../types/project'

interface ProjectItemProps {
  project: ProjectMetadata
}

const ProjectItem: React.FC<ProjectItemProps> = ({ project, ...rest }) => {
  const { title, subtitle, timestamp, thumb, tags, permalink} = project

  return (
    <div className="cont">
      {title}
    </div>
  )
}

export default ProjectItem
