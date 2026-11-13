import { am } from "./am";
import { en, type Dictionary } from "./en";
import type { Locale } from "./site";

const dictionaries: Record<Locale, Dictionary> = { en, am };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export type { Dictionary };
