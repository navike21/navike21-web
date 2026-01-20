import clsx from 'clsx'
import type { DividerProps } from './Divider.types'

export const useDivider = ({
  orientation = 'horizontal',
  align = 'center',
  color = 'light'
}: Readonly<DividerProps>) => {
  const isHorizontal = orientation === 'horizontal'

  const lineClass = clsx('flex-1', {
    'bg-gray-300 text-gray-300': color === 'light',
    'bg-gray-700 text-gray-700': color === 'dark',
    'bg-gradient-horizontal text-inherit': color === 'gradient' && isHorizontal,
    'bg-gradient-diagonal text-inherit': color === 'gradient' && !isHorizontal,
    'h-0.5': isHorizontal,
    'w-px': !isHorizontal
  })

  const containerClass = clsx(
    'flex items-center',
    isHorizontal ? 'w-full' : 'h-full',
    color === 'light' && 'border-t-gray-400',
    color === 'dark' && 'border-t-gray-700',
    color === 'gradient' && 'border-gradient-base'
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
