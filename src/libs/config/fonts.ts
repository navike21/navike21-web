"use-client";

import { Quicksand, Syne } from "next/font/google";

export const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin", "latin-ext"],
  weight: ["700"],
  preload: false,
});

export const quicksand = Quicksand({
  weight: ["400", "500", "600", "700"],
  variable: "--font-quicksand",
  subsets: ["latin-ext"],

  preload: false,
});
