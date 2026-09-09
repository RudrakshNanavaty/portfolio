'use client';

import { useEffect, useLayoutEffect, useRef, useState, useSyncExternalStore, type ReactNode } from 'react';
import {
  BriefcaseIcon,
  CapIcon,
  ProjectsIcon,
  BlogIcon,
  PublicationIcon,
  SkillsIcon
} from './icons';

type DockItem = {
  id: string;
  label: string;
  icon: ReactNode;
  mobileOnly?: boolean;
};

const DESKTOP_MQ = '(min-width: 860px)';
const SAME_ROW_PX = 48;

const ITEMS: DockItem[] = [
  { id: 'education', label: 'Education', icon: <CapIcon /> },
  { id: 'experience', label: 'Experience', icon: <BriefcaseIcon /> },
  { id: 'projects', label: 'Projects', icon: <ProjectsIcon /> },
  { id: 'blogs', label: 'Blogs', icon: <BlogIcon /> },
  { id: 'publications', label: 'Papers', icon: <PublicationIcon /> },
  { id: 'skills', label: 'Skills', icon: <SkillsIcon />, mobileOnly: true }
];

const desktopListeners = new Set<() => void>();
let desktopMq: MediaQueryList | null = null;

function getDesktopMq() {
  if (!desktopMq) {
    desktopMq = window.matchMedia(DESKTOP_MQ);
    desktopMq.addEventListener('change', () => {
      desktopListeners.forEach((l) => l());
    });
  }
  return desktopMq;
}

function subscribeDesktop(onStoreChange: () => void) {
  desktopListeners.add(onStoreChange);
  getDesktopMq();
  return () => {
    desktopListeners.delete(onStoreChange);
  };
}

function getDesktopSnapshot() {
  return getDesktopMq().matches;
}

function getDesktopServerSnapshot() {
  return false;
}

function resolveSectionEl(id: string): HTMLElement | null {
  if (id === 'skills') return document.getElementById('skills-mobile');
  return document.getElementById(id);
}

export default function SectionDock() {
  const [active, setActive] = useState('education');
  const [ready, setReady] = useState(false);
  const isDesktop = useSyncExternalStore(subscribeDesktop, getDesktopSnapshot, getDesktopServerSnapshot);
  const [indicator, setIndicator] = useState({ left: 0, width: 0, opacity: 0 });
  const btnRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const clicking = useRef(false);
  // Skills is mobile-only; keep dock highlight valid on desktop without a reset effect.
  const effectiveActive = isDesktop && active === 'skills' ? 'education' : active;
  const activeRef = useRef(effectiveActive);

  useLayoutEffect(() => {
    activeRef.current = effectiveActive;
  }, [effectiveActive]);

  useEffect(() => {
    const id = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(id);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const ratios = new Map<string, number>();
    const items = ITEMS.filter((item) => !(item.mobileOnly && isDesktop));

    const pickActive = () => {
      if (clicking.current) return;

      // At page top, keep the first section active even if a taller section below
      // intersects the focus band more (education is short; experience would win otherwise).
      const firstId = items[0]?.id;
      if (firstId && window.scrollY < 48) {
        if (activeRef.current !== firstId) setActive(firstId);
        return;
      }

      const focusY = window.innerHeight * 0.28;
      type Candidate = { id: string; top: number; dist: number };
      const candidates: Candidate[] = [];

      for (const item of items) {
        if (!(ratios.get(item.id)! > 0)) continue;
        const el = resolveSectionEl(item.id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        candidates.push({ id: item.id, top, dist: Math.abs(top - focusY) });
      }

      if (!candidates.length) return;

      candidates.sort((a, b) => a.dist - b.dist || a.top - b.top);

      const nearest = candidates[0];
      const sameRow = candidates.filter((c) => Math.abs(c.top - nearest.top) <= SAME_ROW_PX);
      const current = activeRef.current;

      let next = nearest.id;
      if (sameRow.length > 1) {
        // Side-by-side columns: keep current if still in the row; else prefer document order.
        const currentInRow = sameRow.find((c) => c.id === current);
        if (currentInRow) {
          next = currentInRow.id;
        } else {
          const order = items.map((i) => i.id);
          sameRow.sort((a, b) => order.indexOf(a.id) - order.indexOf(b.id));
          next = sameRow[0].id;
        }
      }

      if (next !== current) setActive(next);
    };

    for (const item of items) {
      const el = resolveSectionEl(item.id);
      if (!el) continue;

      const obs = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            ratios.set(item.id, entry.isIntersecting ? entry.intersectionRatio : 0);
          }
          pickActive();
        },
        { rootMargin: '-12% 0px -42% 0px', threshold: [0, 0.15, 0.35, 0.55, 0.75, 1] }
      );
      obs.observe(el);
      observers.push(obs);
    }

    return () => observers.forEach((o) => o.disconnect());
  }, [isDesktop]);

  useLayoutEffect(() => {
    const btn = btnRefs.current[effectiveActive];
    if (!btn) return;

    const sync = () => {
      setIndicator({ left: btn.offsetLeft, width: btn.offsetWidth, opacity: 1 });
    };
    sync();

    const ro = new ResizeObserver(sync);
    ro.observe(btn);
    return () => ro.disconnect();
  }, [effectiveActive, ready, isDesktop]);

  useEffect(() => {
    const onResize = () => {
      const btn = btnRefs.current[effectiveActive];
      if (!btn) return;
      setIndicator({ left: btn.offsetLeft, width: btn.offsetWidth, opacity: 1 });
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [effectiveActive]);

  const scrollTo = (id: string) => {
    const el = resolveSectionEl(id);
    if (!el) return;
    clicking.current = true;
    setActive(id);
    el.scrollIntoView({ behavior: 'smooth', block: id === 'skills' ? 'center' : 'start' });
    window.setTimeout(() => {
      clicking.current = false;
    }, 900);
  };

  return (
    <nav
      className={`section-dock fixed bottom-5 z-50 left-4 right-4 min-[860px]:left-1/2 min-[860px]:right-auto ${ready ? 'is-ready' : ''}`}
      aria-label="Section navigation"
    >
      <div className="relative flex items-center justify-between gap-0.5 p-1.5 w-full min-[860px]:w-auto min-[860px]:justify-start min-[860px]:max-w-[calc(100vw-48px)] overflow-x-auto bg-card border border-border rounded-full shadow-[0_4px_24px_rgba(0,0,0,0.18),0_1px_3px_rgba(0,0,0,0.08)]">        <span
          className="section-dock-indicator absolute top-1.5 bottom-1.5 rounded-full bg-pill pointer-events-none"
          style={{
            left: indicator.left,
            width: indicator.width,
            opacity: indicator.opacity
          }}
          aria-hidden
        />
        {ITEMS.map((item) => {
          const isActive = effectiveActive === item.id;
          return (
            <button
              key={item.id}
              ref={(el) => {
                btnRefs.current[item.id] = el;
              }}
              type="button"
              onClick={() => scrollTo(item.id)}
              className={`section-dock-btn relative z-1 items-center gap-1.5 h-9 rounded-full px-2.5 cursor-pointer border-0 bg-transparent transition-colors duration-200 ${
                item.mobileOnly ? 'hidden max-[859px]:flex' : 'flex'
              } ${isActive ? 'text-text' : 'text-text3 hover:text-text2'}`}
              aria-label={item.label}
              aria-current={isActive ? 'true' : undefined}
              tabIndex={item.mobileOnly && isDesktop ? -1 : undefined}
              aria-hidden={item.mobileOnly && isDesktop ? true : undefined}
            >
              <span className="section-dock-icon flex items-center justify-center w-4.5 h-4.5 flex-none -translate-y-0.5">
                {item.icon}
              </span>
              <span
                className={`section-dock-label overflow-hidden whitespace-nowrap text-fs-12.5 font-medium leading-none tracking-[0.2px] transition-[max-width,opacity,margin] duration-300 ease-[cubic-bezier(0.2,0.7,0.2,1)] ${
                  isActive ? 'max-w-24 opacity-100 mr-1' : 'max-w-0 opacity-0 mr-0'
                }`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
