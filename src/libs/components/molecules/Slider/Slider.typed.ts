import { EmblaOptionsType } from 'embla-carousel'

export type TOrientation = 'horizontal' | 'vertical'
export type TAnimationType = 'slide' | 'fade'
export interface ISliderOptions extends EmblaOptionsType {
  orientation?: TOrientation
  animationType?: TAnimationType
  showControls?: boolean
  slidesPerView?: number
  autoplay?: boolean
  autoplayDelay?: number
  showDots?: boolean
  autoHeight?: boolean
}

export interface ISliderProps {
  slides: React.ReactNode[]
  options?: ISliderOptions
}

export interface IEmblaContainer {
  loop: boolean
  animationType: TAnimationType
}

export interface IEmblaSlide {
  styleToItemsPerView: number
}
