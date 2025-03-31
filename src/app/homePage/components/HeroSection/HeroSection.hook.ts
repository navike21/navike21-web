import { MAN_WORKING_NIGHT } from '@Assets/images'
import { useOptionsBrowserStore } from '@Store/optionBrowser/optionBrowser.hook'
import { heroSectionTranslate } from './HeroSection.translate'

type TBackgroundImages = {
  [key: string]: string
}

export const useHeroSection = () => {
  const { language } = useOptionsBrowserStore()

  const backgroundImages: TBackgroundImages = {
    'custom-software': MAN_WORKING_NIGHT.webp.src
  }

  return { backgroundImages, slidesContent: heroSectionTranslate[language] }
}
