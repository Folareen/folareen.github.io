import PageNav from "@/components/PageNav";
import NextPageLink from "@/components/NextPageLink";
import Reveal from "@/components/Reveal";
import { recognitions } from "@/lib/data";

export const metadata = {
    title: "Recognition — Wahab Saka",
};

export default function RecognitionPage() {
    return (
        <main className="flex flex-col min-h-screen px-6 py-16 sm:px-12 md:px-20 max-w-3xl mx-auto w-full">
            <PageNav />

            <div className="mb-14">
                <p className="font-mono text-xs text-accent tracking-widest uppercase mb-3">
                    Awards · Certifications · Recognition
                </p>

                <h1 className="font-display text-3xl sm:text-4xl font-bold text-primary tracking-tight">
                    Recognition
                </h1>
            </div>

            <div className="flex flex-col gap-5">
                {recognitions.map((item, i) => (
                    <Reveal key={item.title} delay={Math.min(i, 5) * 0.05}>
                        <article className="bg-surface border border-line rounded-sm p-6 hover:border-accent/40 transition-all">
                            <div className="flex items-start justify-between gap-6">

                                <div>
                                    <p className="font-body text-lg text-primary font-medium">
                                        {item.title}
                                    </p>

                                    <p className="font-body text-sm text-muted mt-1">
                                        {item.organization}
                                    </p>
                                </div>

                                <span className="font-mono text-xs text-muted whitespace-nowrap">
                                    {item.year}
                                </span>

                            </div>

                            <p className="font-body text-sm text-muted mt-5 leading-7">
                                {item.description}
                            </p>

                            {item.link && (
                                <a
                                    href={item.link}
                                    className="inline-flex mt-5 text-sm text-accent hover:underline"
                                >
                                    View details →
                                </a>
                            )}
                        </article>
                    </Reveal>
                ))}
            </div>

            <NextPageLink
                href="/contact"
                label="Get in touch"
            />
        </main>
    );
}