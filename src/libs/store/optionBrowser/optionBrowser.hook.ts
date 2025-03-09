import { IOptionsBrowserState } from "./optionBrowser.type";
import { EThemeMode } from "@Enums/optionsTheme";
import { ELanguage } from "@Enums/languages";
import { createStore } from "@Utils/createStore";

export const useOptionsBrowserStore = createStore<IOptionsBrowserState>(
  (set) => ({
    themeOption: EThemeMode.DARK,
    language: ELanguage.ES,
    processName: "",
    setThemeOption: (themeOption) =>
      set((state) => ({ ...state, themeOption })),
    setLanguage: (language) => set((state) => ({ ...state, language })),
  }),
  "options-browser-store"
);
