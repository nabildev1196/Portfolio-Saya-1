import { cn } from "@/lib/cn";

type CardProps = React.HTMLAttributes<HTMLElement> & {
  as?: "article" | "div" | "section";
  hover?: boolean;
};

export function Card({
  as = "div",
  hover = true,
  className,
  children,
  ...props
}: CardProps) {
  const Component = as;

  return (
    <Component
      className={cn("glass-panel rounded-lg", hover && "card-hover", className)}
      {...props}
    >
      {children}
    </Component>
  );
}
