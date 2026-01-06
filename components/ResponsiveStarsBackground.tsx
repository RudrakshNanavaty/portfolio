'use client';

import React from 'react';
import { GravityStarsBackground } from './animate-ui/components/backgrounds/gravity-stars';

export default function ResponsiveStarsBackground() {
  const [starsCount, setStarsCount] = React.useState(300);

  React.useEffect(() => {
    const updateStarsCount = () => {
      // 768px is the standard md breakpoint
      if (window.innerWidth < 768) {
        setStarsCount(150);
      } else {
        setStarsCount(300);
      }
    };

    updateStarsCount();
    window.addEventListener('resize', updateStarsCount);
    return () => window.removeEventListener('resize', updateStarsCount);
  }, []);

  return (
    <GravityStarsBackground
      starsCount={starsCount}
      className="fixed inset-0 -z-10"
    />
  );
}
