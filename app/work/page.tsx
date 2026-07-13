import PageNav from "@/components/PageNav";
import NextPageLink from "@/components/NextPageLink";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";
import { workEntries } from "@/lib/data";

export const metadata = {
    title: "Work — Wahab Saka",
};

export default function WorkPage() {
    return (
        <main className="flex flex-col min-h-screen px-6 py-16 sm:px-12 md:px-20 max-w-3xl mx-auto w-full">
            <PageNav />

            <div className="mb-14">
                <p className="font-mono text-xs text-accent tracking-widest uppercase mb-3">
                    Experience
                </p>
                <h1 className="font-display text-3xl sm:text-4xl font-bold text-primary tracking-tight">
                    Work
                </h1>
            </div>

            <div className="flex flex-col gap-6">
                {workEntries.map((entry, i) => (
                    <Reveal key={`${entry.company}-${i}`} delay={Math.min(i, 4) * 0.05}>
                        <div className="bg-surface rounded-sm p-6 sm:p-8 transition-colors duration-200 hover:bg-line/20">
                            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-4">
                                <div className="flex items-baseline gap-2">
                                    <h2 className="font-display text-xl font-semibold text-accent">
                                        {entry.company}
                                    </h2>
                                    {entry.location && (
                                        <span className="font-mono text-xs text-muted/50">{entry.location}</span>
                                    )}
                                </div>
                                <div className="flex items-baseline gap-3">
                                    <span className="font-mono text-xs text-muted/50">{entry.year}</span>
                                    <span className="font-mono text-xs text-muted/50">{entry.type}</span>
                                    <span className="font-mono text-xs text-primary tracking-wide uppercase">
                                        {entry.role}
                                    </span>
                                </div>
                            </div>

                            {entry.note && (
                                <p className="font-body text-sm text-accent/90 leading-relaxed mb-4">
                                    {entry.note}
                                </p>
                            )}

                            {entry.stats && (
                                <div className="flex flex-wrap gap-6 mb-5">
                                    {entry.stats.map((stat) => (
                                        <div key={stat.label} className="flex flex-col">
                                            <span className="font-display text-2xl font-bold text-primary">
                                                <CountUp value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                                            </span>
                                            <span className="font-mono text-xs text-muted/60">{stat.label}</span>
                                        </div>
                                    ))}
                                </div>
                            )}

                            <ul className="flex flex-col gap-4">
                                {entry.products.map((product) => (
                                    <li key={product.name} className="flex flex-col gap-1">
                                        <div className="flex items-baseline gap-2">
                                            <span className="font-display text-base font-semibold text-primary">
                                                {product.name}
                                            </span>
                                        </div>
                                        {product.detail && (
                                            <p className="font-body text-sm text-muted/80 leading-relaxed pl-4">
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

            <NextPageLink href="/projects" label="See my projects" />
        </main>
    );
}
