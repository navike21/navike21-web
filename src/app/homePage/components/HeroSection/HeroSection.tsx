'use client'

import { HERO_SLIDER_1 } from '@Assets/images'
import { Slider } from '@Components/molecules/Slider'
import { Button } from '@Components/atoms/Button'
import { Paragraph } from '@Components/atoms/Paragraph'
import {
  SlideHero,
  SlideHeroContent,
  SlideHeroContentInner,
  SlideHeroTitle
} from './HeroSection.styles'
import { useMuiTheme } from '@Hooks/useMuiTheme'

export const HeroSection = () => {
  const { mediaQuery } = useMuiTheme()

  const slides = [
    <SlideHero key="slide1" backgroundImage={HERO_SLIDER_1.src} overlay>
      <SlideHeroContent>
        <SlideHeroContentInner>
          <SlideHeroTitle variant={mediaQuery.sm ? 'h2' : 'h3'} align="left">
            Software a medida, <span>diseñado para el éxito</span>
          </SlideHeroTitle>
          <Paragraph align="left">
            Creamos soluciones digitales que impulsan tu negocio, con tecnología
            de vanguardia y un enfoque en la experiencia del usuario.
          </Paragraph>
          <Button variant="contained" size="large">
            Conversemos
          </Button>
        </SlideHeroContentInner>
      </SlideHeroContent>
    </SlideHero>
  ]
  return (
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
  )
}
