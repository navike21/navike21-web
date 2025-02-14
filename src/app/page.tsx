"use client";

import { permanentRedirect } from "next/navigation";
import { useOptionsBrowserStore } from "@Store/optionBrowser/optionBrowser.hook";

export default function Home() {
  const { language } = useOptionsBrowserStore();
  permanentRedirect(`/${language}`);
}
