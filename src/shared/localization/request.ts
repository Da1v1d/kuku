import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

export const TRANSLATE_KEYS = ["general", "auth", "fields"];

export default getRequestConfig(async ({ requestLocale }) => {
  // This typically corresponds to the `[locale]` segment
  let locale = await requestLocale;

  // Ensure that a valid locale is used
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  const [commonMessages, authMessages, fieldsMessages] = await Promise.all(
    TRANSLATE_KEYS.map((key) => import(`./translations/${locale}/${key}.json`))
  );

  return {
    locale,
    messages: {
      general: commonMessages.default,
      auth: authMessages.default,
      fields: fieldsMessages.default,
    },
  };
});
