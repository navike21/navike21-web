import { createStore } from "@Utils/createStore";
import { IOptionsBrowserState } from "./optionBrowser.type";
import { EThemeMode } from "@Enums/optionsTheme";
import { ELanguage } from "@Enums/languages";

export const useOptionsBrowserStore = createStore<IOptionsBrowserState>(
  (set) => ({
    themeOption: EThemeMode.DARK,
    language: ELanguage.EN,
    processName: "",
    setThemeOption: (themeOption) =>
      set((state) => ({ ...state, themeOption })),
    setLanguage: (language) => set((state) => ({ ...state, language })),
  }),
  "options-browser-store"
);
