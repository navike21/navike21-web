import { IconComponent } from '@Components/atoms/IconComponent/IconComponent'
import clsx from 'clsx'
import type { DotButtonPropType } from './Slider.types'

export const DotButton = ({ isSelected, ...restProps }: DotButtonPropType) => (
  <button
    type="button"
    {...restProps}
    className={clsx(
      'flex items-center justify-center rounded-full p-0 m-0 border-0 bg-transparent cursor-pointer touch-manipulation transition-all duration-200'
    )}
  >
    <IconComponent
      icon={isSelected ? 'RiCircleFill' : 'RiCircleLine'}
      className={clsx('w-4 h-4', {
        'text-(--text-body)': isSelected,
        'text-(--detail-medium-contrast)': !isSelected
      })}
    />
  </button>
)
