import { PageHero, Section } from "@/components/Blocks";
import { ContactForm } from "@/components/ContactForm";
import { TelegramIcon } from "@/components/TelegramButton";
import { getDictionary } from "@/content";
import { phoneUrl, site, telegramUrl, whatsappUrl, type Locale } from "@/content/site";

export default async function Contact({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const t = getDictionary(lang);
  const c = t.contact;
  const channels = [
    { label: c.channels.telegram, value: `@${site.telegramHandle}`, href: telegramUrl, primary: true },
    { label: c.channels.phone, value: site.phone, href: phoneUrl },
    { label: c.channels.whatsapp, value: site.phone, href: whatsappUrl },
    { label: c.channels.email, value: site.email, href: `mailto:${site.email}` },
  ];
  return (
    <>
      <PageHero title={c.title} subtitle={c.subtitle} />
      <Section>
        <div className="grid gap-10 md:grid-cols-[1fr_1.3fr]">
          <div className="space-y-3">
            {channels.map((ch) => (
              <a
                key={ch.label}
                href={ch.href}
                target={ch.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className={`flex items-center justify-between rounded-2xl border p-5 transition ${ch.primary ? "border-telegram bg-telegram text-white hover:bg-[#1b8cc2]" : "border-line bg-white/80 hover:border-forest"}`}
              >
                <span className="flex items-center gap-3 font-semibold">
                  {ch.primary && <TelegramIcon />}
                  {ch.label}
                </span>
                <span className={ch.primary ? "text-white/90" : "text-muted"}>{ch.value}</span>
              </a>
            ))}
            <div className="space-y-1 pt-4 text-sm text-muted">
              <p>{c.hours}</p>
              <p>{c.location}</p>
            </div>
          </div>
          <div className="rounded-3xl border border-line bg-white/80 p-7">
            <h2 className="text-xl font-bold">{c.formTitle}</h2>
            <ContactForm t={c} email={site.email} />
          </div>
        </div>
      </Section>
    </>
  );
}
