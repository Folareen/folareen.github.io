import {
  LuCode,
  LuTerminal,
  LuLaptop,
  LuDatabase,
  LuGitBranch,
  LuRocket,
  LuCpu,
  LuCloud,
  LuServer,
  LuBraces,
  LuBoxes,
  LuLayers,
  LuGlobe,
  LuZap,
  LuSmartphone,
  LuBlocks,
} from "react-icons/lu";
import type { IconType } from "react-icons";

type FloatingIcon = {
  Icon: IconType;
  top: number; // %
  left: number; // %
  size: number; // px
  rotate: number; // deg
  duration: number; // s
  delay: number; // s
};

// Deterministic scatter — hand-placed so positions are stable across
// server/client renders and lean toward the edges, away from body text.
const ICONS: FloatingIcon[] = [
  { Icon: LuCode, top: 8, left: 6, size: 46, rotate: -8, duration: 13, delay: 0 },
  { Icon: LuRocket, top: 14, left: 82, size: 54, rotate: 12, duration: 16, delay: 1.5 },
  { Icon: LuLaptop, top: 30, left: 90, size: 44, rotate: -6, duration: 15, delay: 0.8 },
  { Icon: LuDatabase, top: 46, left: 4, size: 50, rotate: 8, duration: 17, delay: 2.2 },
  { Icon: LuTerminal, top: 62, left: 88, size: 42, rotate: -10, duration: 14, delay: 1 },
  { Icon: LuGitBranch, top: 74, left: 10, size: 48, rotate: 6, duration: 18, delay: 0.4 },
  { Icon: LuCpu, top: 88, left: 78, size: 52, rotate: -4, duration: 15, delay: 2.6 },
  { Icon: LuCloud, top: 4, left: 44, size: 40, rotate: 10, duration: 16, delay: 1.8 },
  { Icon: LuBraces, top: 24, left: 22, size: 38, rotate: -12, duration: 13, delay: 0.6 },
  { Icon: LuServer, top: 40, left: 70, size: 44, rotate: 5, duration: 17, delay: 2 },
  { Icon: LuLayers, top: 56, left: 30, size: 40, rotate: -7, duration: 14, delay: 1.2 },
  { Icon: LuGlobe, top: 70, left: 58, size: 46, rotate: 9, duration: 18, delay: 0.2 },
  { Icon: LuZap, top: 84, left: 34, size: 38, rotate: -5, duration: 15, delay: 2.4 },
  { Icon: LuBoxes, top: 18, left: 62, size: 42, rotate: 7, duration: 16, delay: 1.6 },
  { Icon: LuSmartphone, top: 92, left: 16, size: 40, rotate: -9, duration: 14, delay: 0.9 },
  { Icon: LuBlocks, top: 50, left: 50, size: 44, rotate: 6, duration: 19, delay: 2.8 },
];

export default function IconField() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {ICONS.map(({ Icon, top, left, size, rotate, duration, delay }, i) => (
        <span
          key={i}
          className="icon-float absolute text-line/60"
          style={{
            top: `${top}%`,
            left: `${left}%`,
            // rotate held on a CSS var so the float keyframe can compose with it
            ["--r" as string]: `${rotate}deg`,
            animationDuration: `${duration}s`,
            animationDelay: `${delay}s`,
          }}
        >
          <Icon size={size} strokeWidth={1} />
        </span>
      ))}
    </div>
  );
}
