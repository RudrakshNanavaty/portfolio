# Portfolio — Next.js + TypeScript + Tailwind

Direct conversion of the original design, same layout, colors, copy, animations, and light/dark/system theme toggle.

## Run

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Notes

- Theme (light/dark/system) is stored in `localStorage` and applied via `data-theme` on `<html>`; colors live as CSS variables in `app/globals.css`, mapped into Tailwind (`bg-card`, `text-text2`, `bg-accent`, etc.) in `tailwind.config.ts`.
- Layout switches from stacked (mobile) to sidebar + content (desktop) at 860px using Tailwind's `min-[860px]:` variant — matching the original breakpoint.
- Scroll-reveal animations use an `IntersectionObserver` hook (`hooks/useReveal.ts`) instead of the original scroll-listener.
- Content lives in `lib/data.ts` (experience, education, projects, blogs, publications, skills) — edit there.
- Logos for Experience/Education live in `public/assets/` and are referenced via optional `logo` fields in `lib/data.ts`.
- Headshot and résumé PDF are already in `public/assets/`.
