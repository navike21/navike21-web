"use client";

import { permanentRedirect } from "next/navigation";
import { useOptionsBrowserStore } from "src/libs/store/optionBrowser/optionBrowser.hook";

export default function Home() {
  const { language } = useOptionsBrowserStore();
  permanentRedirect(`/${language}`);
}
