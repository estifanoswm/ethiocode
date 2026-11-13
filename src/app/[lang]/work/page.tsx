import { DemoCards, FinalCta, PageHero, Section } from "@/components/Blocks";
import { TelegramButton } from "@/components/TelegramButton";
import { getDictionary } from "@/content";
import type { Locale } from "@/content/site";

export default async function Work({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const t = getDictionary(lang);
  return (
    <>
      <PageHero title={t.work.title} subtitle={t.work.subtitle} />
      <Section>
        <DemoCards t={t} locale={lang} />
      </Section>
      <FinalCta t={t}>
        <TelegramButton label={t.cta.telegram} variant="light" size="lg" />
      </FinalCta>
    </>
  );
}
