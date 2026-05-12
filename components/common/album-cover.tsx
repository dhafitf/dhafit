type Props = {
  index?: number
  title: string
  artist: string
  size?: number
}

const PALETTES = [
  { a: '#1a1d2b', b: '#3b1f3a', ink: '#f3e9f5', mark: '#e78bb5' },
  { a: '#0e2230', b: '#175049', ink: '#e6f1ee', mark: '#54d3a8' },
  { a: '#2a2516', b: '#4a3819', ink: '#f6efd8', mark: '#f4d06f' },
  { a: '#1c1730', b: '#3a2452', ink: '#ece6ff', mark: '#b58cd9' },
  { a: '#2b1418', b: '#4a1c20', ink: '#f4e0e1', mark: '#e76671' },
  { a: '#0d1b2a', b: '#1f3a52', ink: '#e3edf7', mark: '#54b5ff' },
]
const ANGLES = [-12, 8, -4, 14, -8, 6]

function paletteIndex(seed: string) {
  let h = 0
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0
  return h % PALETTES.length
}

export default function AlbumCover({ index, title, artist, size = 300 }: Props) {
  const idx = index ?? paletteIndex(title + artist)
  const p = PALETTES[idx % PALETTES.length]
  const w = size
  const cx = w / 2
  const cy = w / 2
  const big = w * 0.62
  const angle = ANGLES[idx % ANGLES.length]
  const firstChar = title.match(/[぀-ヿ㐀-鿿]/)?.[0] ?? title.charAt(0)
  const gradId = `cover-grad-${idx}`
  const ringR = w * 0.42
  const dotR = w * 0.04

  return (
    <svg
      viewBox={`0 0 ${w} ${w}`}
      width={size}
      height={size}
      className='block size-full'
      preserveAspectRatio='xMidYMid slice'
      aria-label={`${title} — ${artist}`}>
      <defs>
        <linearGradient id={gradId} x1='0' y1='0' x2='1' y2='1'>
          <stop offset='0%' stopColor={p.a} />
          <stop offset='100%' stopColor={p.b} />
        </linearGradient>
      </defs>
      <rect width={w} height={w} fill={`url(#${gradId})`} />
      {idx % 2 === 0 ? (
        <g opacity='0.18' stroke={p.ink} fill='none'>
          <circle cx={cx} cy={cy} r={ringR} strokeWidth='1' />
          <circle cx={cx} cy={cy} r={ringR * 0.72} strokeWidth='1' />
          <circle cx={cx} cy={cy} r={ringR * 0.44} strokeWidth='1' />
        </g>
      ) : (
        <g opacity='0.16' stroke={p.ink} strokeWidth='1' fill='none'>
          <line x1='0' y1={w * 0.32} x2={w} y2={w * 0.32} />
          <line x1='0' y1={w * 0.5} x2={w} y2={w * 0.5} />
          <line x1='0' y1={w * 0.68} x2={w} y2={w * 0.68} />
        </g>
      )}
      <circle cx={w * 0.86} cy={w * 0.14} r={dotR} fill={p.mark} />
      <text
        x={cx}
        y={cy + big * 0.34}
        textAnchor='middle'
        fill={p.ink}
        fontFamily='var(--font-display)'
        fontSize={big}
        fontWeight='600'
        opacity='0.95'
        transform={`rotate(${angle} ${cx} ${cy})`}>
        {firstChar}
      </text>
      <text
        x={w * 0.06}
        y={w * 0.94}
        fill={p.ink}
        opacity='0.7'
        fontFamily='var(--font-mono)'
        fontSize={Math.max(8, w * 0.05)}
        letterSpacing={w * 0.005}>
        {artist.length > 18 ? artist.slice(0, 17) + '…' : artist}
      </text>
    </svg>
  )
}
