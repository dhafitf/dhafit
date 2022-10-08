import { createContext, useEffect, useState } from "react";
import enTranslation from "../lib/locales/translations.en.json";
import idTranslation from "../lib/locales/translations.id.json";

const LocaleContext = createContext<any>({
  locale: enTranslation,
});

export const LocaleContextProvider = ({ children }: any) => {
  const [language, setLanguage] = useState("en");
  const [locale, setLocale] = useState(enTranslation);

  useEffect(() => {
    const loadFromLocal = window.localStorage.getItem("i18nLocale");
    loadFromLocal ? setLanguage(loadFromLocal) : setLanguage(navigator.language);
    if (language === "id") return setLocale(idTranslation);
    return setLocale(enTranslation);
  }, [language]);

  const setLang = (value: string) => {
    localStorage.setItem("i18nLocale", value);
    setLanguage(value);
  };

  return <LocaleContext.Provider value={{ locale, setLocale, setLang }}>{children}</LocaleContext.Provider>;
};

export default LocaleContext;
