export const site = {
  name: "EthioCode",
  shortName: "EC",
  telegramHandle: "ethiocode",
  phone: "+251 900 000 000",
  whatsapp: "251900000000",
  email: "hello@ethiocode.example",
  city: "Addis Ababa",
  founders: [
    { name: "Estifanos", initials: "E" },
    { name: "Co-founder", initials: "S" },
  ],
};

export const telegramUrl = `https://t.me/${site.telegramHandle}`;
export const whatsappUrl = `https://wa.me/${site.whatsapp}`;
export const phoneUrl = `tel:${site.phone.replace(/\s/g, "")}`;

export const locales = ["en", "am"] as const;
export type Locale = (typeof locales)[number];

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
