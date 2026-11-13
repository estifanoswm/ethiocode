import Link from "next/link";
import type { Dictionary } from "@/content";
import { phoneUrl, site, telegramUrl, type Locale } from "@/content/site";
import { Logo } from "./Header";

export function Footer({ locale, t }: { locale: Locale; t: Dictionary }) {
  return (
    <footer className="border-t border-line bg-sand/60">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:grid-cols-3">
        <div className="space-y-3">
          <Logo locale={locale} />
          <p className="text-sm text-muted">{t.footer.tagline}</p>
        </div>
        <div className="space-y-2 text-sm">
          <Link href={`/${locale}/work/`} className="block hover:text-forest">{t.nav.work}</Link>
          <Link href={`/${locale}/pricing/`} className="block hover:text-forest">{t.nav.pricing}</Link>
          <Link href={`/${locale}/about/`} className="block hover:text-forest">{t.nav.about}</Link>
          <Link href={`/${locale}/contact/`} className="block hover:text-forest">{t.nav.contact}</Link>
        </div>
        <div className="space-y-2 text-sm">
          <a href={telegramUrl} className="block hover:text-forest">Telegram: @{site.telegramHandle}</a>
          <a href={phoneUrl} className="block hover:text-forest">{site.phone}</a>
          <a href={`mailto:${site.email}`} className="block hover:text-forest">{site.email}</a>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-5 text-xs text-muted">
          <span>© {new Date().getFullYear()} {site.name}. {t.footer.rights}</span>
          <span className="flex gap-4">
            <Link href={`/${locale}/privacy/`} className="hover:text-forest">{t.footer.privacy}</Link>
            <Link href={`/${locale}/terms/`} className="hover:text-forest">{t.footer.terms}</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
