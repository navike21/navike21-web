import { useThemeMui } from "@Hooks/useThemeMui";
import menuNavigation from "@Translations/menu-navigation.json";
import { useState } from "react";
import { useOptionsBrowserStore } from "src/libs/store/optionBrowser/optionBrowser.hook";

export const useHeader = () => {
  const { language } = useOptionsBrowserStore();
  const [openMenuNavigation, setOpenMenuNavigation] = useState<boolean>(false);
  const { breakpoints } = useThemeMui();

  const principalMenu = menuNavigation[language];

  const menuContact = principalMenu.find(({ id }) => id === "contact");

  return {
    breakpoints,
    language,
    menuContact,
    principalMenu,
    openMenuNavigation,
    setOpenMenuNavigation,
  };
};
