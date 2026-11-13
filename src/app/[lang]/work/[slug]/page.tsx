import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckList, DemoMock, Section } from "@/components/Blocks";
import { TelegramButton } from "@/components/TelegramButton";
import { getDictionary } from "@/content";
import { en } from "@/content/en";
import { locales, type Locale } from "@/content/site";

export function generateStaticParams() {
  return locales.flatMap((lang) => en.demos.map((d) => ({ lang, slug: d.slug })));
}

export default async function DemoDetail({ params }: { params: Promise<{ lang: Locale; slug: string }> }) {
  const { lang, slug } = await params;
  const t = getDictionary(lang);
  const demo = t.demos.find((d) => d.slug === slug);
  if (!demo) notFound();
  return (
    <>
      <div className="border-b border-line bg-sand/50">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 md:grid-cols-[1.3fr_1fr]">
          <div>
            <Link href={`/${lang}/work/`} className="text-sm font-semibold text-forest hover:underline">
              ← {t.work.back}
            </Link>
            <div className="mt-6 flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-gold">{demo.industry}</span>
              <span className="rounded-full bg-ink/5 px-2.5 py-0.5 text-xs font-semibold text-muted">
                {t.demoBadge} · {t.inProgress}
              </span>
            </div>
            <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">{demo.title}</h1>
            <p className="mt-4 text-lg text-muted">{demo.summary}</p>
          </div>
          <div className="rounded-3xl bg-white/60 py-8">
            <DemoMock demo={demo} badge={t.demoBadge} />
          </div>
        </div>
      </div>
      <Section>
        <div className="grid gap-10 md:grid-cols-2">
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-bold">{t.work.problemTitle}</h2>
              <p className="mt-3 text-muted">{demo.problem}</p>
            </div>
            <div>
              <h2 className="text-xl font-bold">{t.work.solutionTitle}</h2>
              <p className="mt-3 text-muted">{demo.solution}</p>
            </div>
          </div>
          <div className="space-y-6">
            <div className="rounded-3xl border border-line bg-white/80 p-7">
              <h2 className="text-xl font-bold">{t.work.featuresTitle}</h2>
              <div className="mt-5">
                <CheckList items={demo.features} />
              </div>
            </div>
            <div className="rounded-3xl border border-forest/30 bg-forest/5 p-7">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-forest">{t.work.costTitle}</h2>
              <p className="mt-2 text-lg font-semibold">{demo.cost}</p>
              <TelegramButton label={t.cta.telegram} className="mt-5" />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
