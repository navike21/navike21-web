import { WOMAN_WORKING_IN_PLACE } from '@Assets/images'
import { useOptionsBrowserStore } from '@Store/optionBrowser/optionBrowser.hook'
import { heroSectionTranslate } from '@Translations/homePage'

type TBackgroundImages = {
  [key: string]: string
}

export const useHeroSection = () => {
  const { language } = useOptionsBrowserStore()

  const backgroundImages: TBackgroundImages = {
    'custom-software': WOMAN_WORKING_IN_PLACE.webp.src
  }

  return { backgroundImages, slidesContent: heroSectionTranslate[language] }
}
