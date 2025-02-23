import { ENavigation } from "@Enums/navigation";
import { useOptionsBrowserStore } from "../store/optionBrowser/optionBrowser.hook";
import menuNavigation from "@Translations/menu-navigation.json";
import { IItemMenu } from "@Types/menu";

export const useNavigation = () => {
  const { language } = useOptionsBrowserStore();

  const principalMenu: IItemMenu[] = menuNavigation[language].map(
    ({ id, name, slug }) => ({
      id,
      name,
      slug: `/${language}/${slug}`,
    })
  );

  const handleGetDataItemMenu = (idMenu: ENavigation): IItemMenu =>
    principalMenu.find(({ id: idItem }) => idMenu === idItem) as IItemMenu;

  return {
    aboutMenu: handleGetDataItemMenu(ENavigation.ABOUT_US),
    blogMenu: handleGetDataItemMenu(ENavigation.BLOG),
    contactMenu: handleGetDataItemMenu(ENavigation.CONTACT),
    homeMenu: handleGetDataItemMenu(ENavigation.HOME),
    principalMenu,
    projectsMenu: handleGetDataItemMenu(ENavigation.PROJECTS),
    servicesMenu: handleGetDataItemMenu(ENavigation.SERVICES),
  };
};
