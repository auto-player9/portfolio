export const profile = {
  name: "Saleh Haydar",
  firstName: "Saleh",
  lastName: "Haydar",
  role: "Full-stack developer",
  location: "Deir Ammar, Lebanon",
  email: "salehhasanhaydar@gmail.com",
  phone: "+961 79 496 160",
  phoneHref: "tel:+96179496160",
  intro:
    "I build fast, accessible web apps with Next.js, React and Node.js. My background in web penetration testing and HackerOne research means security is part of how I write code, not a pass at the end.",
  cv: "/saleh-haydar-cv.pdf",
  socials: [
    { label: "GitHub", href: "https://github.com/Salehhaydar" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/saleh-hydar-6bb05a2b1/en" },
    { label: "X", href: "https://x.com/Salehhaydaro" },
  ],
};

export const experience = [
  {
    company: "Bytex",
    href: "https://bytex-lb.com",
    role: "Frontend developer",
    place: "Lebanon",
    duration: "7 months",
    points: [
      "Built responsive, accessible, high-performance web apps with React and Next.js across multiple client projects.",
      "Developed reusable React components and Next.js pages, with clear patterns for state management and routing.",
      "Improved client-side performance through code splitting, lazy loading and asset optimization.",
      "Integrated REST APIs with robust form validation and error handling.",
      "Worked with designers and backend engineers in Agile sprints, taking part in code reviews and CI/CD.",
    ],
  },
];

export type Project = {
  name: string;
  kind: string;
  summary: string;
  href: string;
  duration?: string;
  /** Optional screenshot in /public, e.g. "/projects/devflow.png" (1600x1000 works well). */
  image?: string;
  stack: string[];
  details: { title: string; text: string }[];
};

export const projects: Project[] = [
  {
    name: "DevFlow",
    kind: "Community Q&A app",
    summary:
      "A developer community where people ask questions, post answers and follow tags, with server-side mutations and protected routes.",
    href: "https://dev-flow-4o5y.vercel.app",
    duration: "2 months",
    stack: ["Next.js", "Server Actions", "MongoDB", "Clerk", "Tailwind CSS", "shadcn/ui"],
    details: [
      { title: "Server-side logic", text: "Next.js Server Actions handle data mutations and form submissions." },
      { title: "Database", text: "A MongoDB schema designed to scale across users, questions, answers, tags and interactions." },
      { title: "Auth and security", text: "Clerk for user management, with protected routes for signed-in features." },
      { title: "Interface", text: "Responsive, dark-mode-ready UI built with Tailwind CSS and shadcn/ui components." },
    ],
  },
  {
    name: "Litco Marble",
    kind: "Company website",
    summary:
      "A luxury marble supplier's site with a structured gallery for each stone and contact details for several regions.",
    href: "https://litco-website.vercel.app",
    duration: "3 months",
    stack: ["Next.js", "Tailwind CSS", "Dynamic routing", "SEO"],
    details: [
      { title: "Performance and SEO", text: "Built on Next.js for fast loading and better search visibility." },
      { title: "Dynamic routing", text: "Dedicated gallery pages for each marble type, including Statuario, Calacatta and Bianco." },
      { title: "Design", text: "A clean, luxury-focused interface that holds up on every screen size." },
      { title: "Regional content", text: "Multi-regional contact information and localized project highlights." },
    ],
  },
  {
    name: "Azalea",
    kind: "E-commerce store",
    summary:
      "A type-safe storefront with content managed in Sanity and high-resolution product photography that still loads fast.",
    href: "https://azalea-website-lake.vercel.app",
    duration: "2 months",
    stack: ["Next.js", "TypeScript", "Sanity CMS", "next/image"],
    details: [
      { title: "Frontend", text: "Next.js and TypeScript for a type-safe, scalable interface." },
      { title: "Content", text: "Sanity as a headless CMS for flexible content models and real-time data fetching." },
      { title: "Images", text: "Optimized delivery with next/image keeps product pages quick despite large photos." },
      { title: "Design", text: "Custom luxury branding with smooth transitions and simple navigation." },
    ],
  },
  {
    name: "MO Media",
    kind: "Agency website",
    summary:
      "A minimalist hub for a creative and software agency, organized around its services and built to bring in B2B inquiries.",
    href: "https://momedialb.com",
    stack: ["Next.js", "React", "Performance", "Lead generation"],
    details: [
      { title: "Design", text: "Minimal, high-impact layout focused on visual storytelling and a clear service hierarchy." },
      { title: "Performance", text: "Modern frontend practices for quick loads and smooth transitions on every device." },
      { title: "Structure", text: "Scales across service categories, from software development to creative media." },
      { title: "Lead generation", text: "Streamlined contact flows for business inquiries." },
    ],
  },
];

export const skills = [
  { group: "Frontend", items: ["Next.js", "React", "TypeScript", "JavaScript", "Tailwind CSS", "HTML", "CSS"] },
  { group: "Backend and data", items: ["Node.js", "Express", "MongoDB", "Mongoose", "Sanity CMS"] },
  { group: "Security", items: ["OWASP Top 10", "Web penetration testing", "HackerOne research"] },
  { group: "Other languages", items: ["C++"] },
];
