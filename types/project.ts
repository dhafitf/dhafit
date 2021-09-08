export interface ProjectMetadata {
  title: string
  subtitle: string
  thumb: string
  tags?: string[]
  timestamp: string
  content: string
  permalink: string
}

export interface BaseProjectProps extends ProjectMetadata {
  content: string
}
