"use client";

import { motion } from "motion/react";
import FlowLink from "@/components/FlowLink";
import Marquee from "@/components/Marquee";
import { identity } from "@/lib/data";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.1 },
  },
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
    <motion.div variants={container} initial="hidden" animate="show" className="pt-12 sm:pt-20">
      <section className="flex flex-col">
        <h1 className="font-display font-bold leading-none tracking-tight flex flex-wrap items-baseline gap-x-4 gap-y-2">
          <motion.span variants={item} className="text-5xl sm:text-7xl text-primary">
            Wahab
          </motion.span>
          <motion.span variants={item} className="text-2xl sm:text-3xl text-muted/60 font-semibold">
            Afolarin Saka
          </motion.span>
        </h1>

        <motion.p variants={item} className="font-display text-lg sm:text-xl text-primary/70 font-medium mt-6">
          {identity.role}
        </motion.p>

        <motion.p variants={item} className="font-mono text-xs text-muted/40 italic mt-2">
          {identity.tagline}
        </motion.p>
      </section>

      <section className="flex flex-col gap-4 mt-12">
        <motion.p variants={item} className="font-body text-base sm:text-lg text-primary leading-relaxed max-w-xl">
          {identity.bio}
        </motion.p>

        <motion.p variants={item} className="font-body text-sm sm:text-base text-muted leading-relaxed max-w-xl">
          {identity.bioSecondary}
        </motion.p>
      </section>

      <motion.div variants={item} className="mt-12">
        <Marquee text={identity.status} />
      </motion.div>

      <motion.section variants={container} className="flex flex-col gap-5 mt-16">
        <motion.div variants={item}><FlowLink href="/work" label="Who I've worked with" /></motion.div>
        <motion.div variants={item}><FlowLink href="/projects" label="See my projects" /></motion.div>
        <motion.div variants={item}><FlowLink href="/stack" label="My stack & skills" /></motion.div>
        <motion.div variants={item}><FlowLink href="/recognition" label="Recognition" /></motion.div>
        <motion.div variants={item}><FlowLink href="/contact" label="Get in touch" /></motion.div>
      </motion.section>
    </motion.div>
  );
}
