import { defineDocumentType, makeSource } from "contentlayer/source-files"
import remarkGfm from "remark-gfm"
import rehypePrettyCode from "rehype-pretty-code"
import rehypeSlug from "rehype-slug"
import rehypeAutolinkHeadings from "rehype-autolink-headings"

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath,
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
  },
}

const basicContentFields = {
  title: {
    type: "string",
    required: true,
  },
  summary: {
    type: "string",
    required: true,
  },
  tags: {
    type: "list",
    of: { type: "string" },
  },
  featured: {
    type: "boolean",
    default: false,
  },
}

export const Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: `blogs/**/*.mdx`,
  contentType: "mdx",
  fields: {
    ...basicContentFields,
    publishedAt: {
      type: "string",
      required: true,
    },
    thumbnail: {
      type: "string",
    },
  },
  computedFields,
}))

export const Project = defineDocumentType(() => ({
  name: "Project",
  filePathPattern: `projects/**/*.mdx`,
  contentType: "mdx",
  fields: {
    ...basicContentFields,
    category: {
      type: "string",
      required: true,
    },
    thumbnail: {
      type: "string",
      required: true,
    },
    publishOrder: {
      type: "number",
      required: true,
    },
  },
  computedFields,
}))

export default makeSource({
  contentDirPath: "contents",
  documentTypes: [Blog, Project],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: "github-dark",
          onVisitLine(node) {
            // Prevent lines from collapsing in `display: grid` mode, and allow empty
            // lines to be copy/pasted
            if (node.children.length === 0) {
              node.children = [{ type: "text", value: " " }]
            }
          },
          onVisitHighlightedLine(node) {
            node.properties.className.push("line--highlighted")
          },
          onVisitHighlightedWord(node) {
            node.properties.className = ["word--highlighted"]
          },
        },
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["anchor"],
          },
        },
      ],
    ],
  },
})
