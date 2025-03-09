"use-client";

import { Quicksand, Syne } from "next/font/google";

export const syne = Syne({
  variable: "--font-title",
  subsets: ["latin", "latin-ext"],
  weight: ["700"],
  preload: false,
});

export const quicksand = Quicksand({
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  subsets: ["latin-ext"],

  preload: false,
});
