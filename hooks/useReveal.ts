'use client';

import { useEffect, useRef, useState } from 'react';

function isInRevealRange(el: HTMLElement) {
  const r = el.getBoundingClientRect();
  const vh = window.innerHeight;
  return r.bottom > 0 && r.top < vh * 0.92;
}

export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Paint opacity:0 first, then reveal so entrance animates (matches original rAF pattern).
    const show = () => {
      requestAnimationFrame(() => setVisible(true));
    };

    if (isInRevealRange(el)) {
      show();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          show();
          observer.disconnect();
        }
      },
      { threshold: 0, rootMargin: '0px 0px -8% 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}
