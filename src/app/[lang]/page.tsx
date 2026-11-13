import Link from "next/link";
import { DemoCards, DemoMock, FinalCta, PackageCards, PaymentStrip, Section, SectionHeading } from "@/components/Blocks";
import { TelegramButton } from "@/components/TelegramButton";
import { getDictionary } from "@/content";
import { site, type Locale } from "@/content/site";

export default async function Home({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const t = getDictionary(lang);
  const h = t.home;
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-gold/15 blur-3xl" aria-hidden="true" />
        <div className="absolute -left-24 top-40 h-72 w-72 rounded-full bg-leaf/10 blur-3xl" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pb-14 pt-16 sm:pb-20 sm:pt-24 lg:grid-cols-[1.5fr_1fr]">
          <div>
          <span className="inline-block rounded-full border border-forest/20 bg-white/70 px-4 py-1.5 text-sm font-semibold text-forest">
            {h.eyebrow}
          </span>
          <h1 className="mt-6 max-w-3xl text-4xl font-bold tracking-tight text-ink sm:text-6xl">{h.title}</h1>
          <p className="mt-6 max-w-2xl text-lg text-muted sm:text-xl">{h.subtitle}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <TelegramButton label={t.cta.telegram} size="lg" />
            <Link
              href={`/${lang}/work/`}
              className="inline-flex items-center justify-center rounded-full border border-forest/30 px-6 py-3.5 font-semibold text-forest hover:bg-white"
            >
              {t.cta.seeDemos}
            </Link>
          </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="absolute -left-6 top-10 rotate-[-6deg] opacity-80">
              <DemoMock demo={t.demos[1]} badge={t.demoBadge} />
            </div>
            <div className="relative ml-24 rotate-[4deg]">
              <DemoMock demo={t.demos[0]} badge={t.demoBadge} />
            </div>
          </div>
        </div>
      </section>

      <PaymentStrip title={h.paymentsTitle} />

      <Section>
        <SectionHeading title={h.packagesTitle} subtitle={h.packagesSubtitle} />
        <PackageCards t={t} />
        <div className="mt-8">
          <Link href={`/${lang}/pricing/`} className="font-semibold text-forest hover:underline">
            {t.cta.seePricing} →
          </Link>
        </div>
      </Section>

      <div className="bg-sand/50">
        <Section>
          <SectionHeading title={h.demosTitle} subtitle={h.demosSubtitle} />
          <DemoCards t={t} locale={lang} />
        </Section>
      </div>

      <Section>
        <SectionHeading title={h.processTitle} />
        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {h.process.map((step, i) => (
            <li key={step.title} className="rounded-2xl border border-line bg-white/70 p-5">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-forest text-sm font-bold text-white">{i + 1}</span>
              <h3 className="mt-4 font-semibold">{step.title}</h3>
              <p className="mt-1.5 text-sm text-muted">{step.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      <div className="bg-forest-dark text-white">
        <Section>
          <h2 className="mb-10 text-3xl font-bold tracking-tight sm:text-4xl">{h.whyTitle}</h2>
          <div className="grid gap-5 sm:grid-cols-2">
            {h.why.map((w) => (
              <div key={w.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-lg font-semibold text-gold">{w.title}</h3>
                <p className="mt-2 text-white/75">{w.body}</p>
              </div>
            ))}
          </div>
        </Section>
      </div>

      <Section>
        <div className="grid items-center gap-10 md:grid-cols-[1fr_1.4fr]">
          <div className="flex gap-4">
            {site.founders.map((f) => (
              <div key={f.name} className="flex flex-col items-center gap-2">
                <div className="grid h-24 w-24 place-items-center rounded-full bg-sand text-2xl font-bold text-forest ring-4 ring-white">
                  {f.initials}
                </div>
                <span className="text-sm font-semibold">{f.name}</span>
              </div>
            ))}
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight">{h.foundersTitle}</h2>
            <p className="mt-4 text-lg text-muted">{h.foundersBody}</p>
          </div>
        </div>
      </Section>

      <div className="bg-sand/50">
        <Section>
          <SectionHeading title={h.faqTitle} />
          <div className="divide-y divide-line rounded-3xl border border-line bg-white/80">
            {h.faq.map((f) => (
              <details key={f.q} className="group p-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span className="text-forest transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-muted">{f.a}</p>
              </details>
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
