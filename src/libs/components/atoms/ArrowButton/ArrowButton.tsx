import { ButtonHTMLAttributes } from 'react'
import clsx from 'clsx'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export interface IArrowButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  direction?: 'left' | 'right'
}

export const ArrowButton = ({
  direction = 'left',
  className,
  ...props
}: IArrowButtonProps) => (
  <button
    className={clsx(
      className,
      'cursor-pointer h-10 w-10 transition-all active:scale-75'
    )}
    {...props}
  >
    {direction === 'left' && <ChevronLeft className="w-full h-auto" />}
    {direction === 'right' && <ChevronRight className="w-full h-auto" />}
  </button>
)
