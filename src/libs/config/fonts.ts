"use-client";

import { Questrial, Syne } from "next/font/google";

export const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin", "latin-ext"],
  preload: false,
});

export const questrial = Questrial({
  weight: "400",
  variable: "--font-questrial",
  subsets: ["latin"],
  preload: false,
});
