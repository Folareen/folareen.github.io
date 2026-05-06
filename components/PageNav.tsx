"use client";

import Link from "next/link";

export default function PageNav() {
  return (
    <nav className="mb-16 fade-up">
      <Link
        href="/"
        className="font-mono text-sm text-muted hover:text-accent transition-colors duration-200"
      >
        ← Home
      </Link>
    </nav>
  );
}
