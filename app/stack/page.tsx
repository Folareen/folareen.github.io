import PageNav from "@/components/PageNav";
import NextPageLink from "@/components/NextPageLink";
import Reveal from "@/components/Reveal";
import { stackGroups, education, currentlyLearning } from "@/lib/data";

export const metadata = {
    title: "Stack — Wahab Saka",
};

export default function StackPage() {
    return (
        <main className="flex flex-col min-h-screen px-6 py-16 sm:px-12 md:px-20 max-w-3xl mx-auto w-full">
            <PageNav />

            <div className="mb-14">
                <p className="font-mono text-xs text-accent tracking-widest uppercase mb-3">
                    Skills &amp; tools
                </p>
                <h1 className="font-display text-3xl sm:text-4xl font-bold text-primary tracking-tight">
                    Stack
                </h1>
            </div>

            <div className="flex flex-col gap-4">
                {stackGroups.map((group, i) => (
                    <Reveal key={group.label} delay={Math.min(i, 5) * 0.05}>
                        <div className="bg-surface border border-line rounded-sm p-5 hover:border-accent/40 hover:-translate-y-0.5 transition-all duration-200">
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
                    </Reveal>
                ))}

                {/* <Reveal delay={Math.min(stackGroups.length, 5) * 0.05}>
                    <div className="bg-surface border border-accent/30 rounded-sm p-5">
                        <p className="font-mono text-xs text-accent tracking-widest uppercase mb-4">
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
                </Reveal> */}
            </div>

            <Reveal delay={Math.min(stackGroups.length + 1, 5) * 0.05} className="mt-10 pt-6 border-t border-line">
                <p className="font-mono text-xs text-muted tracking-widest uppercase mb-3">
                    Education
                </p>
                <p className="font-body text-sm text-primary">{education.degree}</p>
                <p className="font-body text-sm text-muted mt-1">{education.institution}</p>
            </Reveal>

            <NextPageLink href="/recognition" label="Recognition" />
        </main>
    );
}
