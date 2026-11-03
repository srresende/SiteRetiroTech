import { site } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function Hero() {
  const { hero, event } = site;
  const facts = [
    { k: "Formato", v: event.format },
    { k: "Entregável", v: event.deliverable },
    { k: "Local", v: event.location },
    { k: "Turma", v: event.seats },
  ];

  return (
    <section id="topo" className="bg-bg relative overflow-hidden">
      {/* subtle grid backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 [background-image:linear-gradient(var(--color-line)_1px,transparent_1px),linear-gradient(90deg,var(--color-line)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)] [background-size:56px_56px] opacity-40"
      />
      <div
        aria-hidden="true"
        className="bg-accent/10 pointer-events-none absolute -top-40 left-1/2 h-96 w-[48rem] -translate-x-1/2 rounded-full blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-4 pt-20 pb-16 sm:px-6 sm:pt-28 sm:pb-24">
        <div className="max-w-4xl space-y-7">
          <SectionLabel>{hero.label}</SectionLabel>
          <h1 className="font-display text-text text-4xl leading-[1.05] font-bold tracking-tight sm:text-6xl lg:text-7xl">
            {hero.headline} <span className="text-accent">{hero.headlineAccent}</span>
          </h1>
          <p className="text-text-2 max-w-2xl text-lg sm:text-xl">
            <strong className="text-text font-semibold">{hero.promise}</strong> {hero.sub}
          </p>
          <div className="flex flex-col gap-3 pt-2 sm:flex-row">
            <Button href={site.ctaUrl}>{site.cta.primary}</Button>
            <Button href="#o-que-voce-leva" variant="secondary">
              {site.cta.secondary}
            </Button>
          </div>
        </div>

        {/* gap-px over a line-colored background draws the dividers at every breakpoint */}
        <dl className="rounded-card border-line-2 bg-line-2 mt-16 grid grid-cols-1 gap-px overflow-hidden border sm:grid-cols-2 lg:grid-cols-4">
          {facts.map((f) => (
            <div key={f.k} className="bg-surface space-y-1 p-5">
              <dt className="text-muted font-mono text-[11px] font-medium tracking-[0.18em] uppercase">{f.k}</dt>
              <dd className="font-display text-text text-base font-medium">{f.v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
