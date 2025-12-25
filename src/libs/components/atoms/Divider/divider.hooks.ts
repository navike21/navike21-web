import clsx from 'clsx'
import type { DividerProps } from './divider.types'

export const useDivider = ({
  orientation = 'horizontal',
  align = 'center',
  color = 'light'
}: Readonly<DividerProps>) => {
  const isHorizontal = orientation === 'horizontal'

  const lineClass = clsx('flex-1', {
    'bg-gray-300': color === 'light',
    'bg-gray-700': color === 'dark',
    'bg-gradient-diagonal': color === 'gradient' && isHorizontal,
    'bg-gradient-vertical': color === 'gradient' && !isHorizontal,
    'h-px': isHorizontal,
    'w-px': !isHorizontal
  })

  const containerClass = clsx(
    'flex items-center',
    isHorizontal ? 'w-full' : 'h-full flex-col'
  )

  const textClass = clsx('mx-2 text-sm select-none text-gray-500', {
    'self-start': align === 'start',
    'self-center': align === 'center',
    'self-end': align === 'end'
  })

  return {
    isHorizontal,
    lineClass,
    containerClass,
    textClass
  }
}
