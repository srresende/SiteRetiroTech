import { site } from "@/content/site";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";

const phaseColors = ["text-cyan", "text-accent", "text-lime"];

export function OQueVoceLeva() {
  const { value } = site;
  return (
    <Section id="o-que-voce-leva" label={value.label} title={value.title}>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {value.pillars.map((p, i) => (
          <Card key={p.title} className="!p-6">
            <p className="text-accent font-mono text-sm font-medium">{String(i + 1).padStart(2, "0")}</p>
            <h3 className="font-display text-text mt-4 text-lg font-semibold">{p.title}</h3>
            <p className="text-text-3 mt-2 text-sm leading-relaxed">{p.text}</p>
          </Card>
        ))}
      </div>

      <h3 className="font-display text-text mt-20 text-2xl font-semibold">{value.planTitle}</h3>
      <div className="relative mt-8">
        <div aria-hidden="true" className="bg-line-3 absolute top-[11px] right-0 left-0 hidden h-px md:block" />
        <ol className="relative grid gap-6 md:grid-cols-3">
          {value.phases.map((ph, i) => (
            <li key={ph.phase} className="relative">
              <div className="flex items-center gap-3">
                <span className="border-line-3 bg-bg relative z-10 flex h-6 w-6 items-center justify-center rounded-full border">
                  <span className="bg-accent h-2 w-2 rounded-full" />
                </span>
                <span className="text-muted font-mono text-xs font-medium tracking-[0.18em] uppercase">
                  {ph.phase} · {ph.period}
                </span>
              </div>
              <Card className="mt-4 !p-6">
                <p className={`font-display text-2xl font-bold ${phaseColors[i]}`}>{ph.focus}</p>
                <p className="text-text-3 mt-2 text-sm">{ph.actions}</p>
              </Card>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
