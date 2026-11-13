import Link from "next/link";
import type { Dictionary } from "@/content";
import type { Locale } from "@/content/site";

export function Section({ children, className = "", id }: { children: React.ReactNode; className?: string; id?: string }) {
  return (
    <section id={id} className={`mx-auto max-w-6xl px-5 py-16 sm:py-20 ${className}`}>
      {children}
    </section>
  );
}

export function SectionHeading({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-10 max-w-2xl">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-3 text-lg text-muted">{subtitle}</p>}
    </div>
  );
}

export function PageHero({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="border-b border-line bg-sand/50">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:py-20">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-lg text-muted">{subtitle}</p>
      </div>
    </div>
  );
}

function Check() {
  return (
    <svg viewBox="0 0 20 20" className="mt-1 h-4 w-4 flex-none text-leaf" fill="currentColor" aria-hidden="true">
      <path d="M16.7 5.3a1 1 0 0 1 0 1.4l-8 8a1 1 0 0 1-1.4 0l-4-4a1 1 0 1 1 1.4-1.4L8 12.6l7.3-7.3a1 1 0 0 1 1.4 0Z" />
    </svg>
  );
}

export function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex gap-2.5 text-sm">
          <Check />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function PackageCards({ t }: { t: Dictionary }) {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {t.packages.map((p) => (
        <div
          key={p.name}
          className={`relative flex flex-col rounded-3xl border p-7 ${p.featured ? "border-forest bg-white shadow-xl shadow-forest/10" : "border-line bg-white/70"}`}
        >
          {p.featured && (
            <span className="absolute -top-3 left-7 rounded-full bg-gold px-3 py-1 text-xs font-semibold text-white">{t.popular}</span>
          )}
          <h3 className="text-lg font-semibold">{p.name}</h3>
          <p className="mt-1 text-sm text-muted">{p.description}</p>
          <p className="mt-5">
            <span className="text-sm text-muted">{t.home.from} </span>
            <span className="text-3xl font-bold tracking-tight">ETB {p.price}</span>
          </p>
          <div className="mt-6 flex-1">
            <CheckList items={p.features} />
          </div>
        </div>
      ))}
    </div>
  );
}

export function PaymentStrip({ title }: { title: string }) {
  const methods = ["telebirr", "CBE Birr", "Chapa", "M-Pesa", "Visa / Mastercard"];
  return (
    <div className="mx-auto max-w-6xl px-5">
      <div className="flex flex-col items-center gap-4 rounded-3xl border border-line bg-white/70 px-6 py-6 sm:flex-row sm:justify-between">
        <span className="text-sm font-semibold text-muted">{title}</span>
        <ul className="flex flex-wrap justify-center gap-2.5">
          {methods.map((m) => (
            <li key={m} className="rounded-full border border-line bg-cream px-4 py-1.5 text-sm font-semibold text-forest">
              {m}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

type Demo = Dictionary["demos"][number];

export function DemoMock({ demo, badge }: { demo: Demo; badge: string }) {
  return (
    <div className="relative mx-auto w-full max-w-[220px] rounded-[2rem] border-[6px] border-ink bg-white p-3 shadow-xl">
      <div className="mx-auto mb-3 h-1.5 w-12 rounded-full bg-ink/80" />
      <div className="rounded-xl p-3 text-white" style={{ background: demo.accent }}>
        <div className="text-[10px] uppercase tracking-widest opacity-80">{badge}</div>
        <div className="mt-1 text-sm font-bold leading-snug">{demo.title}</div>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="rounded-lg bg-sand p-2">
            <div className="h-10 rounded-md" style={{ background: `${demo.accent}${i % 2 ? "33" : "22"}` }} />
            <div className="mt-1.5 h-1.5 w-3/4 rounded bg-ink/20" />
            <div className="mt-1 h-1.5 w-1/2 rounded bg-ink/10" />
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-center justify-between rounded-lg bg-ink/5 p-2">
        <span className="text-[10px] font-semibold">telebirr</span>
        <span className="rounded-md px-2 py-1 text-[10px] font-semibold text-white" style={{ background: demo.accent }}>
          Pay
        </span>
      </div>
    </div>
  );
}

export function DemoCards({ t, locale }: { t: Dictionary; locale: Locale }) {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {t.demos.map((d) => (
        <Link
          key={d.slug}
          href={`/${locale}/work/${d.slug}/`}
          className="group flex flex-col rounded-3xl border border-line bg-white/80 p-6 transition hover:-translate-y-1 hover:border-forest hover:shadow-lg"
        >
          <div className="rounded-2xl bg-sand/70 py-6">
            <DemoMock demo={d} badge={t.demoBadge} />
          </div>
          <span className="mt-5 text-xs font-semibold uppercase tracking-wider text-gold">{d.industry}</span>
          <h3 className="mt-1 text-lg font-semibold">{d.title}</h3>
          <p className="mt-2 flex-1 text-sm text-muted">{d.summary}</p>
          <span className="mt-4 text-sm font-semibold text-forest group-hover:underline">{t.work.viewDemo} →</span>
        </Link>
      ))}
    </div>
  );
}

export function FinalCta({ t, children }: { t: Dictionary; children: React.ReactNode }) {
  return (
    <Section>
      <div className="rounded-[2rem] bg-forest px-8 py-14 text-center text-white sm:px-16">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{t.home.finalTitle}</h2>
        <p className="mx-auto mt-3 max-w-xl text-white/80">{t.home.finalBody}</p>
        <div className="mt-8 flex justify-center">{children}</div>
      </div>
    </Section>
  );
}
