import PageNav from "@/components/PageNav";
import NextPageLink from "@/components/NextPageLink";
import { workEntries } from "@/lib/data";

export const metadata = {
    title: "Work — Wahab Saka",
};

export default function WorkPage() {
    return (
        <main className="flex flex-col min-h-screen px-6 py-16 sm:px-12 md:px-20 max-w-3xl mx-auto w-full">
            <PageNav />

            <div className="mb-14 fade-up">
                <p className="font-mono text-xs text-accent tracking-widest uppercase mb-3">
                    Experience
                </p>
                <h1 className="font-display text-3xl sm:text-4xl font-bold text-primary tracking-tight">
                    Work
                </h1>
            </div>

            <div className="flex flex-col">
                {workEntries.map((entry, i) => (
                    <div
                        key={`${entry.company}-${i}`}
                        className={`fade-up delay-${Math.min(i + 1, 8)} pb-10 mb-10 border-b border-line last:border-b-0 last:mb-0`}
                    >
                        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-4">
                            <h2 className="font-display text-lg font-semibold text-accent">
                                {entry.company}
                            </h2>
                            <div className="flex items-baseline gap-3">
                                <span className="font-mono text-xs text-muted/50">{entry.year}</span>
                                <span className="font-mono text-xs text-muted tracking-wide uppercase">
                                    {entry.role}
                                </span>
                            </div>
                        </div>

                        {entry.note && (
                            <p className="font-body text-sm text-muted leading-relaxed mb-4 italic">
                                {entry.note}
                            </p>
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
                ))}
            </div>

            <NextPageLink href="/projects" label="See my projects" />
        </main>
    );
}
