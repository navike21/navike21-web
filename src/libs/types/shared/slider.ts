import { Options } from '@splidejs/react-splide'
import { ReactNode } from 'react'

export type TSlide = {
  slide: ReactNode
}

export type TSliderProps = {
  options?: Options
  slides: TSlide[]
}
