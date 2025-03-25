import { HERO_SLIDER_1 } from '@Assets/images'
import { useOptionsBrowserStore } from '@Store/optionBrowser/optionBrowser.hook'
import { heroSectionTranslate } from './HeroSection.translate'

type TBackgroundImages = {
  [key: string]: string
}

export const useHeroSection = () => {
  const { language } = useOptionsBrowserStore()

  const backgroundImages: TBackgroundImages = {
    'custom-software': HERO_SLIDER_1.src
  }

  return { backgroundImages, slidesContent: heroSectionTranslate[language] }
}
