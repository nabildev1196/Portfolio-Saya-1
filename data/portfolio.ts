import type { LucideIcon } from "lucide-react";
import {
  Brain,
  Braces,
  Code2,
  GitFork,
  Layers3,
  Mail,
  MessageCircle,
  Rocket,
  ServerCog,
  Sparkles,
  TerminalSquare,
  Users,
  Wrench,
} from "lucide-react";

// Edit your core personal details here.
export const profile = {
  name: "Nabil Khairi",
  role: "Software Engineer",
  email: "nabil@example.com",
  photo: "nabil-khairi.png",
  headline: "Hi, I’m Nabil Khairi.",
  subheadline:
    "I build practical digital solutions with a strong foundation in operations, finance, and real-world business workflows.",
  intro:
    "I’m passionate about software engineering and focused on creating clean, useful, and scalable products that solve real problems.",
  about:
    "I’m Nabil Khairi, a software engineering enthusiast with a strong professional background in administration, operations, client service, financial planning, healthcare management, and executive support. My work experience has helped me develop strong problem-solving skills, communication skills, attention to detail, and the ability to understand real business needs. I’m passionate about software engineering because I enjoy building practical digital solutions that improve workflow, solve problems, and create value for users.",
  links: {
    github: "https://github.com/nabildev1196",
    linkedin: "",
    email: "mailto:nabil@example.com",
  },
};

export const navigation = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Software Fit", href: "#software-fit" },
  { label: "Contact", href: "#contact" },
];

export const heroHighlights = [
  ["Software Focus", "Clean, useful, and scalable digital products"],
  ["Business Context", "Operations, finance, healthcare, and client workflows"],
  ["Working Style", "Organized, detail-oriented, practical, and user-aware"],
] as const;

export const aboutHighlights = [
  "Business-aware problem solving",
  "Real operations experience",
  "Reliable communication and execution",
];

export type SkillGroup = {
  title: string;
  icon: LucideIcon;
  accent: string;
  skills: string[];
};

// Edit these arrays to update the skills shown on the website.
export const skillGroups: SkillGroup[] = [
  {
    title: "Technical Skills",
    icon: Code2,
    accent: "text-teal-200 bg-teal-400/10 ring-teal-300/20",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Node.js",
      "Git",
      "GitHub",
      "Cursor",
    ],
  },
  {
    title: "Professional Skills",
    icon: Users,
    accent: "text-amber-200 bg-amber-400/10 ring-amber-300/20",
    skills: [
      "Operations Management",
      "Administrative Coordination",
      "Client Communication",
      "Customer Service",
      "Lead Management",
      "Sales Closing",
      "Upselling",
      "Stakeholder Coordination",
      "Calendar Management",
      "Vendor & Supplier Coordination",
      "Renovation Coordination",
      "Basic Financial Monitoring",
      "Basic Digital Marketing Exposure",
      "Meta Ads",
      "Google Ads",
      "TikTok Ads",
      "SEO Fundamentals",
      "Confidentiality",
      "Problem Solving",
      "Leadership",
      "Attention to Detail",
    ],
  },
];

export type Project = {
  title: string;
  description: string;
  stack: string[];
  liveUrl?: string;
  githubUrl?: string;
  status: "Live" | "Concept";
  icon: LucideIcon;
};

// Replace these sample projects with your real portfolio work later.
export const projects: Project[] = [
  {
    title: "Scholarship Management Dashboard",
    description:
      "A concept dashboard for organizing scholarship programme documents, communication, schedules, and stakeholder workflows.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    status: "Concept",
    icon: Layers3,
  },
  {
    title: "Clinic Appointment System",
    description:
      "A practical clinic workflow concept for appointment tracking, patient inquiries, treatment follow-ups, and staff coordination.",
    stack: ["React", "Node.js", "REST API"],
    status: "Concept",
    icon: ServerCog,
  },
  {
    title: "Personal Finance Goal Planner",
    description:
      "A planning tool concept for tracking financial goals, retirement planning milestones, risk profiles, and client conversations.",
    stack: ["TypeScript", "Next.js", "Tailwind CSS"],
    status: "Concept",
    icon: Brain,
  },
  {
    title: "Executive Schedule Manager",
    description:
      "A focused scheduling concept for managing calendars, appointments, reminders, and high-priority executive arrangements.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    status: "Concept",
    icon: Rocket,
  },
];

export const professionalExperiences = [
  {
    title: "Administrative Officer",
    company: "Jameel Education Foundation UK-USIM Scholarship Programme",
    duration: "2022 – Present",
    type: "Full-time",
    points: [
      "Manage administrative operations related to scholarship programme activities.",
      "Coordinate documentation, communication, scheduling, and stakeholder support.",
      "Support smooth programme execution through organized workflow and attention to detail.",
      "Handle administrative tasks with professionalism, confidentiality, and consistency.",
    ],
  },
  {
    title: "Unit Trust Consultant & Private Retirement Scheme Consultant",
    company: "Public Mutual Berhad",
    duration: "Jan 2026 – Present",
    type: "Freelance",
    points: [
      "Help clients plan for long-term financial goals through investment and retirement planning.",
      "Provide client-focused support by understanding goals, needs, and risk profiles.",
      "Balance this part-time role by dedicating focused, high-quality time to each client.",
      "Develop communication, trust-building, and advisory skills through client engagement.",
    ],
  },
  {
    title: "Manager",
    company: "Dental Klub Sdn Bhd",
    duration: "Oct 2021 – Oct 2024",
    location: "Kajang, Selangor",
    type: "Full-time, On-site",
    points: [
      "Managed daily clinic operations with a focus on patient experience and operational efficiency.",
      "Handled customer service, patient inquiries, leads, closing, and treatment-related upselling.",
      "Coordinated workflows between patients, dentists, staff, suppliers, and external vendors.",
      "Supported renovation coordination, supplier comparison, equipment sourcing, and clinic setup needs.",
      "Monitored clinic expenses and gained basic exposure to Meta Ads, Google Ads, TikTok Ads, and SEO.",
    ],
  },
  {
    title: "Personal Assistant to Dato’ Sri / Private Office",
    duration: "2021 – May 2026",
    type: "Executive Support",
    points: [
      "Provided executive and private office support with a strong focus on calendar management, corporate correspondence, confidential arrangements, stakeholder coordination, and high-level business meeting preparation.",
    ],
  },
];

export const engineeringConnection = {
  title: "How this connects to software engineering",
  text:
    "My professional background gives me a practical advantage in software engineering. I understand how real businesses operate, how users think, how customers make decisions, and how internal workflows can be improved through better systems. As I grow in software engineering, I aim to build clean, useful, and scalable digital products that solve real problems for real users.",
};

export const values = [
  {
    title: "Clean and maintainable code",
    text: "I value readable implementation that can be improved and extended without confusion.",
    icon: Braces,
  },
  {
    title: "Workflow-first product thinking",
    text: "I look at software through the lens of daily operations, real users, and practical outcomes.",
    icon: Brain,
  },
  {
    title: "Strong attention to detail",
    text: "My operations background trained me to notice gaps, edge cases, and execution details.",
    icon: TerminalSquare,
  },
  {
    title: "Reliable communication",
    text: "I aim to keep expectations clear, communicate progress, and follow through consistently.",
    icon: MessageCircle,
  },
];

export const socialLinks = [
  { label: "GitHub", href: profile.links.github, icon: GitFork },
  { label: "LinkedIn", href: profile.links.linkedin, icon: Users },
  { label: "Email", href: profile.links.email, icon: Mail },
];
