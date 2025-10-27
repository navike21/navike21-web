import type { SplideProps } from '@splidejs/react-splide'
import type { ComponentPropsWithRef, ReactNode } from 'react'

export interface ISliderProps {
  options?: SplideProps['options']
  children: ReactNode | ReactNode[]
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
