import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Instrument_Sans, Space_Mono } from 'next/font/google';
import { PostHogProvider } from '@/components/providers/posthog-provider';
import { education, experience, publications, skillGroups } from '@/lib/data';
import { sameAs, site } from '@/lib/site';
import './globals.css';

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono',
  display: 'swap'
});

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-instrument-sans',
  display: 'swap'
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.ogTitle,
  description: site.description,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  alternates: {
    canonical: '/'
  },
  robots: {
    index: true,
    follow: true
  },
  openGraph: {
    type: 'website',
    url: site.url,
    siteName: site.name,
    locale: 'en_US',
    title: site.ogTitle,
    description: site.ogDescription
  },
  twitter: {
    card: 'summary_large_image',
    title: site.ogTitle,
    description: site.ogDescription
  },
  icons: {
    icon: '/assets/favicon.svg'
  }
};

function buildJsonLd() {
  const personId = `${site.url}/#person`;
  const pageId = `${site.url}/#profile`;

  const knowsAbout = skillGroups.flatMap((g) => g.items);

  const person = {
    '@type': 'Person',
    '@id': personId,
    name: site.name,
    url: site.url,
    image: `${site.url}${site.image}`,
    jobTitle: site.jobTitle,
    email: `mailto:${site.email}`,
    telephone: site.phone,
    address: {
      '@type': 'PostalAddress',
      addressLocality: site.location.locality,
      addressRegion: site.location.region,
      addressCountry: site.location.country
    },
    alumniOf: education.map((ed) => ({
      '@type': 'CollegeOrUniversity',
      name: ed.school.replace(/, India$/, '')
    })),
    hasOccupation: experience.map((job) => ({
      '@type': 'Occupation',
      name: job.role,
      occupationLocation: {
        '@type': 'City',
        name: site.location.display
      },
      hiringOrganization: {
        '@type': 'Organization',
        name: job.company
      }
    })),
    knowsAbout,
    sameAs: sameAs()
  };

  const articles = publications.map((pub) => ({
    '@type': 'ScholarlyArticle',
    name: pub.title,
    author: {
      '@type': 'Person',
      name: site.name
    },
    datePublished: pub.year,
    url: pub.url,
    isPartOf: {
      '@type': 'Periodical',
      name: pub.venue
    }
  }));

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfilePage',
        '@id': pageId,
        url: site.url,
        name: site.ogTitle,
        description: site.description,
        mainEntity: { '@id': personId }
      },
      person,
      ...articles
    ]
  };
}

const themeInit = `(function(){try{var m=localStorage.getItem('portfolio-theme')||'system';var dark=m==='dark'||(m==='system'&&window.matchMedia('(prefers-color-scheme: dark)').matches);document.documentElement.dataset.theme=dark?'dark':'light';}catch(e){document.documentElement.dataset.theme='light';}})();`;

export default function RootLayout({ children }: { children: ReactNode }) {
  const jsonLd = buildJsonLd();

  return (
    <html lang="en" suppressHydrationWarning className={`${spaceMono.variable} ${instrumentSans.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="font-mono">
        <PostHogProvider>{children}</PostHogProvider>
      </body>
    </html>
  );
}
