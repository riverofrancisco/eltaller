import "server-only";

export type Locale = "es" | "en";

const dictionaries = {
  es: () =>
    import("@/dictionaries/es.json").then((module) => module.default),
  en: () =>
    import("@/dictionaries/en.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => {
  if (!dictionaries[locale]) {
    return dictionaries["es"]();
  }
  return dictionaries[locale]();
};

export const locales: Locale[] = ["es", "en"];
export const defaultLocale: Locale = "es";
