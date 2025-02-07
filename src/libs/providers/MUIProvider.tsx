"use client";

import { EThemeMode } from "@Enums/optionsTheme";
import { CssBaseline } from "@mui/material";
import { navikeTheme } from "@Theme/navikeTheme";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider } from "@mui/system";
import { ReactNode } from "react";

type TMUIProviderProps = {
  children: ReactNode;
};

export const MUIProvider = ({ children }: TMUIProviderProps) => {
  const materialTheme = navikeTheme({
    themeMode: EThemeMode.DARK,
  });

  return (
    <AppRouterCacheProvider options={{ enableCssLayer: true }}>
      <ThemeProvider theme={materialTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
};
