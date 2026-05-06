export const identity = {
    name: "Wahab Afolarin Saka",
    role: "Fullstack Developer (Web & Mobile)",
    tagline: "Some work hard. Some work smart. I do both.",
    availability: "Available for work. Remote and global.",
    bio: "Close to 5 years building software across companies, startups, and direct clients. Web, mobile, and backend. I have shipped at every layer: solid frontend interfaces, cross-platform mobile apps on the App Store and Play Store, real-time platforms, serverless APIs on AWS, and robust production backend systems. Deliberate about the craft, always learning, and never too comfortable to go deeper. I can take an idea from zero to a fully launched product, entirely solo.",
    currentlyBuilding: "Working on a side SaaS project — details coming soon.",
}

export type Project = {
    name: string
    description: string
    url: string
    stack: string[]
}

export const projects: Project[] = [
    {
        name: "Eventza",
        description:
            "Event ticketing platform for creating events, selling tickets, and checking in attendees via QR codes. Features Stripe Connect payments and a scanner web app.",
        url: "https://eventza.vercel.app",
        stack: ["Next.js", "TypeScript", "TailwindCSS", "Express", "PostgreSQL", "Stripe", "AWS S3", "Turborepo"],
    },
    {
        name: "KeepNet",
        description:
            "Note-taking and content sharing platform — organize and access notes across devices, share with anyone.",
        url: "https://keepnet.vercel.app",
        stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tiptap", "AWS S3"],
    },
    {
        name: "Resumake",
        description: "Resume builder web app to create, customize, and export a resume in minutes.",
        url: "https://resumake.vercel.app",
        stack: ["React", "TypeScript", "Firebase", "Redux", "SASS"],
    },
    {
        name: "WriteOn",
        description: "Blogging platform where anyone can read and publish blogs.",
        url: "https://writeon.vercel.app",
        stack: ["React", "TypeScript", "TailwindCSS", "Express", "MongoDB", "Cloudinary"],
    },
    {
        name: "Ghostgram",
        description:
            "Anonymous messaging app — create a personal link, share it, and receive messages without the sender revealing who they are.",
        url: "https://ghostgram.vercel.app",
        stack: ["Next.js", "TailwindCSS", "MongoDB", "Mongoose"],
    },
]

export type WorkProduct = {
    name: string
    detail?: string
}

export type WorkEntry = {
    company: string
    year: string
    role: string
    note?: string
    products: WorkProduct[]
}

export const workEntries: WorkEntry[] = [
    {
        company: "Crewswap",
        year: "2025 – 2026",
        role: "Backend Developer",
        products: [
            {
                name: "Schedule Management & Swap Platform",
                detail:
                    "Built the entire backend from scratch using Node.js, TypeScript, Express, and MySQL on AWS. Implemented automated schedule data extraction from flica.net with Puppeteer.",
            },
        ],
    },
    {
        company: "WelcomeBack",
        year: "2025",
        role: "Software Engineer",
        products: [
            {
                name: "Digital Loyalty Platform",
                detail:
                    "Contributed to the backend with TypeScript and AWS Lambda, then owned the frontend integration in Next.js, connecting loyalty features to the UI and improving page load performance with SSR. Resolved tricky PassKit integration issues covering pass design, creation, and notifications.",
            },
        ],
    },
    {
        company: "Dunison",
        year: "2024",
        role: "Frontend & Mobile Developer",
        products: [
            {
                name: "POS App",
                detail: "Built with React Native and TypeScript. Wired up to backend APIs and managed cart and order state.",
            },
            {
                name: "Delivery Rider App",
                detail: "Built with React Native and TypeScript. Integrated real-time delivery and dispatch APIs with local state syncing.",
            },
            {
                name: "Services Marketplace",
                detail: "Built web and mobile versions with React.js, TypeScript, Tailwind CSS, and React Native. Owned all API wiring and shared state across both platforms.",
            },
        ],
    },
    {
        company: "mytherapist.io",
        year: "2023",
        role: "Fullstack Developer",
        products: [
            {
                name: "Therapy Platform",
                detail: "Built the full web and mobile frontend with real-time chat via WebSockets. Integrated with an AI backend that communicates with an LLM for therapy responses.",
            },
        ],
    },
    {
        company: "2read",
        year: "2023 – present",
        role: "Mobile Developer",
        products: [
            {
                name: "AI Kindle Reading App",
                detail:
                    "Shipped to both App Store and Google Play using React Native and Supabase. Integrated AI models via API to power features like smart dictionary, AI summaries, and highlight insights. Handled HTML parsing with Cheerio.",
            },
        ],
    },
    {
        company: "Airpri",
        year: "2023",
        role: "Fullstack Developer",
        products: [
            {
                name: "Data Collection Tool",
                detail: "Built a spreadsheet-like data collection tool similar to Airtable using the MERN stack.",
            },
        ],
    },
    {
        company: "Kemsanglobal",
        year: "2023",
        role: "Fullstack Developer",
        products: [
            {
                name: "Real Estate Portal",
                detail: "Built the web app with React, Redux, and Tailwind CSS. Used Sanity CMS for property listing content management and Firebase for authentication and database.",
            },
        ],
    },
    {
        company: "Carrotsuite ERP",
        year: "2022",
        role: "Frontend & Mobile Developer",
        products: [
            {
                name: "Visitor Management Web App",
                detail: "Rebuilt from scratch in React.js with improved UI responsiveness, role-based access control, and full API integration.",
            },
            {
                name: "Business Requisitions App",
                detail: "Built with React Native and Redux. Connected to backend APIs with Redux managing all requisition flows and approval state.",
            },
        ],
    },
    {
        company: "CBT Expert Solutions",
        year: "2022",
        role: "Frontend Developer",
        products: [
            {
                name: "CBT Platform",
                detail:
                    "Built and maintained responsive testing apps with secure authentication, session management, and backend API integration.",
            },
        ],
    },
    {
        company: "Lannistar",
        year: "2021",
        role: "Frontend Developer",
        products: [
            {
                name: "E-commerce Websites",
                detail:
                    "Implemented UI designs and maintained sites using HTML, CSS, JavaScript, and WordPress.",
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

export const currentlyLearning = ["AI Engineering"]

export const links = {
    github: "https://github.com/Folareen",
    linkedin: "https://linkedin.com/in/folareen",
    x: "https://x.com/_folareen_",
    email: "sakawahab03@gmail.com",
    resume: "https://drive.google.com/file/d/1o4OSJoDcjKF7vb7VytLpF1OL-a6cv6HZ/view?usp=drive_link",
}
