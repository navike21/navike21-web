import { ENavigation } from "@Enums/navigation";
import { useOptionsBrowserStore } from "../store/optionBrowser/optionBrowser.hook";
import menuNavigation from "@Translations/menu-navigation.json";

export const useNavigation = () => {
  const { language } = useOptionsBrowserStore();

  const principalMenu = menuNavigation[language];

  const contactMenu = principalMenu.find(
    ({ id }) => id === ENavigation.CONTACT
  );
  const aboutMenu = principalMenu.find(({ id }) => id === ENavigation.ABOUT_US);
  const servicesMenu = principalMenu.find(
    ({ id }) => id === ENavigation.SERVICES
  );

  return {
    aboutMenu: {
      ...aboutMenu,
      slug: `/${language}/${aboutMenu?.slug}`,
    },
    language,
    contactMenu: {
      ...contactMenu,
      slug: `/${language}/${contactMenu?.slug}`,
    },
    servicesMenu: {
      ...servicesMenu,
      slug: `/${language}/${servicesMenu?.slug}`,
    },
    principalMenu,
  };
};
