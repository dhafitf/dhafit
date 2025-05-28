type Metadata = {
  title: string
  subtitle?: string
  summary: string
  tags: string[]
  image?: string
  publishedAt?: string
  featured: boolean
}

type PostData = {
  metadata: Metadata
  slug: string
  content: string
}

interface LinkMetadata {
  name: string
  url: string
}

interface ArtistMetadata {
  name?: string
  image?: string
  links?: LinkMetadata[]
}

interface TrackMetadata {
  title?: string
  romanizedTitle?: string
  artists?: string[]
  image?: string
  defaultLyricsFile?: string
  links?: LinkMetadata[]
  updatedAt?: string
}

interface TrackFrontMatter {
  createdAt: string
  usedIn: {
    name: string
    url: string
  }[]
  contributors: {
    name: string
    url: string
  }[]
}

interface Translation {
  title: string
  language: string
  lyricsFile: string
  metadata?: TrackFrontMatter
}

interface Track extends TrackMetadata {
  translations?: Translation[]
}

interface Artist extends ArtistMetadata {
  tracks: Track[]
}
