import Link from "next/link";
import { LuArrowLeft } from "react-icons/lu";

export default function PageNav() {
  return (
    <nav className="mb-14">
      <Link
        href="/"
        className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.14em] uppercase text-dim hover:text-accent transition-colors duration-200"
      >
        <LuArrowLeft size={13} />
        Home
      </Link>
    </nav>
  );
}
