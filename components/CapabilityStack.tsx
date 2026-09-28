"use client";

import { motion } from "motion/react";
import { capabilities } from "@/lib/data";

const item = {
    hidden: { opacity: 0, y: 14 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
    },
};

const layers = capabilities.slice(0, 3);
const whole = capabilities[capabilities.length - 1];

export default function CapabilityStack() {
    return (
        <div>
            <div className="grid gap-x-10 gap-y-8 sm:grid-cols-3">
                {layers.map((cap, i) => (
                    <motion.div key={cap.label} variants={item}>
                        <div className="flex items-baseline gap-2.5">
                            <span className="font-mono text-[11px] tabular-nums text-dim">
                                {String(i + 1).padStart(2, "0")}
                            </span>
                            <h2 className="font-display text-xl font-bold tracking-tight text-primary">
                                {cap.label}
                            </h2>
                        </div>

                        <p className="mt-2 font-body text-sm leading-relaxed text-muted">
                            {cap.blurb}
                        </p>
                        <p className="mt-2.5 font-mono text-[11px] leading-relaxed text-dim">
                            {cap.tags.join("  ·  ")}
                        </p>
                    </motion.div>
                ))}
            </div>

            <motion.div variants={item} className="mt-10 border-t border-accent/25 pt-7">
                <div className="flex flex-col gap-1.5 sm:flex-row sm:items-baseline sm:gap-4">
                    <h2 className="font-display text-xl font-bold tracking-tight text-primary">
                        {whole.label}
                    </h2>
                    <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
                        All three, one person
                    </span>
                </div>

                <p className="mt-3 max-w-2xl font-body text-sm leading-relaxed text-primary/80">
                    {whole.blurb}
                </p>
                <p className="mt-2.5 font-mono text-[11px] leading-relaxed text-cyan">
                    {whole.proof}
                </p>
            </motion.div>
        </div>
    );
}
