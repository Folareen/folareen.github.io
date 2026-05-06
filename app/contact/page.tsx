import PageNav from "@/components/PageNav";
import NextPageLink from "@/components/NextPageLink";
import { links, identity } from "@/lib/data";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { LuFileText, LuArrowUpRight } from "react-icons/lu";

export const metadata = {
    title: "Contact — Wahab Saka",
};

const contactItems = [
    {
        label: "GitHub",
        handle: "@Folareen",
        href: links.github,
        icon: <FaGithub size={18} />,
    },
    {
        label: "LinkedIn",
        handle: "folareen",
        href: links.linkedin,
        icon: <FaLinkedin size={18} />,
    },
    {
        label: "X / Twitter",
        handle: "@_folareen_",
        href: links.x,
        icon: <FaXTwitter size={18} />,
    },
    {
        label: "Email",
        handle: "sakawahab03@gmail.com",
        href: `mailto:${links.email}`,
        icon: <MdOutlineEmail size={18} />,
    },
]

export default function ContactPage() {
    return (
        <main className="flex flex-col min-h-screen px-6 py-16 sm:px-12 md:px-20 max-w-3xl mx-auto w-full">
            <PageNav />

            <div className="mb-14">
                <p className="font-mono text-xs text-accent tracking-widest uppercase mb-3">
                    Let&apos;s connect
                </p>
                <h1 className="font-display text-3xl sm:text-4xl font-bold text-primary tracking-tight">
                    Get in touch
                </h1>
                <p className="font-body text-base text-muted mt-4 max-w-sm leading-relaxed">
                    Open to full-time roles and interesting projects. Reach out on any of these.
                </p>
                <p className="font-mono text-xs text-accent tracking-widest uppercase mt-4">
                    {identity.availability}
                </p>
            </div>

            <ul className="flex flex-col gap-3">
                {contactItems.map((item) => (
                    <li key={item.label}>
                        <a
                            href={item.href}
                            target={item.href.startsWith("mailto") ? undefined : "_blank"}
                            rel={item.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                            className="group flex items-center gap-4 p-4 bg-surface border border-line rounded-sm hover:border-accent transition-colors duration-200"
                        >
                            <span className="text-muted group-hover:text-accent transition-colors duration-200">
                                {item.icon}
                            </span>
                            <div className="flex flex-col">
                                <span className="font-mono text-xs text-muted tracking-widest uppercase">
                                    {item.label}
                                </span>
                                <span className="font-body text-sm text-primary mt-0.5">
                                    {item.handle}
                                </span>
                            </div>
                            <LuArrowUpRight className="ml-auto text-muted group-hover:text-accent transition-colors duration-200" size={16} />
                        </a>
                    </li>
                ))}
            </ul>

            <div className="mt-8">
                <a
                    href={links.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 px-5 py-3 border border-accent/40 rounded-sm text-accent hover:bg-accent/10 transition-colors duration-200"
                >
                    <LuFileText size={16} />
                    <span className="font-mono text-sm tracking-wide">View Resume</span>
                </a>
            </div>

            <NextPageLink href="/" label="Back to home" />
        </main>
    );
}