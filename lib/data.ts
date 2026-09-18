export const identity = {
    name: "Wahab Afolarin Saka",
    role: "Fullstack Developer — Web, Mobile & Backend",
    tagline: "Some work hard. Some work smart. I do both.",
    availability: "Available for work. Remote and global.",
    headline: "I build products people actually use.",
    headlineAccent: "people actually use",
    bio: "Close to 5 years building software across companies, startups, and direct clients. I take a product from nothing to launched — frontend, backend, mobile, whatever the thing actually needs — and I ship fast without cutting corners on the craft.",
    bioSecondary: "I have shipped at every layer: production frontends, cross-platform mobile apps live on the App Store and Play Store, real-time platforms, serverless APIs on AWS, and backend systems handling real users. Whatever the gap is, I close it.",
    status: "Actively seeking a new role or contract opportunity.",
}

export type Project = {
    name: string
    tagline: string
    description: string
    url: string
    stack: string[]
    year?: string
    role?: string
    badge?: string
    image?: string
}

export const projects: Project[] = [
    {
        name: "Compesight",
        tagline: "Competitor intelligence, on autopilot",
        description:
            "Product marketing teams lose deals because they find out too late that a competitor changed pricing or shipped a feature. Compesight watches competitors across 10 source types, catches every change, and turns it into ranked alerts and a battlecard that stays current on its own. Built and shipped solo — crawlers, LLM classification pipeline, billing, and all.",
        url: "https://compesight.site",
        stack: ["Next.js", "FastAPI", "PostgreSQL", "pgvector", "Celery", "Redis", "Playwright", "Claude", "Clerk", "Paddle"],
        year: "2026",
        role: "Solo — full product",
        badge: "Live",
        image: "/projects/compesight-1.png",
    },
    {
        name: "Tipwise",
        tagline: "Predictions that grade themselves in public",
        description:
            "Every tipster site claims a win rate and none of them prove it. Tipwise pairs Dixon-Coles statistical modeling with LLM synthesis to produce daily risk-ranked picks across 12 leagues — then publishes its own track record, graded automatically, whether it was right or wrong. The hard part was trust, so I made verification the product.",
        url: "https://usetipwise.site",
        stack: ["Next.js", "TypeScript", "Supabase", "Claude", "TanStack Query", "Puppeteer"],
        year: "2026",
        role: "Solo — full product",
        badge: "Live",
        image: "/projects/tipwise-1.png",
    },
    {
        name: "Clance",
        tagline: "A workspace shaped like how agencies actually staff",
        description:
            "Freelance teams juggle tasks in one tool, chat in another, and approvals in a thread nobody can find. Clance puts tasks, real-time chat, notes, files and approvals in one workspace — with per-project roles instead of global ones, because the same person leads one project and executes on another. Next.js, NestJS and Socket.io in a Turborepo monorepo, built end to end.",
        url: "https://clance.team",
        stack: ["Next.js", "NestJS", "Fastify", "Socket.io", "Drizzle ORM", "PostgreSQL", "Turborepo"],
        year: "2025",
        role: "Solo — full product",
        badge: "Live",
        image: "/projects/clance-1.png",
    },
    {
        name: "Glasspot",
        tagline: "Runner-up out of 268 teams",
        description:
            "Group contributions in Nigeria usually mean one person holding everyone's money and everyone hoping. Glasspot locks the payout and refund rules before a single naira goes in, so funds move automatically or through a trusted trigger — never out of someone's personal account. Led a two-person team to 2nd place out of 268 final submissions at the Nomba x DevCareer Hackathon 2026.",
        url: "https://glasspot.vercel.app",
        stack: ["Next.js", "Fastify", "TypeScript", "Drizzle ORM", "PostgreSQL", "BullMQ", "Nomba API"],
        year: "2026",
        role: "Team lead — 2 people",
        badge: "2nd / 268",
        image: "/projects/glasspot-1.png",
    },
    {
        name: "Eventza",
        tagline: "Sell tickets, scan people in",
        description:
            "End-to-end event ticketing — create an event, sell tickets with Stripe Connect so organisers get paid directly, and check attendees in by QR from a companion scanner app. Payments, ticketing and check-in all built from scratch.",
        url: "https://eventza.vercel.app",
        stack: ["Next.js", "TypeScript", "TailwindCSS", "Express", "PostgreSQL", "Stripe", "AWS S3", "Turborepo"],
        year: "2024",
        role: "Solo — full product",
        badge: "Live",
        image: "/projects/eventza-1.png",
    },
    {
        name: "KeepNet",
        tagline: "Notes that travel with you",
        description:
            "A note-taking and sharing platform with a proper rich-text editor, file uploads to S3, and cross-device sync — write anywhere, share with anyone by link.",
        url: "https://keepnet.vercel.app",
        stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tiptap", "AWS S3"],
        year: "2024",
        role: "Solo — full product",
        badge: "Live",
        image: "/projects/keepnet-1.png",
    },
    {
        name: "Resumake",
        tagline: "A resume in minutes, not an afternoon",
        description:
            "Build, customise and export a clean resume without fighting a word processor. Live preview, multiple templates, PDF export.",
        url: "https://resumake.vercel.app",
        stack: ["React", "TypeScript", "Firebase", "Redux", "SASS"],
        year: "2023",
        role: "Solo — full product",
        badge: "Live",
        image: "/projects/resumake-1.png",
    },
    {
        name: "WriteOn",
        tagline: "Publishing, minus the friction",
        description:
            "A blogging platform where anyone can read and publish — rich editor, image uploads, and a reading experience that gets out of the way.",
        url: "https://writeon.vercel.app",
        stack: ["React", "TypeScript", "TailwindCSS", "Express", "MongoDB", "Cloudinary"],
        year: "2023",
        role: "Solo — full product",
        badge: "Live",
        image: "/projects/writeon-1.png",
    },
    {
        name: "Ghostgram",
        tagline: "Say it without saying who",
        description:
            "Anonymous messaging — claim a personal link, share it anywhere, and collect messages without senders ever revealing themselves.",
        url: "https://ghostgram.vercel.app",
        stack: ["Next.js", "TailwindCSS", "MongoDB", "Mongoose"],
        year: "2023",
        role: "Solo — full product",
        badge: "Live",
        image: "/projects/ghostgram-1.png",
    },
]

export type WorkStat = {
    value: number
    prefix?: string
    suffix?: string
    label: string
}

export type WorkProduct = {
    name: string
    detail?: string
}

export type WorkEntry = {
    company: string
    year: string
    type: "Contract" | "Full-time" | "Part-time" | "Freelance"
    location?: string
    role: string
    note?: string
    impact?: string
    stats?: WorkStat[]
    products: WorkProduct[]
}

export const workEntries: WorkEntry[] = [
    {
        company: "2read",
        year: "2023 – present",
        type: "Part-time",
        location: "India",
        role: "Mobile App Developer",
        impact: "Sole developer on a live App Store and Play Store product, working directly with the founder.",
        note: "High ownership — work directly with the founder, from feature scoping to shipping.",
        stats: [{ value: 1000, suffix: "+", label: "downloads across App Store & Google Play" }],
        products: [
            {
                name: "AI Kindle Reading App",
                detail:
                    "Built a Kindle-highlights extraction app with React Native and Supabase, handling HTML parsing with Cheerio and a proper in-app subscription system via react-native-iap. Shipped AI-powered smart dictionary, highlight insights, and summaries using the Claude and Gemini APIs. Still maintaining it — fixing issues, shipping UI upgrades, and adding features as the product grows.",
            },
        ],
    },
    {
        company: "Crewswap",
        year: "2025 – 2026",
        type: "Contract",
        location: "US",
        role: "Fullstack Developer",
        impact: "Built the entire backend alone — including the matching algorithm the product runs on — and wired up the frontend integration.",
        products: [
            {
                name: "Schedule Management & Swap Platform",
                detail:
                    "Designed and built the entire backend from scratch for a pilot scheduling and swap platform — Node.js, TypeScript, Express, MySQL on AWS. Designed the matching algorithm that pairs pilots and flight attendants for schedule swaps, built an end-to-end chat system on Socket.io, and automated schedule data extraction from flica.net with Puppeteer. Also handled frontend integration — wiring the client to these APIs and fixing issues on that side.",
            },
        ],
    },
    {
        company: "WelcomeBack",
        year: "2025",
        type: "Full-time",
        location: "Chile",
        role: "Software Engineer",
        impact: "Founding engineer. Shipped the integration that had stalled before I joined.",
        note: "Joined as a founding engineer, working directly with the CTO to ship the platform end to end.",
        products: [
            {
                name: "Digital Loyalty Platform",
                detail:
                    "Built serverless backend services in TypeScript on AWS Lambda, then owned the frontend integration in Next.js end to end, wiring loyalty features to the UI and improving page loads with SSR. Debugged and shipped a full PassKit integration — pass design, creation, and notifications — that had stalled before I picked it up.",
            },
        ],
    },
    {
        company: "Dunison",
        year: "2023 – 2025",
        type: "Contract",
        role: "Frontend & Mobile Developer",
        impact: "Only frontend and mobile developer across three products, on both iOS and Android.",
        note: "Sole frontend and mobile developer across all three products — shipped to both iOS and Android.",
        products: [
            {
                name: "POS App",
                detail: "React Native point-of-sale checkout app for ecommerce stores. Wired up to backend APIs and managed cart and order state.",
            },
            {
                name: "Delivery Rider App",
                detail: "React Native dispatch app for riders. Integrated real-time delivery and dispatch APIs with local state syncing.",
            },
            {
                name: "Services Marketplace",
                detail: "Web and mobile marketplace built with React and React Native — owned all API wiring and shared state across both platforms.",
            },
        ],
    },
    {
        company: "Fiverr & Direct Clients",
        year: "2023 – 2024",
        type: "Freelance",
        role: "Fullstack Developer",
        impact: "Delivered for US startups across web, mobile and realtime — every project shipped.",
        products: [
            {
                name: "mytherapist.io",
                detail: "Built the full web and mobile frontend for a US-based therapy startup, including real-time chat over WebSockets and integration with an AI backend for therapy responses.",
            },
            {
                name: "Airtable-style Data Collection Tool",
                detail: "Built a spreadsheet-like data collection tool for a US startup using the MERN stack.",
            },
            {
                name: "Real Estate Listing Platform",
                detail: "React web app using Sanity CMS for property content and Firebase for auth and storage.",
            },
            {
                name: "Markdown Conversion App",
                detail: "Built with Next.js and Express.",
            },
            {
                name: "Dog Walking App (prototype)",
                detail: "React Native prototype built for a small dog-walking startup.",
            },
        ],
    },
    {
        company: "Carrotsuite ERP",
        year: "2022 – 2023",
        type: "Full-time",
        role: "Frontend & Mobile Developer",
        impact: "Rebuilt a core product from scratch and fixed what the previous build got wrong.",
        products: [
            {
                name: "Visitor Management Web App",
                detail: "Rebuilt from scratch in React.js with improved UI responsiveness and properly implemented role-based access control.",
            },
            {
                name: "Visitor Management Mobile App",
                detail: "Fixed issues and improved the existing check-in flow, built with bare React Native.",
            },
            {
                name: "Business Requisitions App",
                detail: "Internal React Native and Redux app — Redux managed all requisition flows and approval state end to end.",
            },
        ],
    },
    {
        company: "CBT Expert Solutions",
        year: "2022",
        type: "Full-time",
        role: "Frontend Developer",
        impact: "Built and maintained testing apps where a failed session means a failed exam.",
        products: [
            {
                name: "CBT Platform",
                detail:
                    "Built and maintained responsive computer-based testing apps in React.js, implementing secure authentication and session management.",
            },
        ],
    },
    {
        company: "Lannistar",
        year: "2021 – 2022",
        type: "Contract",
        role: "Frontend Developer",
        impact: "First professional role — shipped client sites end to end with the IT team.",
        products: [
            {
                name: "E-commerce Websites",
                detail:
                    "Implemented UI designs and collaborated with the IT team to build and maintain sites using HTML, CSS, JavaScript, and WordPress.",
            },
        ],
    },
]

export type StackGroup = {
    label: string
    icon: "code" | "layout" | "server" | "database" | "cloud" | "layers" | "wrench"
    blurb: string
    items: string[]
}

export const stackGroups: StackGroup[] = [
    {
        label: "Languages",
        icon: "code",
        blurb: "What I write every day",
        items: ["TypeScript", "JavaScript", "Python", "SQL", "HTML", "CSS", "Markdown"],
    },
    {
        label: "Frontend",
        icon: "layout",
        blurb: "Interfaces people actually use",
        items: ["React.js", "Next.js", "React Native", "Flutter", "Expo", "TailwindCSS", "Material UI", "Chakra UI", "Redux", "Zustand"],
    },
    {
        label: "Backend",
        icon: "server",
        blurb: "APIs and services under load",
        items: ["Node.js", "Express.js", "NestJS", "Fastify", "FastAPI", "AWS Lambda", "Socket.io", "Celery", "BullMQ"],
    },
    {
        label: "Databases",
        icon: "database",
        blurb: "Where the data lives",
        items: ["PostgreSQL", "MySQL", "MongoDB", "DynamoDB", "Redis"],
    },
    {
        label: "Infrastructure",
        icon: "cloud",
        blurb: "Getting it shipped and keeping it up",
        items: ["AWS (Lambda, S3, EC2)", "Docker", "Vercel", "Firebase", "Supabase", "Stripe / Stripe Connect", "Paddle", "Clerk"],
    },
    {
        label: "CMS",
        icon: "layers",
        blurb: "Content without redeploys",
        items: ["Strapi", "Sanity", "WordPress"],
    },
    {
        label: "Tools",
        icon: "wrench",
        blurb: "The rest of the workbench",
        items: ["Git", "Prisma", "Drizzle ORM", "Sequelize", "Turborepo", "Playwright"],
    },
]

export type Capability = {
    label: string
    icon: "layout" | "server" | "smartphone" | "rocket"
    blurb: string
    proof: string
}

/* What I actually do, stated as range rather than a single lane. */
export const capabilities: Capability[] = [
    {
        label: "Frontend",
        icon: "layout",
        blurb: "Production interfaces in React and Next.js — fast, responsive, and built to hold up once real users arrive.",
        proof: "Known for building frontend that's polished, not just functional.",
    },
    {
        label: "Backend",
        icon: "server",
        blurb: "APIs, realtime systems, queues and serverless services that carry actual traffic.",
        proof: "Built production backends — APIs, matching logic, realtime, all of it.",
    },
    {
        label: "Mobile",
        icon: "smartphone",
        blurb: "Cross-platform apps in React Native, shipped through review and maintained after launch.",
        proof: "Several apps live on the App Store and Play Store, 1,000+ downloads.",
    },
    {
        label: "The whole product",
        icon: "rocket",
        blurb: "When there is no team, I am the team — architecture, build, deploy, billing, and the parts nobody scoped.",
        proof: "Several products built solo, end to end — architecture through launch.",
    },
]

/** Short track-record line under the byline. */
export const experienceLine = "5+ years shipping production software"

export const education = {
    degree: "BSc. Computer Science with Economics (in progress)",
    institution: "Obafemi Awolowo University, Ile-Ife",
}

export const links = {
    github: "https://github.com/Folareen",
    linkedin: "https://linkedin.com/in/folareen",
    x: "https://x.com/_folareen_",
    email: "sakawahab03@gmail.com",
    resume: "https://drive.google.com/file/d/1o4OSJoDcjKF7vb7VytLpF1OL-a6cv6HZ/view?usp=drive_link",
}

export const recognitions = [
    {
        title: "Runner-up — 2nd of 268",
        organization: "Nomba × DevCareer Hackathon",
        year: "2026",
        description:
            "Led a two-person team and built Glasspot end to end — a transparent money pooling platform for Nigerians, where the payout and refund rules lock before anyone contributes.\n\nFinished 2nd out of 268 final submissions at the Nomba x DevCareer Hackathon 2026.",
        link: "https://glasspot.vercel.app",
    }
];