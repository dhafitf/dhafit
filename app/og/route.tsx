import { ImageResponse } from 'next/og'
import { NextRequest } from 'next/server'

import { Colors, loadGoogleFont, pickTitleSize, SIZE } from './_lib'

export const runtime = 'edge'

const CARD_WIDTH = 1000
const CARD_HEIGHT = 470

const cropMarkPositions = [
  { top: 32, left: 32 },
  { top: 32, right: 32 },
  { bottom: 32, left: 32 },
  { bottom: 32, right: 32 },
] as const

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl
  const title = (searchParams.get('title') ?? 'TypeScript engineer / translator on the side').trim()
  const date = searchParams.get('date')?.toUpperCase()

  const titleFontText = `${title} df`
  const monoFontText = [
    date,
    'DHAFIT.DEV',
    'DHAFIT FARENZA',
    'FULL-STACK',
    'TRANSLATOR',
    'READ ↗',
    '—',
    '0123456789',
  ]
    .filter(Boolean)
    .join(' ')

  const [interMedium, interSemiBold, jetBrainsMono] = await Promise.all([
    loadGoogleFont('Inter', 500, false, titleFontText),
    loadGoogleFont('Inter', 600, false, titleFontText),
    loadGoogleFont('JetBrains Mono', 500, false, monoFontText),
  ])

  const titleSize = pickTitleSize(title)

  const imageResponse = new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.bg,
        fontFamily: '"Inter"',
        color: Colors.fg,
        position: 'relative',
      }}>
      {/* Site grid */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          backgroundImage: `linear-gradient(${Colors.border} 1px, transparent 1px), linear-gradient(90deg, ${Colors.border} 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
          opacity: 0.45,
        }}
      />

      {/* Corner crop marks */}
      {cropMarkPositions.map((p, i) => (
        <div key={i} style={{ position: 'absolute', ...p, width: 18, height: 18, display: 'flex' }}>
          <div
            style={{
              position: 'absolute',
              top: 9,
              left: 0,
              width: 18,
              height: 1,
              background: Colors.fg4,
              display: 'flex',
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 9,
              width: 1,
              height: 18,
              background: Colors.fg4,
              display: 'flex',
            }}
          />
        </div>
      ))}

      {/* Card */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: CARD_WIDTH,
          height: CARD_HEIGHT,
          background: `linear-gradient(180deg, ${Colors.surface2} 0%, ${Colors.surface} 100%)`,
          border: `1px solid ${Colors.border}`,
          padding: '44px 56px',
          position: 'relative',
          boxShadow:
            '0 40px 80px rgba(0,0,0,0.45), 0 0 0 1px rgba(84,181,255,0.06), inset 0 1px 0 rgba(233,238,245,0.04)',
        }}>
        {/* Top bar */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 4 }}>
            <span
              style={{
                fontSize: 28,
                color: Colors.fg,
                fontWeight: 500,
                letterSpacing: '-0.03em',
              }}>
              df
            </span>
            <div
              style={{
                display: 'flex',
                width: 8,
                height: 8,
                borderRadius: 999,
                background: Colors.accent,
                marginBottom: 6,
              }}
            />
          </div>
          <div
            style={{
              display: 'flex',
              gap: 14,
              fontFamily: '"JetBrains Mono"',
              fontSize: 13,
              color: Colors.fg3,
              letterSpacing: '0.22em',
            }}>
            <span style={{ color: Colors.fg2 }}>DHAFIT.DEV</span>
            {date && <span style={{ color: Colors.fg4 }}>—</span>}
            {date && <span>{date}</span>}
          </div>
        </div>

        {/* spacer */}
        <div style={{ display: 'flex', flexGrow: 1 }} />

        {/* Title — Inter, tight */}
        <div
          style={{
            display: 'flex',
            fontWeight: 500,
            fontSize: titleSize,
            lineHeight: 1.1,
            letterSpacing: '-0.035em',
            color: Colors.fg,
            maxWidth: 900,
          }}>
          {title}
        </div>

        {/* spacer */}
        <div style={{ display: 'flex', flexGrow: 1 }} />

        {/* Bottom bar */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            paddingTop: 18,
            borderTop: `1px solid ${Colors.border}`,
            fontFamily: '"JetBrains Mono"',
            fontSize: 13,
            color: Colors.fg3,
            letterSpacing: '0.22em',
          }}>
          <div style={{ display: 'flex', gap: 12 }}>
            <span style={{ color: Colors.fg2 }}>DHAFIT FARENZA</span>
            <span style={{ color: Colors.fg4 }}>·</span>
            <span style={{ color: Colors.fg3 }}>FULL-STACK / TRANSLATOR</span>
          </div>
          <span style={{ color: Colors.accent }}>READ ↗</span>
        </div>
      </div>
    </div>,
    {
      width: SIZE.width,
      height: SIZE.height,
      fonts: [
        { name: 'Inter', data: interMedium, weight: 500, style: 'normal' },
        { name: 'Inter', data: interSemiBold, weight: 600, style: 'normal' },
        { name: 'JetBrains Mono', data: jetBrainsMono, weight: 500, style: 'normal' },
      ],
    },
  )

  imageResponse.headers.set(
    'Cache-Control',
    'public, immutable, no-transform, max-age=31536000'
  )

  return imageResponse
}
