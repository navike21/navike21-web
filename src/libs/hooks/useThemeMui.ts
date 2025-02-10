import { ESizes } from "@Enums/size";
import { useMediaQuery, useTheme } from "@mui/material";

export const useThemeMui = () => {
  const { breakpoints } = useTheme();

  return {
    breakpoints: {
      [ESizes.XS]: useMediaQuery(breakpoints.up(ESizes.XS)),
      [ESizes.SM]: useMediaQuery(breakpoints.up(ESizes.SM)),
      [ESizes.MD]: useMediaQuery(breakpoints.up(ESizes.MD)),
      [ESizes.LG]: useMediaQuery(breakpoints.up(ESizes.LG)),
      [ESizes.XL]: useMediaQuery(breakpoints.up(ESizes.XL)),
    },
  };
};
