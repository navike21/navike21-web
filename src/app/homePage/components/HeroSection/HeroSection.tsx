'use client'

import { HERO_SLIDER_1 } from '@Assets/images'
import { Slider } from '@Components/molecules/Slider'
import { Button } from '@Components/atoms/Button'
import {
  SlideHero,
  SlideHeroContent,
  SlideHeroContentInner,
  SlideHeroMain,
  SlideHeroParagraph,
  SlideHeroTitle
} from './HeroSection.styles'
import { useMuiTheme } from '@Hooks/useMuiTheme'
import { useOptionsBrowserStore } from '@Store/optionBrowser/optionBrowser.hook'
import { heroSectionTranslate } from './HeroSection.translations'
import { Fragment } from 'react'
import { generateUUID } from '@Utils/uuid'

export const HeroSection = () => {
  const { mediaQuery } = useMuiTheme()
  const { language } = useOptionsBrowserStore()

  const formatTextToElements = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g)

    return parts.map(part => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <span key={generateUUID()}>{part.slice(2, -2)}</span>
      }
      return <Fragment key={generateUUID()}>{part}</Fragment>
    })
  }

  type TBackgroundImages = {
    [key: string]: string
  }

  const backgroundImages: TBackgroundImages = {
    'custom-software': HERO_SLIDER_1.src
  }

  const slides = heroSectionTranslate[language].map(
    ({ controlAction, description, title, id }, index) => (
      <SlideHero
        key={`slide${index + 1}`}
        backgroundImage={`${backgroundImages[id]}`}
        overlay
      >
        <SlideHeroContent>
          <SlideHeroContentInner>
            <SlideHeroTitle variant={mediaQuery.sm ? 'h2' : 'h3'} align="left">
              {formatTextToElements(title)}
            </SlideHeroTitle>
            <SlideHeroParagraph align="left">
              {formatTextToElements(description)}
            </SlideHeroParagraph>
            <Button variant="contained" size="large">
              {controlAction}
            </Button>
          </SlideHeroContentInner>
        </SlideHeroContent>
      </SlideHero>
    )
  )

  return (
    <SlideHeroMain>
      <Slider
        slides={slides}
        options={{
          animationType: 'slide',
          showControls: true,
          slidesPerView: 1,
          slidesToScroll: 'auto',
          loop: true,
          autoHeight: false,
          active: true
        }}
      />
    </SlideHeroMain>
  )
}
