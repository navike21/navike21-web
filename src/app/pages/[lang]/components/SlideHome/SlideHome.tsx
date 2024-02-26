'use client'

import { Slider } from '@Components/organisms'
import { TSlide } from '@Types/shared'
import { Slide } from '../Slide/'
import { sliderHome } from '@Lang/pages'

import Slide1 from '@Public/images/banner-home/website.webp'
import { useMainLang } from '@Hooks/shared'

export const SlideHome = () => {
  const lang = useMainLang()

  const slides = sliderHome[lang].map(
    ({ title }): TSlide => ({
      slide: <Slide title={title} image={Slide1} />
    })
  )

  return <Slider slides={slides} />
}
