import PageNav from "@/components/PageNav";
import NextPageLink from "@/components/NextPageLink";
import Reveal from "@/components/Reveal";
import ProjectCard from "@/components/ProjectCard";
import SectionHead from "@/components/SectionHead";
import { SpotWork } from "@/components/Art";
import { projects } from "@/lib/data";

export const metadata = {
    title: "Projects — Wahab Saka",
};

export default function ProjectsPage() {
    return (
        <main className="flex flex-col min-h-screen px-6 py-14 sm:px-12 md:px-20 max-w-5xl mx-auto w-full">
            <PageNav />

            <SectionHead
                eyebrow="Nine shipped · all live"
                title="Projects"
                art={<SpotWork className="h-16 w-24" />}
            />

            <p className="font-body text-base text-muted leading-relaxed max-w-xl -mt-6 mb-12">
                Every one of these is live and built end to end, most of them alone.
            </p>

            <div className="flex flex-col gap-10 md:gap-14">
                {projects.map((project, i) => (
                    <Reveal key={project.name} delay={Math.min(i, 5) * 0.06}>
                        <ProjectCard project={project} index={i} reverse={i % 2 === 1} />
                    </Reveal>
                ))}
            </div>

            <NextPageLink href="/work" label="Who I've worked with" />
        </main>
    );
}
