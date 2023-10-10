import {
  defineDocumentType,
  makeSource,
  FieldDefs,
  ComputedFields,
} from "contentlayer/source-files"
import remarkGfm from "remark-gfm"
import rehypePrettyCode from "rehype-pretty-code"
import rehypeSlug from "rehype-slug"
import rehypeAutolinkHeadings from "rehype-autolink-headings"

const computedFields: ComputedFields = {
  slug: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath,
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
  },
}

const basicContentFields: FieldDefs = {
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
        rehypePrettyCode as any,
        {
          theme: "github-dark",
          onVisitLine(node: { children: string | any[] }) {
            // Prevent lines from collapsing in `display: grid` mode, and allow empty
            // lines to be copy/pasted
            if (node.children.length === 0) {
              node.children = [{ type: "text", value: " " }]
            }
          },
          onVisitHighlightedLine(node: { properties: { className: string[] } }) {
            node.properties.className.push("line--highlighted")
          },
          onVisitHighlightedWord(node: { properties: { className: string[] } }) {
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
