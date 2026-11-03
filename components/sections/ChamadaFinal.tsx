import { site } from "@/content/site";
import { Button } from "@/components/ui/Button";

export function ChamadaFinal() {
  const { closing, hero } = site;
  return (
    <section
      aria-labelledby="chamada-final-title"
      className="border-line bg-bg relative overflow-hidden border-t py-24 sm:py-32"
    >
      <div
        aria-hidden="true"
        className="bg-accent/10 pointer-events-none absolute bottom-0 left-1/2 h-80 w-[40rem] -translate-x-1/2 translate-y-1/2 rounded-full blur-3xl"
      />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        <h2
          id="chamada-final-title"
          className="font-display text-text text-4xl leading-tight font-bold tracking-tight sm:text-6xl"
        >
          {closing.headline} <span className="text-accent">{closing.headlineAccent}</span>
        </h2>
        <p className="text-text-2 mx-auto mt-6 max-w-xl text-lg">{hero.promise}</p>
        <div className="mt-10 flex justify-center">
          <Button href={site.ctaUrl}>{site.cta.nav}</Button>
        </div>
      </div>
    </section>
  );
}
