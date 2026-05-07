import FlowLink from "@/components/FlowLink";
import { identity } from "@/lib/data";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen px-6 py-16 sm:px-12 md:px-20 max-w-3xl mx-auto w-full">

      <section className="flex flex-col gap-2 pt-12 sm:pt-20">
        <h1 className="font-display font-bold leading-tight tracking-tight">
          <span className="text-2xl sm:text-4xl text-primary">Wahab </span>
          <span className="text-lg sm:text-2xl text-muted/60 font-semibold">Afolarin Saka</span>
        </h1>

        <p className="font-display text-base sm:text-lg text-primary/70 font-medium mt-2">
          {identity.role}
        </p>

        <p className="font-mono text-xs text-muted/40 italic mt-1">
          {identity.tagline}
        </p>
      </section>

      <div className="mt-10 mb-10" />

      <section className="flex flex-col gap-4">
        <p className="font-body text-base sm:text-lg text-muted leading-relaxed max-w-xl">
          {identity.bio}
        </p>

        <p className="font-mono text-sm text-muted/70">
          {identity.currentlyBuilding}
        </p>
      </section>

      <section className="flex flex-col gap-5 mt-16">
        <FlowLink href="/work" label="Who I've worked with" />
        <FlowLink href="/projects" label="See my projects" />
        <FlowLink href="/stack" label="My stack & skills" />
        <FlowLink href="/contact" label="Get in touch" />
      </section>
    </main>
  );
}
