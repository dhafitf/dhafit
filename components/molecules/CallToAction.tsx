import React from "react"

import CustomLink from "@/atoms/CustomLink"

const CallToAction = () => {
  return (
    <div className="p-6 border border-white/10 rounded-lg text-sm flex max-sm:flex-col gap-4 sm:items-center justify-between">
      <div className="flex flex-col gap-1">
        <h4 className="text-lg font-semibold">Got a project in mind?</h4>
        <span className="text-gray-400">Reach out and let&lsquo;s make it happen!</span>
      </div>
      <div className="flex items-center font-semibold">
        <CustomLink
          href="mailto:dhafidfz@gmail.com"
          title="Send me an email"
          className="bg-base-bg hover:bg-hover-bg border border-white/10 px-4 py-2 rounded-lg hover:text-white"
        >
          Get in touch
        </CustomLink>
      </div>
    </div>
  )
}

export default CallToAction
