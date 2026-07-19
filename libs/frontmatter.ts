import { parse } from 'yaml'

const FRONTMATTER_REGEX = /^---\s*([\s\S]*?)\s*---/

// Single frontmatter seam for all content types. Callers supply the metadata
// shape; parsing (tags, booleans, quoting) is plain YAML — no bespoke coercion.
export function readFrontmatter<T>(raw: string): { metadata: T; content: string } {
  const match = FRONTMATTER_REGEX.exec(raw)
  const metadata = (match ? parse(match[1]) : {}) as T
  const content = raw.replace(FRONTMATTER_REGEX, '').trim()
  return { metadata, content }
}
