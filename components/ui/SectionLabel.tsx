export function SectionLabel({ children }: { children: string }) {
  return (
    <p className="text-accent font-mono text-xs font-medium tracking-[0.2em] uppercase">
      <span aria-hidden="true">{"// "}</span>
      {children}
    </p>
  );
}
