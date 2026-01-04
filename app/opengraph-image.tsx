import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

// Remove 'edge' runtime to allow filesystem access
// export const runtime = 'edge'; 

export const alt = 'Rudraksh Nanavaty | Backend & AI Engineer';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  // Font loading from local filesystem
  // This fails on edge, but works fine on standard server
  const fontPath = join(process.cwd(), 'public', 'SpaceGrotesk-Bold.ttf');
  const spaceGroteskSemiBold = await readFile(fontPath);

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#030712', // gray-950
          color: 'white',
          fontFamily: 'Space Grotesk',
          position: 'relative',
        }}
      >
        {/* Background Gradients/Pattern */}
        <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage:
                'radial-gradient(circle at 25px 25px, #333 2%, transparent 0%), radial-gradient(circle at 75px 75px, #333 2%, transparent 0%)',
              backgroundSize: '100px 100px',
              opacity: 0.2,
            }}
          />

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10,
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
             <div
              style={{
                fontSize: 96,
                fontWeight: 700,
                color: '#e5e7eb', // gray-200
                marginBottom: 0,
                lineHeight: 1.1,
              }}
            >
              Rudraksh
            </div>
            <div
              style={{
                fontSize: 96,
                fontWeight: 700,
                background: 'linear-gradient(to right, #60a5fa, #a78bfa, #60a5fa)', // blue-400 via violet-400 to blue-400
                backgroundClip: 'text',
                color: 'transparent',
                marginTop: -10,
                lineHeight: 1.1,
              }}
            >
              Nanavaty
            </div>
          </div>
         
          <div
            style={{
              display: 'flex',
              marginTop: 40,
              padding: '12px 24px',
              borderRadius: '9999px',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              alignItems: 'center',
            }}
          >
            <div
                style={{
                    width: 12,
                    height: 12,
                    borderRadius: '50%',
                    backgroundColor: '#10b981', // green-500
                    marginRight: 12,
                    boxShadow: '0 0 10px #10b981',
                }}
            />
             <div
              style={{
                fontSize: 28,
                color: '#d1d5db', // gray-300
              }}
            >
              Backend & AI Engineer
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'Space Grotesk',
          data: spaceGroteskSemiBold,
          style: 'normal',
          weight: 700,
        },
      ],
    }
  );
}
