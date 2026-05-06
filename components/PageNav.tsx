"use client";

import Link from "next/link";
import { LuArrowLeft } from "react-icons/lu";

export default function PageNav() {
  return (
    <nav className="mb-16">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 font-mono text-sm text-muted hover:text-accent transition-colors duration-200"
      >
        <LuArrowLeft size={14} />
        Home
      </Link>
    </nav>
  );
}
