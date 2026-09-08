import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Instrument_Sans, Instrument_Serif } from 'next/font/google';
import './globals.css';

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-instrument-sans',
  display: 'swap'
});

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-instrument-serif',
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'Rudraksh Nanavaty — Software Engineer',
  description: 'Backend-leaning software engineer building AI platforms, APIs and data pipelines.',
  icons: {
    icon: '/assets/favicon.svg'
  }
};

const themeInit = `(function(){try{var m=localStorage.getItem('portfolio-theme')||'system';var dark=m==='dark'||(m==='system'&&window.matchMedia('(prefers-color-scheme: dark)').matches);document.documentElement.dataset.theme=dark?'dark':'light';}catch(e){document.documentElement.dataset.theme='light';}})();`;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${instrumentSans.variable} ${instrumentSerif.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
