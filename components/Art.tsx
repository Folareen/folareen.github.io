/**
 * Hand-built SVG spot art and icons.
 *
 * Everything here is stroked with currentColor so it inherits the
 * accent from whatever it sits in. Sizes are set by the caller.
 */

type SpotProps = { className?: string };

/* ── Section spot illustrations ───────────────────────────── */

/** Stacked panes + cursor — the "selected work" mark. */
export function SpotWork({ className }: SpotProps) {
  return (
    <svg viewBox="0 0 120 80" fill="none" className={className} aria-hidden>
      <rect x="10" y="14" width="62" height="44" rx="4" stroke="currentColor" strokeWidth="2" opacity=".35" />
      <rect x="22" y="22" width="62" height="44" rx="4" stroke="currentColor" strokeWidth="2" opacity=".6" />
      <rect x="34" y="30" width="62" height="44" rx="4" stroke="currentColor" strokeWidth="2" />
      <line x1="42" y1="42" x2="72" y2="42" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
      <line x1="42" y1="52" x2="62" y2="52" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" opacity=".5" />
      <path d="M96 52 l14 6 -6 2 -2 6 z" fill="currentColor" />
    </svg>
  );
}

/** Nodes wired together — the "how I work" mark. */
export function SpotBuild({ className }: SpotProps) {
  return (
    <svg viewBox="0 0 120 80" fill="none" className={className} aria-hidden>
      <path d="M26 24 h30 M56 24 v32 M56 40 h30 M56 56 h30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity=".55" />
      <rect x="6" y="14" width="22" height="20" rx="4" stroke="currentColor" strokeWidth="2" />
      <rect x="84" y="30" width="24" height="20" rx="4" stroke="currentColor" strokeWidth="2" />
      <rect x="84" y="46" width="24" height="20" rx="4" stroke="currentColor" strokeWidth="2" opacity=".6" />
      <circle cx="56" cy="24" r="4.5" fill="currentColor" />
      <circle cx="56" cy="40" r="3" fill="currentColor" opacity=".6" />
      <circle cx="56" cy="56" r="3" fill="currentColor" opacity=".6" />
    </svg>
  );
}

/** A timeline with milestones — the "experience" mark. */
export function SpotTimeline({ className }: SpotProps) {
  return (
    <svg viewBox="0 0 120 80" fill="none" className={className} aria-hidden>
      <line x1="10" y1="54" x2="110" y2="54" stroke="currentColor" strokeWidth="2" opacity=".4" strokeLinecap="round" />
      <circle cx="24" cy="54" r="4" fill="currentColor" opacity=".45" />
      <circle cx="52" cy="54" r="5" fill="currentColor" opacity=".7" />
      <circle cx="80" cy="54" r="6" fill="currentColor" />
      <line x1="80" y1="54" x2="80" y2="22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <rect x="66" y="10" width="28" height="12" rx="3" stroke="currentColor" strokeWidth="2" />
      <line x1="52" y1="54" x2="52" y2="34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity=".6" />
      <line x1="24" y1="54" x2="24" y2="42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity=".4" />
    </svg>
  );
}

/** Layered blocks — the "stack" mark. */
export function SpotStack({ className }: SpotProps) {
  return (
    <svg viewBox="0 0 120 80" fill="none" className={className} aria-hidden>
      <path d="M60 12 L100 30 L60 48 L20 30 Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M20 44 L60 62 L100 44" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" opacity=".6" />
      <path d="M20 56 L60 74 L100 56" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" opacity=".3" />
    </svg>
  );
}

/** A ribboned medal — the "recognition" mark. */
export function SpotAward({ className }: SpotProps) {
  return (
    <svg viewBox="0 0 120 80" fill="none" className={className} aria-hidden>
      <circle cx="60" cy="30" r="18" stroke="currentColor" strokeWidth="2" />
      <path d="M60 22 l2.6 5.4 5.9 .8 -4.3 4.1 1 5.9 -5.2 -2.8 -5.2 2.8 1 -5.9 -4.3 -4.1 5.9 -.8 z" fill="currentColor" />
      <path d="M50 46 L44 70 L60 62 L76 70 L70 46" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" opacity=".7" />
    </svg>
  );
}

/** An open envelope with a paper plane — the "contact" mark. */
export function SpotContact({ className }: SpotProps) {
  return (
    <svg viewBox="0 0 120 80" fill="none" className={className} aria-hidden>
      <rect x="14" y="26" width="62" height="42" rx="4" stroke="currentColor" strokeWidth="2" />
      <path d="M14 30 L45 50 L76 30" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" opacity=".6" />
      <path d="M84 14 L110 24 L92 32 L88 46 L80 32 Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" fill="none" />
      <line x1="88" y1="32" x2="110" y2="24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity=".5" />
    </svg>
  );
}

/* ── Inline icons ─────────────────────────────────────────── */

const ICON_BOX = "0 0 24 24";

export function IconCode({ className }: SpotProps) {
  return (
    <svg viewBox={ICON_BOX} fill="none" className={className} aria-hidden>
      <path d="M8.5 7.5 L4 12 l4.5 4.5 M15.5 7.5 L20 12 l-4.5 4.5 M13.5 5 l-3 14"
        stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconLayout({ className }: SpotProps) {
  return (
    <svg viewBox={ICON_BOX} fill="none" className={className} aria-hidden>
      <rect x="3" y="4" width="18" height="16" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M3 9 h18 M9 9 v11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function IconServer({ className }: SpotProps) {
  return (
    <svg viewBox={ICON_BOX} fill="none" className={className} aria-hidden>
      <rect x="3" y="4" width="18" height="7" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <rect x="3" y="13" width="18" height="7" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M7 7.5 h.01 M7 16.5 h.01" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );
}

export function IconDatabase({ className }: SpotProps) {
  return (
    <svg viewBox={ICON_BOX} fill="none" className={className} aria-hidden>
      <ellipse cx="12" cy="6" rx="8" ry="3" stroke="currentColor" strokeWidth="1.8" />
      <path d="M4 6 v12 c0 1.7 3.6 3 8 3 s8 -1.3 8 -3 V6" stroke="currentColor" strokeWidth="1.8" />
      <path d="M4 12 c0 1.7 3.6 3 8 3 s8 -1.3 8 -3" stroke="currentColor" strokeWidth="1.8" opacity=".55" />
    </svg>
  );
}

export function IconCloud({ className }: SpotProps) {
  return (
    <svg viewBox={ICON_BOX} fill="none" className={className} aria-hidden>
      <path d="M7 18 h10.5 a3.5 3.5 0 0 0 .3 -7 A5.5 5.5 0 0 0 7.2 10.2 A4 4 0 0 0 7 18 z"
        stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}

export function IconLayers({ className }: SpotProps) {
  return (
    <svg viewBox={ICON_BOX} fill="none" className={className} aria-hidden>
      <path d="M12 3 L21 8 L12 13 L3 8 Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M3 13 L12 18 L21 13" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" opacity=".6" />
    </svg>
  );
}

export function IconWrench({ className }: SpotProps) {
  return (
    <svg viewBox={ICON_BOX} fill="none" className={className} aria-hidden>
      <path d="M15.5 4.5 a4.5 4.5 0 0 0 -5.9 5.9 l-5.3 5.3 a1.8 1.8 0 0 0 2.5 2.5 l5.3 -5.3 a4.5 4.5 0 0 0 5.9 -5.9 l-2.6 2.6 -2.5 -.6 -.6 -2.5 z"
        stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}

export function IconSmartphone({ className }: SpotProps) {
  return (
    <svg viewBox={ICON_BOX} fill="none" className={className} aria-hidden>
      <rect x="6" y="2.5" width="12" height="19" rx="3" stroke="currentColor" strokeWidth="1.8" />
      <path d="M10.5 18.5 h3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function IconRocket({ className }: SpotProps) {
  return (
    <svg viewBox={ICON_BOX} fill="none" className={className} aria-hidden>
      <path d="M12 2.5 c3.2 2.4 5 6 5 9.6 l0 3.4 -10 0 0 -3.4 c0 -3.6 1.8 -7.2 5 -9.6 z"
        stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <circle cx="12" cy="10" r="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M7 15.5 L4.5 19 l3.2 -.8 M17 15.5 L19.5 19 l-3.2 -.8" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}

/* ── Registries ───────────────────────────────────────────── */

export const stackIcons = {
  code: IconCode,
  layout: IconLayout,
  server: IconServer,
  database: IconDatabase,
  cloud: IconCloud,
  layers: IconLayers,
  wrench: IconWrench,
} as const;

export const capabilityIcons = {
  layout: IconLayout,
  server: IconServer,
  smartphone: IconSmartphone,
  rocket: IconRocket,
} as const;
