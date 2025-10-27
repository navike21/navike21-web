import { type ReactNode } from 'react'
import clsx from 'clsx'

type TDividerOrientation = 'horizontal' | 'vertical'
type TDividerAlign = 'start' | 'center' | 'end'

interface IDividerProps {
  orientation?: TDividerOrientation
  align?: TDividerAlign
  children?: ReactNode
  className?: string
}

export const Divider = ({
  orientation = 'horizontal',
  align = 'center',
  children,
  className
}: Readonly<IDividerProps>) => {
  const isHorizontal = orientation === 'horizontal'

  return (
    <div
      className={clsx(
        'flex items-center',
        isHorizontal ? 'w-full' : 'h-full flex-col',
        className
      )}
    >
      <div
        aria-hidden="true"
        className={clsx('bg-gray-300', isHorizontal ? 'h-px flex-1' : 'w-px flex-1')}
      />

      {children && (
        <span
          className={clsx('mx-2 text-gray-500 text-sm select-none', {
            'self-start': align === 'start',
            'self-center': align === 'center',
            'self-end': align === 'end'
          })}
        >
          {children}
        </span>
      )}

      <div
        aria-hidden="true"
        className={clsx('bg-gray-300', isHorizontal ? 'h-px flex-1' : 'w-px flex-1')}
      />
    </div>
  )
}
