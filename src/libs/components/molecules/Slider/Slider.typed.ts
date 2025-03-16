import { EmblaOptionsType } from 'embla-carousel'

export interface ISliderOptions extends EmblaOptionsType {
  orientation?: 'horizontal' | 'vertical'
  animationType?: 'slide' | 'fade'
  showControls?: boolean
  slidesPerView?: number
  autoplay?: boolean
  autoplayDelay?: number
  showArrows?: boolean
  showDots?: boolean
  autoHeight?: boolean
}

export interface ISliderProps {
  slides: React.ReactNode[]
  options?: ISliderOptions
}
