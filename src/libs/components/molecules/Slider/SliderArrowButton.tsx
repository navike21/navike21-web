import clsx from 'clsx'
import { IconComponent } from '@Components/atoms'
import type { TPropType } from './slider.types'

export const PrevButton = ({ children, className, ...restProps }: TPropType) => (
  <button
    type="button"
    {...restProps}
    className={clsx('flex items-center justify-center cursor-pointer', className)}
  >
    <IconComponent icon="RiArrowLeftSLine" className="w-8 h-8" />
    {children}
  </button>
)

export const NextButton = ({ children, className, ...restProps }: TPropType) => (
  <button
    type="button"
    {...restProps}
    className={clsx('flex items-center justify-center cursor-pointer', className)}
  >
    <IconComponent icon="RiArrowRightSLine" className="w-8 h-8" />
    {children}
  </button>
)
