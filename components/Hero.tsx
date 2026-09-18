"use client";

import { motion } from "motion/react";
import FlowLink from "@/components/FlowLink";
import Marquee from "@/components/Marquee";
import { capabilityIcons } from "@/components/Art";
import { identity, experienceLine, capabilities } from "@/lib/data";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Hero() {
  return (
    <motion.div variants={container} initial="hidden" animate="show" className="pt-10 sm:pt-16">
      {/* ── Identity ─────────────────────────────────────── */}
      <section className="flex flex-col">
        <motion.div variants={item} className="flex items-center gap-2.5 mb-8">
          <span className="pulse-dot h-2 w-2 rounded-full bg-accent" />
          <span className="font-mono text-[11px] text-muted tracking-[0.16em] uppercase">
            {identity.availability}
          </span>
        </motion.div>

        <h1 className="font-display font-extrabold leading-[0.95] tracking-tight text-5xl sm:text-7xl">
          <motion.span variants={item} className="block text-primary">
            I build products
          </motion.span>
          <motion.span variants={item} className="block text-accent">
            people actually use.
          </motion.span>
        </h1>

        <motion.p variants={item} className="font-body text-base sm:text-lg text-primary/85 leading-relaxed max-w-xl mt-8">
          {identity.bio}
        </motion.p>

        <motion.p variants={item} className="font-body text-sm sm:text-base text-muted leading-relaxed max-w-xl mt-4">
          {identity.bioSecondary}
        </motion.p>

        <motion.div variants={item} className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mt-7">
          <span className="font-display text-lg font-semibold text-primary">
            {identity.name}
          </span>
          <span className="font-mono text-xs text-muted">{identity.role}</span>
        </motion.div>

        {/* ── Experience ─────────────────────────────────── */}
        <motion.p
          variants={item}
          className="font-mono text-xs sm:text-sm text-muted tracking-tight mt-5"
        >
          {experienceLine}
        </motion.p>
      </section>

      {/* ── What I do ────────────────────────────────────── */}
      <motion.section variants={container} className="mt-16">
        <motion.p variants={item} className="font-mono text-[11px] text-cyan tracking-[0.18em] uppercase mb-6">
          What I do
        </motion.p>

        <div className="grid sm:grid-cols-2 gap-3">
          {capabilities.map((cap) => {
            const Icon = capabilityIcons[cap.icon];
            return (
              <motion.div
                key={cap.label}
                variants={item}
                className="group bg-surface border border-line rounded-lg p-5 hover:border-accent/50 transition-colors duration-200"
              >
                <div className="flex items-center gap-2.5 mb-3">
                  <Icon className="h-[18px] w-[18px] text-accent" />
                  <h2 className="font-display text-base font-semibold text-primary">
                    {cap.label}
                  </h2>
                </div>
                <p className="font-body text-sm text-muted leading-relaxed">{cap.blurb}</p>
                <p className="font-mono text-[11px] text-dim leading-relaxed mt-3 pt-3 border-t border-line">
                  {cap.proof}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.section>

      <motion.div variants={item} className="mt-14">
        <Marquee text={identity.status} />
      </motion.div>

      {/* ── Navigation ───────────────────────────────────── */}
      <motion.section variants={container} className="flex flex-col gap-5 mt-16">
        <motion.div variants={item}><FlowLink href="/projects" label="See my projects" /></motion.div>
        <motion.div variants={item}><FlowLink href="/work" label="Who I've worked with" /></motion.div>
        <motion.div variants={item}><FlowLink href="/stack" label="My stack & skills" /></motion.div>
        <motion.div variants={item}><FlowLink href="/recognition" label="Recognition" /></motion.div>
        <motion.div variants={item}><FlowLink href="/contact" label="Get in touch" /></motion.div>
      </motion.section>
    </motion.div>
  );
}
