'use client';

import { createContext, useContext, useEffect, useState, useSyncExternalStore, type CSSProperties, type ReactNode } from 'react';
import Image from 'next/image';
import { useReveal } from '@/hooks/useReveal';
import { experience, education, projects, blogs, publications, skillGroups, type Job, type Education, type Project, type Blog, type Publication } from '@/lib/data';
import { SunIcon, SystemIcon, MoonIcon, MailIcon, PhoneIcon, PinIcon, GithubIcon, LinkedinIcon, MediumIcon, ScholarIcon, DownloadIcon, BriefcaseIcon, CapIcon, ProjectsIcon, BlogIcon, PublicationIcon, SkillsIcon, ExternalIcon } from './icons';
import { UnderlineLink, Logo } from './ui';
import SectionDock from './SectionDock';
import ScrollToTop from './ScrollToTop';

type ThemeMode = 'light' | 'dark' | 'system';

const THEME_KEY = 'portfolio-theme';
const themeListeners = new Set<() => void>();

function subscribeTheme(onStoreChange: () => void) {
  themeListeners.add(onStoreChange);
  window.addEventListener('storage', onStoreChange);
  return () => {
    themeListeners.delete(onStoreChange);
    window.removeEventListener('storage', onStoreChange);
  };
}

function getThemeSnapshot(): ThemeMode {
  return (localStorage.getItem(THEME_KEY) as ThemeMode) || 'system';
}

function getThemeServerSnapshot(): ThemeMode {
  return 'system';
}

function emitThemeChange() {
  themeListeners.forEach((listener) => listener());
}

const SectionVisible = createContext(false);

function useTheme() {
  const mode = useSyncExternalStore(subscribeTheme, getThemeSnapshot, getThemeServerSnapshot);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const apply = () => {
      const dark = mode === 'dark' || (mode === 'system' && mq.matches);
      document.documentElement.dataset.theme = dark ? 'dark' : 'light';
    };
    apply();
    mq.addEventListener('change', apply);
    return () => mq.removeEventListener('change', apply);
  }, [mode]);

  const setMode = (m: ThemeMode) => {
    localStorage.setItem(THEME_KEY, m);
    emitThemeChange();
  };

  return { mode, setMode };
}

function ThemeToggle() {
  const { mode, setMode } = useTheme();
  const base = 'w-8 h-8 flex items-center justify-center rounded-full cursor-pointer bg-transparent text-text3';
  const active = 'w-8 h-8 flex items-center justify-center rounded-full cursor-pointer bg-pill text-text';
  return (
    <div className="fixed top-5 right-5 z-50 flex gap-0.5 p-1 bg-card border border-border rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.25)]">
      <button type="button" onClick={() => setMode('light')} className={mode === 'light' ? active : base} aria-label="Light theme">
        <SunIcon />
      </button>
      <button type="button" onClick={() => setMode('system')} className={mode === 'system' ? active : base} aria-label="System theme">
        <SystemIcon />
      </button>
      <button type="button" onClick={() => setMode('dark')} className={mode === 'dark' ? active : base} aria-label="Dark theme">
        <MoonIcon />
      </button>
    </div>
  );
}

function RevealSection({
  children,
  className = '',
  delay = 0,
  id
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  id?: string;
}) {
  const { ref, visible } = useReveal<HTMLElement>();
  return (
    <section
      id={id}
      ref={ref}
      className={`reveal-section scroll-mt-6 ${visible ? 'is-visible' : ''} ${className}`.trim()}
      style={{ '--section-delay': `${delay}s` } as CSSProperties}
    >
      <SectionVisible.Provider value={visible}>{children}</SectionVisible.Provider>
    </section>
  );
}

function SkillGroupBlock({ centered, animate }: { centered: boolean; animate: boolean }) {
  let pillIndex = 0;
  return (
    <div className="flex flex-col gap-4">
      {skillGroups.map((grp) => (
        <div key={grp.category}>
          <div className={`flex items-center gap-[7px] mb-2 ${centered ? 'justify-center' : ''}`}>
            <span className="text-fs-13 text-text2 font-medium">{grp.category}</span>
          </div>
          <div className={`flex flex-wrap gap-[7px] ${centered ? 'justify-center' : ''}`}>
            {grp.items.map((label) => {
              const i = pillIndex++;
              return (
                <span
                  key={label}
                  className={`skill-pill text-fs-12 px-[13px] py-1.5 bg-pill rounded-full text-text ${animate ? 'is-visible' : ''}`}
                  style={{ '--pill-delay': `${(i * 0.08).toFixed(2)}s` } as CSSProperties}
                >
                  {label}
                </span>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

function TimelineItem({
  children,
  i,
  visible
}: {
  children: ReactNode;
  i: number;
  visible: boolean;
}) {
  return (
    <div
      className={`timeline-item reveal-item ${visible ? 'is-visible' : ''}`}
      style={{ '--reveal-delay': `${(i * 0.1).toFixed(2)}s` } as CSSProperties}
    >
      <div className="timeline-rail" aria-hidden>
        <div className="timeline-dot-slot">
          <div
            className="reveal-dot timeline-dot"
            style={{ '--dot-delay': `${(0.1 + i * 0.18).toFixed(2)}s` } as CSSProperties}
          />
        </div>
      </div>
      <div className="min-w-0">{children}</div>
    </div>
  );
}

function TimelineHeading({
  title,
  subtitle,
  dates,
  subtitleClassName
}: {
  title: string;
  subtitle: string;
  dates: string;
  subtitleClassName?: string;
}) {
  return (
    <div className="@container min-w-0">
      <span className="block text-fs-17 font-bold text-text wrap-break-word">{title}</span>
      <div className="flex flex-col gap-px @[22rem]:flex-row @[22rem]:flex-wrap @[22rem]:items-baseline @[22rem]:justify-between @[22rem]:gap-x-3 @[22rem]:gap-y-0.5">
        <p className={`m-0 text-fs-14.5 text-text2 wrap-break-word @[22rem]:min-w-[min(100%,12rem)] @[22rem]:flex-1 ${subtitleClassName ?? ''}`.trim()}>
          {subtitle}
        </p>
        <span className="text-fs-13 text-text3 whitespace-nowrap">{dates}</span>
      </div>
    </div>
  );
}

function TimelineJob({ job, i }: { job: Job; i: number }) {
  const visible = useContext(SectionVisible);
  return (
    <TimelineItem i={i} visible={visible}>
      <div className="flex gap-3 items-start mb-2.5">
        <Logo src={job.logo} alt={`${job.company} logo`} />
        <div className="flex-1 min-w-0">
          <TimelineHeading title={job.role} subtitle={job.company} dates={job.dates} subtitleClassName="font-medium" />
        </div>
      </div>
      <ul className="m-0 ml-[50px] flex flex-col gap-2 max-[480px]:ml-0">
        {job.bullets.map((b, bi) => (
          <li
            key={bi}
            className="relative pl-[14px] text-fs-14.5 leading-[1.6] text-text2 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-text3/70"
          >
            {b}
          </li>
        ))}
      </ul>
    </TimelineItem>
  );
}

function TimelineEdu({ ed, i }: { ed: Education; i: number }) {
  const visible = useContext(SectionVisible);
  return (
    <TimelineItem i={i} visible={visible}>
      <div className="flex gap-3 items-start">
        <Logo src={ed.logo} alt={`${ed.school} logo`} />
        <div className="flex-1 min-w-0">
          <TimelineHeading title={ed.degree} subtitle={ed.school} dates={ed.dates} />
        </div>
      </div>
    </TimelineItem>
  );
}

function ProjectCard({ proj, i }: { proj: Project; i: number }) {
  const visible = useContext(SectionVisible);
  return (
    <div
      className={`reveal-item lift bg-card2 rounded-xl p-[22px] flex flex-col gap-[11px] shadow-[0_1px_2px_rgba(0,0,0,0.1)] ${visible ? 'is-visible' : ''}`}
      style={{ '--reveal-delay': `${(i * 0.1).toFixed(2)}s` } as CSSProperties}
    >
      <h3 className="text-fs-17 font-bold m-0 text-text">{proj.name}</h3>
      <p className="m-0 text-fs-14.5 leading-[1.6] text-text2 flex-1">{proj.description}</p>
      <div className="flex flex-wrap gap-[7px]">
        {proj.stack.map((s) => (
          <span key={s} className="text-fs-12 px-3 py-[5px] bg-pill rounded-full text-text">
            {s}
          </span>
        ))}
      </div>
      <div className="flex flex-wrap gap-3.5 mt-0.5">
        {proj.links.map((lnk) => (
          <a key={lnk.label} href={lnk.url} target="_blank" rel="noopener" className="group flex items-center gap-1 text-fs-13 text-accent">
            <UnderlineLink>{lnk.label}</UnderlineLink>
            <ExternalIcon />
          </a>
        ))}
      </div>
    </div>
  );
}

function BlogItem({ post, i }: { post: Blog; i: number }) {
  const visible = useContext(SectionVisible);
  return (
    <a
      href={post.url}
      target="_blank"
      rel="noopener"
      className={`reveal-item lift group flex gap-4 items-stretch bg-card2 rounded-2xl overflow-hidden shadow-[0_1px_2px_rgba(0,0,0,0.1)] min-h-[120px] ${visible ? 'is-visible' : ''}`}
      style={{ '--reveal-delay': `${(i * 0.1).toFixed(2)}s` } as CSSProperties}
    >
      <div className="w-24 flex-none self-stretch bg-cover bg-center" style={{ backgroundImage: `url(${post.image})` }} />
      <div className="flex flex-col gap-1.5 min-w-0 py-3 pr-3">
        <h3 className="text-fs-16 font-bold m-0 text-text leading-[1.35]">{post.title}</h3>
        <p className="m-0 text-fs-14 text-text2">{post.description}</p>
        <span className="flex items-center gap-1 text-fs-13 text-accent mt-0.5">
          <UnderlineLink>Read on Medium</UnderlineLink>
          <ExternalIcon />
        </span>
      </div>
    </a>
  );
}

function PublicationItem({ pub, i }: { pub: Publication; i: number }) {
  const visible = useContext(SectionVisible);
  return (
    <TimelineItem i={i} visible={visible}>
      <h3 className="text-fs-16 font-bold m-0 mb-1.5 leading-[1.4] text-text break-words">{pub.title}</h3>
      <p className="m-0 mb-2 text-fs-14 text-text2 break-words">
        {pub.authors} — {pub.venue}, {pub.year}
      </p>
      <a href={pub.url} target="_blank" rel="noopener" className="group inline-flex items-center gap-1 text-fs-13 text-accent">
        <UnderlineLink>View paper</UnderlineLink>
        <ExternalIcon />
      </a>
    </TimelineItem>
  );
}

function SectionHeading({ icon, children }: { icon: ReactNode; children: ReactNode }) {
  return (
    <h2 className="flex items-center gap-2.5 font-serif text-fs-26 font-normal leading-none m-0 mb-[18px] text-text tracking-[-0.02em]">
      <span className="inline-flex shrink-0 -translate-y-[2px]">{icon}</span>
      {children}
    </h2>
  );
}

export default function Portfolio() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setLoaded(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <div className="grid grid-cols-1 min-[860px]:grid-cols-[minmax(260px,1fr)_minmax(0,2fr)] min-h-screen text-text bg-bg">
      <ThemeToggle />
      <SectionDock />
      <ScrollToTop />

      <aside id="contact" className="min-w-0 m-4 p-[32px_24px] flex flex-col items-center justify-center text-center bg-card rounded-2xl shadow-[0_1px_2px_rgba(0,0,0,0.15),0_4px_10px_2px_rgba(0,0,0,0.08)] scroll-mt-6 min-[860px]:sticky min-[860px]:top-6 min-[860px]:self-start min-[860px]:m-[24px_12px_24px_24px] min-[860px]:p-[48px_32px] min-[860px]:justify-start min-[860px]:h-[calc(100vh-48px)] min-[860px]:overflow-y-auto">
        <div className="w-[148px] h-[148px] flex-none rounded-full overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.25)] mb-6 relative">
          <Image src="/assets/headshot.jpg" loading="eager" alt="Rudraksh Nanavaty" fill className="object-cover" sizes="148px" />
        </div>

        <h1 className="font-serif text-fs-30 font-normal m-0 mb-2 text-text tracking-[-0.02em]">Rudraksh Nanavaty</h1>
        <p className="text-fs-15.5 text-text2 m-0 mb-[18px] font-medium">Software Engineer</p>
        <p className="text-fs-14.5 leading-[1.65] text-text2 m-0 mb-[30px] max-w-[240px]">
          1.5+ years of building back-end systems for AI platforms, APIs, and data pipelines
        </p>

        <div
          className="flex flex-col gap-3.5 items-start mb-[26px] mx-auto w-max max-w-[min(240px,100%)] text-left"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(14px)',
            transition: 'opacity 0.5s ease 0.15s, transform 0.5s ease 0.15s'
          }}
        >
          <a href="mailto:rudrakshnanavaty@gmail.com" className="group flex items-center gap-2.5 text-fs-14 text-text">
            <MailIcon />
            <UnderlineLink>rudrakshnanavaty@gmail.com</UnderlineLink>
          </a>
          <a href="tel:+19843822116" className="group flex items-center gap-2.5 text-fs-14 text-text">
            <PhoneIcon />
            <UnderlineLink>+1 (984) 382-2116</UnderlineLink>
          </a>
          <div className="flex items-center gap-2.5 text-fs-14 text-text">
            <PinIcon />
            <span>Raleigh, NC, USA</span>
          </div>
        </div>

        <div className="flex justify-between w-full max-w-[240px] mb-[26px]">
          <a href="https://github.com/RudrakshNanavaty" target="_blank" rel="noopener" className="w-[38px] h-[38px] flex items-center justify-center bg-pill rounded-full transition-transform hover:scale-[1.12]">
            <GithubIcon />
          </a>
          <a href="https://linkedin.com/in/RudrakshNanavaty" target="_blank" rel="noopener" className="w-[38px] h-[38px] flex items-center justify-center bg-pill rounded-full transition-transform hover:scale-[1.12]">
            <LinkedinIcon />
          </a>
          <a href="https://medium.com/@rudrakshnanavaty" target="_blank" rel="noopener" className="w-[38px] h-[38px] flex items-center justify-center bg-pill rounded-full transition-transform hover:scale-[1.12]">
            <MediumIcon />
          </a>
          <a href="https://scholar.google.com/citations?user=" target="_blank" rel="noopener" className="w-[38px] h-[38px] flex items-center justify-center bg-pill rounded-full transition-transform hover:scale-[1.12]">
            <ScholarIcon />
          </a>
        </div>

        <a
          href="/assets/Rudraksh-Nanavaty-Resume.pdf"
          download
          className="flex items-center justify-center gap-[9px] w-full max-w-[240px] bg-accent text-accent-text font-bold text-fs-14.5 px-4 py-[13px] rounded-full shadow-[0_1px_2px_rgba(0,0,0,0.2)] transition-[transform,box-shadow] hover:-translate-y-0.5 hover:shadow-[0_4px_14px_rgba(0,0,0,0.28)]"
        >
          <DownloadIcon />
          Download Resume
        </a>

        <div id="skills-desktop" className="hidden min-[860px]:block w-full mt-12 text-left scroll-mt-6">
          <h2 className="text-fs-15 font-bold m-0 mb-3 text-text text-center uppercase tracking-[0.6px]">Skills</h2>
          <div className="h-px bg-border mb-[18px]" />
          <SkillGroupBlock centered animate={loaded} />
        </div>
      </aside>

      <main className="min-w-0 p-[16px_16px_140px] flex flex-col gap-10 min-[860px]:p-[72px_48px_120px_36px] min-[860px]:gap-14">
        <div className="grid grid-cols-1 min-[860px]:grid-cols-2 gap-10">
          <RevealSection id="experience">
            <SectionHeading icon={<BriefcaseIcon />}>Experience</SectionHeading>
            <div className="h-px bg-border mb-7" />
            <div className="timeline" style={{ '--tl-gap': '30px' } as CSSProperties}>
              {experience.map((job, i) => (
                <TimelineJob key={job.company} job={job} i={i} />
              ))}
            </div>
          </RevealSection>

          <RevealSection id="education" delay={0.18}>
            <SectionHeading icon={<CapIcon />}>Education</SectionHeading>
            <div className="h-px bg-border mb-7" />
            <div className="timeline" style={{ '--tl-gap': '26px' } as CSSProperties}>
              {education.map((ed, i) => (
                <TimelineEdu key={ed.school} ed={ed} i={i} />
              ))}
            </div>
          </RevealSection>
        </div>

        <div className="grid grid-cols-1 min-[860px]:grid-cols-2 gap-10">
          <RevealSection id="projects">
            <SectionHeading icon={<ProjectsIcon />}>Projects</SectionHeading>
            <div className="h-px bg-border mb-6" />
            <div className="flex flex-col gap-[18px]">
              {projects.map((proj, i) => (
                <ProjectCard key={proj.name} proj={proj} i={i} />
              ))}
            </div>
          </RevealSection>

          <RevealSection id="blogs" delay={0.18}>
            <SectionHeading icon={<BlogIcon />}>Blogs</SectionHeading>
            <div className="h-px bg-border mb-6" />
            <div className="flex flex-col gap-[18px]">
              {blogs.map((post, i) => (
                <BlogItem key={post.url} post={post} i={i} />
              ))}
            </div>
          </RevealSection>
        </div>

        <RevealSection id="publications">
          <SectionHeading icon={<PublicationIcon />}>Academic Publications</SectionHeading>
          <div className="h-px bg-border mb-7" />
          <div className="timeline timeline--text" style={{ '--tl-gap': '26px' } as CSSProperties}>
            {publications.map((pub, i) => (
              <PublicationItem key={pub.title} pub={pub} i={i} />
            ))}
          </div>
        </RevealSection>

        <RevealSection id="skills-mobile" className="block min-[860px]:hidden">
          <SectionHeading icon={<SkillsIcon />}>Skills</SectionHeading>
          <div className="h-px bg-border mb-6" />
          <MobileSkills />
        </RevealSection>
      </main>
    </div>
  );
}

function MobileSkills() {
  const visible = useContext(SectionVisible);
  return <SkillGroupBlock centered={false} animate={visible} />;
}
