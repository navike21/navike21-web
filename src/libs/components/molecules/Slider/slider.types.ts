import type { ComponentPropsWithRef } from 'react'

export type TUsePrevNextButtonsType = {
  prevBtnDisabled: boolean
  nextBtnDisabled: boolean
  onPrevButtonClick: () => void
  onNextButtonClick: () => void
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
