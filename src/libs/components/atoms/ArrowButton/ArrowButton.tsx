import { ButtonHTMLAttributes } from 'react'
import { ArrowLeft, ArrowRight } from '../Icon'
import clsx from 'clsx'

export interface IArrowButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  direction?: 'left' | 'right'
}

export const ArrowButton = ({
  direction = 'left',
  className,
  ...props
}: IArrowButtonProps) => {
  return (
    <button
      className={clsx(
        className,
        'cursor-pointer h-10 w-10 transition-all active:scale-75'
      )}
      {...props}
    >
      {direction === 'left' && <ArrowLeft />}
      {direction === 'right' && <ArrowRight />}
    </button>
  )
}
