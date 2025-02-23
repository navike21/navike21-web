import { TBreakpointsTheme, useThemeMui } from "@Hooks/useThemeMui";
import { useState } from "react";
import { useScrollTrigger } from "@Hooks/useScrollTrigger";
import { EMaxWidth } from "@Enums/optionsTheme";
import { EBlackOpacity } from "@Enums/color";
import { TargetAndTransition, Transition } from "motion/react";

interface IHeaderHook {
  properties: {
    animate: TargetAndTransition;
    breakpoints: TBreakpointsTheme;
    initialAnimation: TargetAndTransition;
    openMenuNavigation: boolean;
    transition: Transition;
  };
  methods: {
    setOpenMenuNavigation: (value: boolean) => void;
  };
}

export const useHeader = (): IHeaderHook => {
  const [openMenuNavigation, setOpenMenuNavigation] = useState<boolean>(false);
  const { breakpoints, pxToRem } = useThemeMui();
  const { isScrolled } = useScrollTrigger(30);

  const initialAnimation = {
    background: EBlackOpacity._0,
    backdropFilter: "blur(0px)",
    borderRadius: 0,
    maxWidth:
      (breakpoints.xs && !breakpoints.md && !breakpoints.lg && pxToRem(580)) ||
      (!breakpoints.xs && breakpoints.md && !breakpoints.lg && pxToRem(780)) ||
      pxToRem(1050),
  };

  const animate = {
    background: isScrolled ? EBlackOpacity._700 : EBlackOpacity._0,
    backdropFilter: isScrolled ? "blur(10px)" : "blur(0px)",
    borderRadius: isScrolled ? pxToRem(15) : 0,
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
  };

  const transition = {
    duration: 0.3,
    ease: "easeInOut",
  };

  return {
    properties: {
      animate,
      breakpoints,
      initialAnimation,
      openMenuNavigation,
      transition,
    },
    methods: {
      setOpenMenuNavigation,
    },
  };
};
