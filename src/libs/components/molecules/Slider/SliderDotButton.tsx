import { IconComponent } from '@Components/atoms'
import type { TDotButtonPropType } from './slider.types'
import clsx from 'clsx'

export const DotButton = ({ isSelected, ...restProps }: TDotButtonPropType) => (
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
        'text-[color:var(--text-body)]': isSelected,
        'text-[color:var(--detail-medium-contrast)]': !isSelected
      })}
    />
  </button>
)
