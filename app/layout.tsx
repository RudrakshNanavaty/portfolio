import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import React from 'react';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://rudrakshnanavaty.com'),
  alternates: {
    canonical: '/',
  },
  title: {
    default: 'Rudraksh Nanavaty | Backend & AI Engineer',
    template: '%s | Rudraksh Nanavaty',
  },
  description: 'Portfolio of Rudraksh Nanavaty, a Computer Engineering student specializing in Backend Systems and AI.',
  keywords: ['Backend Engineer', 'AI Engineer', 'Software Engineer', 'Computer Engineering', 'Portfolio', 'Full Stack Developer', 'Rudraksh Nanavaty'],
  authors: [{ name: 'Rudraksh Nanavaty', url: 'https://rudrakshnanavaty.com' }],
  creator: 'Rudraksh Nanavaty',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://rudrakshnanavaty.com',
    title: 'Rudraksh Nanavaty | Backend & AI Engineer',
    description: 'Portfolio of Rudraksh Nanavaty, a Computer Engineering student specializing in Backend Systems and AI.',
    siteName: 'Rudraksh Nanavaty Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Rudraksh Nanavaty Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rudraksh Nanavaty | Backend & AI Engineer',
    description: 'Portfolio of Rudraksh Nanavaty, a Computer Engineering student specializing in Backend Systems and AI.',
    site: '@RudrakshNanava1',
    creator: '@RudrakshNanava1',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${spaceGrotesk.variable}`} suppressHydrationWarning>
      <head>
        {/* Tailwind CSS */}
        <script src="https://cdn.tailwindcss.com"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            tailwind.config = {
              darkMode: 'class',
              theme: {
                extend: {
                  fontFamily: {
                    sans: ['var(--font-inter)', 'sans-serif'],
                    display: ['var(--font-space-grotesk)', 'sans-serif'],
                  },
                  colors: {
                    background: 'var(--background)',
                    surface: 'var(--surface)',
                    surfaceContainerLow: 'var(--surface-container-low)',
                    surfaceContainer: 'var(--surface-container)',
                    surfaceContainerHigh: 'var(--surface-container-high)',
                    surfaceContainerHighest: 'var(--surface-container-highest)',
        
                    primary: 'var(--primary)',
                    onPrimary: 'var(--on-primary)',
                    primaryContainer: 'var(--primary-container)',
                    onPrimaryContainer: 'var(--on-primary-container)',
        
                    secondary: 'var(--secondary)',
                    onSecondary: 'var(--on-secondary)',
                    secondaryContainer: 'var(--secondary-container)',
                    onSecondaryContainer: 'var(--on-secondary-container)',
        
                    tertiary: 'var(--tertiary)',
        
                    outline: 'var(--outline)',
                    outlineVariant: 'var(--outline-variant)',
        
                    textMain: 'var(--text-main)',
                    textMuted: 'var(--text-muted)',
                  },
                  borderRadius: {
                    'xl': '1rem',
                    '2xl': '1.5rem',
                    '3xl': '1.75rem',
                    '4xl': '2rem',
                  },
                  animation: {
                    'blob': 'blob 20s infinite',
                  },
                  keyframes: {
                    blob: {
                      '0%': { transform: 'translate(0px, 0px) scale(1)' },
                      '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
                      '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
                      '100%': { transform: 'translate(0px, 0px) scale(1)' },
                    }
                  }
                }
              }
            }
            `
          }}
        />
        <style dangerouslySetInnerHTML={{
          __html: `
            :root {
              /* Light Theme - Blue Base */
              --background: #F8F9FF;
              --surface: #F8F9FF;
              --surface-container-low: #F2F3FA;
              --surface-container: #ECEEF4;
              --surface-container-high: #E6E8EE;
              --surface-container-highest: #E0E2E8;
        
              --primary: #2563EB;
              /* Blue 600 */
              --on-primary: #FFFFFF;
              --primary-container: #D7E3FF;
              --on-primary-container: #001B3F;
        
              --secondary: #577C8E;
              /* Muted Slate/Cyan */
              --on-secondary: #FFFFFF;
              --secondary-container: #CEE5FF;
              /* Light Cyan */
              --on-secondary-container: #001D32;
        
              --tertiary: #607D8B;
              /* Grey Blue */
        
              --outline: #74777F;
              --outline-variant: #C4C6D0;
        
              --text-main: #191C20;
              --text-muted: #43474E;
            }
        
            .dark {
              /* Dark Theme - Blue Base - Deepened background */
              --background: #05080F;
              --surface: #0B0F19;
              --surface-container-low: #11141D;
              --surface-container: #171B26;
              --surface-container-high: #1D222F;
              --surface-container-highest: #282E3E;
        
              --primary: #A8C7FA;
              --on-primary: #002F65;
              --primary-container: #00478F;
              --on-primary-container: #D7E3FF;
        
              --secondary: #7CC5EB;
              --on-secondary: #003348;
              --secondary-container: #004B67;
              --on-secondary-container: #C3E7FF;
        
              --tertiary: #ADC6FF;
        
              --outline: #8D9199;
              --outline-variant: #43474E;
        
              --text-main: #E2E2E6;
              --text-muted: #C4C6D0;
            }
        
            body {
              background-color: var(--background);
              color: var(--text-main);
              transition: background-color 0.3s ease, color 0.3s ease;
            }
        
            /* Custom Scrollbar */
            ::-webkit-scrollbar {
              width: 10px;
              height: 10px;
            }
        
            ::-webkit-scrollbar-track {
              background: var(--background);
            }
        
            ::-webkit-scrollbar-thumb {
              background: var(--outline-variant);
              border-radius: 5px;
              border: 2px solid var(--background);
            }
        
            ::-webkit-scrollbar-thumb:hover {
              background: var(--outline);
            }
        
            .text-balance {
              text-wrap: balance;
            }
          `
        }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Rudraksh Nanavaty",
            "url": "https://rudrakshnanavaty.com",
            "jobTitle": "Backend & AI Engineer",
            "sameAs": [
              "https://linkedin.com/in/rudraksh-nanavaty",
              "https://github.com/rudraksh-nanavaty"
            ],
            "knowsAbout": ["Backend Engineering", "Artificial Intelligence", "System Design", "Cloud Computing"],
            "image": "https://rudrakshnanavaty.com/profile.png"
          })
        }} />
      </head>
      <body>
        {children}
        <script dangerouslySetInnerHTML={{
          __html: `
            if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
              document.documentElement.classList.add('dark')
            } else {
              document.documentElement.classList.remove('dark')
            }
          `
        }} />
      </body>
    </html>
  );
}
