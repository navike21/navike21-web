import { ELanguage } from "@Enums/languages";
import menuNavigation from "@Translations/menu-navigation.json";

export const useHeader = () => {
  const lang = ELanguage.EN;
  return {
    lang,
    menuNavigation,
  };
};
