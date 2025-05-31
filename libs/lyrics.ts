import fs from 'fs'
import path from 'path'
import { parse } from 'yaml'

function readArtistMetadata(path: string): ArtistMetadata {
  const metadataFile = `${path}/metadata.json`
  if (fs.existsSync(metadataFile)) {
    const data = fs.readFileSync(metadataFile, 'utf-8')
    return JSON.parse(data)
  }
  return {}
}

function parseFrontmatter(fileContent: string) {
  const frontmatterRegex = /^---\s*([\s\S]*?)\s*---/
  const match = frontmatterRegex.exec(fileContent)
  const metadata = match ? parse(match[1]) : {}
  const content = fileContent.replace(frontmatterRegex, '').trim()

  return { metadata, content }
}

export function getTrackMetadata(filePath: string) {
  const fileContent = fs.readFileSync(filePath, 'utf-8')
  return parseFrontmatter(fileContent).metadata as TrackFrontMatter
}

export function getTranslationData(filePath: string) {
  const fileContent = fs.readFileSync(filePath, 'utf-8')
  const { metadata, content } = parseFrontmatter(fileContent)

  const blocks = content
    .trim()
    .split(/\n\s*\n/) // Split blocks based on empty lines
    .map(
      (block) =>
        block
          .split('\n') // Split by line
          .map((line) => line.trim()) // Remove leading and trailing spaces
          .filter((line) => line.length > 0) // Ignore empty lines
    )

  return {
    metadata: metadata as TrackFrontMatter,
    content: blocks,
  }
}

export function getAllLyrics(dir: string): Artist[] {
  const folders = fs.readdirSync(dir, { withFileTypes: true })

  const artists: Artist[] = []

  folders.forEach((folder) => {
    if (folder.isDirectory()) {
      const artistName = folder.name
      const artistMetadata = readArtistMetadata(`${dir}/${artistName}`)

      if (artistMetadata.name) {
        const tracks: Track[] = []

        const artistPath = `${dir}/${artistName}`
        const artistContents = fs.readdirSync(artistPath, { withFileTypes: true })

        artistContents.forEach((item) => {
          if (item.name !== 'metadata.json') {
            const trackTitle = item.name
            const trackPath = `${artistPath}/${trackTitle}`

            const filePath = path.join(process.cwd(), trackPath)
            const trackMetadata = getTrackMetadata(filePath)

            const track: Track = {
              title: trackMetadata.title || trackTitle,
              romanizedTitle: trackMetadata.romanizedTitle,
              artists: trackMetadata.artists || [artistName],
              image: trackMetadata.image,
              links: trackMetadata.links,
              updatedAt: trackMetadata.updatedAt,
            }

            tracks.push(track)
          }
        })

        if (tracks.length > 0) {
          artists.push({ ...artistMetadata, tracks })
        }
      }
    }
  })

  return artists
}

export function getArtistData(artist: string) {
  const artists = getAllLyrics('contents/lyrics')
  return artists.find((a) => a.name?.toLowerCase() === artist?.toLowerCase())
}

export function getTrackData(artist: string, track: string) {
  const artistData = getArtistData(artist)
  return artistData?.tracks.find((t) => t.title?.toLowerCase() === track?.toLowerCase())
}

export function getTrackLyrics() {
  const artists = getAllLyrics('contents/lyrics')
  return artists.map((artist) => artist.tracks).flat()
}
