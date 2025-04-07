import { useOptionsBrowserStore } from '@Store/optionBrowser/optionBrowser.hook'
import { aboutSectionTranslate } from './AboutSection.translate'

export const useAboutSection = () => {
  const { language } = useOptionsBrowserStore()

  const { bannerAbout, textAbout } = aboutSectionTranslate[language]

  return {
    bannerAbout,
    textAbout
  }
}
