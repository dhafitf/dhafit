import fs from 'fs'
import path from 'path'
import { cache } from 'react'

import { readFrontmatter } from '~/libs/frontmatter'

const LYRICS_DIR = 'contents/lyrics'

function readArtistMetadata(dir: string): ArtistMetadata {
  const metadataFile = `${dir}/metadata.json`
  if (fs.existsSync(metadataFile)) {
    const data = fs.readFileSync(metadataFile, 'utf-8')
    return JSON.parse(data)
  }
  return {}
}

export function getTrackMetadata(filePath: string) {
  const fileContent = fs.readFileSync(filePath, 'utf-8')
  return readFrontmatter<TrackFrontMatter>(fileContent).metadata
}

export function getTranslationData(filePath: string) {
  const fileContent = fs.readFileSync(filePath, 'utf-8')
  const { metadata, content } = readFrontmatter<TrackFrontMatter>(fileContent)

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

// Memoized per request: the whole tree is walked once even when several
// accessors (metadata + component + static params) run within one render.
export const getAllLyrics = cache((dir: string): Artist[] => {
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
              filePath,
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
})

export function getArtistData(artist: string) {
  const artists = getAllLyrics(LYRICS_DIR)
  return artists.find((a) => a.name?.toLowerCase() === artist?.toLowerCase())
}

export function getTrackData(artist: string, track: string) {
  const artistData = getArtistData(artist)
  return artistData?.tracks.find((t) => t.title?.toLowerCase() === track?.toLowerCase())
}

export function getTrackLyrics() {
  const artists = getAllLyrics(LYRICS_DIR)
  return artists.map((artist) => artist.tracks).flat()
}

// Single entry for the detail page: resolves the track through the read model
// (which owns its source path) and reads its translation. No caller builds
// filesystem paths.
export function getTrackWithLyrics(artist: string, title: string) {
  const track = getTrackData(artist, title)
  if (!track?.filePath) return undefined

  const { metadata, content: blocks } = getTranslationData(track.filePath)
  return { track, metadata, blocks }
}
