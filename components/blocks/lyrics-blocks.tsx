const LyricsBlocks = ({ blocks }: { blocks: string[][] }) => {
  return (
    <div className='space-y-8'>
      {blocks.map((lines, blockIndex) => (
        <div key={blockIndex} className='space-y-1'>
          {lines.map((line, lineIndex) => {
            const isOriginal = lineIndex % 2 === 0
            return (
              <p
                key={`${blockIndex}-${lineIndex}`}
                className={
                  isOriginal
                    ? 'text-foreground text-xl leading-snug font-medium'
                    : 'text-fg-2 pb-2 leading-snug'
                }>
                {line}
              </p>
            )
          })}
        </div>
      ))}
    </div>
  )
}

export default LyricsBlocks
