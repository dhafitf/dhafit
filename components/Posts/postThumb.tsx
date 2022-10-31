import Image from "next/image";
import * as React from "react";
import { PostThumbProps } from "~/types/components";

const PostThumb: React.FC<PostThumbProps> = ({ alt, src }) => {
  return <Image loading="lazy" src={src} alt={`${alt}`} width={1280} height={720} className="object-cover object-center" />;
};

export default PostThumb;
