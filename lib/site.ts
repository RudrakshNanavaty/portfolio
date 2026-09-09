/** Single source of truth for SEO, JSON-LD, and contact identity. */

export const site = {
  url: 'https://rdx.sh',
  name: 'Rudraksh Nanavaty',
  jobTitle: 'Software Engineer',
  tagline: '1.5+ years of building back-end systems for AI platforms, APIs, and data pipelines',
  description:
    'Backend and AI platform engineer in Raleigh, NC, USA. Built systems at FirstPeak.ai and New Engen. MS CS at NCSU. Python, TypeScript, GraphQL, RAG.',
  ogTitle: 'Rudraksh Nanavaty — Software Engineer | Raleigh, NC, USA',
  ogDescription:
    'Backend and AI platform engineer in Raleigh, NC, USA. Formerly FirstPeak.ai and New Engen. MS CS at North Carolina State University.',
  email: 'rudrakshnanavaty@gmail.com',
  phone: '+19843822116',
  phoneDisplay: '+1 (984) 382-2116',
  location: {
    locality: 'Raleigh',
    region: 'NC',
    country: 'US',
    display: 'Raleigh, NC, USA'
  },
  image: '/assets/headshot.jpg',
  resume: '/assets/Rudraksh-Nanavaty-Resume.pdf',
  /** Set Google Scholar citations user ID to enable the Scholar link + sameAs entry. */
  scholarUserId: 'p32ldl8AAAAJ',
  profiles: {
    github: 'https://github.com/RudrakshNanavaty',
    linkedin: 'https://linkedin.com/in/RudrakshNanavaty',
    medium: 'https://medium.com/@rudrakshnanavaty'
  }
} as const;

export function scholarUrl(): string | null {
  const id = site.scholarUserId.trim();
  if (!id) return null;
  return `https://scholar.google.com/citations?user=${id}`;
}

export function sameAs(): string[] {
  const links: string[] = [site.profiles.github, site.profiles.linkedin, site.profiles.medium];
  const scholar = scholarUrl();
  if (scholar) links.push(scholar);
  return links;
}
