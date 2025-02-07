"use client";

import { colors } from "@Config/color";
import { EThemeMode } from "@Enums/optionsTheme";
import { createTheme, Theme } from "@mui/material";

export interface INavikeThemeProps {
  themeMode: EThemeMode;
}

export const navikeTheme = ({ themeMode }: INavikeThemeProps): Theme =>
  createTheme({
    palette: {
      mode: themeMode,
      primary: colors.primary,
      secondary: colors.secondary,
    },
    typography: {
      fontFamily: "var(--font-questrial)",
    },
    shape: {
      borderRadius: 0,
    },
  });
