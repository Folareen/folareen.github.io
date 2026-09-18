"use client";

import { useRef, useState } from "react";
import { useInView } from "motion/react";
import { LuArrowUpRight } from "react-icons/lu";
import ProjectMark from "@/components/ProjectMark";
import type { Project } from "@/lib/data";

interface ProjectCardProps {
  project: Project;
  index: number;
  reverse?: boolean;
}

/**
 * Preview strip. Loads the live site in a sandboxed iframe once the
 * card scrolls into view — never on mount, so nine cards never mean
 * nine simultaneous page loads. The generated mark covers the gap
 * while the frame loads and stands in permanently if it fails
 * (blocked by frame headers, offline, etc).
 */
function Preview({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "200px" });
  const [frameLoaded, setFrameLoaded] = useState(false);
  const [frameFailed, setFrameFailed] = useState(false);

  const showFrame = Boolean(project.url) && !frameFailed;

  return (
    <div
      ref={ref}
      className="relative aspect-16/10 md:aspect-auto md:self-stretch md:w-3/5 shrink-0 overflow-hidden bg-canvas border-b md:border-b-0 md:border-r border-line"
    >
      {showFrame && inView && (
        <div
          className="h-full w-full origin-top-left will-change-transform transition-transform duration-500 ease-out group-hover:scale-[1.04]"
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
        <div className="absolute inset-0 overflow-hidden">
          <div className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.06]">
            <ProjectMark name={project.name} index={index} />
          </div>
          <span className="absolute bottom-4 left-5 font-mono text-[10px] text-muted tracking-[0.18em] uppercase">
            {project.name}
          </span>
        </div>
      )}

      <div className="pointer-events-none absolute inset-0 bg-accent/0 transition-colors duration-300 group-hover:bg-accent/5" />
    </div>
  );
}

export default function ProjectCard({ project, index, reverse = false }: ProjectCardProps) {
  const isWin = project.badge?.includes("/");

  return (
    <div
      className={`group relative flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} items-stretch md:min-h-[26rem] bg-surface border border-line rounded-xl overflow-hidden hover:border-accent/60 transition-colors duration-300`}
    >
      <Preview project={project} index={index} />

      <div className="relative flex flex-col gap-3 p-7 sm:p-9 md:w-2/5 justify-center">
        <span
          aria-hidden
          className="pointer-events-none absolute top-2 right-4 font-display text-6xl md:text-7xl font-extrabold text-primary/[0.04] select-none leading-none tabular-nums"
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        <div className="relative flex items-center gap-2.5 flex-wrap">
          {project.badge && (
            <span
              className={`font-mono text-[10px] tracking-[0.12em] uppercase rounded-full px-2.5 py-1 border ${
                isWin
                  ? "text-accent border-accent/60 bg-accent/10"
                  : "text-cyan border-cyan/40"
              }`}
            >
              {project.badge}
            </span>
          )}
          {project.year && (
            <span className="font-mono text-[11px] text-dim">{project.year}</span>
          )}
        </div>

        <div className="relative flex items-start justify-between gap-3">
          <h2 className="font-display text-2xl font-bold text-primary tracking-tight group-hover:text-accent transition-colors duration-200">
            {project.name}
          </h2>
          <LuArrowUpRight
            className="text-dim group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 mt-1.5 shrink-0"
            size={19}
          />
        </div>

        {project.tagline && (
          <p className="relative font-display text-sm text-cyan/90 font-medium -mt-1">
            {project.tagline}
          </p>
        )}

        <p className="relative font-body text-sm text-muted leading-relaxed line-clamp-none">
          {project.description}
        </p>

        {project.role && (
          <p className="relative font-mono text-[11px] text-dim">{project.role}</p>
        )}

        <div className="relative flex flex-wrap gap-1.5 mt-auto pt-3">
          {project.stack.slice(0, 6).map((tag) => (
            <span
              key={tag}
              className="font-mono text-[10px] text-muted border border-line rounded px-2 py-0.5"
            >
              {tag}
            </span>
          ))}
          {project.stack.length > 6 && (
            <span className="font-mono text-[10px] text-dim px-1 py-0.5">
              +{project.stack.length - 6}
            </span>
          )}
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
