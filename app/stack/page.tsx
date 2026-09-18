import PageNav from "@/components/PageNav";
import NextPageLink from "@/components/NextPageLink";
import Reveal from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";
import { SpotStack, stackIcons } from "@/components/Art";
import { stackGroups, education } from "@/lib/data";

export const metadata = {
    title: "Stack — Wahab Saka",
};

export default function StackPage() {
    return (
        <main className="flex flex-col min-h-screen px-6 py-14 sm:px-12 md:px-20 max-w-3xl mx-auto w-full">
            <PageNav />

            <SectionHead
                eyebrow="Skills & tools"
                title="Stack"
                art={<SpotStack className="h-16 w-24" />}
                tone="cyan"
            />

            <p className="font-body text-base text-muted leading-relaxed max-w-xl -mt-6 mb-10">
                Tools I have shipped real products with, not a list of things I have read about.
            </p>

            <div className="flex flex-col gap-3">
                {stackGroups.map((group, i) => {
                    const Icon = stackIcons[group.icon];
                    return (
                        <Reveal key={group.label} delay={Math.min(i, 5) * 0.05}>
                            <div className="bg-surface border border-line rounded-xl p-5 hover:border-cyan/40 transition-colors duration-200">
                                <div className="flex items-center gap-2.5 mb-1">
                                    <Icon className="h-[18px] w-[18px] text-cyan" />
                                    <p className="font-display text-base font-semibold text-primary">
                                        {group.label}
                                    </p>
                                </div>
                                <p className="font-mono text-[11px] text-dim mb-4 pl-7">{group.blurb}</p>
                                <div className="flex flex-wrap gap-1.5">
                                    {group.items.map((item) => (
                                        <span
                                            key={item}
                                            className="font-mono text-xs text-muted border border-line rounded-md px-2.5 py-1 hover:border-cyan hover:text-primary transition-colors duration-200"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Reveal>
                    );
                })}
            </div>

            <Reveal delay={0.3} className="mt-10 pt-6 border-t border-line">
                <p className="font-mono text-[11px] text-dim tracking-[0.16em] uppercase mb-3">
                    Education
                </p>
                <p className="font-body text-sm text-primary">{education.degree}</p>
                <p className="font-body text-sm text-muted mt-1">{education.institution}</p>
            </Reveal>

            <NextPageLink href="/recognition" label="Recognition" />
        </main>
    );
}
