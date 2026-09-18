"use client";

import { useEffect, useRef } from "react";

/**
 * Ambient background: a slow-drifting field of fine contour lines.
 * Replaces the old floating-icon clipart with something quiet that
 * reads as texture rather than decoration. Fixed, behind everything,
 * and completely still under prefers-reduced-motion.
 */
export default function GrainField() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0;
    let h = 0;
    let t = 0;
    let raf = 0;

    const size = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      const lines = 18;
      /* Fade the field out across the central reading column so the
         texture lives at the edges and never crosses body copy. */
      const clearHalf = Math.min(460, w * 0.42);

      for (let i = 0; i < lines; i++) {
        const p = i / (lines - 1);
        ctx.beginPath();
        for (let x = 0; x <= w; x += 8) {
          const nx = x / w;
          const y =
            h * 0.5 +
            Math.sin(nx * 2.6 + t * 0.6 + i * 0.44) * (26 + i * 3.4) +
            Math.sin(nx * 1.5 - t * 0.38 + i * 0.22) * (16 + i * 1.9) +
            (p - 0.5) * h * 0.92;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        // tangerine mostly, cyan every third line
        const hue = i % 3 === 0 ? "57, 214, 224" : "255, 107, 53";
        const grad = ctx.createLinearGradient(0, 0, w, 0);
        const inner = clearHalf / w;
        grad.addColorStop(0, `rgba(${hue}, 1)`);
        grad.addColorStop(Math.max(0, 0.5 - inner), `rgba(${hue}, 0)`);
        grad.addColorStop(Math.min(1, 0.5 + inner), `rgba(${hue}, 0)`);
        grad.addColorStop(1, `rgba(${hue}, 1)`);
        ctx.strokeStyle = grad;
        ctx.globalAlpha = 0.22 + p * 0.12;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      ctx.globalAlpha = 1;
      if (!reduce) t += 0.0035;
      raf = requestAnimationFrame(draw);
    };

    size();
    raf = requestAnimationFrame(draw);
    window.addEventListener("resize", size);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", size);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 hidden h-full w-full md:block"
    />
  );
}
