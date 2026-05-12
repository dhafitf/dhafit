export function getYear(publishedAt?: string) {
  if (!publishedAt) return ''
  const year = new Date(publishedAt).getFullYear()
  return Number.isNaN(year) ? '' : String(year)
}

export const formatDate = (date: Date | string) =>
  new Date(date).toLocaleDateString('en-US', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })
