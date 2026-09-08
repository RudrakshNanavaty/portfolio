'use client';

import type { ReactNode } from 'react';

export function UnderlineLink({ children }: { children: ReactNode }) {
  return (
    <span className="min-w-0 break-words leading-none pb-px -mb-px bg-[linear-gradient(currentColor,currentColor)] bg-no-repeat bg-[length:0%_1px] bg-[position:0_100%] transition-[background-size] duration-300 group-hover:bg-[length:100%_1px]">
      {children}
    </span>
  );
}

export function LogoPlaceholder() {
  return (
    <div className="w-[38px] h-[38px] flex-none rounded-md bg-pill flex items-center justify-center text-fs-8 font-mono uppercase tracking-wide text-text3">
      Logo
    </div>
  );
}
