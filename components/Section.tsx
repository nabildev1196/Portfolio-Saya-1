import { cn } from "@/lib/cn";

type SectionProps = {
  id: string;
  children: React.ReactNode;
  className?: string;
};

export function Section({ id, children, className }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={cn("scroll-mt-32 py-24 sm:py-28 md:scroll-mt-24", className)}
    >
      {children}
    </section>
  );
}
