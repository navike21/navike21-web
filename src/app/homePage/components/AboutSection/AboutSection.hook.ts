import { useOptionsBrowserStore } from '@Store/optionBrowser'
import { aboutSectionTranslate } from '@Translations/homePage'

export const useAboutSection = () => {
  const { language } = useOptionsBrowserStore()

  const { bannerAbout, textAbout } = aboutSectionTranslate[language]

  return {
    bannerAbout,
    textAbout
  }
}
