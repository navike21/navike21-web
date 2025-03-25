'use client'

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
import { formatTextToElements } from '@Utils/formatTextToElements'
import { useHeroSection } from './HeroSection.hook'

export const HeroSection = () => {
  const { mediaQuery } = useMuiTheme()
  const { backgroundImages, slidesContent } = useHeroSection()

  const slides = slidesContent.map(
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
