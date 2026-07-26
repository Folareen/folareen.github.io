export const identity = {
    name: "Wahab Afolarin Saka",
    role: "Fullstack Developer (Web & Mobile)",
    tagline: "Some work hard. Some work smart. I do both.",
    availability: "Available for work. Remote and global.",
    bio: "Close to 5 years building software across companies, startups, and direct clients — web, mobile, and backend. I take an idea from zero to a fully launched product, entirely solo, and I ship fast without cutting corners on the craft.",
    bioSecondary: "I have shipped at every layer: solid frontend interfaces, cross-platform mobile apps on the App Store and Play Store, real-time platforms, serverless APIs on AWS, and production backend systems handling real users. Deliberate about the craft, always learning, and never too comfortable to go deeper.",
    status: "Actively seeking a new role or contract opportunity.",
}

export type Project = {
    name: string
    description: string
    url: string
    stack: string[]
    image?: string
}

export const projects: Project[] = [
    {
        name: "Glasspot",
        description:
            "Rule-governed money contribution platform where payout and refund rules lock before anyone contributes, so funds move automatically or via a trusted trigger instead of sitting in a personal account. Powered by Nomba, built for the DevCareer x Nomba Hackathon 2026.",
        url: "https://glasspot.vercel.app",
        stack: ["Next.js", "Fastify", "TypeScript", "Drizzle ORM", "PostgreSQL", "BullMQ", "Nomba API"],
        image: "/projects/glasspot-1.png",
    },
    {
        name: "Clance",
        description:
            "Simplified project management platform for freelancers, clients, and lean teams — unifying tasks, real-time chat, files, and approvals into one project workspace.",
        url: "https://clance-app.vercel.app",
        stack: ["Next.js", "NestJS", "TypeScript", "Socket.io", "Turborepo", "PostgreSQL"],
        image: "/projects/clance-1.png",
    },
    {
        name: "Eventza",
        description:
            "Event ticketing platform for creating events, selling tickets, and checking in attendees via QR codes. Features Stripe Connect payments and a scanner web app.",
        url: "https://eventza.vercel.app",
        stack: ["Next.js", "TypeScript", "TailwindCSS", "Express", "PostgreSQL", "Stripe", "AWS S3", "Turborepo"],
        image: "/projects/eventza-1.png",
    },
    {
        name: "KeepNet",
        description:
            "Note-taking and content sharing platform — organize and access notes across devices, share with anyone.",
        url: "https://keepnet.vercel.app",
        stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tiptap", "AWS S3"],
        image: "/projects/keepnet-1.png",
    },
    {
        name: "Resumake",
        description: "Resume builder web app to create, customize, and export a resume in minutes.",
        url: "https://resumake.vercel.app",
        stack: ["React", "TypeScript", "Firebase", "Redux", "SASS"],
        image: "/projects/resumake-1.png",
    },
    {
        name: "WriteOn",
        description: "Blogging platform where anyone can read and publish blogs.",
        url: "https://writeon.vercel.app",
        stack: ["React", "TypeScript", "TailwindCSS", "Express", "MongoDB", "Cloudinary"],
        image: "/projects/writeon-1.png",
    },
    {
        name: "Ghostgram",
        description:
            "Anonymous messaging app — create a personal link, share it, and receive messages without the sender revealing who they are.",
        url: "https://ghostgram.vercel.app",
        stack: ["Next.js", "TailwindCSS", "MongoDB", "Mongoose"],
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
    stats?: WorkStat[]
    products: WorkProduct[]
}

export const workEntries: WorkEntry[] = [
    {
        company: "Crewswap",
        year: "2025 – 2026",
        type: "Contract",
        location: "US",
        role: "Backend Developer",
        products: [
            {
                name: "Schedule Management & Swap Platform",
                detail:
                    "Designed and built the entire backend from scratch for a pilot scheduling and swap platform — Node.js, TypeScript, Express, MySQL on AWS. Designed the matching algorithm that pairs pilots and flight attendants for schedule swaps, built an end-to-end chat system on Socket.io, and automated schedule data extraction from flica.net with Puppeteer.",
            },
        ],
    },
    {
        company: "WelcomeBack",
        year: "2025",
        type: "Full-time",
        location: "Chile",
        role: "Software Engineer",
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
        company: "2read",
        year: "2023 – present",
        type: "Part-time",
        location: "India",
        role: "Mobile App Developer",
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
        company: "Fiverr & Direct Clients",
        year: "2023 – 2024",
        type: "Freelance",
        role: "Fullstack Developer",
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
    items: string[]
}

export const stackGroups: StackGroup[] = [
    {
        label: "Languages",
        items: ["TypeScript", "JavaScript", "SQL", "HTML", "CSS", "Markdown"],
    },
    {
        label: "Frontend",
        items: ["React.js", "Next.js", "React Native", "Expo", "TailwindCSS", "Material UI", "Chakra UI", "Redux", "Zustand"],
    },
    {
        label: "Backend",
        items: ["Node.js", "Express.js", "NestJS", "AWS Lambda"],
    },
    {
        label: "Databases",
        items: ["MySQL", "PostgreSQL", "MongoDB", "DynamoDB", "Redis"],
    },
    {
        label: "Infrastructure",
        items: ["AWS (Lambda, S3, EC2)", "Docker", "Vercel", "Firebase", "Supabase"],
    },
    {
        label: "CMS",
        items: ["Strapi", "Sanity", "WordPress"],
    },
    {
        label: "Tools",
        items: ["Git", "Prisma", "Sequelize", "Figma"],
    },
]

export const education = {
    degree: "BSc. Computer Science with Economics (in progress)",
    institution: "Obafemi Awolowo University, Ile-Ife",
}

export const currentlyLearning = ["QA Engineering"]

export const links = {
    github: "https://github.com/Folareen",
    linkedin: "https://linkedin.com/in/folareen",
    x: "https://x.com/_folareen_",
    email: "sakawahab03@gmail.com",
    resume: "https://drive.google.com/file/d/1o4OSJoDcjKF7vb7VytLpF1OL-a6cv6HZ/view?usp=drive_link",
}

export const recognitions = [
    {
        title: "🥈 Runner-up",
        organization: "Nomba × DevCareer Hackathon",
        year: "2026",
        description:
            "Led a two-person team while collaborating as a Full-Stack Engineer to build Glasspot, a democratic and transparent money pooling solution for Nigerians.\n Finished as runner-up (2nd place) out of 268 final submissions at the Nomba × DevCareer Hackathon 2026.",
        link: "https://glasspot.vercel.app",
    }
];