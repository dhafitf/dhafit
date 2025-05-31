import { MDXRemote, type MDXRemoteOptions } from 'next-mdx-remote-client/rsc'
import React from 'react'
import rehypePrettyCode from 'rehype-pretty-code'
import remarkBreaks from 'remark-breaks'

import CustomLink from '@/common/custom-link'
import Callout from '@/mdx/callout'
import DetailsList from '@/mdx/details-list'
import FigureImage from '@/mdx/figure-image'

function slugify(str: string) {
  return str
    .toString()
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^\w\-]+/g, '') // Remove all non-word characters except for -
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
}

function createHeading(level: number) {
  // eslint-disable-next-line react/display-name
  return ({ children }: { children: React.ReactNode }) => {
    let slug = slugify(children!.toString())
    return React.createElement(
      `h${level}`,
      { id: slug },
      [
        React.createElement('a', {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: 'anchor',
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
  const options: MDXRemoteOptions = {
    mdxOptions: {
      rehypePlugins: [[rehypePrettyCode, { theme: 'github-dark' }]],
      remarkPlugins: [remarkBreaks],
    },
  }

  return (
    <article className='prose prose-invert'>
      <MDXRemote
        components={{ ...components, ...(props.components || {}) }}
        options={options}
        {...props}
      />
    </article>
  )
}
