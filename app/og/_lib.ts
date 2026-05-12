export const SIZE = { width: 1200, height: 630 } as const

export async function loadGoogleFont(
  family: string,
  weight: number,
  italic: boolean,
  text: string,
): Promise<ArrayBuffer> {
  const familyEncoded = family.replace(/ /g, '+')
  const axis = italic ? `ital,wght@1,${weight}` : `wght@${weight}`
  const url = `https://fonts.googleapis.com/css2?family=${familyEncoded}:${axis}&text=${encodeURIComponent(text)}&display=swap`
  const css = await (await fetch(url)).text()
  const m = css.match(/src:\s*url\(([^)]+)\)\s*format\(['"]?(truetype|opentype)['"]?\)/)
  if (!m) throw new Error(`No TTF/OTF for ${family} ${weight}${italic ? ' italic' : ''}`)
  return (await fetch(m[1])).arrayBuffer()
}

export const Colors = {
  bg: '#151a21',
  surface: '#1c232c',
  surface2: '#232b36',
  fg: '#e9eef5',
  fg2: '#b4bdcb',
  fg3: '#8590a0',
  fg4: '#5e6876',
  border: '#2a323d',
  borderStrong: '#3a4553',
  accent: '#54b5ff',
  accentSoft: 'rgba(84,181,255,0.18)',
  accentGlow: 'rgba(84,181,255,0.32)',
}

export function pickTitleSize(t: string) {
  const n = t.length
  if (n <= 22) return 96
  if (n <= 40) return 80
  if (n <= 64) return 64
  if (n <= 92) return 52
  return 44
}
