import Link from "next/link";

interface FlowLinkProps {
    href: string;
    label: string;
    delay?: number;
}

export default function FlowLink({ href, label, delay = 0 }: FlowLinkProps) {
    return (
        <Link
            href={href}
            className="flow-link group flex items-center gap-3 text-primary hover:text-accent transition-colors duration-200 fade-up"
            style={{ animationDelay: `${delay}ms` }}
        >
            <span className="font-display text-xl sm:text-2xl font-medium">{label}</span>
            <span className="flow-arrow text-accent text-xl sm:text-2xl">→</span>
        </Link>
    );
}
