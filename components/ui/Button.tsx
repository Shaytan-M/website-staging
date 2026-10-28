import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost" | "onDark";

const variants: Record<Variant, string> = {
  primary:
    "bg-indigo text-white hover:bg-[#0d0275] shadow-sm shadow-indigo/20",
  secondary:
    "border border-indigo/25 text-indigo hover:border-indigo hover:bg-indigo/5",
  ghost: "text-indigo underline-offset-4 hover:underline",
  onDark:
    "bg-white text-indigo-deep hover:bg-soft border border-white/10",
};

type Common = {
  children: React.ReactNode;
  className?: string;
  variant?: Variant;
};

type ButtonAsButton = Common &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = Common & {
  href: string;
  target?: string;
  rel?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
};

export function Button({
  children,
  className,
  variant = "primary",
  ...props
}: ButtonAsButton | ButtonAsLink) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm font-semibold tracking-wide transition-colors duration-200",
    variants[variant],
    className,
  );

  if ("href" in props && props.href) {
    const { href, target, rel, ...rest } = props;
    const external = href.startsWith("http") || href.endsWith(".pdf");
    return (
      <Link
        href={href}
        className={classes}
        target={target ?? (external ? "_blank" : undefined)}
        rel={rel ?? (external ? "noopener noreferrer" : undefined)}
        {...rest}
      >
        {children}
      </Link>
    );
  }

  const buttonProps = props as ButtonAsButton;
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
