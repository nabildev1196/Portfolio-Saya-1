import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "light" | "outline" | "ghost";
type ButtonSize = "sm" | "md";

type ButtonLinkProps = {
  children: React.ReactNode;
  href?: string;
  icon?: LucideIcon;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  ariaLabel?: string;
  disabledReason?: string;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-teal-300 text-stone-950 hover:bg-teal-200",
  light: "bg-stone-100 text-stone-950 hover:bg-teal-200",
  outline:
    "border border-white/12 bg-white/5 text-stone-50 hover:border-amber-200/40 hover:bg-amber-300/10",
  ghost:
    "border border-white/10 bg-black/20 text-stone-200 hover:border-amber-200/30 hover:text-white",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2.5",
  md: "px-5 py-3",
};

export function ButtonLink({
  children,
  href,
  icon: Icon,
  variant = "primary",
  size = "md",
  className,
  ariaLabel,
  disabledReason = "Link coming soon",
}: ButtonLinkProps) {
  const isDisabled = !href || href === "#";
  const classes = cn(
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-md text-sm font-bold transition focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-teal-300/20",
    sizeClasses[size],
    isDisabled
      ? "cursor-not-allowed border border-white/10 bg-white/[0.03] text-stone-500"
      : variantClasses[variant],
    className,
  );

  if (isDisabled) {
    return (
      <span aria-disabled="true" className={classes} title={disabledReason}>
        {children}
        {Icon ? <Icon className="size-4" aria-hidden="true" /> : null}
      </span>
    );
  }

  const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      aria-label={ariaLabel}
      className={classes}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
    >
      {children}
      {Icon ? <Icon className="size-4" aria-hidden="true" /> : null}
    </a>
  );
}
