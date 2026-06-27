import type { LucideIcon } from "lucide-react";
import {
  Brain,
  Braces,
  Code2,
  Database,
  GitFork,
  Globe2,
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
  headline: "Hi, I’m Nabil Khairi",
  subheadline:
    "A passionate software engineer focused on building clean, useful, and scalable digital products.",
  intro:
    "I care about the craft behind reliable software: clear architecture, thoughtful interfaces, and practical solutions that help people get things done.",
  about:
    "I’m Nabil Khairi, a software engineer who enjoys solving problems, learning new technologies, and turning ideas into practical software. I’m passionate about writing clean code, understanding how systems work, and building products that create real value.",
  links: {
    github: "https://github.com/nabildev1196",
    linkedin: "",
    email: "mailto:nabil@example.com",
  },
};

export const navigation = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

export const heroHighlights = [
  ["Focus", "Clean code, scalable systems, useful products"],
  ["Mindset", "Problem solver with strong product curiosity"],
  ["Current Goal", "Growing into a trusted software engineer"],
] as const;

export const aboutHighlights = [
  "Practical problem solving",
  "Clean, readable implementation",
  "Curiosity about systems and products",
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
    title: "Frontend",
    icon: Code2,
    accent: "text-teal-200 bg-teal-400/10 ring-teal-300/20",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Backend",
    icon: ServerCog,
    accent: "text-amber-200 bg-amber-400/10 ring-amber-300/20",
    skills: ["Node.js", "Express", "REST API"],
  },
  {
    title: "Database",
    icon: Database,
    accent: "text-cyan-200 bg-cyan-400/10 ring-cyan-300/20",
    skills: ["MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    title: "Tools",
    icon: Wrench,
    accent: "text-rose-200 bg-rose-400/10 ring-rose-300/20",
    skills: ["Git", "GitHub", "VS Code", "Cursor"],
  },
  {
    title: "Soft Skills",
    icon: Users,
    accent: "text-lime-200 bg-lime-400/10 ring-lime-300/20",
    skills: ["Problem Solving", "Communication", "Fast Learner", "Teamwork"],
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
    title: "Personal Portfolio Website",
    description:
      "A polished portfolio built to present skills, projects, and professional identity with strong visual hierarchy.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://nabildev1196.github.io/Portfolio-Saya-1/",
    githubUrl: "https://github.com/nabildev1196/Portfolio-Saya-1",
    status: "Live",
    icon: Globe2,
  },
  {
    title: "Task Management App",
    description:
      "A productivity interface for organizing tasks, tracking progress, and making daily work easier to manage.",
    stack: ["React", "Node.js", "REST API"],
    status: "Concept",
    icon: Layers3,
  },
  {
    title: "E-Commerce Landing Page",
    description:
      "A conversion-focused product landing page concept with responsive layout, clean content, and modern styling.",
    stack: ["TypeScript", "Next.js", "Tailwind CSS"],
    status: "Concept",
    icon: Rocket,
  },
];

export const journey = [
  {
    title: "Started learning programming",
    text: "Built the foundation by learning core programming concepts and how to think through problems step by step.",
  },
  {
    title: "Built personal projects",
    text: "Turned ideas into working interfaces and learned by shipping small, practical products.",
  },
  {
    title: "Improved frontend and backend skills",
    text: "Expanded into full-stack thinking with modern frontend tools, APIs, databases, and maintainable structure.",
  },
  {
    title: "Currently growing as a software engineer",
    text: "Focused on clean code, product judgment, and becoming the kind of engineer teams can trust with real problems.",
  },
];

export const values = [
  {
    title: "Clean and maintainable code",
    text: "I aim for code that is readable, consistent, and easy for future teammates to build on.",
    icon: Braces,
  },
  {
    title: "User-focused product thinking",
    text: "I care about building software that solves real needs, not just checking technical boxes.",
    icon: Brain,
  },
  {
    title: "Continuous learning",
    text: "I stay curious, improve through practice, and keep sharpening my engineering fundamentals.",
    icon: Sparkles,
  },
  {
    title: "Strong attention to detail",
    text: "I look closely at edge cases, interface quality, and the small choices that make products feel solid.",
    icon: TerminalSquare,
  },
  {
    title: "Reliable communication",
    text: "I value clarity, follow-through, and keeping people aligned while work is moving.",
    icon: MessageCircle,
  },
];

export const socialLinks = [
  { label: "GitHub", href: profile.links.github, icon: GitFork },
  { label: "LinkedIn", href: profile.links.linkedin, icon: Users },
  { label: "Email", href: profile.links.email, icon: Mail },
];
