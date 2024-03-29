import React from "react"

import { socialItems } from "~/libs/constants"
import CustomLink from "@/atoms/CustomLink"
import Profile from "@/atoms/Profile"
import SpotifyNowPlaying from "@/molecules/SpotifyNowPlaying"

const HeroSection = () => {
  return (
    <div className="py-16 flex flex-col gap-8">
      <Profile name="Dhafit Farenza" role="Full-stack Developer" />
      <div className="flex flex-col gap-4">
        <p className="sm:max-w-[75%]">
          I&apos;m a full-stack developer based in Indonesia, experience in utilizing JavaScript and
          TypeScript for a wide range of development projects.
        </p>
        <SpotifyNowPlaying />
      </div>
      <div className="flex xs:items-center font-semibold max-xs:flex-col max-xs:gap-4">
        <CustomLink
          href="mailto:dhafidfz@gmail.com"
          title="Send me an email"
          className="bg-baseBg hover:bg-hoverBg px-4 py-2 rounded-lg text-sm hover:text-white w-fit"
        >
          Get in touch
        </CustomLink>
        <div className="flex items-center gap-3 xs:ml-4">
          {socialItems.map((item) => {
            const Icon = item.icon
            return (
              <CustomLink
                key={item.path}
                href={item.path}
                title={item.label}
                className="bg-baseBg hover:bg-hoverBg p-2 rounded-full hover:text-white"
              >
                <Icon />
              </CustomLink>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default HeroSection
