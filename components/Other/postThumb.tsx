import Image from "next/image";
import * as React from "react";
import { PostThumbProps } from "~/types/components";

const PostThumb: React.FC<PostThumbProps> = ({ alt, src }) => {
  return <Image loading="lazy" src={src} alt={alt} layout="fill" objectFit="cover" objectPosition="center" />;
};

export default PostThumb;
