import * as React from 'react'
import { ProjectMetadata } from '../../types/project'

interface ProjectItemContProps {
  project: ProjectMetadata
}

const ProjectItemCont: React.FC<ProjectItemContProps> = ({ project, ...rest }) => {
  const { title, subtitle, timestamp, thumb, tags, permalink} = project

  return (
    <div className="cont">
      {title}
    </div>
  )
}

export default ProjectItemCont
