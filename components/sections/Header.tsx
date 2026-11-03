"use client";

import { useState } from "react";
import { site } from "@/content/site";
import { Button } from "@/components/ui/Button";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-line bg-bg/85 sticky top-0 z-50 border-b backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#topo" className="font-display text-text text-lg font-bold tracking-tight">
          RETIRO<span className="text-accent">.</span>TECH
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-8 md:flex">
          {site.nav.map((item) => (
            <a key={item.href} href={item.href} className="text-text-3 hover:text-text text-sm transition-colors">
              {item.label}
            </a>
          ))}
          <Button href={site.ctaUrl} size="sm">
            {site.cta.nav}
          </Button>
        </nav>

        <button
          type="button"
          className="rounded-btn border-line-2 text-text inline-flex h-11 w-11 items-center justify-center border md:hidden"
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav
          id="menu-mobile"
          aria-label="Principal (mobile)"
          className="border-line bg-bg border-t px-4 pb-6 md:hidden"
        >
          <ul className="flex flex-col py-2">
            {site.nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-text-2 hover:text-text block py-3 text-base"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <Button href={site.ctaUrl} className="w-full">
            {site.cta.nav}
          </Button>
        </nav>
      )}
    </header>
  );
}
