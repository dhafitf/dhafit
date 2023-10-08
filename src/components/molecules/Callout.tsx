import React from "react"

const Callout = ({
  emoji,
  children,
}: {
  emoji: React.ReactNode | string
  children: React.ReactNode
}) => {
  return (
    <div className="px-4 py-3 border border-l-8 border-white/10 bg-baseBg rounded p-1 text-sm flex items-center mb-6">
      {emoji && <div className="flex items-center w-4 mr-4">{emoji}</div>}
      <div className="w-full callout">{children}</div>
    </div>
  )
}

export default Callout
