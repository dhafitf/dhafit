import Image from 'next/image'
import * as React from 'react'

interface PostThumbProps {
  src: string
  alt?: string
}

const PostThumb: React.FC<PostThumbProps> = ({ alt, src }) => {
  return (
    <Image
      className="thumb"
      loading="lazy"
      src={src}
      alt={alt}
      width={750}
      height={421}
      layout='intrinsic'
    />
  )
}

export default PostThumb
