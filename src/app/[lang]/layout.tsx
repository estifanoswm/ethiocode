import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import "../globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { TelegramIcon } from "@/components/TelegramButton";
import { getDictionary } from "@/content";
import { isLocale, locales, telegramUrl } from "@/content/site";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export const viewport: Viewport = { themeColor: "#14532d" };

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const t = getDictionary(lang);
  return {
    title: t.meta.title,
    description: t.meta.description,
    robots: { index: false, follow: false },
    alternates: { languages: { en: "/en/", am: "/am/" } },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const t = getDictionary(lang);
  return (
    <html lang={lang}>
      <body className="min-h-screen">
        <Header locale={lang} t={t} />
        <main>{children}</main>
        <Footer locale={lang} t={t} />
        <a
          href={telegramUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t.cta.telegram}
          className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-telegram text-white shadow-lg shadow-telegram/40 sm:hidden"
        >
          <TelegramIcon className="h-7 w-7" />
        </a>
      </body>
    </html>
  );
}
