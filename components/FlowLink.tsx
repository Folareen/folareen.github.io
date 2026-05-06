import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";

interface FlowLinkProps {
    href: string;
    label: string;
}

export default function FlowLink({ href, label }: FlowLinkProps) {
    return (
        <Link
            href={href}
            className="flow-link group flex items-center gap-3 text-primary hover:text-accent transition-colors duration-200"
        >
            <span className="font-display text-xl sm:text-2xl font-medium">{label}</span>
            <LuArrowRight className="flow-arrow text-accent" size={20} />
        </Link>
    );
}
