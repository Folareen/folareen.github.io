/**
 * Generated cover art for a project.
 *
 * Until real screenshots land in /public/projects, each card gets its
 * own geometric mark derived from the project name — so a card without
 * an image still looks composed rather than empty.
 */

function hash(s: string) {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
  return h;
}

export default function ProjectMark({ name, index = 0 }: { name: string; index?: number }) {
  const h = hash(name);
  /* Variant follows position so neighbouring cards never repeat a shape;
     the name only seeds the rotation and gradient id. */
  const variant = index % 4;
  const rot = ((h >> 3) % 24) - 12;

  return (
    <svg
      viewBox="0 0 400 260"
      className="h-full w-full"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      <defs>
        <linearGradient id={`g-${h}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FF6B35" stopOpacity=".16" />
          <stop offset="100%" stopColor="#39D6E0" stopOpacity=".10" />
        </linearGradient>
        <pattern id={`p-${h}`} width="22" height="22" patternUnits="userSpaceOnUse">
          <circle cx="1.6" cy="1.6" r="1.1" fill="#F2F1EE" opacity=".10" />
        </pattern>
      </defs>

      <rect width="400" height="260" fill={`url(#g-${h})`} />
      <rect width="400" height="260" fill={`url(#p-${h})`} />

      <g transform={`translate(200 130) rotate(${rot})`} opacity=".8">
        {variant === 0 && (
          <>
            <circle r="74" fill="none" stroke="#FF6B35" strokeWidth="1.6" opacity=".55" />
            <circle r="50" fill="none" stroke="#39D6E0" strokeWidth="1.6" opacity=".45" />
            <circle r="26" fill="none" stroke="#FF6B35" strokeWidth="1.6" opacity=".7" />
          </>
        )}
        {variant === 1 && (
          <>
            <rect x="-66" y="-46" width="132" height="92" rx="8" fill="none" stroke="#FF6B35" strokeWidth="1.6" opacity=".55" />
            <rect x="-44" y="-30" width="132" height="92" rx="8" fill="none" stroke="#39D6E0" strokeWidth="1.6" opacity=".4" />
            <rect x="-22" y="-14" width="132" height="92" rx="8" fill="none" stroke="#FF6B35" strokeWidth="1.6" opacity=".3" />
          </>
        )}
        {variant === 2 && (
          <>
            <path d="M-70 40 L-24 -36 L22 22 L70 -44" fill="none" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity=".65" />
            <path d="M-70 62 L-24 -14 L22 44 L70 -22" fill="none" stroke="#39D6E0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity=".4" />
            <circle cx="70" cy="-44" r="5" fill="#FF6B35" opacity=".8" />
          </>
        )}
        {variant === 3 && (
          <>
            <path d="M0 -64 L64 0 L0 64 L-64 0 Z" fill="none" stroke="#FF6B35" strokeWidth="1.6" opacity=".6" />
            <path d="M0 -40 L40 0 L0 40 L-40 0 Z" fill="none" stroke="#39D6E0" strokeWidth="1.6" opacity=".45" />
            <path d="M-64 0 L64 0 M0 -64 L0 64" stroke="#F2F1EE" strokeWidth="1" opacity=".12" />
          </>
        )}
      </g>
    </svg>
  );
}
