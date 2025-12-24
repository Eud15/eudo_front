import { createI18n } from "vue-i18n";
import en from "./locales/en.json";
import fr from "./locales/fr.json";

const messages = {
  en,
  fr,
};

export default createI18n({
  legacy: true,  // ← Changez ici de false à true
  locale: "fr",
  fallbackLocale: "en",
  messages,
});