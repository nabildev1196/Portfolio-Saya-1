import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/Container";
import { navigation, profile } from "@/data/portfolio";
import { cn } from "@/lib/cn";

const navLinkClassName =
  "focus-ring rounded-md px-3 py-2 text-sm font-medium text-stone-300 transition hover:bg-white/8 hover:text-white";

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-stone-950/70 backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between gap-4">
        <a href="#home" className="focus-ring group flex items-center gap-3 rounded-md" aria-label="Go to home">
          <span className="grid size-9 place-items-center rounded-md border border-teal-300/20 bg-teal-300/10 font-mono text-sm font-bold text-teal-100 transition group-hover:border-teal-200/50">
            NK
          </span>
          <span className="hidden text-sm font-semibold text-stone-100 sm:block">
            {profile.name}
          </span>
        </a>

        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-1 rounded-md border border-white/10 bg-white/[0.03] p-1 md:flex"
        >
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={navLinkClassName}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="focus-ring inline-flex min-h-11 items-center gap-2 rounded-md bg-stone-100 px-4 py-2 text-sm font-semibold text-stone-950 transition hover:bg-teal-200"
        >
          Hire Me
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </a>
      </Container>

      <Container className="pb-3 md:hidden">
        <nav
          aria-label="Mobile navigation"
          className="-mx-1 flex gap-1 overflow-x-auto px-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(navLinkClassName, "shrink-0 bg-white/[0.03]")}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </Container>
    </header>
  );
}
