import type { SplideProps } from '@splidejs/react-splide'
import type { ComponentPropsWithRef, ReactNode } from 'react'

export interface SliderProps {
  options?: SplideProps['options']
  children: ReactNode | ReactNode[]
}

export type PropType = ComponentPropsWithRef<'button'>

export type DotButtonPropType = PropType & {
  isSelected: boolean
}

export type UseDotButtonType = {
  selectedIndex: number
  scrollSnaps: number[]
  onDotButtonClick: (index: number) => void
}
