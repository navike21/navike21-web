import clsx from 'clsx'
import { IconComponent } from '@Components/atoms/IconComponent/IconComponent'
import type { PropType } from './Slider.types'

export const PrevButton = ({ children, className, ...restProps }: PropType) => (
  <button
    type="button"
    {...restProps}
    className={clsx(
      'flex items-center justify-center cursor-pointer',
      className
    )}
  >
    <IconComponent icon="RiArrowLeftSLine" className="w-8 h-8" />
    {children}
  </button>
)

export const NextButton = ({ children, className, ...restProps }: PropType) => (
  <button
    type="button"
    {...restProps}
    className={clsx(
      'flex items-center justify-center cursor-pointer',
      className
    )}
  >
    <IconComponent icon="RiArrowRightSLine" className="w-8 h-8" />
    {children}
  </button>
)
