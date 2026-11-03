import { site } from "@/content/site";
import { Section } from "@/components/ui/Section";

export function Mentor() {
  const { mentor } = site;
  return (
    <Section id="mentor" label={mentor.label}>
      <div className="grid items-center gap-10 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-16">
        <div className="rounded-card border-line-2 bg-surface relative aspect-[4/5] overflow-hidden border">
          {mentor.photo ? (
            // eslint-disable-next-line @next/next/no-img-element -- static export, unoptimized images
            <img src={mentor.photo} alt={`Foto de ${mentor.name}`} className="h-full w-full object-cover" />
          ) : (
            <div className="text-muted flex h-full items-center justify-center font-mono text-sm">[SUA FOTO]</div>
          )}
        </div>

        <div>
          <h2 id="mentor-title" className="font-display text-text text-4xl font-bold tracking-tight sm:text-5xl">
            {mentor.name}
          </h2>
          <p className="text-text-2 mt-5 text-lg leading-relaxed">{mentor.bio}</p>
          <ul className="mt-6 space-y-2">
            {mentor.highlights.map((h) => (
              <li key={h} className="text-text-3 flex gap-3">
                <span aria-hidden="true" className="text-accent font-mono">
                  &gt;
                </span>
                {h}
              </li>
            ))}
          </ul>
          <dl className="mt-10 grid grid-cols-2 gap-4">
            {mentor.stats.map((s) => (
              <div key={s.label} className="rounded-card border-line-2 bg-surface border p-5">
                <dt className="sr-only">{s.label}</dt>
                <dd>
                  <span className="font-display text-accent block text-4xl font-bold">{s.value}</span>
                  <span className="text-text-3 mt-1 block text-sm">{s.label}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  );
}
