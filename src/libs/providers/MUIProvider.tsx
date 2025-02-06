"use client";

import {
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { navikeTheme } from "@Theme/navikeTheme";
import { ReactNode } from "react";

type TMUIProviderProps = {
  children: ReactNode;
};

export const MUIProvider = ({ children }: TMUIProviderProps) => {
  const materialTheme = navikeTheme();

  return (
    <AppRouterCacheProvider>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={materialTheme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </StyledEngineProvider>
    </AppRouterCacheProvider>
  );
};
