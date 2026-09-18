import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";

interface NextPageLinkProps {
    href: string;
    label: string;
}

export default function NextPageLink({ href, label }: NextPageLinkProps) {
    return (
        <div className="mt-20 pt-8 border-t border-line flex justify-end">
            <Link
                href={href}
                className="flow-link group flex items-center gap-3 text-muted hover:text-primary transition-colors duration-200"
            >
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-dim">Next</span>
                <span className="font-display text-lg font-semibold tracking-tight">{label}</span>
                <LuArrowRight className="flow-arrow text-accent" size={18} />
            </Link>
        </div>
    );
}
