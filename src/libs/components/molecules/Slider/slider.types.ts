import type { ComponentPropsWithRef, ReactNode } from 'react'

export interface IResponsiveSetting {
  breakpoint: number // px
  settings: Partial<ISliderOptions>
}

export interface ISliderOptions {
  autoplay?: boolean
  interval?: number
  loop?: boolean
  fade?: boolean
  dots?: boolean
  arrows?: boolean
  slidesToShow?: number
  responsive?: Array<{
    breakpoint: number
    settings?: { slidesToShow?: number }
  }>
  autoHeight?: boolean
}

export type TPropType = ComponentPropsWithRef<'button'>

export type TDotButtonPropType = TPropType & {
  isSelected: boolean
}

export type TUseDotButtonType = {
  selectedIndex: number
  scrollSnaps: number[]
  onDotButtonClick: (index: number) => void
}

export interface ISliderProps {
  options?: ISliderOptions
  children: ReactNode[]
}
