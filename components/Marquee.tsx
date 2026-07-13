interface MarqueeProps {
  text: string;
  repeat?: number;
}

function Group({ text, repeat }: { text: string; repeat: number }) {
  return (
    <div className="flex shrink-0 items-center">
      {Array.from({ length: repeat }).map((_, i) => (
        <span key={i} className="flex items-center font-mono text-xs font-bold uppercase tracking-[0.2em] text-muted/70">
          {text}
          <span className="mx-5 text-accent/40">✦</span>
        </span>
      ))}
    </div>
  );
}

export default function Marquee({ text, repeat = 4 }: MarqueeProps) {
  return (
    <div className="marquee w-full overflow-hidden border-y border-line/60 py-3">
      <div className="marquee__track flex w-max">
        <Group text={text} repeat={repeat} />
        <Group text={text} repeat={repeat} />
      </div>
    </div>
  );
}
