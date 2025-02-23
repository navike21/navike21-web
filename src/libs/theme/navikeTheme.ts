"use client";

import { colors } from "@Config/color";
import { EPrimary, ESecondary } from "@Enums/color";
import { EThemeMode } from "@Enums/optionsTheme";
import { ETypography } from "@Enums/typography";
import { createTheme, Theme } from "@mui/material";

export interface INavikeThemeProps {
  themeMode: EThemeMode;
}

export const navikeTheme = ({ themeMode }: INavikeThemeProps): Theme =>
  createTheme({
    cssVariables: { disableCssColorScheme: true },
    breakpoints: {
      values: {
        xs: 0,
        sm: 560,
        md: 760,
        lg: 1000,
        xl: 1400,
      },
    },
    palette: {
      mode: themeMode,
      primary: colors.primary,
      secondary: colors.secondary,
    },
    typography: {
      fontFamily: ETypography.BODY,
      fontWeightLight: 400,
      fontWeightRegular: 500,
      fontWeightMedium: 600,
      fontWeightBold: 700,
      body1: {
        fontSize: 16,
      },
      button: {
        textTransform: "none",
        letterSpacing: 1,
      },
    },
    shape: {
      borderRadius: 6,
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          ":root": {
            "--font-body": ETypography.FONT_BODY,
            "--font-title": ETypography.FONT_TITLE,
            "--background-gradient": `linear-gradient(90deg, ${EPrimary.MAIN} 0%, ${ESecondary.MAIN} 100%)`,
            "--background-gradient-hover": `linear-gradient(90deg, ${EPrimary.MAIN} 20%, ${ESecondary.MAIN} 80%)`,
            "--text-gradient": `linear-gradient(90deg, ${EPrimary.CONTRAST_TEXT} 0%, ${ESecondary.CONTRAST_TEXT} 100%)`,
            "--black-opacity-0": "rgba(21, 21, 21, 0.0)",
            "--black-opacity-100": "rgba(21, 21, 21, 0.1)",
            "--black-opacity-200": "rgba(21, 21, 21, 0.2)",
            "--black-opacity-300": "rgba(21, 21, 21, 0.3)",
            "--black-opacity-400": "rgba(21, 21, 21, 0.4)",
            "--black-opacity-500": "rgba(21, 21, 21, 0.5)",
            "--black-opacity-600": "rgba(21, 21, 21, 0.6)",
            "--black-opacity-700": "rgba(21, 21, 21, 0.7)",
            "--black-opacity-800": "rgba(21, 21, 21, 0.8)",
            "--black-opacity-900": "rgba(21, 21, 21, 0.9)",
            "--black-opacity-1000": "rgba(21, 21, 21, 1)",
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            position: "relative",
            padding: "12px 24px",
            backgroundImage: "var(--background-gradient)",
            color: EPrimary.CONTRAST_TEXT,
            borderRadius: "4px",
            overflow: "hidden",
            transition: "background 0.6s ease, transform 0.3s ease",
            backgroundSize: "200%",
            backgroundPosition: "center",
            textTransform: "none",
            fontWeight: "bold",
            letterSpacing: "1px",

            "&:hover": {
              backgroundImage: "var(--background-gradient-hover)",
              backgroundPosition: "8%",
              transform: "translateY(-2px)",
            },

            "&:active": {
              transform: "translateY(0)",
            },
          },
        },
      },
    },
  });
