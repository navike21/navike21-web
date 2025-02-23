import { ESizes } from "@Enums/size";
import { Palette, useMediaQuery, useTheme } from "@mui/material";

type TBreakpoints = {
  [key in ESizes]: boolean;
};

export type TBreakpointsTheme = Omit<TBreakpoints, ESizes.XXL | ESizes.XXXL>;

interface IUserThemeMui {
  breakpoints: TBreakpointsTheme;
  palette: Palette;
  pxToRem: (value: number) => string;
}

export const useThemeMui = (): IUserThemeMui => {
  const { breakpoints, palette, typography } = useTheme();

  return {
    breakpoints: {
      [ESizes.XS]: useMediaQuery(breakpoints.up(ESizes.XS)),
      [ESizes.SM]: useMediaQuery(breakpoints.up(ESizes.SM)),
      [ESizes.MD]: useMediaQuery(breakpoints.up(ESizes.MD)),
      [ESizes.LG]: useMediaQuery(breakpoints.up(ESizes.LG)),
      [ESizes.XL]: useMediaQuery(breakpoints.up(ESizes.XL)),
    },
    palette,
    pxToRem: typography.pxToRem,
  };
};
