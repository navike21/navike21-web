import { useNavigation } from "@Hooks/useNavigation";
import { useThemeMui } from "@Hooks/useThemeMui";
import { useState } from "react";
import { useOptionsBrowserStore } from "@Store/optionBrowser/optionBrowser.hook";
import { useScrollTrigger } from "@Hooks/useScrollTrigger";
import { EMaxWidth } from "@Enums/optionsTheme";

export const useHeader = () => {
  const { language } = useOptionsBrowserStore();
  const [openMenuNavigation, setOpenMenuNavigation] = useState<boolean>(false);
  const { breakpoints, pxToRem } = useThemeMui();
  const { isScrolled } = useScrollTrigger(30);

  const { contactMenu, principalMenu } = useNavigation();

  const initialAnimation = {
    background: "var(--black-opacity-0)",
    maxWidth:
      (breakpoints.xs && !breakpoints.md && !breakpoints.lg && pxToRem(580)) ||
      (!breakpoints.xs && breakpoints.md && !breakpoints.lg && pxToRem(780)) ||
      pxToRem(1050),
    borderRadius: 0,
  };

  const animate = {
    background: isScrolled
      ? "var(--black-opacity-700)"
      : "var(--black-opacity-0)",
    backdropFilter: isScrolled ? "blur(10px)" : "blur(0px)",
    maxWidth:
      (breakpoints.xs &&
        !breakpoints.md &&
        !breakpoints.lg &&
        (isScrolled ? pxToRem(EMaxWidth.MOBILE) : pxToRem(580))) ||
      (!breakpoints.xs &&
        breakpoints.md &&
        !breakpoints.lg &&
        (isScrolled ? pxToRem(EMaxWidth.TABLET) : pxToRem(780))) ||
      (isScrolled ? pxToRem(EMaxWidth.DESKTOP) : pxToRem(1050)),
    borderRadius: isScrolled ? pxToRem(15) : 0,
  };

  return {
    animate,
    breakpoints,
    contactMenu,
    initialAnimation,
    language,
    openMenuNavigation,
    principalMenu,
    setOpenMenuNavigation,
  };
};
