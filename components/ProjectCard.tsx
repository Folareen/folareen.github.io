"use client";

import { useRef, useState } from "react";
import { useInView } from "motion/react";
import { LuArrowUpRight } from "react-icons/lu";
import type { Project } from "@/lib/data";

function initials(name: string) {
  return name.slice(0, 2).toUpperCase();
}

interface ProjectCardProps {
  project: Project;
  index: number;
  reverse?: boolean;
}

export default function ProjectCard({ project, index, reverse = false }: ProjectCardProps) {
  const frameRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(frameRef, { once: true, margin: "100px" });
  const [frameLoaded, setFrameLoaded] = useState(false);
  const [frameFailed, setFrameFailed] = useState(false);

  const showFrame = project.url && !frameFailed;

  return (
    <div
      className={`group relative flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} items-stretch gap-0 md:gap-10 md:h-105 bg-surface border border-line rounded-sm overflow-hidden hover:border-accent hover:shadow-lg hover:shadow-accent/5 transition-all duration-200`}
    >
      <div
        ref={frameRef}
        className="relative aspect-16/10 md:aspect-auto md:h-full md:w-3/5 shrink-0 overflow-hidden bg-canvas border-b md:border-b-0 border-line"
      >
        {showFrame && isInView && (
          <div
            className="will-change-transform h-full w-full origin-top-left transition-transform duration-500 ease-out group-hover:scale-[1.06]"
            style={{ opacity: frameLoaded ? 1 : 0, transition: "opacity 300ms ease" }}
          >
            <iframe
              src={project.url}
              title={`${project.name} live preview`}
              loading="lazy"
              sandbox="allow-scripts allow-same-origin"
              onLoad={() => setFrameLoaded(true)}
              onError={() => setFrameFailed(true)}
              className="pointer-events-none origin-top-left"
              style={{ width: "250%", height: "250%", transform: "scale(0.4)" }}
            />
          </div>
        )}

        {(!showFrame || !frameLoaded) && (
          <div className="absolute inset-0 flex h-full w-full items-center justify-center bg-linear-to-br from-surface to-canvas">
            <span className="font-display text-3xl font-bold text-line group-hover:text-accent/30 transition-colors duration-300">
              {initials(project.name)}
            </span>
          </div>
        )}

        <div className="absolute inset-0 bg-transparent transition-colors duration-200 group-hover:bg-accent/3" />
      </div>

      <div className="relative flex flex-col gap-4 p-8 sm:p-10 md:w-2/5 justify-center">
        <span
          aria-hidden
          className="pointer-events-none absolute top-1 right-3 font-display text-5xl sm:text-7xl md:text-8xl font-bold text-primary/5 select-none leading-none"
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        <div className="relative flex items-start justify-between gap-2">
          <h2 className="font-display text-2xl font-semibold text-primary group-hover:text-accent transition-colors duration-200">
            {project.name}
          </h2>
          <LuArrowUpRight className="text-muted group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 mt-1 shrink-0" size={20} />
        </div>

        <p className="relative font-body text-sm sm:text-base text-muted leading-relaxed line-clamp-4">
          {project.description}
        </p>

        <div className="relative flex flex-wrap gap-2 mt-auto pt-2">
          {project.stack.map((tag) => (
            <span
              key={tag}
              className="font-mono text-xs text-muted border border-line rounded-sm px-2 py-0.5"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0"
        aria-label={`Open ${project.name}`}
      />
    </div>
  );
}
