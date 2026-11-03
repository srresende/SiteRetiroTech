import { isExternal, site } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-line bg-bg-alt border-t">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div>
          <p className="font-display text-text text-lg font-bold tracking-tight">
            RETIRO<span className="text-accent">.</span>TECH
          </p>
          <p className="text-muted mt-1 font-mono text-xs">
            © {new Date().getFullYear()} {site.brand}
          </p>
        </div>
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          {site.footer.contacts.map((c) => (
            <li key={c.label}>
              <a
                href={c.href}
                className="text-text-3 hover:text-text text-sm"
                {...(isExternal(c.href) ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                {c.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
