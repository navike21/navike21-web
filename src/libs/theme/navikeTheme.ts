"use client";

import { createTheme } from "@mui/material";

export const navikeTheme = () => {
  const baseTheme = createTheme({
    typography: {
      fontFamily: "var(--font-questrial)",
    },
  });

  return baseTheme;
};
