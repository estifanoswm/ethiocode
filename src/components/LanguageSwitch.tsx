"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/content/site";

export function LanguageSwitch({ locale, label, title }: { locale: Locale; label: string; title: string }) {
  const pathname = usePathname() ?? `/${locale}/`;
  const target = locale === "en" ? "am" : "en";
  const href = pathname.replace(/^\/(en|am)(?=\/|$)/, `/${target}`);
  return (
    <Link
      href={href}
      hrefLang={target}
      aria-label={title}
      title={title}
      className="rounded-full border border-line px-3 py-1.5 text-sm font-semibold text-forest hover:border-forest"
    >
      {label}
    </Link>
  );
}
