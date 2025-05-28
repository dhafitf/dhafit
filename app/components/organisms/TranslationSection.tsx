import React, { type JSX } from "react";
import Image from "next/image"
import { SiSpotify, SiYoutube } from "react-icons/si"

import CustomLink from "@/atoms/CustomLink"
import Translation from "@/molecules/Translation"
import TranslationsListModal from "@/molecules/TranslationsListModal"

interface LyricsPageProps {
  track: Track
  lyrics: string[][]
  subtitle?: string
  translations?: Translation[]
  metadata?: TrackFrontMatter
  lyricsFile: string
}

const TranslationSection = ({
  track,
  lyrics,
  subtitle,
  translations,
  metadata,
  lyricsFile,
}: LyricsPageProps) => {
  const GITHUB_REPO_URL =
    "https://github.com/dhafitf/dhafit/blob/master/contents/lyrics/" +
    `${track.artists![0]}/` +
    `${track.title}/` +
    lyricsFile

  return (
    <div>
      <div className="mx-auto mb-4 rounded-xl overflow-hidden w-[clamp(144px,30vw,192px)] aspect-square relative">
        {track.image ? (
          <Image
            src={track.image}
            alt={`Image of ${track.title}`}
            width={192}
            height={192}
            draggable={false}
            className="object-cover object-center w-full h-full w"
          />
        ) : (
          <div className="bg-baseBg w-full h-full"></div>
        )}
      </div>
      <div className="flex items-center justify-center flex-col">
        <div className="flex items-center text-sm pb-3">
          {track.artists?.map((artist, index) => (
            <span
              key={index}
              className="w-fit after:content-[','] last:after:content-[] mr-1 text-gray-400"
            >
              {artist}
            </span>
          ))}
        </div>
        <h1 className="font-bold text-3xl text-white text-center pb-1">{track.title}</h1>
        {subtitle && <p className="text-gray-400">{subtitle}</p>}
        <TranslationsListModal translations={translations} />
      </div>
      <div className="pt-8">
        <Translation lyrics={lyrics} />
        {metadata?.contributors && (
          <div className="text-gray-400 text-sm mt-8">
            <span>Contributors: </span>
            {metadata.contributors.map((contributor, index) => {
              if (contributor.url) {
                return (
                  <span key={index} className="after:content-[','] last:after:content-[] mr-1">
                    <CustomLink href={contributor.url}>{contributor.name}</CustomLink>
                  </span>
                )
              }

              return (
                <span key={index} className="after:content-[','] last:after:content-[] mr-1">
                  {contributor.name}
                </span>
              )
            })}
          </div>
        )}
      </div>
      <div className="relative">
        <div className="border-t-2 border-white/10 py-4 mt-6">
          <div className="flex items-center gap-4 flex-wrap mt-2">
            {track.links?.map((link, index) => {
              const icons: { [key: string]: JSX.Element } = {
                Spotify: <SiSpotify className="h-[18px] w-[18px]" />,
                Youtube: <SiYoutube className="h-[18px] w-[18px]" />,
              }

              return (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="bg-baseBg hover:bg-hoverBg px-4 py-3 rounded-lg text-sm hover:text-white w-fit gap-2 flex items-center"
                >
                  {icons[link.name]}
                  {link.name}
                </a>
              )
            })}
          </div>
          {metadata?.usedIn && (
            <div className="py-2 mt-4">
              <h2 className="font-semibold text-lg pb-2">This lyrics used in these videos</h2>
              <div className="space-y-4">
                {metadata.usedIn.map((item, index) => {
                  return (
                    <div key={index} className="aspect-video">
                      <iframe
                        className="w-full h-full"
                        src={item.url}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                    </div>
                  )
                })}
              </div>
            </div>
          )}
        </div>
        <div className="border-t-2 border-white/10 py-4 mt-4">
          <a
            href={GITHUB_REPO_URL}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="flex items-center text-gray-400 hover:underline w-fit text-sm"
          >
            <span>Edit this lyrics on github</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default TranslationSection
