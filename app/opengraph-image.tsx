import { ImageResponse } from 'next/og';
import { site } from '@/lib/site';

export const alt = `${site.name} — ${site.jobTitle}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
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
          background: 'linear-gradient(145deg, #191919 0%, #2a2a28 55%, #1e2430 100%)',
          color: '#f5f4f1',
          fontFamily: 'Georgia, "Times New Roman", serif'
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            fontSize: 28,
            fontFamily: 'system-ui, sans-serif',
            color: '#a8b4c8',
            letterSpacing: '0.04em',
            textTransform: 'uppercase'
          }}
        >
          rdx.sh
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div style={{ fontSize: 72, lineHeight: 1.05, letterSpacing: '-0.03em', fontWeight: 400 }}>
            {site.name}
          </div>
          <div
            style={{
              fontSize: 34,
              fontFamily: 'system-ui, sans-serif',
              color: '#c5c8ce',
              fontWeight: 500
            }}
          >
            {site.jobTitle}
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              marginTop: 8,
              fontSize: 26,
              fontFamily: 'system-ui, sans-serif',
              color: '#8b9bb3'
            }}
          >
            {site.location.locality}, {site.location.region}
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            fontSize: 22,
            fontFamily: 'system-ui, sans-serif',
            color: '#7a8494',
            maxWidth: 900,
            lineHeight: 1.4
          }}
        >
          1.5+ years of building back-end systems for AI platforms, APIs, and data pipelines
        </div>
      </div>
    ),
    { ...size }
  );
}
