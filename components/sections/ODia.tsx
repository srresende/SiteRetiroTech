import { site } from "@/content/site";
import { Section } from "@/components/ui/Section";

export function ODia() {
  const { agenda, event } = site;
  return (
    <Section id="o-dia" label={agenda.label} title={agenda.title} alt>
      <p className="text-muted -mt-6 mb-10 font-mono text-sm">
        {event.date} · {event.location}
      </p>
      <ol className="divide-line-2 rounded-card border-line-2 bg-surface divide-y overflow-hidden border">
        {agenda.items.map((item, i) => (
          <li key={i} className="grid grid-cols-1 gap-1 px-6 py-5 sm:grid-cols-[9rem_1fr] sm:items-center sm:gap-6">
            <span className="text-accent font-mono text-sm font-medium">{item.time}</span>
            <span className="text-text text-base sm:text-lg">{item.block}</span>
          </li>
        ))}
      </ol>
    </Section>
  );
}
