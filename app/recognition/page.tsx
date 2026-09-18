import PageNav from "@/components/PageNav";
import NextPageLink from "@/components/NextPageLink";
import Reveal from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";
import { SpotAward } from "@/components/Art";
import { recognitions } from "@/lib/data";

export const metadata = {
    title: "Recognition — Wahab Saka",
};

export default function RecognitionPage() {
    return (
        <main className="flex flex-col min-h-screen px-6 py-14 sm:px-12 md:px-20 max-w-3xl mx-auto w-full">
            <PageNav />

            <SectionHead
                eyebrow="Awards · Certifications"
                title="Recognition"
                art={<SpotAward className="h-16 w-24" />}
            />

            <div className="flex flex-col gap-4">
                {recognitions.map((item, i) => (
                    <Reveal key={item.title} delay={Math.min(i, 5) * 0.05}>
                        <article className="relative bg-surface border border-line rounded-xl p-6 sm:p-7 hover:border-accent/50 transition-colors duration-200 overflow-hidden">
                            <div
                                aria-hidden
                                className="pointer-events-none absolute -right-6 -top-6 text-accent/[0.07]"
                            >
                                <SpotAward className="h-36 w-36" />
                            </div>

                            <div className="relative flex items-start justify-between gap-6">
                                <div>
                                    <p className="font-display text-xl font-bold text-primary tracking-tight">
                                        {item.title}
                                    </p>
                                    <p className="font-mono text-[11px] text-cyan tracking-[0.12em] uppercase mt-2">
                                        {item.organization}
                                    </p>
                                </div>
                                <span className="font-mono text-[11px] text-dim whitespace-nowrap">
                                    {item.year}
                                </span>
                            </div>

                            <p className="relative font-body text-sm text-muted mt-5 leading-relaxed whitespace-pre-line">
                                {item.description}
                            </p>

                            {item.link && (
                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="relative inline-flex items-center gap-2 mt-5 font-mono text-[11px] tracking-[0.12em] uppercase text-accent hover:gap-3 transition-all duration-200"
                                >
                                    View the project →
                                </a>
                            )}
                        </article>
                    </Reveal>
                ))}
            </div>

            <NextPageLink href="/contact" label="Get in touch" />
        </main>
    );
}
