import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import React from 'react';
import { ThemeProvider } from '@/components/theme-provider';
import './globals.css';

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
  metadataBase: new URL('https://rudraksh.nanavaty.in'),
  alternates: {
    canonical: '/',
  },
  title: {
    default: 'Rudraksh Nanavaty Portfolio | Backend & AI Engineer',
    template: '%s | Rudraksh Nanavaty',
  },
  description: 'Rudraksh Nanavaty\'s Portfolio: Computer Engineering student & Software Engineer specializing in scalable Backend Systems, AI, and Cloud Computing.',
  keywords: ['Backend Engineer', 'AI Engineer', 'Software Engineer', 'Computer Engineering', 'Portfolio', 'Full Stack Developer', 'Rudraksh Nanavaty'],
  authors: [{ name: 'Rudraksh Nanavaty', url: 'https://rudraksh.nanavaty.in' }],
  creator: 'Rudraksh Nanavaty',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://rudraksh.nanavaty.in',
    title: 'Rudraksh Nanavaty Portfolio | Backend & AI Engineer',
    description: 'Rudraksh Nanavaty\'s Portfolio: Computer Engineering student & Software Engineer specializing in scalable Backend Systems, AI, and Cloud Computing.',
    siteName: 'Rudraksh Nanavaty Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rudraksh Nanavaty Portfolio | Backend & AI Engineer',
    description: 'Rudraksh Nanavaty\'s Portfolio: Computer Engineering student & Software Engineer specializing in scalable Backend Systems, AI, and Cloud Computing.',
    site: '@RudrakshNanava1',
    creator: '@RudrakshNanava1',
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

        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Rudraksh Nanavaty",
            "url": "https://rudraksh.nanavaty.in",
            "jobTitle": "Backend & AI Engineer",
            "sameAs": [
              "https://linkedin.com/in/rudraksh-nanavaty",
              "https://github.com/rudraksh-nanavaty"
            ],
            "knowsAbout": ["Backend Engineering", "Artificial Intelligence", "System Design", "Cloud Computing"],
            "image": "https://rudraksh.nanavaty.in/profile.webp"
          })
        }} />

      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
