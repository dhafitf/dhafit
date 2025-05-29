// Note: We can improve this component to support multiple languages in the future.
// To do that, we need to modify the mdx file and the handler.

const Translation = ({ lyrics }: { lyrics: string[][] }) => {
  const renderData = () => {
    return lyrics.map((blocks, index) => {
      return (
        <div key={index} className='mb-6'>
          {blocks.map((line, lineIndex) => (
            <p
              key={`${index}-${lineIndex}`}
              className={lineIndex % 2 === 0 ? 'text-xl' : 'text-base pb-2'}>
              {line}
            </p>
          ))}
        </div>
      )
    })
  }

  return <article className='relative'>{renderData()}</article>
}

export default Translation
