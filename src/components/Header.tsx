import Link from "next/link";
import type { Dictionary } from "@/content";
import { site, type Locale } from "@/content/site";
import { LanguageSwitch } from "./LanguageSwitch";
import { TelegramButton } from "./TelegramButton";

export function Logo({ locale }: { locale: Locale }) {
  return (
    <Link href={`/${locale}/`} className="flex items-center gap-2 font-bold tracking-tight text-ink">
      <span className="grid h-8 w-8 place-items-center rounded-lg bg-forest text-xs text-white">251</span>
      <span className="whitespace-nowrap text-lg">{site.name}</span>
    </Link>
  );
}

export function Header({ locale, t }: { locale: Locale; t: Dictionary }) {
  const links = [
    { href: `/${locale}/work/`, label: t.nav.work },
    { href: `/${locale}/pricing/`, label: t.nav.pricing },
    { href: `/${locale}/about/`, label: t.nav.about },
    { href: `/${locale}/contact/`, label: t.nav.contact },
  ];
  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-cream/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5">
        <Logo locale={locale} />
        <nav className="hidden items-center gap-7 text-sm font-medium text-muted md:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-forest">
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <LanguageSwitch locale={locale} label={t.nav.language} title={t.nav.languageLabel} />
          <span className="hidden sm:block">
            <TelegramButton label={t.cta.telegramShort} />
          </span>
          <details className="relative md:hidden">
            <summary className="list-none rounded-full border border-line p-2 text-forest [&::-webkit-details-marker]:hidden" aria-label="Menu">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </summary>
            <div className="absolute right-0 mt-2 w-56 rounded-2xl border border-line bg-white p-2 shadow-lg">
              {links.map((l) => (
                <Link key={l.href} href={l.href} className="block rounded-xl px-3 py-2.5 text-sm font-medium hover:bg-sand">
                  {l.label}
                </Link>
              ))}
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
