"use client";

import type { Dictionary } from "@/content";

export function ContactForm({ t, email }: { t: Dictionary["contact"]; email: string }) {
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const lines = [
      `${t.name}: ${data.get("name") ?? ""}`,
      `${t.business}: ${data.get("business") ?? ""}`,
      `${t.need}: ${data.get("need") ?? ""}`,
      `${t.budget}: ${data.get("budget") ?? ""}`,
      "",
      String(data.get("message") ?? ""),
    ];
    const subject = encodeURIComponent(`${t.need} ${data.get("business") ?? ""}`.trim());
    window.location.href = `mailto:${email}?subject=${subject}&body=${encodeURIComponent(lines.join("\n"))}`;
  }

  const field = "mt-1.5 w-full rounded-xl border border-line bg-cream px-4 py-3 text-base outline-none focus:border-forest";
  const label = "block text-sm font-semibold";

  return (
    <form onSubmit={onSubmit} className="mt-6 space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className={label}>
          {t.name}
          <input name="name" required autoComplete="name" className={field} />
        </label>
        <label className={label}>
          {t.business}
          <input name="business" autoComplete="organization" className={field} />
        </label>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className={label}>
          {t.need}
          <select name="need" className={field}>
            {t.needOptions.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </label>
        <label className={label}>
          {t.budget}
          <select name="budget" className={field}>
            {t.budgetOptions.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </label>
      </div>
      <label className={label}>
        {t.message}
        <textarea name="message" rows={4} className={field} />
      </label>
      <button type="submit" className="w-full rounded-full bg-forest px-6 py-3.5 font-semibold text-white hover:bg-forest-dark">
        {t.send}
      </button>
    </form>
  );
}
