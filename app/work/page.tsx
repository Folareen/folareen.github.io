import PageNav from "@/components/PageNav";
import NextPageLink from "@/components/NextPageLink";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";
import SectionHead from "@/components/SectionHead";
import { SpotTimeline } from "@/components/Art";
import { workEntries } from "@/lib/data";

export const metadata = {
    title: "Work — Wahab Saka",
};

export default function WorkPage() {
    return (
        <main className="flex flex-col min-h-screen px-6 py-14 sm:px-12 md:px-20 max-w-3xl mx-auto w-full">
            <PageNav />

            <SectionHead
                eyebrow="Five years · eight teams"
                title="Work"
                art={<SpotTimeline className="h-16 w-24" />}
            />

            <div className="flex flex-col gap-4">
                {workEntries.map((entry, i) => (
                    <Reveal key={`${entry.company}-${i}`} delay={Math.min(i, 4) * 0.05}>
                        <div className="relative bg-surface border border-line rounded-xl p-5 sm:p-7 hover:border-accent/40 transition-colors duration-200">
                            {/* header */}
                            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-3">
                                <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
                                    <h2 className="font-display text-xl font-bold text-primary tracking-tight">
                                        {entry.company}
                                    </h2>
                                    {entry.location && (
                                        <span className="font-mono text-[11px] text-dim">{entry.location}</span>
                                    )}
                                </div>
                                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 sm:justify-end">
                                    <span className="font-mono text-[11px] text-dim">{entry.year}</span>
                                    <span className="font-mono text-[11px] text-dim">{entry.type}</span>
                                </div>
                            </div>

                            <p className="font-mono text-[11px] text-cyan tracking-[0.12em] uppercase mb-4">
                                {entry.role}
                            </p>

                            {/* the line that sells */}
                            {entry.impact && (
                                <p className="font-body text-sm text-primary leading-relaxed mb-4 pl-3 border-l-2 border-accent">
                                    {entry.impact}
                                </p>
                            )}

                            {entry.note && (
                                <p className="font-body text-sm text-muted leading-relaxed mb-4">
                                    {entry.note}
                                </p>
                            )}

                            {entry.stats && (
                                <div className="flex flex-wrap gap-6 mb-5">
                                    {entry.stats.map((stat) => (
                                        <div key={stat.label} className="flex flex-col">
                                            <span className="font-display text-2xl font-bold text-accent tabular-nums">
                                                <CountUp value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                                            </span>
                                            <span className="font-mono text-[11px] text-dim mt-1">{stat.label}</span>
                                        </div>
                                    ))}
                                </div>
                            )}

                            <ul className="flex flex-col gap-3.5 pt-1">
                                {entry.products.map((product) => (
                                    <li key={product.name} className="flex flex-col gap-1">
                                        <span className="font-display text-sm font-semibold text-primary">
                                            {product.name}
                                        </span>
                                        {product.detail && (
                                            <p className="font-body text-sm text-muted leading-relaxed">
                                                {product.detail}
                                            </p>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Reveal>
                ))}
            </div>

            <NextPageLink href="/stack" label="My stack & skills" />
        </main>
    );
}
