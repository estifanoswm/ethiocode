import { FinalCta, PageHero, Section, SectionHeading } from "@/components/Blocks";
import { TelegramButton } from "@/components/TelegramButton";
import { getDictionary } from "@/content";
import { site, type Locale } from "@/content/site";

export default async function About({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const t = getDictionary(lang);
  const a = t.about;
  return (
    <>
      <PageHero title={a.title} subtitle={a.story[0]} />
      <Section>
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr]">
          <div className="space-y-5 text-lg text-muted">
            {a.story.slice(1).map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <div className="rounded-3xl border border-line bg-white/80 p-7">
            <h2 className="text-xl font-bold">{a.teamTitle}</h2>
            <div className="mt-6 space-y-4">
              {site.founders.map((f) => (
                <div key={f.name} className="flex items-center gap-4">
                  <div className="grid h-14 w-14 place-items-center rounded-full bg-sand text-lg font-bold text-forest">{f.initials}</div>
                  <span className="font-semibold">{f.name}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 border-t border-line pt-5 text-sm text-muted">{a.addisContact}</p>
          </div>
        </div>
      </Section>
      <div className="bg-sand/50">
        <Section>
          <SectionHeading title={a.valuesTitle} />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {a.values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-line bg-white/80 p-6">
                <h3 className="font-semibold text-forest">{v.title}</h3>
                <p className="mt-2 text-sm text-muted">{v.body}</p>
              </div>
            ))}
          </div>
        </Section>
      </div>
      <FinalCta t={t}>
        <TelegramButton label={t.cta.telegram} variant="light" size="lg" />
      </FinalCta>
    </>
  );
}
