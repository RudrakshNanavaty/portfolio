export const IconProps = { width: 15, height: 15 } as const;

export function SunIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="-translate-y-px">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  );
}

export function SystemIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="-translate-y-px">
      <rect x="2" y="4" width="20" height="13" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  );
}

export function MoonIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="-translate-y-px">
      <path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8Z" />
    </svg>
  );
}

export function MailIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="flex-none -translate-y-px">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m2 6 10 7L22 6" />
    </svg>
  );
}

export function PhoneIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="flex-none -translate-y-px">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export function PinIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="flex-none -translate-y-[2px]">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function GithubIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="var(--text)" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
    </svg>
  );
}

export function LinkedinIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="var(--text)" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4V8h4v1.5A6 6 0 0 1 16 8Z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function MediumIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="var(--text)" stroke="none">
      <circle cx="6" cy="12" r="4.2" />
      <ellipse cx="15" cy="12" rx="3" ry="4.2" />
      <ellipse cx="21.2" cy="12" rx="1.4" ry="4" />
    </svg>
  );
}

export function ScholarIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="var(--text)" stroke="none">
      <path d="M12 2 1 9l4 2.5V17l7 4 7-4v-5.5L23 9 12 2Zm0 2.4L19.5 9 12 13.6 4.5 9 12 4.4ZM6 13.1l6 3.6 6-3.6v3.2l-6 3.4-6-3.4v-3.2Z" />
    </svg>
  );
}

export function DownloadIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="shrink-0 -translate-y-[2px]">
      <path d="M12 3v12m0 0-4-4m4 4 4-4M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
    </svg>
  );
}

export function BriefcaseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M2 13h20" />
    </svg>
  );
}

export function CapIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
      <path d="M22 9 12 5 2 9l10 4 10-4Z" />
      <path d="M6 11v5c0 1.5 2.5 3 6 3s6-1.5 6-3v-5" />
    </svg>
  );
}

export function ProjectsIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

export function BlogIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
      <path d="M4 4h13a2 2 0 0 1 2 2v13a1 1 0 0 1-1.7.7L15 17H6a2 2 0 0 1-2-2Z" />
      <path d="M8 9h8M8 12.5h5" />
    </svg>
  );
}

export function PublicationIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" />
      <path d="M9 7h7M9 10.5h7" />
    </svg>
  );
}

export function SkillsIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
      <path d="M14 4a2 2 0 0 1 2 2v4l3 3v3h-4v4h-6v-4H5v-3l3-3V6a2 2 0 0 1 2-2Z" />
    </svg>
  );
}

export function ExternalIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="shrink-0 -translate-y-px">
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}
