import React from "react"

import SocialsList from "@/molecules/SocialsList"
import TechsList from "@/molecules/TechsList"

const AboutPage = () => {
  return (
    <div className="flex flex-col gap-7">
      <div className="relative">
        <h1 className="text-white font-bold text-3xl">About me</h1>
        <p className="pt-3">
          I&apos;m a full-stack developer based in Indonesia, experience in utilizing JavaScript and
          TypeScript for a wide range of development projects. Currently, I work as a freelance
          developer, taking on projects for both frontend and backend development. I have
          approximately 2 years of experience in this field.
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="text-xl font-semibold text-white">Tech stacks I use</h3>
        <TechsList />
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="text-xl font-semibold text-white">Find me on</h3>
        <SocialsList />
      </div>
    </div>
  )
}

export default AboutPage
