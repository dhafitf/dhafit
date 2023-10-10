import React from "react"

const SpotifyTopTracks_ = () => {
  return (
    <div>
      {Array.from({ length: 10 }).map((_, index) => {
        const randomWidth = Math.floor(Math.random() * (320 - 150 + 1)) + 150
        return (
          <div key={index} className="flex items-center gap-3 p-2 animate-pulse">
            <div className="flex tabular-nums text-gray-400 text-sm">
              {(index + 1).toString().padStart(2, "0")}
            </div>
            <div className="w-12 h-12 bg-gray-600 rounded"></div>
            <div className="flex flex-col gap-1 flex-1">
              <div
                className="h-6 w-full bg-gray-600 rounded"
                style={{ maxWidth: `${randomWidth}px` }}
              ></div>
              <div
                className="h-[18px] w-full bg-gray-600 rounded"
                style={{ maxWidth: `${Math.round(randomWidth / 3)}px` }}
              ></div>
            </div>
            <div className="ml-auto h-5 w-8 bg-gray-600 rounded"></div>
          </div>
        )
      })}
    </div>
  )
}

export default SpotifyTopTracks_
