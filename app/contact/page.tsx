import PageNav from "@/components/PageNav";
import NextPageLink from "@/components/NextPageLink";
import Reveal from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";
import { SpotContact } from "@/components/Art";
import { links, identity } from "@/lib/data";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { LuFileText, LuArrowUpRight } from "react-icons/lu";

export const metadata = {
    title: "Contact — Wahab Saka",
};

const contactItems = [
    { label: "Email", handle: "sakawahab03@gmail.com", href: `mailto:${links.email}`, icon: <MdOutlineEmail size={18} /> },
    { label: "GitHub", handle: "@Folareen", href: links.github, icon: <FaGithub size={17} /> },
    { label: "LinkedIn", handle: "folareen", href: links.linkedin, icon: <FaLinkedin size={17} /> },
    { label: "X / Twitter", handle: "@_folareen_", href: links.x, icon: <FaXTwitter size={17} /> },
];

export default function ContactPage() {
    return (
        <main className="flex flex-col min-h-screen px-6 py-14 sm:px-12 md:px-20 max-w-3xl mx-auto w-full">
            <PageNav />

            <SectionHead
                eyebrow="Let's talk"
                title="Get in touch"
                art={<SpotContact className="h-16 w-24" />}
            />

            <div className="-mt-6 mb-10">
                <p className="font-body text-base text-primary/85 leading-relaxed max-w-lg">
                    If you need someone who can take a product from nothing to launched,
                    or step into whichever layer is short-handed, I would like to hear about it.
                </p>
                <div className="flex items-center gap-2.5 mt-5">
                    <span className="pulse-dot h-2 w-2 rounded-full bg-accent" />
                    <span className="font-mono text-[11px] text-accent tracking-[0.14em] uppercase">
                        {identity.availability}
                    </span>
                </div>
            </div>

            <ul className="flex flex-col gap-2.5">
                {contactItems.map((item, i) => (
                    <li key={item.label}>
                        <Reveal delay={i * 0.06} y={10}>
                            <a
                                href={item.href}
                                target={item.href.startsWith("mailto") ? undefined : "_blank"}
                                rel={item.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                                className="group flex items-center gap-4 p-4 bg-surface border border-line rounded-xl hover:border-accent/60 transition-colors duration-200"
                            >
                                <span className="text-dim group-hover:text-accent transition-colors duration-200">
                                    {item.icon}
                                </span>
                                <div className="flex flex-col">
                                    <span className="font-mono text-[10px] text-dim tracking-[0.16em] uppercase">
                                        {item.label}
                                    </span>
                                    <span className="font-body text-sm text-primary mt-0.5">
                                        {item.handle}
                                    </span>
                                </div>
                                <LuArrowUpRight
                                    className="ml-auto text-dim group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
                                    size={16}
                                />
                            </a>
                        </Reveal>
                    </li>
                ))}
            </ul>

            <Reveal delay={contactItems.length * 0.06} className="mt-7">
                <a
                    href={links.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 px-5 py-3 bg-accent text-canvas rounded-xl font-medium hover:bg-accent-deep transition-colors duration-200"
                >
                    <LuFileText size={16} />
                    <span className="font-display text-sm tracking-tight font-semibold">View my resume</span>
                </a>
            </Reveal>

            <NextPageLink href="/" label="Back to home" />
        </main>
    );
}
