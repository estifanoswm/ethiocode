import { LegalPage } from "@/components/LegalPage";
import { getDictionary } from "@/content";
import type { Locale } from "@/content/site";

export default async function Terms({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const t = getDictionary(lang);
  return <LegalPage title={t.legal.termsTitle} draft={t.legal.draft} items={t.legal.terms} />;
}
