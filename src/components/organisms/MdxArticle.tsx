import { useMDXComponent } from "next-contentlayer/hooks"

import CustomLink from "@/atoms/CustomLink"
import FigureImage from "@/molecules/FigureImage"
import Callout from "@/molecules/Callout"

const components = {
  a: CustomLink,
  Callout: Callout,
  FigureImage: FigureImage,
}

export function MdxArticle({ code }: { code: string }) {
  const Component = useMDXComponent(code)

  return (
    <article className="prose prose-invert">
      <Component components={components} />
    </article>
  )
}
