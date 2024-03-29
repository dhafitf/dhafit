const formatDuration = (duration: number): string => {
  const totalSeconds = duration / 1000
  const minutes = Math.floor(totalSeconds / 60)
  const seconds = Math.floor(totalSeconds % 60)
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`
}

export default formatDuration
