import { useNavigation } from "@Hooks/useNavigation";
import { useThemeMui } from "@Hooks/useThemeMui";
import { useState } from "react";
import { useOptionsBrowserStore } from "src/libs/store/optionBrowser/optionBrowser.hook";

export const useHeader = () => {
  const { language } = useOptionsBrowserStore();
  const [openMenuNavigation, setOpenMenuNavigation] = useState<boolean>(false);
  const { breakpoints } = useThemeMui();

  const { contactMenu, principalMenu } = useNavigation();

  return {
    breakpoints,
    language,
    contactMenu,
    principalMenu,
    openMenuNavigation,
    setOpenMenuNavigation,
  };
};
