import type { ReactNode } from "react";
import { SectionLabel } from "./SectionLabel";

type Props = {
  id: string;
  label?: string;
  title?: string;
  alt?: boolean;
  children: ReactNode;
  className?: string;
};

/** Page section: anchor id, alternating background, optional label + h2. */
export function Section({ id, label, title, alt = false, children, className = "" }: Props) {
  return (
    <section
      id={id}
      aria-labelledby={title ? `${id}-title` : undefined}
      className={`border-line border-t py-20 sm:py-28 ${alt ? "bg-bg-alt" : "bg-bg"} ${className}`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {(label || title) && (
          <header className="mb-12 max-w-3xl space-y-4">
            {label && <SectionLabel>{label}</SectionLabel>}
            {title && (
              <h2
                id={`${id}-title`}
                className="font-display text-text text-3xl leading-tight font-semibold tracking-tight sm:text-4xl"
              >
                {title}
              </h2>
            )}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
