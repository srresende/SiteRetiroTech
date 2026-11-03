import { site } from "@/content/site";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";

export function ParaQuemE() {
  const { audience } = site;
  return (
    <Section id="para-quem-e" label={audience.label} title={audience.title} alt>
      <div className="grid gap-6 md:grid-cols-2">
        {audience.profiles.map((p) => (
          <Card key={p.tag} className="flex flex-col">
            <p className="text-cyan font-mono text-xs font-medium tracking-[0.18em] uppercase">{p.tag}</p>
            <h3 className="font-display text-text mt-3 text-2xl font-semibold">{p.name}</h3>
            <p className="text-text-2 mt-2">{p.who}</p>

            <div className="rounded-btn border-line-2 bg-bg mt-6 border px-4 py-3">
              <p className="text-muted font-mono text-[11px] font-medium tracking-[0.18em] uppercase">{p.rangeLabel}</p>
              <p className="font-display text-text text-lg font-semibold">{p.range}</p>
            </div>

            <ul className="mt-6 space-y-3">
              {p.points.map((pt) => (
                <li key={pt} className="text-text-3 flex gap-3">
                  <span aria-hidden="true" className="bg-line-3 mt-2 h-1.5 w-1.5 shrink-0 rounded-full" />
                  {pt}
                </li>
              ))}
            </ul>

            <div className="mt-auto pt-8">
              <div className="border-line-2 border-t pt-5">
                <p className="text-accent font-mono text-[11px] font-medium tracking-[0.18em] uppercase">Objetivo</p>
                <p className="font-display text-text mt-1 text-xl font-semibold">{p.goal}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
