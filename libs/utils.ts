export function getYear(publishedAt?: string) {
  if (!publishedAt) return ''
  const year = new Date(publishedAt).getFullYear()
  return Number.isNaN(year) ? '' : String(year)
}
