import type { ReactNode } from "react";

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`rounded-card border-line-2 bg-surface border p-6 sm:p-8 ${className}`}>{children}</div>;
}
