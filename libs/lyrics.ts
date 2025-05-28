import fs from "fs"

function readArtistMetadata(path: string): ArtistMetadata {
  const metadataFile = `${path}/metadata.json`
  if (fs.existsSync(metadataFile)) {
    const data = fs.readFileSync(metadataFile, "utf-8")
    return JSON.parse(data)
  }
  return {}
}

function readTrackMetadata(path: string): TrackMetadata {
  const metadataFile = `${path}/metadata.json`
  if (fs.existsSync(metadataFile)) {
    const data = fs.readFileSync(metadataFile, "utf-8")
    return JSON.parse(data)
  }
  return {}
}

function parseFrontmatter(fileContent: string) {
  const frontmatterRegex = /---\s*([\s\S]*?)\s*---/
  const match = frontmatterRegex.exec(fileContent)
  const metadata: Partial<TrackFrontMatter> = {}

  if (match) {
    const frontMatterBlock = match[1]

    try {
      const parsedMetadata = JSON.parse(frontMatterBlock)
      Object.assign(metadata, parsedMetadata)
    } catch (error) {
      console.error("Error parsing JSON frontmatter:", error)
    }
  }

  const content = fileContent.replace(frontmatterRegex, "").trim()
  return { metadata, content }
}

export function getCombinedContents(files: string[]) {
  const contents = files.map((file) => {
    let fileContent = fs.readFileSync(file, "utf-8")
    const { content } = parseFrontmatter(fileContent)
    return content.split("\n").map((line) => line.trim())
  })

  const minLength = Math.min(...contents.map((c) => c.length))

  const combinedContents = []
  for (let i = 0; i < minLength; i++) {
    const pair = [contents[0][i]]
    if (contents.length > 1) {
      pair.push(contents[1][i])
    }
    combinedContents.push(pair)
  }

  return combinedContents
}

export function getTranslationMetadata(filePath: string) {
  const fileContent = fs.readFileSync(filePath, "utf-8")
  return parseFrontmatter(fileContent).metadata as TrackFrontMatter
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
          if (item.isDirectory() && item.name !== "metadata.json") {
            const trackTitle = item.name
            const trackPath = `${artistPath}/${trackTitle}`

            const trackMetadata = readTrackMetadata(trackPath)
            const trackFiles = fs.readdirSync(trackPath, { withFileTypes: true })

            const translations: Translation[] = []
            trackFiles.forEach((file) => {
              if (file.name !== trackMetadata.defaultLyricsFile && file.name !== "metadata.json") {
                const match = file.name.match(/^\[(.+)\](.+)\.mdx$/)

                if (match) {
                  const language = match[1]
                  const trackTitle = match[2]
                  translations.push({ title: trackTitle, language, lyricsFile: file.name })
                }
              }
            })

            const track: Track = {
              title: trackMetadata.title || trackTitle,
              romanizedTitle: trackMetadata.romanizedTitle,
              artists: trackMetadata.artists || [artistName],
              image: trackMetadata.image,
              links: trackMetadata.links,
              defaultLyricsFile: trackMetadata.defaultLyricsFile,
              updatedAt: trackMetadata.updatedAt,
              translations,
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
  const artists = getAllLyrics("contents/lyrics")
  return artists.find((a) => a.name?.toLowerCase() === artist?.toLowerCase())
}

export function getTrackData(artist: string, track: string) {
  const artistData = getArtistData(artist)
  return artistData?.tracks.find((t) => t.title?.toLowerCase() === track?.toLowerCase())
}

export function getTrackLyrics() {
  const artists = getAllLyrics("contents/lyrics")
  return artists.map((artist) => artist.tracks).flat()
}
