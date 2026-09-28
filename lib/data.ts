export const identity = {
    name: "Wahab Afolarin Saka",
    role: "Fullstack Developer: Web, Mobile & Backend",
    tagline: "Some work hard. Some work smart. I do both.",
    availability: "Available for work. Remote and global.",
    headline: "I take products from nothing to shipped.",
    headlineAccent: "nothing to shipped",
    bio: "Close to 5 years building software for companies, startups and direct clients. Give me a product idea and I hand you back a deployed one. No team to assemble, no gaps to backfill.",
    bioSecondary: "Lately, AI products that are real products, not demos.",
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
            "Product marketing teams lose deals because they find out too late that a competitor changed pricing or shipped a feature. Compesight watches competitors across 10 source types, catches every change, and turns it into ranked alerts and a battlecard that stays current on its own. Crawlers, LLM classification pipeline, billing, and all.",
        url: "https://compesight.site",
        stack: ["Next.js", "FastAPI", "PostgreSQL", "pgvector", "Celery", "Redis", "Playwright", "Claude", "Clerk", "Paddle"],
        year: "2026",
        role: "Personal project",
        badge: "Live",
        image: "/projects/compesight-1.png",
    },
    {
        name: "Tipwise",
        tagline: "Predictions that grade themselves in public",
        description:
            "Every tipster site claims a win rate and none of them prove it. Tipwise pairs Dixon-Coles statistical modeling with LLM synthesis to produce daily risk-ranked picks across 12 leagues, then publishes its own track record, graded automatically, whether it was right or wrong. The hard part was trust, so I made verification the product.",
        url: "https://usetipwise.site",
        stack: ["Next.js", "TypeScript", "Supabase", "Claude", "TanStack Query", "Puppeteer"],
        year: "2026",
        role: "Personal project",
        badge: "Live",
        image: "/projects/tipwise-1.png",
    },
    {
        name: "Clance",
        tagline: "A workspace shaped like how agencies actually staff",
        description:
            "Freelance teams juggle tasks in one tool, chat in another, and approvals in a thread nobody can find. Clance puts tasks, real-time chat, notes, files and approvals in one workspace, with per-project roles instead of global ones, because the same person leads one project and executes on another. Next.js, NestJS and Socket.io in a Turborepo monorepo.",
        url: "https://clance.team",
        stack: ["Next.js", "NestJS", "Fastify", "Socket.io", "Drizzle ORM", "PostgreSQL", "Turborepo"],
        year: "2025",
        role: "Personal project",
        badge: "Live",
        image: "/projects/clance-1.png",
    },
    {
        name: "Glasspot",
        tagline: "Runner-up out of 1,000+ participants",
        description:
            "Group contributions in Nigeria usually mean one person holding everyone's money and everyone hoping. Glasspot locks the payout and refund rules before a single naira goes in, so funds move automatically or through a trusted trigger, never out of someone's personal account. Led a two-person team to runner-up out of over 1,000 participants at the Nomba x DevCareer Hackathon 2026.",
        url: "https://glasspot.vercel.app",
        stack: ["Next.js", "Fastify", "TypeScript", "Drizzle ORM", "PostgreSQL", "BullMQ", "Nomba API"],
        year: "2026",
        role: "Team lead, 2 people",
        badge: "Runner-up",
        image: "/projects/glasspot-1.png",
    },
    {
        name: "Eventza",
        tagline: "Sell tickets, scan people in",
        description:
            "End-to-end event ticketing: create an event, sell tickets with Stripe Connect so organisers get paid directly, and check attendees in by QR from a companion scanner app. Payments, ticketing and check-in all built from scratch.",
        url: "https://eventza.vercel.app",
        stack: ["Next.js", "TypeScript", "TailwindCSS", "Express", "PostgreSQL", "Stripe", "AWS S3", "Turborepo"],
        year: "2024",
        role: "Personal project",
        badge: "Live",
        image: "/projects/eventza-1.png",
    },
    {
        name: "KeepNet",
        tagline: "Notes that travel with you",
        description:
            "A note-taking and sharing platform with a proper rich-text editor, file uploads to S3, and cross-device sync. Write anywhere, share with anyone by link.",
        url: "https://keepnet.vercel.app",
        stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tiptap", "AWS S3"],
        year: "2024",
        role: "Personal project",
        badge: "Live",
        image: "/projects/keepnet-1.png",
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
    impact?: string
    stats?: WorkStat[]
    products: WorkProduct[]
}

export const workEntries: WorkEntry[] = [
    {
        company: "2read",
        year: "Dec 2023 - present",
        type: "Part-time",
        location: "India",
        role: "Mobile App Developer",
        impact: "Sole developer on the product for over two years, working directly with the founder to decide what ships next.",
        stats: [{ value: 1000, suffix: "+", label: "downloads across App Store & Google Play" }],
        products: [
            {
                name: "AI Kindle Reading App",
                detail:
                    "Built a Kindle-highlights extraction app with React Native and Supabase, parsing highlight exports with Cheerio, shipped to both the App Store and Google Play. Implemented the AI features (smart dictionary, highlight insights, AI summaries) on the Claude and Gemini APIs, and built the in-app subscription system with react-native-iap. Resolved recurring App Store and Play Store review rejections, working through store policy and compliance changes to keep releases going out, and still ship features, fixes and interface upgrades across regular releases.",
            },
        ],
    },
    {
        company: "Crewswap",
        year: "Apr 2025 - Feb 2026",
        type: "Contract",
        location: "US",
        role: "Backend Developer",
        impact: "Built the entire backend, including the matching algorithm the product runs on. Live at crewswap.app.",
        products: [
            {
                name: "Crew Schedule Swap Platform",
                detail:
                    "Designed and built the entire backend for a pilot and flight crew schedule swap platform using Node.js, TypeScript, Express, and MySQL on AWS. Built the matching algorithm that pairs crew whose schedules can be swapped, and the realtime chat system on Socket.io. Automated schedule extraction from flica.net with Puppeteer, removing manual entry for crew schedules. Worked with the frontend developers on API design and handled some of the frontend integration myself.",
            },
        ],
    },
    {
        company: "WelcomeBack",
        year: "Feb 2025 - Jul 2025",
        type: "Full-time",
        location: "Chile",
        role: "Software Engineer",
        impact: "Founding engineer, working directly with the CTO to take a digital loyalty platform from nothing to a working MVP.",
        products: [
            {
                name: "Digital Loyalty Platform",
                detail:
                    "Built the backend as TypeScript services on AWS Lambda with MySQL, and the frontend in Next.js with server-side rendering, including localization across the app. Picked up a stalled PassKit integration and shipped it, covering pass design, creation, and notifications.",
            },
        ],
    },
    {
        company: "Dunison",
        year: "Nov 2023 - Jan 2025",
        type: "Contract",
        location: "Nigeria",
        role: "Frontend & Mobile Developer",
        impact: "Sole frontend and mobile developer, delivering three production apps to iOS, Android and web.",
        products: [
            {
                name: "Point of Sale App",
                detail: "In-store point of sale app built with React Native, covering cart and checkout.",
            },
            {
                name: "Rider Dispatch App",
                detail: "React Native dispatch app used by delivery riders to accept, track and complete orders.",
            },
            {
                name: "Services Marketplace",
                detail: "Marketplace built with React and React Native, where customers browse providers and book jobs.",
            },
        ],
    },
    {
        company: "Fiverr & Direct Clients",
        year: "May 2023 - Jun 2024",
        type: "Freelance",
        role: "Fullstack Developer",
        impact: "Delivered for clients across the US and beyond, on web, mobile and realtime.",
        products: [
            {
                name: "mytherapist.io",
                detail: "Built the web and mobile frontend for a US-based therapy startup, including realtime chat over WebSockets and Stripe subscription billing and checkout.",
            },
            {
                name: "Airtable-style Data Collection Tool",
                detail: "Spreadsheet-style data collection tool for a US startup, built on the MERN stack.",
            },
            {
                name: "Markdown Conversion App",
                detail: "Built with Next.js and Express.",
            },
            {
                name: "Real Estate Listing Platform",
                detail: "React web app using Sanity CMS for property content and Firebase for auth and storage.",
            },
            {
                name: "Dog Walking App",
                detail: "React Native app built for a small dog-walking startup.",
            },
        ],
    },
    {
        company: "Carrotsuite ERP",
        year: "Nov 2022 - Apr 2023",
        type: "Full-time",
        location: "Nigeria",
        role: "Frontend & Mobile Developer",
        impact: "Rebuilt a core product from scratch and fixed what the previous build got wrong.",
        products: [
            {
                name: "Visitor Management Web App",
                detail: "Rebuilt from scratch in React.js, replacing an aging version with a faster, more responsive interface, and implemented role-based access control scoping what each staff level could see and do.",
            },
            {
                name: "Visitor Management Mobile App",
                detail: "Fixed and improved the existing React Native check-in app.",
            },
            {
                name: "Business Requisitions App",
                detail: "Built a new business requisitions mobile app from scratch with React Native and Redux, managing requisition flows and approval state.",
            },
        ],
    },
    {
        company: "CBT Expert Solutions",
        year: "Apr 2022 - Oct 2022",
        type: "Full-time",
        location: "Nigeria",
        role: "Frontend Developer",
        impact: "Built and maintained testing apps where a failed session means a failed exam.",
        products: [
            {
                name: "CBT Platform",
                detail:
                    "Built and maintained responsive computer-based testing web apps in React.js with secure authentication and session management.",
            },
        ],
    },
    {
        company: "Lannistar",
        year: "Dec 2021 - Mar 2022",
        type: "Full-time",
        location: "Nigeria",
        role: "Frontend Developer",
        impact: "First professional role.",
        products: [
            {
                name: "E-commerce Websites",
                detail:
                    "Implemented UI designs and built and maintained ecommerce sites with HTML, CSS, JavaScript, and WordPress.",
            },
        ],
    },
]

export type StackGroup = {
    label: string
    icon: "code" | "layout" | "server" | "smartphone" | "database" | "cloud" | "layers" | "wrench"
    blurb: string
    items: string[]
}

export const stackGroups: StackGroup[] = [
    {
        label: "Frontend",
        icon: "layout",
        blurb: "Interfaces that hold up in production",
        items: ["React.js", "Next.js", "TailwindCSS", "Material UI", "Chakra UI", "Redux", "Zustand"],
    },
    {
        label: "Backend",
        icon: "server",
        blurb: "APIs and services under load",
        items: ["Node.js", "Express.js", "NestJS", "Fastify", "FastAPI", "AWS Lambda", "Socket.io", "Celery", "BullMQ"],
    },
    {
        label: "Mobile",
        icon: "smartphone",
        blurb: "Cross-platform apps that ship to both stores",
        items: ["React Native", "Flutter", "Expo"],
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
    tags: string[]
}

/* What I actually do, stated as range rather than a single lane.
   Rendered as stacked layers: the first three are strata, the last
   one spans them, which is the actual argument being made. */
export const capabilities: Capability[] = [
    {
        label: "Frontend",
        icon: "layout",
        blurb: "Production interfaces in React and Next.js, fast, responsive, and built to hold up once real users arrive.",
        proof: "Known for building frontend that's polished, not just functional.",
        tags: ["React", "Next.js", "TypeScript", "Tailwind"],
    },
    {
        label: "Backend",
        icon: "server",
        blurb: "APIs, realtime systems, queues and serverless services that carry actual traffic.",
        proof: "Built production backends: APIs, matching logic, realtime, all of it.",
        tags: ["Node", "NestJS", "FastAPI", "Postgres", "Socket.io"],
    },
    {
        label: "Mobile",
        icon: "smartphone",
        blurb: "Cross-platform apps in React Native, shipped through review and maintained after launch.",
        proof: "Several apps live on the App Store and Play Store, 1,000+ downloads.",
        tags: ["React Native", "Expo", "App Store", "Play Store"],
    },
    {
        label: "The whole product",
        icon: "rocket",
        blurb: "When there is no team, I am the team: architecture, build, deploy, billing, and the parts nobody scoped.",
        proof: "Several products taken from architecture through to launch.",
        tags: ["Architecture", "AWS", "Billing", "Launch"],
    },
]

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
        title: "Runner-up out of 1,000+ participants",
        organization: "Nomba × DevCareer Hackathon",
        year: "2026",
        description:
            "Led a two-person team and built Glasspot, a transparent money pooling platform for Nigerians, where the payout and refund rules lock before anyone contributes.\n\nFinished as runner-up out of over 1,000 participants at the Nomba x DevCareer Hackathon 2026.",
        link: "https://glasspot.vercel.app",
        proofs: [
            { src: "/recognition/winners.png", alt: "Hackathon winners announcement, Team Glasspot placed 2nd" },
            { src: "/recognition/certificate.png", alt: "Certificate of participation, Nomba x DevCareer Hackathon 2026" },
        ],
    }
];