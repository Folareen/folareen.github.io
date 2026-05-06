import PageNav from "@/components/PageNav";
import NextPageLink from "@/components/NextPageLink";
import { stackGroups, education, currentlyLearning } from "@/lib/data";

export const metadata = {
    title: "Stack — Wahab Saka",
};

export default function StackPage() {
    return (
        <main className="flex flex-col min-h-screen px-6 py-16 sm:px-12 md:px-20 max-w-3xl mx-auto w-full">
            <PageNav />

            <div className="mb-14 fade-up">
                <p className="font-mono text-xs text-accent tracking-widest uppercase mb-3">
                    Skills &amp; tools
                </p>
                <h1 className="font-display text-3xl sm:text-4xl font-bold text-primary tracking-tight">
                    Stack
                </h1>
            </div>

            <div className="flex flex-col gap-10">
                {stackGroups.map((group, i) => (
                    <div
                        key={group.label}
                        className={`fade-up delay-${Math.min(i + 1, 8)}`}
                    >
                        <p className="font-mono text-xs text-muted tracking-widest uppercase mb-4">
                            {group.label}
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {group.items.map((item) => (
                                <span
                                    key={item}
                                    className="font-mono text-sm text-muted border border-line rounded-sm px-3 py-1 hover:border-accent hover:text-primary transition-colors duration-200"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}

                <div className="fade-up delay-8">
                    <p className="font-mono text-xs text-muted tracking-widest uppercase mb-4">
                        Currently Learning
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {currentlyLearning.map((item) => (
                            <span
                                key={item}
                                className="font-mono text-sm text-accent border border-accent/30 rounded-sm px-3 py-1"
                            >
                                {item}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="fade-up delay-8 pt-2 border-t border-line">
                    <p className="font-mono text-xs text-muted tracking-widest uppercase mb-3">
                        Education
                    </p>
                    <p className="font-body text-sm text-primary">{education.degree}</p>
                    <p className="font-body text-sm text-muted mt-1">{education.institution}</p>
                </div>
            </div>

            <NextPageLink href="/contact" label="Get in touch" />
        </main>
    );
}
