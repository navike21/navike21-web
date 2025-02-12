import { useOptionsBrowserStore } from "../store/optionBrowser/optionBrowser.hook";
import menuNavigation from "@Translations/menu-navigation.json";

export const useNavigation = () => {
  const { language } = useOptionsBrowserStore();

  const principalMenu = menuNavigation[language];

  const menuContact = principalMenu.find(({ id }) => id === "contact");

  return {
    language,
    menuContact: {
      ...menuContact,
      slug: `/${language}/${menuContact?.slug}`,
    },
    principalMenu,
  };
};
