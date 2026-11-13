import { Section } from "./Blocks";

export function LegalPage({ title, draft, items }: { title: string; draft: string; items: string[] }) {
  return (
    <Section className="max-w-3xl">
      <h1 className="text-4xl font-bold tracking-tight">{title}</h1>
      <p className="mt-4 rounded-xl bg-gold/10 px-4 py-3 text-sm font-medium text-ink">{draft}</p>
      <ol className="mt-8 list-decimal space-y-4 pl-5 text-muted">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ol>
    </Section>
  );
}
