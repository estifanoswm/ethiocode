import { CheckList, FinalCta, PackageCards, PageHero, Section, SectionHeading } from "@/components/Blocks";
import { TelegramButton } from "@/components/TelegramButton";
import { getDictionary } from "@/content";
import type { Locale } from "@/content/site";

export default async function Pricing({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const t = getDictionary(lang);
  const p = t.pricing;
  return (
    <>
      <PageHero title={p.title} subtitle={p.subtitle} />
      <Section>
        <SectionHeading title={p.projectsTitle} />
        <PackageCards t={t} />
      </Section>
      <div className="bg-sand/50">
        <Section>
          <SectionHeading title={p.careTitle} subtitle={p.careSubtitle} />
          <div className="grid gap-5 md:grid-cols-3">
            {t.carePlans.map((c) => (
              <div key={c.name} className="rounded-3xl border border-line bg-white/80 p-7">
                <h3 className="text-lg font-semibold">{c.name}</h3>
                <p className="mt-4">
                  <span className="text-3xl font-bold tracking-tight">ETB {c.price}</span>
                  <span className="text-sm text-muted"> {t.home.perMonth}</span>
                </p>
                <div className="mt-6">
                  <CheckList items={c.features} />
                </div>
              </div>
            ))}
          </div>
        </Section>
      </div>
      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-line bg-white/70 p-7">
            <h2 className="text-xl font-bold">{p.changesTitle}</h2>
            <div className="mt-5">
              <CheckList items={p.changes} />
            </div>
          </div>
          <div className="rounded-3xl border border-line bg-white/70 p-7">
            <h2 className="text-xl font-bold">{p.termsTitle}</h2>
            <div className="mt-5">
              <CheckList items={p.terms} />
            </div>
          </div>
        </div>
      </Section>
      <FinalCta t={t}>
        <TelegramButton label={t.cta.telegram} variant="light" size="lg" />
      </FinalCta>
    </>
  );
}
