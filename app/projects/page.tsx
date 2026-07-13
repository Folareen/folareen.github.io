import PageNav from "@/components/PageNav";
import NextPageLink from "@/components/NextPageLink";
import Reveal from "@/components/Reveal";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/data";

export const metadata = {
    title: "Projects — Wahab Saka",
};

export default function ProjectsPage() {
    return (
        <main className="flex flex-col min-h-screen px-6 py-16 sm:px-12 md:px-20 max-w-5xl mx-auto w-full">
            <PageNav />

            <div className="mb-12">
                <p className="font-mono text-xs text-accent tracking-widest uppercase mb-3">
                    Selected work
                </p>
                <h1 className="font-display text-3xl sm:text-4xl font-bold text-primary tracking-tight">
                    Projects
                </h1>
            </div>

            <div className="flex flex-col gap-10 md:gap-14">
                {projects.map((project, i) => (
                    <Reveal key={project.name} delay={Math.min(i, 5) * 0.06}>
                        <ProjectCard project={project} index={i} reverse={i % 2 === 1} />
                    </Reveal>
                ))}
            </div>

            <NextPageLink href="/stack" label="My stack & skills" />
        </main>
    );
}
