import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';
import { site } from '@/lib/site';

export const alt = `${site.name} — ${site.jobTitle}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OpenGraphImage() {
  const [regular, bold] = await Promise.all([
    readFile(join(process.cwd(), 'public/fonts/SpaceMono-Regular.ttf')),
    readFile(join(process.cwd(), 'public/fonts/SpaceMono-Bold.ttf'))
  ]);

  const location = `${site.location.locality}, ${site.location.region}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          background: '#191919',
          color: '#f7f6f4',
          fontFamily: '"Space Mono"'
        }}
      >
        <div
          style={{
            display: 'flex',
            fontSize: 28,
            color: '#a8a7a4',
            letterSpacing: '0.04em',
            textTransform: 'uppercase'
          }}
        >
          rdx.sh
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div
            style={{
              fontSize: 64,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              fontWeight: 700
            }}
          >
            {site.name}
          </div>
          <div style={{ fontSize: 32, color: '#c9c8c4', fontWeight: 400 }}>{site.jobTitle}</div>
          <div style={{ display: 'flex', marginTop: 8, fontSize: 24, color: '#a8a7a4' }}>{location}</div>
        </div>

        <div
          style={{
            display: 'flex',
            fontSize: 22,
            color: '#c9c8c4',
            maxWidth: 900,
            lineHeight: 1.4
          }}
        >
          {site.tagline}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'Space Mono', data: regular, weight: 400, style: 'normal' },
        { name: 'Space Mono', data: bold, weight: 700, style: 'normal' }
      ]
    }
  );
}
