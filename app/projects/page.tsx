import PageNav from "@/components/PageNav";
import NextPageLink from "@/components/NextPageLink";
import { projects } from "@/lib/data";
import { LuArrowUpRight } from "react-icons/lu";

export const metadata = {
    title: "Projects — Wahab Saka",
};

export default function ProjectsPage() {
    return (
        <main className="flex flex-col min-h-screen px-6 py-16 sm:px-12 md:px-20 max-w-4xl mx-auto w-full">
            <PageNav />

            <div className="mb-12">
                <p className="font-mono text-xs text-accent tracking-widest uppercase mb-3">
                    Selected work
                </p>
                <h1 className="font-display text-3xl sm:text-4xl font-bold text-primary tracking-tight">
                    Projects
                </h1>
            </div>

            <div className="flex flex-col gap-4">
                {projects.map((project, i) => (
                    <a
                        key={project.name}
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col gap-4 p-6 bg-surface border border-line rounded-sm hover:border-accent transition-colors duration-200"
                    >
                        <div className="flex items-start justify-between gap-2">
                            <h2 className="font-display text-lg font-semibold text-primary group-hover:text-accent transition-colors duration-200">
                                {project.name}
                            </h2>
                            <LuArrowUpRight className="text-muted group-hover:text-accent transition-colors duration-200 mt-0.5 shrink-0" size={16} />
                        </div>

                        <p className="font-body text-sm text-muted leading-relaxed flex-1">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mt-auto">
                            {project.stack.map((tag) => (
                                <span
                                    key={tag}
                                    className="font-mono text-xs text-muted border border-line rounded-sm px-2 py-0.5"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </a>
                ))}
            </div>

            <NextPageLink href="/stack" label="My stack & skills" />
        </main>
    );
}
