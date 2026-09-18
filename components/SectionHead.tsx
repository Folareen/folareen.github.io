interface SectionHeadProps {
  eyebrow: string;
  title: string;
  /** Spot illustration, rendered at the right edge on wider screens. */
  art?: React.ReactNode;
  /** Tone of the accent rule and eyebrow. */
  tone?: "accent" | "cyan";
}

export default function SectionHead({ eyebrow, title, art, tone = "accent" }: SectionHeadProps) {
  const toneText = tone === "cyan" ? "text-cyan" : "text-accent";
  const toneBg = tone === "cyan" ? "bg-cyan" : "bg-accent";

  return (
    <div className="mb-12">
      <div className="flex items-end justify-between gap-8">
        <div>
          <p className={`font-mono text-[11px] ${toneText} tracking-[0.18em] uppercase mb-3`}>
            {eyebrow}
          </p>
          <h1 className="font-display text-3xl sm:text-5xl font-bold text-primary tracking-tight">
            {title}
          </h1>
        </div>

        {art && (
          <div className={`hidden sm:block shrink-0 ${toneText} opacity-45`}>{art}</div>
        )}
      </div>

      <div className={`rule-grow mt-6 h-px w-full ${toneBg} opacity-30`} />
    </div>
  );
}
