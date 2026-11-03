import { site } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

export function Investimento() {
  const { investment, event } = site;
  return (
    <Section id="investimento" label={investment.label} title={investment.title} alt>
      <div className="rounded-card border-line-3 bg-surface mx-auto max-w-3xl overflow-hidden border">
        <div className="border-line-2 border-b p-8 sm:p-10">
          <p className="text-muted font-mono text-xs font-medium tracking-[0.18em] uppercase">
            {event.date} · {event.seats}
          </p>
          <p className="font-display text-text mt-4 text-5xl font-bold tracking-tight sm:text-6xl">
            {investment.price}
          </p>
          <p className="text-text-3 mt-2">{investment.conditions}</p>
        </div>
        <div className="p-8 sm:p-10">
          <p className="text-accent font-mono text-xs font-medium tracking-[0.18em] uppercase">O que está incluso</p>
          <ul className="mt-5 space-y-4">
            {investment.included.map((item) => (
              <li key={item} className="text-text-2 flex items-start gap-3">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 20 20"
                  className="text-accent mt-0.5 h-5 w-5 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M4 10.5l4 4 8-9" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
          <Button href={site.ctaUrl} className="mt-10 w-full">
            {site.cta.invest}
          </Button>
        </div>
      </div>
    </Section>
  );
}
