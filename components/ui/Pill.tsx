import { cn } from "@/lib/cn";

type PillProps = {
  children: React.ReactNode;
  className?: string;
};

export function Pill({ children, className }: PillProps) {
  return (
    <span
      className={cn(
        "rounded-md border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-stone-300",
        className,
      )}
    >
      {children}
    </span>
  );
}
