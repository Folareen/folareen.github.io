import PageNav from "@/components/PageNav";
import NextPageLink from "@/components/NextPageLink";
import { links, identity } from "@/lib/data";

export const metadata = {
    title: "Contact — Wahab Saka",
};

const contactItems = [
    {
        label: "GitHub",
        handle: "@Folareen",
        href: links.github,
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
        ),
    },
    {
        label: "LinkedIn",
        handle: "folareen",
        href: links.linkedin,
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
        ),
    },
    {
        label: "X / Twitter",
        handle: "@folareen",
        href: links.x,
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
        ),
    },
    {
        label: "Email",
        handle: "sakawahab03@gmail.com",
        href: `mailto:${links.email}`,
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
        ),
    },
]

export default function ContactPage() {
    return (
        <main className="flex flex-col min-h-screen px-6 py-16 sm:px-12 md:px-20 max-w-3xl mx-auto w-full">
            <PageNav />

            <div className="mb-14 fade-up">
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
                {contactItems.map((item, i) => (
                    <li key={item.label} className={`fade-up delay-${i + 1}`}>
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
                            <span className="ml-auto text-muted group-hover:text-accent transition-all duration-200 group-hover:translate-x-1 group-hover:-translate-y-1 inline-block text-sm">
                                ↗
                            </span>
                        </a>
                    </li>
                ))}
            </ul>

            <div className="fade-up delay-5 mt-8">
                <a
                    href={links.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 px-5 py-3 border border-accent/40 rounded-sm text-accent hover:bg-accent/10 transition-colors duration-200"
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <polyline points="14 2 14 8 20 8" />
                        <line x1="16" y1="13" x2="8" y2="13" />
                        <line x1="16" y1="17" x2="8" y2="17" />
                        <polyline points="10 9 9 9 8 9" />
                    </svg>
                    <span className="font-mono text-sm tracking-wide">View Resume</span>
                </a>
            </div>

            <NextPageLink href="/" label="Back to home" />
        </main>
    );
}
