import React from "react"
import { MDXRemote } from "next-mdx-remote/rsc"
import rehypePrettyCode from "rehype-pretty-code"
import remarkBreaks from "remark-breaks"

import CustomLink from "@/common/custom-link"
import FigureImage from "@/molecules/FigureImage"
import Callout from "@/molecules/Callout"
import DetailsList from "@/organisms/DetailsList"

function slugify(str: string) {
  return str
    .toString()
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/&/g, "-and-") // Replace & with 'and'
    .replace(/[^\w\-]+/g, "") // Remove all non-word characters except for -
    .replace(/\-\-+/g, "-") // Replace multiple - with single -
}

function createHeading(level: number) {
  // eslint-disable-next-line react/display-name
  return ({ children }: { children: React.ReactNode }) => {
    let slug = slugify(children!.toString())
    return React.createElement(
      `h${level}`,
      { id: slug },
      [
        React.createElement("a", {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: "anchor",
        }),
      ],
      children
    )
  }
}

const components = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  a: CustomLink,
  Callout,
  DetailsList,
  FigureImage,
}

export async function MdxArticle(props: any) {
  return (
    <article className="prose prose-invert">
      <MDXRemote
        components={{ ...components, ...(props.components || {}) }}
        options={{
          mdxOptions: {
            rehypePlugins: [[rehypePrettyCode, { theme: "github-dark" }]],
            remarkPlugins: [remarkBreaks],
          },
        }}
        {...props}
      />
    </article>
  )
}
