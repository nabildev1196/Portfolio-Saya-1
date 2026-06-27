import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/Container";
import { profile } from "@/data/portfolio";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-stone-950/70 backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between gap-4">
        <a href="#home" className="group flex items-center gap-3" aria-label="Go to home">
          <span className="grid size-9 place-items-center rounded-md border border-teal-300/20 bg-teal-300/10 font-mono text-sm font-bold text-teal-100 transition group-hover:border-teal-200/50">
            NK
          </span>
          <span className="hidden text-sm font-semibold text-stone-100 sm:block">
            {profile.name}
          </span>
        </a>

        <nav className="hidden items-center gap-1 rounded-md border border-white/10 bg-white/[0.03] p-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-stone-300 transition hover:bg-white/8 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-md bg-stone-100 px-4 py-2 text-sm font-semibold text-stone-950 transition hover:bg-teal-200"
        >
          Hire Me
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </a>
      </Container>
    </header>
  );
}
