import { useContext } from "react";
import LocaleContext from "~/contexts/i18nContext";

const useTranslation = () => {
  const localeContext = useContext(LocaleContext);
  const { locale, setLocale, setLang } = localeContext;

  return { locale, setLocale, setLang };
};

export default useTranslation;
