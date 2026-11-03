import type { ReactNode } from "react";
import { isExternal } from "@/content/site";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  size?: "md" | "sm";
  className?: string;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-btn font-display font-semibold tracking-tight transition-colors duration-200 text-center";

const variants = {
  primary: "bg-accent text-bg hover:bg-lime",
  secondary: "border border-line-3 text-text hover:border-text-3 hover:bg-surface",
};

const sizes = {
  md: "min-h-14 px-7 text-base",
  sm: "min-h-11 px-5 text-sm",
};

export function Button({ href, children, variant = "primary", size = "md", className = "" }: Props) {
  const external = isExternal(href);
  return (
    <a
      href={href}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
      {variant === "primary" && (
        <svg
          aria-hidden="true"
          viewBox="0 0 20 20"
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M4 10h12M11 5l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </a>
  );
}
