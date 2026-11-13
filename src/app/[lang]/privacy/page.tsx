import { LegalPage } from "@/components/LegalPage";
import { getDictionary } from "@/content";
import type { Locale } from "@/content/site";

export default async function Privacy({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const t = getDictionary(lang);
  return <LegalPage title={t.legal.privacyTitle} draft={t.legal.draft} items={t.legal.privacy} />;
}
