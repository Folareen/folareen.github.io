import Link from "next/link";

interface NextPageLinkProps {
    href: string;
    label: string;
}

export default function NextPageLink({ href, label }: NextPageLinkProps) {
    return (
        <div className="mt-20 pt-10 border-t border-line flex justify-end">
            <Link
                href={href}
                className="flow-link group flex items-center gap-3 text-muted hover:text-primary transition-colors duration-200"
            >
                <span className="font-mono text-sm uppercase tracking-widest">Next</span>
                <span className="font-display text-lg font-medium">{label}</span>
                <span className="flow-arrow text-accent text-lg">→</span>
            </Link>
        </div>
    );
}
