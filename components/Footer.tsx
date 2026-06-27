import { Container } from "@/components/Container";
import { profile } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <Container className="flex flex-col gap-3 text-sm text-stone-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {profile.name}. Built with Next.js and Tailwind CSS.</p>
        <a href="#home" className="focus-ring rounded-md font-semibold text-stone-300 transition hover:text-teal-200">
          Back to top
        </a>
      </Container>
    </footer>
  );
}
