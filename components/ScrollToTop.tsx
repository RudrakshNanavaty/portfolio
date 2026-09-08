'use client';

import { useEffect, useState } from 'react';

function ArrowUpIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 19V5M5 12l7-7 7 7" />
    </svg>
  );
}

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 859px)');
    const contact = document.getElementById('contact');
    if (!contact) return;

    let mobile = mq.matches;
    let contactVisible = true;

    const sync = () => setVisible(mobile && !contactVisible);

    const onBreakpoint = () => {
      mobile = mq.matches;
      sync();
    };

    const obs = new IntersectionObserver(
      ([entry]) => {
        contactVisible = entry.isIntersecting;
        sync();
      },
      { threshold: 0.15 }
    );

    obs.observe(contact);
    mq.addEventListener('change', onBreakpoint);
    sync();

    return () => {
      obs.disconnect();
      mq.removeEventListener('change', onBreakpoint);
    };
  }, []);

  const scrollUp = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <button
      type="button"
      onClick={scrollUp}
      className={`scroll-top fixed bottom-20 right-5 z-50 w-11 h-11 flex items-center justify-center rounded-full bg-card border border-border text-text shadow-[0_4px_24px_rgba(0,0,0,0.18),0_1px_3px_rgba(0,0,0,0.08)] cursor-pointer min-[860px]:hidden ${
        visible ? 'is-visible' : ''
      }`}
      aria-label="Back to contact"
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
    >
      <ArrowUpIcon />
    </button>
  );
}
